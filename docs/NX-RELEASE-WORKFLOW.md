# Enhanced Nx Release Workflow Integration

This document explains how to use the enhanced Nx-integrated release management system for htwoo-core.

## Overview

The release management system has been fully integrated with Nx's task orchestration, providing better dependency management, caching, and parallel execution. All release commands are now available both as workspace-level scripts and as Nx targets.

## Quick Start Commands

### 🚀 Release Commands (Workspace Level)
```bash
# Release with automatic version detection
npm run release

# Release specific version types
npm run release:patch    # 2.7.3 → 2.7.4
npm run release:minor    # 2.7.3 → 2.8.0
npm run release:major    # 2.7.3 → 3.0.0

# Test release process without publishing
npm run release:dry-run

# Check release prerequisites
npm run release:check
```

### 📦 Version Management
```bash
# Check version synchronization status
npm run version:check

# Sync versions between packages
npm run version:sync

# Bump versions
npm run version:bump         # patch (default)
npm run version:bump:minor   # minor version
npm run version:bump:major   # major version

# Set specific version
npm run version:set -- 2.8.0

# Git tagging
npm run version:tag
npm run version:list-tags
```

### 📝 Changelog Management
```bash
# Generate changelog
npm run changelog

# Preview changelog changes
npm run changelog:preview
```

### 🔧 Development Workflows
```bash
# Launch development environments
npm run launch:core    # Start htwoo-core styleguide
npm run launch:react   # Start htwoo-react storybook

# Build projects
npm run build:core     # Build core package only
npm run build:react    # Build react package only
npm run build:all      # Build all projects in parallel

# Maintenance
npm run clean:all      # Clean all projects
npm run validate:all   # Validate all projects
```

## Nx-Specific Commands

You can also run commands directly through Nx for more control:

### Direct Nx Target Execution
```bash
# Release commands
nx run htwoo-core-styleguide:htwoo-release
nx run htwoo-core-styleguide:htwoo-release:patch
nx run htwoo-core-styleguide:htwoo-release:minor
nx run htwoo-core-styleguide:htwoo-release:major
nx run htwoo-core-styleguide:htwoo-release:dry-run

# Version management
nx run htwoo-core-styleguide:htwoo-version:check
nx run htwoo-core-styleguide:htwoo-version:sync
nx run htwoo-core-styleguide:htwoo-version:bump

# Build with dependency graph
nx build htwoo-core-styleguide
nx build htwoo-react
```

### Nx Task Orchestration Features
```bash
# Run multiple targets in parallel
nx run-many -t build test validate

# Run affected projects only
nx affected -t build
nx affected -t test

# Visualize project dependencies
nx graph

# Show what will be affected by changes
nx show projects --affected
```

## Workflow Integration Benefits

### 🎯 Task Dependencies
- **Automatic Prerequisites**: Release commands automatically run `build`, `test`, and `validate` before execution
- **Dependency Chain**: Nx ensures correct execution order based on project dependencies
- **Parallel Execution**: Independent tasks run in parallel for faster builds

### 💾 Smart Caching
- **Build Caching**: Repeated builds use cached results when source hasn't changed
- **Test Caching**: Tests only re-run when relevant code changes
- **Incremental Builds**: Only affected projects rebuild

### 🔄 Release Pipeline
The enhanced pipeline follows this sequence:

1. **Pre-flight Checks**: Version sync, dependency validation
2. **Build Phase**: Compile TypeScript, process SASS, bundle assets
3. **Test Phase**: Run unit tests, integration tests
4. **Validation Phase**: Package validation, file structure checks
5. **Release Phase**: Version bump, changelog, git tagging, npm publish

## Advanced Usage

### Custom Release Workflows
```bash
# Release with specific configuration
nx run htwoo-core-styleguide:htwoo-release -- --skip-tests

# Version management with custom parameters
nx run htwoo-core-styleguide:htwoo-version:set -- --version 3.0.0-beta.1

# Changelog with custom scope
nx run htwoo-core-styleguide:htwoo-changelog -- --from v2.7.0
```

### Workspace-Level Operations
```bash
# Build everything affected by current changes
npm run affected:build

# Test only what's affected
npm run affected:test

# Type check affected projects
npm run affected:typecheck
```

## Troubleshooting

### Common Issues

**Cache Issues**: If builds seem stale, clear Nx cache:
```bash
nx reset
```

**Dependency Issues**: View dependency graph:
```bash
nx graph
```

**Version Sync Issues**: Check and fix version synchronization:
```bash
npm run version:check
npm run version:sync
```

**Release Prerequisites**: Verify all requirements are met:
```bash
npm run release:check
```

## Configuration Files

- **`nx.json`**: Nx workspace configuration with task dependencies
- **`package.json`**: Workspace scripts and dependencies
- **`htwoo-core/project.json`**: Project-specific Nx targets
- **`htwoo-core/scripts/release.js`**: Release automation logic
- **`htwoo-core/scripts/sync-versions.js`**: Version synchronization logic

## Integration with External Tools

### GitHub Actions
The Nx-enhanced workflow integrates seamlessly with CI/CD:
```yaml
# Example GitHub Action
- name: Install dependencies
  run: npm ci

- name: Build affected projects
  run: npm run affected:build

- name: Test affected projects  
  run: npm run affected:test

- name: Release
  run: npm run release
  if: github.ref == 'refs/heads/main'
```

### VS Code Integration
Use the Nx Console extension for visual task execution and dependency viewing.

## Next Steps

1. **Try the enhanced workflow**: Start with `npm run release:dry-run`
2. **Explore dependencies**: Use `nx graph` to understand project relationships
3. **Optimize builds**: Leverage `nx affected` commands for faster CI/CD
4. **Monitor performance**: Use Nx's built-in performance tracking

The enhanced Nx integration provides a robust, scalable foundation for managing releases in the htwoo workspace while maintaining the comprehensive automation you already have in place.
