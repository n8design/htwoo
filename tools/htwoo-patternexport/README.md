# @n8d/htwoo-pattern-export

A CLI tool and programmatic API for exporting and comparing Pattern Lab patterns. Specifically designed for the [htwoo design system](https://github.com/n8design/htwoo) to safely manage pattern updates between source and consuming projects.

## Overview

This utility helps you maintain consistent design patterns across multiple projects by:

- Comparing pattern files between a source and destination directory
- Exporting `.hbs` (Handlebars), `.json`, `.md` (Markdown), and image files
- Identifying modified, new, and removed patterns
- Maintaining a manifest of file hashes to track changes
- Generating reports of pattern changes
- Copying data files and images with proper directory structure

## Installation

```bash
npm install --save-dev @n8d/core-patternexport
```

## Directory Structure

```text
pattern-exports/ 
├── patterns/         # Contains all pattern files 
│   ├── atoms/ 
│   ├── molecules/ 
│   ├── organisms/ 
│   └── templates/ 
├── data/             # Contains all data files 
├── compare.ts        # Comparison script 
├── manifest.json     # Pattern hashes 
└── package.json      # Project configuration
```

## Development

### Running Tests

```bash
# Quick test (build + dry run export)
npm test

# Full test suite (build + export + verification)
npm run test:full

# Individual tests
npm run test:help        # Show help message
npm run test:build       # Test TypeScript compilation
npm run test:export      # Test dry run export
npm run test:export:full # Test full export with files
npm run test:verify      # Verify output structure

# Bidirectional import tests
npm run test:import      # Test import with dry-run
npm run test:roundtrip   # Full round-trip test (export → import → verify)

# Clean up test files
npm run test:clean
```

## Usage

```bash
pattern-export --source <source-dir> --output <output-dir> [options]
```

## Options

| Option          | Description                                              |
|-----------------|----------------------------------------------------------|
| `-s, --source <path>` | Source patterns directory (defaults to PatternLab config) |
| `-d, --data <path>`   | Source data directory (optional, auto-detected)           |
| `-i, --images <path>` | Source images directory (optional, auto-detected)         |
| `-o, --output <path>` | Output directory (required)                              |
| `-v, --verbose`       | Enable verbose output                                    |
| `--dry-run`           | Show what would change without modifying files           |
| `-h, --help`          | Show help message                                        |


## Examples

### Basic Export

Export patterns only (auto-detects data and images):
```bash
pattern-export --source ./src/_patterns --output ./dist
```

### Full Export with Custom Paths

Export patterns, data, and images from custom locations:
```bash
pattern-export \
  --source ./htwoo-core/src/_patterns \
  --data ./htwoo-core/src/_data \
  --images ./htwoo-core/src/images \
  --output ./packages/htwoo-patterns
```

### Preview Changes (Dry Run)

Preview changes without making any file modifications:
```bash
pattern-export --source ./src/_patterns --output ./dist --dry-run --verbose
```

### Copy Any Folder Structure

The tool is flexible - you can copy any folder to any destination:
```bash
# Export to a different project
pattern-export --source ../project-a/patterns --output ../project-b/patterns

# Export with custom images location
pattern-export \
  --source ./patterns \
  --images ./assets/img \
  --output ./exported
```

## Features

### Automatic Source Path Detection

If no `--source` is specified, the tool will:

Look for a `patternlab-config.json` file in the current directory
Extract the pattern and data paths from the config
Use those paths for comparison

### Pattern Comparison

The tool compares patterns using MD5 hashes of file content:

- Identical files are ignored
- Modified files are identified and can be updated
- New files in the source are copied to the destination
- Files missing from the source but present in the destination are identified

### File Types Exported

The tool exports the following file types:

**Pattern Files:**
- **`.hbs`** - Handlebars template files
- **`.json`** - Pattern configuration files
- **`.md`** - Markdown documentation files

**Data Files:**
- **`.json`** - Data files from the `_data` directory

**Image Files:**
- **`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`, `.avif`, `.bmp`, `.ico`** - All common image formats

All files are tracked in the manifest with MD5 hashes for accurate change detection.

### Manifest Maintenance

A manifest.json file is maintained in the output directory to track file hashes, making subsequent comparisons faster and more accurate.

### Two-way Synchronization

The tool is **fully bidirectional** and works in both directions:

**Export Mode** (Pattern Lab → Shared Library):
```bash
# From Pattern Lab project directory
pattern-export --output ../shared-patterns
```

**Import Mode** (Shared Library → Pattern Lab):
```bash
# From Pattern Lab project directory
pattern-export --source ../shared-patterns/_patterns --data ../shared-patterns/_data --output ./source
```

Simply swap the `--source` and `--output` parameters to reverse the direction. The tool automatically detects the operation mode based on the provided flags.

### Dry Run Mode

Use the --dry-run option to preview changes without modifying any files. This shows:

- Files that would be modified
- Files that would be created
- Files that would be removed

### Reports

When changes are detected, the tool generates a markdown report with details about modified, new, and removed patterns. This is saved as `pattern-report.md` in the parent directory.

License

MIT