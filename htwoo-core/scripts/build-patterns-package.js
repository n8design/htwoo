#!/usr/bin/env node

/**
 * Build the @n8d/htwoo-patterns package from htwoo-core sources.
 *
 *   node scripts/build-patterns-package.js            clean copy + collision check
 *   node scripts/build-patterns-package.js --check <dir>   only run the collision check on a _patterns folder
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

function build() {
  for (const { to } of COPIES) {
    fs.rmSync(path.join(packageRoot, to.split('/')[0]), { recursive: true, force: true });
  }
  for (const { from, to, excludes } of COPIES) {
    const { copied, skipped } = copyTree(path.join(projectRoot, from), path.join(packageRoot, to), excludes);
    console.log(`📦 ${from} -> ${to}: ${copied} files${skipped.length ? `, excluded ${skipped.join(', ')}` : ''}`);
  }
  fs.copyFileSync(path.join(projectRoot, 'LICENSE'), path.join(packageRoot, 'LICENSE'));
  return reportCollisions(path.join(packageRoot, '_patterns'));
}

const args = process.argv.slice(2);
const ok = args[0] === '--check'
  ? reportCollisions(path.resolve(args[1] || path.join(packageRoot, '_patterns')))
  : build();
process.exit(ok ? 0 : 1);
