# Gulp Migration Plan for hTWOo Core

## Current State
The htwoo-core project still contains a `gulpfile.js` that is largely obsolete. The actual build process has been modernized to use:
- Ice Build for CSS compilation
- Rollup for JavaScript bundling
- Shell commands for file operations
- Nx for orchestration

## Migration Steps

### 1. Audit Current Gulp Tasks
Review which Gulp tasks (if any) are still actually used:
- [ ] `styles` - REPLACED by Ice Build
- [ ] `pluginCSSOverride` - REPLACED by Ice Build  
- [ ] `pluginJSOverride` - REPLACED by shell commands
- [ ] `createLibSass` - REPLACED by `copy:scss` script
- [ ] `createLibJS` - REPLACED by `copy:js` script
- [ ] `createLibComponents` - REPLACED by `copy:components` script
- [ ] `movePatterns` - MAY STILL BE NEEDED for Pattern Lab

### 2. Replace with Nx Executors
Convert remaining tasks to proper Nx executors:

```json
// project.json additions
{
  "targets": {
    "build:styles": {
      "executor": "@nx/web:build",
      // ... CSS build configuration
    },
    "copy:assets": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          "shx mkdir -p ../packages/htwoo-core/lib/sass",
          "shx cp -r src/styles/* ../packages/htwoo-core/lib/sass/"
        ]
      }
    }
  }
}
```

### 3. Update Development Workflow
Replace any Gulp watch tasks with Nx equivalents:
- Use `nx watch` for file watching
- Use proper Nx cache for incremental builds
- Leverage Nx affected builds

### 4. Remove Gulp Dependencies
After migration:
- [ ] Remove `gulpfile.js`
- [ ] Remove gulp dependencies from `package.json`
- [ ] Update documentation
- [ ] Update CI/CD scripts

## Benefits of Migration
- **Better caching**: Nx provides superior build caching
- **Dependency graph**: Better understanding of project dependencies  
- **Affected builds**: Only rebuild what changed
- **Modern tooling**: Leverage latest build tools and executors
- **Consistency**: Align with modern Nx workspace patterns
