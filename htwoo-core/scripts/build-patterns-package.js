#!/usr/bin/env node

/**
 * Build the @n8d/htwoo-patterns package from htwoo-core sources.
 *
 *   node scripts/build-patterns-package.js                 clean copy + package check
 *   node scripts/build-patterns-package.js --check <dir>   package check only (<dir> is the package's _patterns folder)
 *
 * The package check fails when the package is not a complete copy of the sources (every copied folder must
 * contain exactly the source files, minus the excludes; _data and images must not be empty) or when two
 * templates or data files share a pattern handle.
 *
 * The package folders are wiped first, so nothing from an earlier build can leak into a release.
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const packageRoot = path.resolve(projectRoot, '..', 'packages', 'htwoo-patterns');

// Tooling and editor leftovers that must never ship inside _patterns
const PATTERN_EXCLUDES = ['**/*.sh', '**/*.new', '**/*.tmp', 'PATTERN-OPTIMIZATION.md'];

// source (relative to htwoo-core) -> target (relative to packages/htwoo-patterns)
// Package folders that must never be published empty
const REQUIRED_NON_EMPTY = ['_patterns', '_data', 'images', 'helpers/hbs'];

const COPIES = [
  { from: 'src/_patterns', to: '_patterns', excludes: PATTERN_EXCLUDES },
  { from: 'src/_data', to: '_data' },
  { from: 'src/images', to: 'images' },
  { from: 'helpers/hbs', to: 'helpers/hbs' }
];

/** Glob -> RegExp for forward-slash relative paths: `**` any depth, `*` one segment, `?` one char. */
function globToRegExp(glob) {
  let re = '';
  for (let i = 0; i < glob.length; i++) {
    const ch = glob[i];
    if (ch === '*' && glob[i + 1] === '*') {
      if (glob[i + 2] === '/') { re += '(?:.*/)?'; i += 2; } else { re += '.*'; i += 1; }
    } else if (ch === '*') re += '[^/]*';
    else if (ch === '?') re += '[^/]';
    else re += /[.+^${}()|[\]\\]/.test(ch) ? `\\${ch}` : ch;
  }
  return new RegExp(`^${re}$`);
}

/** Copy a tree, skipping paths (relative to `from`) that match any exclude glob. */
function copyTree(from, to, excludes = []) {
  const res = excludes.map(globToRegExp);
  const skipped = [];
  let copied = 0;
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const rel = path.relative(from, abs).split(path.sep).join('/');
      if (res.some(r => r.test(rel))) { skipped.push(rel); continue; }
      if (entry.isDirectory()) { walk(abs); continue; }
      fs.mkdirSync(path.dirname(path.join(to, rel)), { recursive: true });
      fs.copyFileSync(abs, path.join(to, rel));
      copied++;
    }
  };
  walk(from);
  return { copied, skipped };
}

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const abs = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(abs) : [abs];
  });
}

/**
 * PatternLab and Pattern Dump both derive a pattern handle as `<top-level group>-<file basename>`:
 * intermediate folders are dropped and `~` (variants) is kept. Two templates (or two data files)
 * with the same handle collide, and whichever wins depends on the tool.
 */
function findCollisions(patternsDir) {
  const byKey = new Map();
  for (const abs of listFiles(patternsDir)) {
    const segments = path.relative(patternsDir, abs).split(path.sep);
    const ext = path.extname(abs);
    if (segments.length < 2 || (ext !== '.hbs' && ext !== '.json')) continue;
    const key = `${segments[0]}-${path.basename(abs, ext)}${ext}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(segments.join('/'));
  }
  return [...byKey].filter(([, files]) => files.length > 1);
}

function reportCollisions(patternsDir) {
  const collisions = findCollisions(patternsDir);
  if (collisions.length === 0) {
    console.log(`✅ No handle collisions in ${path.relative(process.cwd(), patternsDir) || '.'}`);
    return true;
  }
  const templates = collisions.filter(([key]) => key.endsWith('.hbs')).length;
  console.error(`❌ ${collisions.length} handle collisions (${templates} templates, ${collisions.length - templates} data files):`);
  for (const [key, files] of collisions) {
    console.error(`   ${key.replace(/\.(hbs|json)$/, '')}: ${files.join(', ')}`);
  }
  return false;
}

/** Relative forward-slash paths of the files a copy of `from` must contain. */
function expectedFiles(from, excludes = []) {
  const res = excludes.map(globToRegExp);
  const files = [];
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const rel = path.relative(from, abs).split(path.sep).join('/');
      if (res.some(r => r.test(rel))) continue;
      if (entry.isDirectory()) walk(abs); else files.push(rel);
    }
  };
  walk(from);
  return files;
}

/** Compare the package folders with their sources: same file lists, and no required folder empty. */
function reportCompleteness(pkgRoot) {
  let ok = true;
  for (const { from, to, excludes } of COPIES) {
    const target = path.join(pkgRoot, to);
    const expected = new Set(expectedFiles(path.join(projectRoot, from), excludes));
    const actual = new Set(fs.existsSync(target)
      ? listFiles(target).map(abs => path.relative(target, abs).split(path.sep).join('/'))
      : []);
    const missing = [...expected].filter(f => !actual.has(f));
    const extra = [...actual].filter(f => !expected.has(f));
    if (expected.size === 0 || (actual.size === 0 && REQUIRED_NON_EMPTY.includes(to))) {
      console.error(`❌ ${to} is empty (source ${from} has ${expected.size} files)`);
      ok = false;
    }
    if (missing.length || extra.length) {
      console.error(`❌ ${to} does not match ${from}: ${actual.size} files, expected ${expected.size} (${missing.length} missing, ${extra.length} extra)`);
      for (const f of missing.slice(0, 10)) console.error(`   missing: ${f}`);
      for (const f of extra.slice(0, 10)) console.error(`   extra:   ${f}`);
      ok = false;
    } else if (expected.size > 0) {
      console.log(`✅ ${to}: ${actual.size} files, matches ${from}`);
    }
  }
  return ok;
}

function checkPackage(pkgRoot) {
  const complete = reportCompleteness(pkgRoot);
  const patternsDir = path.join(pkgRoot, '_patterns');
  const noCollisions = fs.existsSync(patternsDir) && reportCollisions(patternsDir);
  return complete && noCollisions;
}

function build() {
  for (const { to } of COPIES) {
    fs.rmSync(path.join(packageRoot, to.split('/')[0]), { recursive: true, force: true });
  }
  for (const { from, to, excludes } of COPIES) {
    const { copied, skipped } = copyTree(path.join(projectRoot, from), path.join(packageRoot, to), excludes);
    console.log(`📦 ${from} -> ${to}: ${copied} files${skipped.length ? `, excluded ${skipped.join(', ')}` : ''}`);
  }
  fs.copyFileSync(path.join(projectRoot, 'LICENSE'), path.join(packageRoot, 'LICENSE'));
  return checkPackage(packageRoot);
}

const args = process.argv.slice(2);
const ok = args[0] === '--check'
  ? checkPackage(path.dirname(path.resolve(args[1] || path.join(packageRoot, '_patterns'))))
  : build();
process.exit(ok ? 0 : 1);
