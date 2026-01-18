#!/usr/bin/env node
/**
 * generate-component-docs.js
 *
 * Generates Hugo markdown content files and layouts for component documentation.
 * These integrate with the h2o Hugo theme for consistent site-wide styling.
 *
 * Output:
 *   - ../docs/htwoo-components/content/   - Hugo content files (markdown)
 *   - ../docs/htwoo-components/layouts/   - Hugo layout templates
 *   - ../docs/htwoo-components/assets/    - Static assets (JS, search index)
 *
 * Usage:
 *   node helpers/tools/generate-component-docs.js
 *   npm run docs:components -w htwoo-core
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  patternsDir: path.join(__dirname, '../../src/_patterns'),
  templatesDir: path.join(__dirname, '../component-docs'),
  outputDir: path.join(__dirname, '../../../docs/htwoo-components'),
  patternLabOutputDir: path.join(__dirname, '../../../docs/htwoo-core/patterns'),
  baseUrl: 'https://htwoo.io'
};

// Categories to process (Pattern Lab atomic design)
const CATEGORIES = ['atoms', 'molecules', 'organism', 'templates', 'pages', 'design-tokens'];

// SEO Helper functions (ported from helpers/hbs/test.js)
function seoTitle(value) {
  if (!value) return '';
  const seoJunks = value.split('-');
  if (seoJunks.length > 1) {
    const firstEntry = seoJunks.shift();
    let title = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1) + ' -';
    seoJunks.forEach(element => {
      title += ' ' + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return title;
  }
  return value;
}

function seoDescription(value) {
  if (!value) return '';
  const seoJunks = value.split('-');
  if (seoJunks.length > 1) {
    const firstEntry = seoJunks.shift();
    const componentType = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1);
    const componentName = seoJunks.map(element =>
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    ).join(' ');
    return `${componentName} ${componentType}`;
  }
  return value;
}

function seoKeyword(value) {
  if (!value) return '';
  const seoJunks = value.split('-');
  if (seoJunks.length > 1) {
    const firstEntry = seoJunks.shift();
    let keyword = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1) + ', ';
    seoJunks.forEach(element => {
      keyword += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return keyword;
  }
  return value;
}

// Parse YAML frontmatter from markdown
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const frontmatterStr = match[1];
  const frontmatter = {};

  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      // Parse booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      // Parse numbers
      if (!isNaN(value) && value !== '') value = Number(value);
      frontmatter[key] = value;
    }
  });

  const markdownContent = content.substring(match[0].length).trim();
  return { frontmatter, content: markdownContent };
}

// Escape special characters for YAML string values (assumes will be wrapped in double quotes)
function escapeYaml(text) {
  if (!text) return '';
  // Escape backslashes first, then double quotes, then newlines
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

// Escape HTML for code blocks
function escapeHtml(text) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, char => htmlEntities[char]);
}

// Get first paragraph as description
function getFirstParagraph(markdown) {
  if (!markdown) return '';
  const lines = markdown.split('\n');
  let paragraph = '';
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('```') || trimmed.startsWith('---')) {
      continue;
    }
    if (trimmed === '') {
      if (paragraph) break;
      continue;
    }
    paragraph += (paragraph ? ' ' : '') + trimmed;
  }
  return paragraph.substring(0, 200);
}

// Scan for pattern files
function scanPatterns() {
  const patterns = [];

  CATEGORIES.forEach(category => {
    const categoryPath = path.join(CONFIG.patternsDir, category);
    if (!fs.existsSync(categoryPath)) return;

    scanDirectory(categoryPath, category, patterns);
  });

  return patterns;
}

function scanDirectory(dirPath, category, patterns, subcategory = null) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      // Recurse into subdirectory
      scanDirectory(fullPath, category, patterns, entry.name);
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
      // Parse markdown file
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { frontmatter, content: markdown } = parseFrontmatter(content);

      // Skip hidden patterns
      if (frontmatter.hidden) return;

      // Derive pattern ID from file path
      const basename = entry.name.replace('.md', '');
      // Pattern Lab converts ~ to - in output folder names
      const patternLabId = subcategory
        ? `${category}-${subcategory}-${basename}`.replace(/~/g, '-')
        : `${category}-${basename}`.replace(/~/g, '-');

      patterns.push({
        id: patternLabId,
        category,
        subcategory: subcategory || null,
        filename: basename,
        title: frontmatter.title || basename,
        order: frontmatter.order || 999,
        markdown,
        frontmatter,
        filePath: fullPath
      });
    }
  });
}

// Load component markup from Pattern Lab output
function loadComponentMarkup(patternId) {
  const markupPath = path.join(
    CONFIG.patternLabOutputDir,
    patternId,
    `${patternId}.markup-only.html`
  );

  if (fs.existsSync(markupPath)) {
    return fs.readFileSync(markupPath, 'utf-8');
  }
  return null;
}

// Generate Hugo frontmatter for a component
function generateComponentFrontmatter(pattern) {
  const patternId = pattern.id;
  const seoTitleText = seoTitle(patternId);
  const seoDesc = seoDescription(patternId);
  const description = getFirstParagraph(pattern.markdown) || seoDesc;

  // Load markup
  const markup = loadComponentMarkup(patternId);
  const markupEscaped = markup ? escapeHtml(markup) : '';

  return `---
title: "${pattern.title}"
description: "${escapeYaml(description)}"
type: "components"
layout: "single"
patternId: "${patternId}"
category: "${pattern.category}"
${pattern.subcategory ? `subcategory: "${pattern.subcategory}"` : ''}
seoTitle: "${seoTitleText}"
seoDescription: "${seoDesc}"
weight: ${pattern.order}
markup: |
${markupEscaped.split('\n').map(line => '  ' + line).join('\n')}
---

`;
}

// Generate Hugo markdown file for a component
function generateComponentMarkdown(pattern) {
  const frontmatter = generateComponentFrontmatter(pattern);
  return frontmatter + (pattern.markdown || '');
}

// Generate category _index.md
function generateCategoryIndex(category, patterns) {
  const categoryPatterns = patterns.filter(p => p.category === category);
  const subcategories = [...new Set(categoryPatterns.filter(p => p.subcategory).map(p => p.subcategory))];

  return `---
title: "${capitalize(category)}"
description: "Browse ${categoryPatterns.length} ${capitalize(category)} components in the hTWOo UI Framework."
type: "components"
layout: "list"
category: "${category}"
weight: ${CATEGORIES.indexOf(category) + 1}
---

Explore the ${capitalize(category)} components available in hTWOo.
`;
}

// Generate subcategory _index.md
function generateSubcategoryIndex(category, subcategory, patterns) {
  const subPatterns = patterns.filter(p => p.category === category && p.subcategory === subcategory);

  return `---
title: "${capitalize(subcategory)}"
description: "Browse ${subPatterns.length} ${capitalize(subcategory)} components."
type: "components"
layout: "list"
category: "${category}"
subcategory: "${subcategory}"
---

Explore the ${capitalize(subcategory)} components.
`;
}

// Generate overview _index.md
function generateOverviewIndex(patterns) {
  return `---
title: "hTWOo Components"
description: "Browse all ${patterns.length} hTWOo UI Framework components. Fluent Design components for SharePoint, Microsoft Teams, and web applications."
type: "components"
layout: "list"
---

Explore ${patterns.length} Fluent Design components for SharePoint, Microsoft Teams, and web applications.
`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate search index
function generateSearchIndex(patterns) {
  return patterns.map(p => ({
    id: p.id,
    title: p.title,
    description: getFirstParagraph(p.markdown) || seoDescription(p.id),
    category: p.category,
    subcategory: p.subcategory || '',
    href: p.subcategory
      ? `/components/${p.category}/${p.subcategory}/${p.filename}/`
      : `/components/${p.category}/${p.filename}/`,
    content: p.markdown ? p.markdown.replace(/[#*`\[\]]/g, ' ').substring(0, 500) : ''
  }));
}

// Generate sitemap
function generateSitemap(patterns) {
  const buildDate = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Overview page
  xml += `  <url>
    <loc>${CONFIG.baseUrl}/components/</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Category pages
  CATEGORIES.forEach(cat => {
    if (patterns.some(p => p.category === cat)) {
      xml += `  <url>
    <loc>${CONFIG.baseUrl}/components/${cat}/</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
    }
  });

  // Component pages
  patterns.forEach(p => {
    const url = p.subcategory
      ? `${CONFIG.baseUrl}/components/${p.category}/${p.subcategory}/${p.filename}/`
      : `${CONFIG.baseUrl}/components/${p.category}/${p.filename}/`;

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += '</urlset>';
  return xml;
}

// Ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy directory recursively
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Main build function
async function build() {
  console.log('Starting component documentation build (Hugo integration)...\n');

  // Scan for patterns
  console.log('Scanning patterns...');
  const patterns = scanPatterns();
  console.log(`Found ${patterns.length} patterns\n`);

  if (patterns.length === 0) {
    console.warn('No patterns found. Check the patterns directory.');
    return;
  }

  // Clean and create output directories
  const contentDir = path.join(CONFIG.outputDir, 'content');
  const layoutsDir = path.join(CONFIG.outputDir, 'layouts');
  const assetsDir = path.join(CONFIG.outputDir, 'assets');

  if (fs.existsSync(CONFIG.outputDir)) {
    fs.rmSync(CONFIG.outputDir, { recursive: true });
  }
  ensureDir(contentDir);
  ensureDir(layoutsDir);
  ensureDir(assetsDir);

  // Generate Hugo content files
  console.log('Generating Hugo content files...');

  // Overview _index.md
  const overviewContent = generateOverviewIndex(patterns);
  fs.writeFileSync(path.join(contentDir, '_index.md'), overviewContent);

  // Category and component content
  let generated = 0;
  CATEGORIES.forEach(category => {
    const categoryPatterns = patterns.filter(p => p.category === category);
    if (categoryPatterns.length === 0) return;

    const categoryDir = path.join(contentDir, category);
    ensureDir(categoryDir);

    // Category _index.md
    const categoryContent = generateCategoryIndex(category, patterns);
    fs.writeFileSync(path.join(categoryDir, '_index.md'), categoryContent);

    // Subcategories
    const subcategories = [...new Set(categoryPatterns.filter(p => p.subcategory).map(p => p.subcategory))];
    subcategories.forEach(sub => {
      const subDir = path.join(categoryDir, sub);
      ensureDir(subDir);

      // Subcategory _index.md
      const subContent = generateSubcategoryIndex(category, sub, patterns);
      fs.writeFileSync(path.join(subDir, '_index.md'), subContent);
    });

    // Component markdown files
    categoryPatterns.forEach(pattern => {
      const componentMd = generateComponentMarkdown(pattern);

      const mdPath = pattern.subcategory
        ? path.join(categoryDir, pattern.subcategory, `${pattern.filename}.md`)
        : path.join(categoryDir, `${pattern.filename}.md`);

      ensureDir(path.dirname(mdPath));
      fs.writeFileSync(mdPath, componentMd);
      generated++;
    });
  });
  console.log(`Generated ${generated} component content files\n`);

  // Copy Hugo layouts
  console.log('Copying Hugo layouts...');
  const hugoLayoutsSource = path.join(CONFIG.templatesDir, 'hugo-layouts');
  if (fs.existsSync(hugoLayoutsSource)) {
    copyDir(hugoLayoutsSource, layoutsDir);
    console.log('  - Copied component layouts');
  }

  // Generate search index
  console.log('Generating search index...');
  const searchIndex = generateSearchIndex(patterns);
  const jsDir = path.join(assetsDir, 'js');
  ensureDir(jsDir);
  fs.writeFileSync(
    path.join(jsDir, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  );

  // Copy JS files
  const jsSource = path.join(CONFIG.templatesDir, 'js');
  if (fs.existsSync(jsSource)) {
    fs.readdirSync(jsSource).forEach(file => {
      fs.copyFileSync(path.join(jsSource, file), path.join(jsDir, file));
    });
    console.log('  - Copied JS assets');
  }

  // Generate sitemap
  console.log('Generating sitemap...');
  const sitemap = generateSitemap(patterns);
  fs.writeFileSync(path.join(CONFIG.outputDir, 'sitemap.xml'), sitemap);

  console.log('\nBuild complete!');
  console.log(`Output: ${CONFIG.outputDir}`);
  console.log('\nGenerated files:');
  console.log(`  - ${contentDir}/ (Hugo content)`);
  console.log(`  - ${layoutsDir}/ (Hugo layouts)`);
  console.log(`  - ${assetsDir}/ (Static assets)`);
  console.log('\nTo integrate with Hugo site:');
  console.log('  1. Copy content/* to docs-site/content/components/');
  console.log('  2. Copy layouts/* to docs-site/layouts/');
  console.log('  3. Copy assets/* to docs-site/static/htwoo-components/');
}

// Run build
build().catch(console.error);
