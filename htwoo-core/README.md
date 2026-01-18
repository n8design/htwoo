# hTWOo UI Framework - Core

![HTMLx](https://img.shields.io/badge/100%25-HTML-orange) ![HTMLx](https://img.shields.io/badge/100%25-CSS-blue) ![Code Style](https://img.shields.io/badge/code%20style-atomic-ff69b4) ![license](https://img.shields.io/github/license/n8design/liquid)

hTWOo UI Core is built on the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to provide a flexible build system of new components.

* Nothing but HTML/CSS
* Built using [Pattern Labs - Atomic Design](https://patternlab.io)

## Installation

No NPM package bas been published yet.

## Development installation

Global dependencies for running stylguide and gulp task site by side the following global dependency is recommended.

```sh
npm install -g npm-run-all
```

Start style guide development:

```sh
run-p pl:serve gulp:serve
```

**pl:serve** start pattern lab web server
**gulp:serve** watches for SASS style changes and updates the style guide.

More to come soon

## Accessibility Testing

hTWOo Core includes comprehensive accessibility testing to ensure WCAG 2.0/2.1 AA compliance across all design patterns.

### Quick Start

Run all accessibility tests and generate reports:

```bash
npm run test:a11y
```

View the interactive results dashboard:

```bash
npm run view:a11y
```

### What Gets Tested

The accessibility test suite **tests all 333+ patterns by default** for comprehensive coverage:
- **Atoms**: Buttons, inputs, icons, images, tables, tooltips, loading spinners, etc.
- **Molecules**: Forms, navigation, personas, accordions, cards, dialogs, etc.
- **Organisms**: Document cards, modal dialogs, facepiles, search grids, etc.
- **Templates & Pages**: Complete page layouts and examples
- **Design Tokens**: Color palettes, elevations, motion, typography

### Generated Reports

All reports are saved to `test-results/`:
- **Interactive Dashboard** (`index.html`) - Overview with metrics and links
- **Comprehensive Report** (`comprehensive-accessibility-report.html`) - Detailed analysis
- **JSON Data** (`comprehensive-accessibility-results.json`) - Machine-readable for CI/CD
- **Playwright Report** (`accessibility-playwright-report/`) - Standard test results

### Key Features

- ✅ **WCAG 2.0/2.1 AA** compliance checking
- 🚀 **Comprehensive by default** (tests all 333+ patterns in ~5-10 minutes)
- 📊 **Interactive dashboards** with violation breakdown
- 🔧 **CI/CD ready** with JSON output
- 📱 **Works offline** (no PatternLab dependency)
- 🎯 **Optimized for large test suites** (prevents EPIPE errors and resource exhaustion)
- 🔄 **Multiple test modes** for different use cases

### Additional Commands

```bash
# Run demo/validation test
npm run test:a11y:demo

# View results (same as npm run view:a11y)
npm run view:a11y:results

# Test only key patterns (20 essential patterns for quick validation)
npm run test:a11y:key

# Test sample (every 10th pattern for quick validation)
npm run test:a11y:sample
```

**Features:**
- **Comprehensive Coverage**: Tests all 333+ patterns by default, automatically discovered from `public/patterns/`
- **Flexible Testing Modes**: All patterns (default), key patterns, or sample mode
- **Large Test Suite Optimizations**: EPIPE error handling, reduced output, resource management
- **Dynamic Pattern Discovery**: No manual maintenance - automatically finds all `{pattern}.rendered.html` files
- **Rich Reporting**: Interactive HTML reports with detailed accessibility metrics and violation details

For complete documentation, see [ACCESSIBILITY_TESTING.md](./ACCESSIBILITY_TESTING.md).

## Documentation

For detailed documentation about version management and releases, see:
- [Version Synchronization Guide](../docs/VERSION-SYNC.md) - How to manage versions and releases
- [Changelog Management](../docs/CHANGELOG-MANAGEMENT.md) - How changelogs are generated
- [Development Guidelines](../docs/guidelines/) - Development and contribution guidelines

## Version Management

This project uses an automated version synchronization system that ensures both the styleguide (`@n8d/htwoo-core-styleguide`) and the core package (`@n8d/htwoo-core`) maintain the same version number.

### Quick Commands

```bash
# Check if versions are synchronized
npm run version:check

# Bump patch version (e.g., 2.7.0 → 2.7.1)
npm run version:bump

# Bump minor version (e.g., 2.7.0 → 2.8.0)
npm run version:bump:minor

# Bump major version (e.g., 2.7.0 → 3.0.0)
npm run version:bump:major

# Set specific version
npm run version:set -- 2.8.0

# List existing releases
npm run version:list-tags
```

All version operations automatically:
- Update both package.json files
- Create git commits
- Create git tags in `htwoo-core-v*` format
- Ensure version synchronization

For complete documentation, see the [Version Synchronization Guide](../docs/VERSION-SYNC.md).