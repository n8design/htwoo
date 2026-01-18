#!/usr/bin/env node
/**
 * generate-component-docs.js
 *
 * Generates Hugo markdown content files and layouts for component documentation.
 * These integrate with the h2o Hugo theme for consistent site-wide styling.
 *
 * Features:
 *   - Groups variants (files with ~) with their base component
 *   - Fixes relative image paths to point to /htwoo-core/
 *   - Generates SEO-optimized frontmatter
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

// Format HTML with proper indentation for readability
function formatHtml(html) {
  if (!html) return '';

  // Remove existing whitespace between tags
  let formatted = html.replace(/>\s+</g, '><').trim();

  // Self-closing and void elements (no closing tag)
  const voidElements = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
  ];

  // Inline elements that shouldn't force newlines
  const inlineElements = [
    'a', 'abbr', 'b', 'bdo', 'br', 'cite', 'code', 'dfn', 'em', 'i',
    'kbd', 'mark', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub',
    'sup', 'time', 'u', 'var'
  ];

  const result = [];
  let indent = 0;
  const indentStr = '    '; // 4 spaces

  // Split by tags while preserving the tags
  const tokens = formatted.split(/(<[^>]+>)/g).filter(t => t);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.startsWith('</')) {
      // Closing tag - decrease indent first
      indent = Math.max(0, indent - 1);
      const tagName = token.match(/<\/(\w+)/)?.[1]?.toLowerCase();

      // Check if previous token was text or inline - don't add newline
      const prevToken = result[result.length - 1];
      if (prevToken && !prevToken.trim().startsWith('<') && !prevToken.endsWith('\n')) {
        result.push(token);
      } else if (tagName && inlineElements.includes(tagName)) {
        result.push(token);
      } else {
        result.push('\n' + indentStr.repeat(indent) + token);
      }
    } else if (token.startsWith('<')) {
      // Opening tag or self-closing
      const tagMatch = token.match(/<(\w+)/);
      const tagName = tagMatch ? tagMatch[1].toLowerCase() : '';
      const isSelfClosing = token.endsWith('/>') || voidElements.includes(tagName);
      const isInline = inlineElements.includes(tagName);

      // Add the tag
      if (result.length === 0) {
        result.push(token);
      } else if (isInline) {
        result.push(token);
      } else {
        result.push('\n' + indentStr.repeat(indent) + token);
      }

      // Increase indent for non-void, non-inline opening tags
      if (!isSelfClosing && !isInline) {
        indent++;
      }
    } else {
      // Text content
      const trimmed = token.trim();
      if (trimmed) {
        result.push(trimmed);
      }
    }
  }

  return result.join('').trim();
}

// Fix relative paths in markup to point to /htwoo-core/
function fixMarkupPaths(markup) {
  if (!markup) return '';

  // Fix relative image paths like ../../images/ or ../images/ or ../../images//
  // Convert to absolute /htwoo-core/images/
  let fixed = markup;

  // Handle src attributes with relative paths (multiple ../ segments and double slashes from Pattern Lab)
  // Pattern: src="../../images//subfolder/" or src="../images/subfolder/"
  // (?:\.\.\/+)+ matches one or more occurrences of ../ (with possible multiple slashes)
  fixed = fixed.replace(/src=["'](?:\.\.\/+)+images\/+/g, 'src="/htwoo-core/images/');
  fixed = fixed.replace(/src=["']\.\/+images\/+/g, 'src="/htwoo-core/images/');
  fixed = fixed.replace(/src=["']images\/+/g, 'src="/htwoo-core/images/');

  // Handle href attributes with relative paths to images
  fixed = fixed.replace(/href=["'](?:\.\.\/+)+images\/+/g, 'href="/htwoo-core/images/');
  fixed = fixed.replace(/href=["']\.\/+images\/+/g, 'href="/htwoo-core/images/');

  // Handle xlink:href attributes for SVG icons (e.g., <use xlink:href="../../images/icons.svg#icon-name">)
  fixed = fixed.replace(/xlink:href=["'](?:\.\.\/+)+images\/+/g, 'xlink:href="/htwoo-core/images/');
  fixed = fixed.replace(/xlink:href=["']\.\/+images\/+/g, 'xlink:href="/htwoo-core/images/');
  fixed = fixed.replace(/xlink:href=["']images\/+/g, 'xlink:href="/htwoo-core/images/');

  return fixed;
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

// Check if a filename is a variant (contains ~)
function isVariant(filename) {
  return filename.includes('~');
}

// Get the base component name from a variant filename
function getBaseComponentName(filename) {
  const tildeIndex = filename.indexOf('~');
  return tildeIndex > 0 ? filename.substring(0, tildeIndex) : filename;
}

// Get the variant name from a filename
function getVariantName(filename) {
  const tildeIndex = filename.indexOf('~');
  return tildeIndex > 0 ? filename.substring(tildeIndex + 1) : null;
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
        baseFilename: getBaseComponentName(basename),
        variantName: getVariantName(basename),
        isVariant: isVariant(basename),
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
    let markup = fs.readFileSync(markupPath, 'utf-8');
    // Fix relative paths
    markup = fixMarkupPaths(markup);
    // Format HTML for readability
    markup = formatHtml(markup);
    return markup;
  }
  return null;
}

// Group patterns - base components with their variants
function groupPatterns(patterns) {
  const grouped = new Map();

  patterns.forEach(pattern => {
    const key = pattern.subcategory
      ? `${pattern.category}-${pattern.subcategory}-${pattern.baseFilename}`
      : `${pattern.category}-${pattern.baseFilename}`;

    if (!grouped.has(key)) {
      grouped.set(key, {
        base: null,
        variants: []
      });
    }

    const group = grouped.get(key);
    if (pattern.isVariant) {
      group.variants.push(pattern);
    } else {
      group.base = pattern;
    }
  });

  // Sort variants by order
  grouped.forEach(group => {
    group.variants.sort((a, b) => a.order - b.order);
  });

  return grouped;
}

// Generate Hugo frontmatter for a component with variants
function generateComponentFrontmatter(pattern, variants) {
  const patternId = pattern.id;
  const seoTitleText = seoTitle(patternId);
  const seoDesc = seoDescription(patternId);
  const description = getFirstParagraph(pattern.markdown) || seoDesc;

  // Load markup for base component
  const markup = loadComponentMarkup(patternId);
  const markupEscaped = markup ? escapeHtml(markup) : '';

  // Build variants array for frontmatter
  let variantsYaml = '';
  if (variants && variants.length > 0) {
    variantsYaml = 'variants:\n';
    variants.forEach(variant => {
      const variantMarkup = loadComponentMarkup(variant.id);
      const variantMarkupEscaped = variantMarkup ? escapeHtml(variantMarkup) : '';
      variantsYaml += `  - id: "${variant.id}"\n`;
      variantsYaml += `    title: "${escapeYaml(variant.title)}"\n`;
      variantsYaml += `    variantName: "${variant.variantName || ''}"\n`;
      variantsYaml += `    markup: |\n`;
      variantsYaml += variantMarkupEscaped.split('\n').map(line => '      ' + line).join('\n') + '\n';
    });
  }

  return `---
title: "${escapeYaml(pattern.title)}"
description: "${escapeYaml(description)}"
type: "components"
layout: "single"
patternId: "${patternId}"
category: "${pattern.category}"
${pattern.subcategory ? `subcategory: "${pattern.subcategory}"` : ''}
seoTitle: "${seoTitleText}"
seoDescription: "${seoDesc}"
weight: ${pattern.order}
hasVariants: ${variants && variants.length > 0}
markup: |
${markupEscaped.split('\n').map(line => '  ' + line).join('\n')}
${variantsYaml}---

`;
}

// Generate Hugo markdown file for a component
function generateComponentMarkdown(pattern, variants) {
  const frontmatter = generateComponentFrontmatter(pattern, variants);
  return frontmatter + (pattern.markdown || '');
}

// Generate category _index.md
function generateCategoryIndex(category, groupedPatterns) {
  // Count only base components (not variants)
  let count = 0;
  groupedPatterns.forEach((group, key) => {
    if (key.startsWith(category + '-') && group.base) {
      count++;
    }
  });

  return `---
title: "${capitalize(category)}"
description: "Browse ${count} ${capitalize(category)} components in the hTWOo UI Framework."
type: "components"
layout: "list"
category: "${category}"
weight: ${CATEGORIES.indexOf(category) + 1}
---

Explore the ${capitalize(category)} components available in hTWOo.
`;
}

// Generate subcategory _index.md
function generateSubcategoryIndex(category, subcategory, groupedPatterns) {
  // Count only base components in this subcategory
  let count = 0;
  groupedPatterns.forEach((group, key) => {
    if (key.startsWith(`${category}-${subcategory}-`) && group.base) {
      count++;
    }
  });

  return `---
title: "${capitalize(subcategory)}"
description: "Browse ${count} ${capitalize(subcategory)} components."
type: "components"
layout: "list"
category: "${category}"
subcategory: "${subcategory}"
---

Explore the ${capitalize(subcategory)} components.
`;
}

// Generate overview _index.md
function generateOverviewIndex(groupedPatterns) {
  // Count only base components
  let count = 0;
  groupedPatterns.forEach(group => {
    if (group.base) count++;
  });

  return `---
title: "hTWOo Components"
description: "Browse all ${count} hTWOo UI Framework components. Fluent Design components for SharePoint, Microsoft Teams, and web applications."
type: "components"
layout: "list"
---

Explore ${count} Fluent Design components for SharePoint, Microsoft Teams, and web applications.
`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate search index (only base components)
function generateSearchIndex(groupedPatterns) {
  const results = [];

  groupedPatterns.forEach((group, key) => {
    if (!group.base) return;

    const p = group.base;
    results.push({
      id: p.id,
      title: p.title,
      description: getFirstParagraph(p.markdown) || seoDescription(p.id),
      category: p.category,
      subcategory: p.subcategory || '',
      href: p.subcategory
        ? `/components/${p.category}/${p.subcategory}/${p.baseFilename}/`
        : `/components/${p.category}/${p.baseFilename}/`,
      content: p.markdown ? p.markdown.replace(/[#*`\[\]]/g, ' ').substring(0, 500) : '',
      variantCount: group.variants.length
    });
  });

  return results;
}

// Generate sitemap (only base components)
function generateSitemap(groupedPatterns) {
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
  const categories = new Set();
  groupedPatterns.forEach((group, key) => {
    if (group.base) {
      categories.add(group.base.category);
    }
  });

  categories.forEach(cat => {
    xml += `  <url>
    <loc>${CONFIG.baseUrl}/components/${cat}/</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  // Component pages (only base components)
  groupedPatterns.forEach((group, key) => {
    if (!group.base) return;

    const p = group.base;
    const url = p.subcategory
      ? `${CONFIG.baseUrl}/components/${p.category}/${p.subcategory}/${p.baseFilename}/`
      : `${CONFIG.baseUrl}/components/${p.category}/${p.baseFilename}/`;

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
  console.log(`Found ${patterns.length} patterns`);

  // Group patterns (base + variants)
  const groupedPatterns = groupPatterns(patterns);
  const baseCount = Array.from(groupedPatterns.values()).filter(g => g.base).length;
  const variantCount = patterns.filter(p => p.isVariant).length;
  console.log(`  - ${baseCount} base components`);
  console.log(`  - ${variantCount} variants\n`);

  if (baseCount === 0) {
    console.warn('No base patterns found. Check the patterns directory.');
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
  const overviewContent = generateOverviewIndex(groupedPatterns);
  fs.writeFileSync(path.join(contentDir, '_index.md'), overviewContent);

  // Track categories and subcategories
  const categoriesUsed = new Set();
  const subcategoriesUsed = new Map();

  // Generate component pages (only for base components, with variants embedded)
  let generated = 0;
  groupedPatterns.forEach((group, key) => {
    if (!group.base) {
      // Variant without a base component - create standalone page
      if (group.variants.length > 0) {
        const pattern = group.variants[0];
        categoriesUsed.add(pattern.category);
        if (pattern.subcategory) {
          if (!subcategoriesUsed.has(pattern.category)) {
            subcategoriesUsed.set(pattern.category, new Set());
          }
          subcategoriesUsed.get(pattern.category).add(pattern.subcategory);
        }

        const componentMd = generateComponentMarkdown(pattern, group.variants.slice(1));
        const categoryDir = path.join(contentDir, pattern.category);
        const mdPath = pattern.subcategory
          ? path.join(categoryDir, pattern.subcategory, `${pattern.baseFilename}.md`)
          : path.join(categoryDir, `${pattern.baseFilename}.md`);

        ensureDir(path.dirname(mdPath));
        fs.writeFileSync(mdPath, componentMd);
        generated++;
      }
      return;
    }

    const pattern = group.base;
    categoriesUsed.add(pattern.category);
    if (pattern.subcategory) {
      if (!subcategoriesUsed.has(pattern.category)) {
        subcategoriesUsed.set(pattern.category, new Set());
      }
      subcategoriesUsed.get(pattern.category).add(pattern.subcategory);
    }

    const componentMd = generateComponentMarkdown(pattern, group.variants);
    const categoryDir = path.join(contentDir, pattern.category);
    const mdPath = pattern.subcategory
      ? path.join(categoryDir, pattern.subcategory, `${pattern.baseFilename}.md`)
      : path.join(categoryDir, `${pattern.baseFilename}.md`);

    ensureDir(path.dirname(mdPath));
    fs.writeFileSync(mdPath, componentMd);
    generated++;
  });

  // Generate category index files
  categoriesUsed.forEach(category => {
    const categoryDir = path.join(contentDir, category);
    ensureDir(categoryDir);
    const categoryContent = generateCategoryIndex(category, groupedPatterns);
    fs.writeFileSync(path.join(categoryDir, '_index.md'), categoryContent);
  });

  // Generate subcategory index files
  subcategoriesUsed.forEach((subcategories, category) => {
    subcategories.forEach(subcategory => {
      const subDir = path.join(contentDir, category, subcategory);
      ensureDir(subDir);
      const subContent = generateSubcategoryIndex(category, subcategory, groupedPatterns);
      fs.writeFileSync(path.join(subDir, '_index.md'), subContent);
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
  const searchIndex = generateSearchIndex(groupedPatterns);
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
  const sitemap = generateSitemap(groupedPatterns);
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
