# Version Synchronization System

This document describes the automatic version synchronization system for the htwoo-core ecosystem, which ensures that both `@n8d/htwoo-core-styleguide` and `@n8d/htwoo-core` packages maintain the same version number and use consistent git tagging with the `htwoo-core-v*` format.

## Overview

The version synchronization system consists of:
- A comprehensive CLI tool (`scripts/sync-versions.js`)
- NPM scripts for easy access
- Nx task targets for monorepo integration
- Integration with existing changelog generation

## Available Commands

### NPM Scripts

Run these commands from the `htwoo-core/` directory:

```bash
# Check if versions are synchronized
npm run version:check

# Synchronize versions to a specific version (no git tag)
npm run version:sync -- 2.7.1

# Bump version by patch and create git tag
npm run version:bump

# Bump version by minor/major and create git tag
npm run version:bump:minor
npm run version:bump:major

# Set specific version and create git tag
npm run version:set -- 2.8.0

# Create git tag for current version
npm run version:tag

# List existing htwoo-core tags
npm run version:list-tags
```

### Nx Tasks

Run these commands from the workspace root:

```bash
# Check if versions are synchronized
npx nx run htwoo-core-styleguide:version:check

# Bump version (includes build and test dependencies)
npx nx run htwoo-core-styleguide:version:bump
npx nx run htwoo-core-styleguide:version:bump:minor
npx nx run htwoo-core-styleguide:version:bump:major

# Set specific version (includes build and test dependencies)
npx nx run htwoo-core-styleguide:version:set

# Create git tag for current version
npx nx run htwoo-core-styleguide:version:tag

# List existing tags
npx nx run htwoo-core-styleguide:version:list-tags
```

### Direct CLI Usage

You can also use the CLI tool directly:

```bash
# From htwoo-core/ directory
node scripts/sync-versions.js check
node scripts/sync-versions.js sync 2.7.1
node scripts/sync-versions.js bump patch "Custom commit message"
node scripts/sync-versions.js bump minor
node scripts/sync-versions.js bump major
node scripts/sync-versions.js set 2.8.0 "Custom tag message"
node scripts/sync-versions.js tag "Custom tag message"
node scripts/sync-versions.js list-tags
```

## Workflow Integration

### Release Process

1. **Check Synchronization**: Always start by checking if versions are synchronized
   ```bash
   nx run htwoo-core-styleguide:htwoo-version:check
   # or using npm scripts:
   npm run htwoo-version:check
   ```

2. **Bump Version**: Use the appropriate bump command based on the type of changes
   ```bash
   # For bug fixes
   nx run htwoo-core-styleguide:htwoo-version:bump
   # or: npm run htwoo-version:bump
   
   # For new features
   nx run htwoo-core-styleguide:htwoo-version:bump:minor
   # or: npm run htwoo-version:bump:minor
   
   # For breaking changes
   nx run htwoo-core-styleguide:htwoo-version:bump:major
   # or: npm run htwoo-version:bump:major
   ```

3. **Generate Changelog**: After version bump, generate the changelog
   ```bash
   npm run changelog:htwoo-core
   ```

4. **Push Changes**: Push both commits and tags
   ```bash
   git push origin main --follow-tags
   ```

### Pre-Release Checks

The system includes several safety checks:

- **Git Status**: Ensures working directory is clean before making changes
- **Version Validation**: Validates semantic version format
- **Synchronization Check**: Ensures both packages have the same version before operations
- **Tag Existence**: Prevents creating duplicate tags

### Build Integration

The Nx version tasks include build and test dependencies, ensuring that:
- Code is built successfully before version updates
- Tests pass before creating releases
- The package validation passes

## File Structure

The synchronization system affects these files:

```
htwoo-core/
├── package.json                    # Styleguide package version
├── project.json                    # Nx tasks for version management
└── scripts/
    └── sync-versions.js            # Version synchronization CLI tool

packages/htwoo-core/
├── package.json                    # Core package version
└── project.json                    # Package project configuration
```

## Git Tag Format

All git tags are created in the format: `htwoo-core-v{version}`

Examples:
- `htwoo-core-v2.7.0`
- `htwoo-core-v2.7.1`
- `htwoo-core-v2.8.0`

This format is consistent with the existing changelog generation system.

## Error Handling

The system includes comprehensive error handling for:

- Invalid version formats
- Missing or corrupted package.json files
- Git operation failures
- File system errors
- Unsynchronized versions

## Examples

### Typical Release Workflow

```bash
# 1. Check current status
npm run htwoo-version:check

# 2. Bump patch version (2.7.0 → 2.7.1)
npm run htwoo-version:bump

# 3. Generate updated changelog
npm run changelog:htwoo-core

# 4. Push changes
git push origin main --follow-tags
```

### Setting a Specific Version

```bash
# Set version to 3.0.0 with custom message
npm run htwoo-version:set -- 3.0.0 "Major release: New design system"

# Generate changelog
npm run changelog:htwoo-core

# Push changes
git push origin main --follow-tags
```

### Emergency Tag Creation

If you need to create a tag for the current version without changing anything:

```bash
npm run htwoo-version:tag -- "Emergency patch release"
```

## Integration with Existing Systems

### Changelog Generation

The existing `scripts/generate-changelog.js` already uses the `htwoo-core-v*` tag format, so it will automatically work with tags created by the synchronization system.

### Package Build Process

The version synchronization works alongside the existing build process:
- Package builds still occur via `npm run build:package`
- Version updates happen independently but can be integrated into build workflows
- Nx dependencies ensure proper build order

### Standard Version Integration

While the system can work alongside `standard-version`, the custom synchronization tool provides better control over the dual-package setup and ensures consistent tagging.

## Troubleshooting

### Versions Out of Sync

If versions become out of sync, use the sync command:

```bash
npm run htwoo-version:sync -- 2.7.0
```

### Missing Tags

If a version exists but doesn't have a corresponding tag:

```bash
npm run htwoo-version:tag
```

### Git Issues

Ensure your git working directory is clean and you have proper permissions to create tags and push to the repository.

### Permission Issues

Make sure the script is executable:

```bash
chmod +x htwoo-core/scripts/sync-versions.js
```

## Nx Workspace Integration

For use within the Nx workspace, all tasks are prefixed with `htwoo-` for clarity:

### Version Management Commands

```bash
# Check version synchronization
nx run htwoo-core-styleguide:htwoo-version:check

# Bump versions
nx run htwoo-core-styleguide:htwoo-version:bump        # patch
nx run htwoo-core-styleguide:htwoo-version:bump:minor  # minor
nx run htwoo-core-styleguide:htwoo-version:bump:major  # major

# Set specific version
nx run htwoo-core-styleguide:htwoo-version:set

# Sync versions manually
nx run htwoo-core-styleguide:htwoo-version:sync

# Tag operations
nx run htwoo-core-styleguide:htwoo-version:tag
nx run htwoo-core-styleguide:htwoo-version:list-tags
```

### Release Management Commands

```bash
# Complete release workflows
nx run htwoo-core-styleguide:htwoo-release:patch
nx run htwoo-core-styleguide:htwoo-release:minor
nx run htwoo-core-styleguide:htwoo-release:major

# Dry run testing
nx run htwoo-core-styleguide:htwoo-release:dry-run

# Release checks
nx run htwoo-core-styleguide:htwoo-release:check

# Changelog generation
nx run htwoo-core-styleguide:htwoo-changelog
nx run htwoo-core-styleguide:htwoo-changelog:preview
```

### NPM Scripts (Convenience)

The NPM scripts use the prefixed naming convention for consistency:

```bash
npm run htwoo-version:check
npm run htwoo-version:bump
npm run htwoo-release:patch
```

These NPM scripts provide a convenient interface while the Nx tasks offer explicit workspace-aware execution.
