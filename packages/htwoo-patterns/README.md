# @n8d/htwoo-patterns

Pattern library for the [hTWOo design system](https://lab.n8d.studio/htwoo/). This package contains exported Handlebars templates, data files, and images from htwoo-core for use in Pattern Lab projects.

## Overview

This package provides:
- **Pattern Templates** (`.hbs`) - Handlebars templates for all hTWOo components
- **Pattern Data** (`.json`) - Sample data and configuration for patterns
- **Pattern Documentation** (`.md`) - Documentation for each pattern
- **Images** - All required image assets
- **Automatic Installation** - Patterns are automatically copied to your Pattern Lab project on install

## Installation

```bash
npm install @n8d/htwoo-patterns
```

### Automatic Pattern Installation

When you install this package, the `postinstall` script automatically copies patterns to your Pattern Lab project:

1. Detects your Pattern Lab configuration (`patternlab-config.json`)
2. Copies `_patterns/` to your configured source directory
3. Copies `_data/` to your configured source directory
4. Copies `images/` to your configured source directory

**Note**: This requires a Pattern Lab project with a valid `patternlab-config.json` file.

## Package Contents

```
@n8d/htwoo-patterns/
├── _patterns/          # Pattern templates organized by atomic design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── _data/              # Pattern data files
├── images/             # Image assets
├── lib/                # Installation scripts
│   └── move-patterns.js
└── manifest.json       # File tracking manifest (auto-generated)
```

## Usage in Pattern Lab

After installation, patterns are available in your Pattern Lab project:

```handlebars
{{> atoms-button }}
{{> molecules-card }}
{{> organisms-header }}
```

Refer to the [hTWOo documentation](https://lab.n8d.studio/htwoo/) for detailed pattern usage.

## Development Workflow

This package uses `@n8d/htwoo-pattern-export` to manage pattern synchronization from htwoo-core.

### Available Scripts

```bash
# Export patterns from htwoo-core to this package
npm run export

# Export with verbose output
npm run export:verbose

# Preview changes without modifying files
npm run export:dry-run

# Compare current patterns with htwoo-core (same as export:verbose)
npm run compare
```

### Exporting Patterns

When developing hTWOo patterns in `htwoo-core`, use the export script to update this package:

```bash
cd packages/htwoo-patterns
npm run export:dry-run  # Preview changes first
npm run export          # Apply changes
```

The export process:
1. Compares files between `htwoo-core/src/` and this package
2. Uses MD5 hashes to detect changed files
3. Copies only modified, new, or removed patterns
4. Updates `manifest.json` to track changes
5. Generates a report of changes

### Comparing Patterns

To check if your local patterns are in sync with htwoo-core:

```bash
npm run compare
```

This shows:
- **Modified files** - Patterns that changed in htwoo-core
- **New files** - Patterns added to htwoo-core
- **Removed files** - Patterns deleted from htwoo-core

## Package Maintainers

### Building the Package

This package is maintained as part of the hTWOo monorepo. To update patterns:

1. **Make changes in htwoo-core**
   ```bash
   cd htwoo-core
   # Edit patterns in src/_patterns/
   ```

2. **Export to htwoo-patterns**
   ```bash
   cd packages/htwoo-patterns
   npm run export:verbose
   ```

3. **Review changes**
   - Check the export report
   - Verify `manifest.json` was updated
   - Test patterns in a Pattern Lab project

4. **Commit and publish**
   ```bash
   git add .
   git commit -m "chore: Update patterns from htwoo-core"
   npm version patch  # or minor/major
   npm publish
   ```

### Manifest Tracking

The `manifest.json` file tracks MD5 hashes of all exported files:

```json
{
  "version": "1.0.0",
  "timestamp": "2025-11-29T...",
  "files": {
    "_patterns/atoms/button/button.hbs": "abc123...",
    "_data/colors.json": "def456...",
    "images/logo.svg": "ghi789..."
  }
}
```

**Important**: `manifest.json` is excluded from git (via `.gitignore`) but included in the npm package. This allows:
- Clean git history (no manifest changes on every pattern update during development)
- Accurate comparison when users install the package
- Users can compare their installed version with the latest htwoo-core

## Related Packages

- **[@n8d/htwoo-core](https://www.npmjs.com/package/@n8d/htwoo-core)** - Core CSS framework and pattern source
- **[@n8d/htwoo-pattern-export](https://www.npmjs.com/package/@n8d/htwoo-pattern-export)** - Pattern export and comparison tool

## Links

- [Documentation](https://lab.n8d.studio/htwoo/)
- [GitHub Repository](https://github.com/n8design/htwoo)
- [npm Package](https://www.npmjs.com/package/@n8d/htwoo-patterns)
- [Issue Tracker](https://github.com/n8design/htwoo/issues)

## License

MIT - See [LICENSE](../../LICENSE) file for details

## Support

- [GitHub Sponsors - Stefan Bauer](https://github.com/sponsors/StfBauer)
- [GitHub Sponsors - n8design](https://github.com/sponsors/n8design)
