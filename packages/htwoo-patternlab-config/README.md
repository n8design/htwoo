# @n8d/htwoo-patternlab-config

Pattern Lab configuration package with Ice Build, Ice Hotreloader, and custom plugin system for enhanced style guide development.

## Overview

This package provides a pre-configured Pattern Lab setup with three key enhancements:

1. **Ice Build** - Fast SCSS compilation with file watching
2. **Ice Hotreloader** - Live CSS reload without page refresh
3. **Custom Plugin System** - UI customization without forking Pattern Lab assets

## Installation

```bash
npm install --save-dev @n8d/htwoo-patternlab-config
```

### Required Dependencies

Make sure you have these Pattern Lab dependencies installed:

```bash
npm install --save-dev @pattern-lab/cli@^6.1.0
npm install --save-dev @pattern-lab/core@^6.1.0
npm install --save-dev @pattern-lab/engine-handlebars@^6.1.0
npm install --save-dev @pattern-lab/uikit-workshop@^6.1.0
```

### Additional Dependencies

```bash
npm install --save-dev @n8d/ice-build
npm install --save-dev @n8d/ice-hotreloader
npm install --save-dev npm-run-all
npm install --save-dev fs-extra
```

## Quick Start

### Initialize Configuration

Run the initialization script from your Pattern Lab project root:

```bash
npx htwoo-patternlab-init
```

This will:
- ✅ Create `patternlab-config.json` with Ice Hotreloader integration
- ✅ Create `ice.config.js` for CSS compilation
- ✅ Copy the custom plugin to `helpers/node/plugin-design/`
- ✅ Add recommended npm scripts to your `package.json`

### Start Development

```bash
npm start
```

This runs:
1. Copy plugin files to public directory
2. Start Ice Build in watch mode (SCSS compilation + hot reload)
3. Start Pattern Lab development server

Your style guide will be available at `http://localhost:3000` with live CSS reload!

## What's Included

### 1. Pattern Lab Configuration

The package includes a pre-configured `patternlab-config.json` with:

- **Ice Hotreloader Integration**: Live CSS reload via `/ice-hotreloader` mount point
- **Custom Plugin Enabled**: `plugin-design` for UI customization
- **Handlebars Engine**: With helper support via `helpers/hbs/*.js`
- **Optimized Viewport Ranges**: S (240-500px), M (500-800px), L (800-2600px)
- **Clean Theme**: Light theme with compact density

### 2. Ice Build Configuration

Includes `ice.config.js` for fast SCSS compilation:

```javascript
{
  input: 'src',
  output: 'public/css',
  includePaths: ['node_modules'],
  sourceMap: true,
  hotReload: {
    enabled: true,
    port: 3001
  }
}
```

### 3. Custom Plugin System

The `plugin-design` plugin provides a clean way to customize Pattern Lab's UI:

**Plugin Structure:**
```
helpers/node/plugin-design/
├── package.json
├── index.js              # Plugin initialization
└── dist/
    ├── css/
    │   └── plugin-design.css   # Custom UI styles
    └── js/
        └── plugin-design.js    # Custom UI scripts
```

**Customize the UI:**
- Edit `helpers/node/plugin-design/dist/css/plugin-design.css` for style changes
- Edit `helpers/node/plugin-design/dist/js/plugin-design.js` for behavior changes

### 4. NPM Scripts

The following scripts are added to your `package.json`:

```json
{
  "scripts": {
    "prestart": "npm run copy:plugin",
    "start": "npm-run-all --parallel ice:watch pl:serve",
    "copy:plugin": "node -e \"require('fs-extra').copySync('helpers/node/plugin-design', 'public/plugins/plugin-design')\"",
    "pl:serve": "patternlab serve --config ./patternlab-config.json",
    "pl:build": "patternlab build --config ./patternlab-config.json",
    "ice:build": "ice-build build --config ./ice.config.js",
    "ice:watch": "ice-build watch --config ./ice.config.js",
    "build": "npm-run-all copy:plugin ice:build pl:build"
  }
}
```

## Usage

### Development Workflow

```bash
# Start development server with hot reload
npm start

# Build for production
npm run build

# Build Pattern Lab only
npm run pl:build

# Build CSS only
npm run ice:build
```

### Customizing the Plugin

1. **Edit CSS**: Modify `helpers/node/plugin-design/dist/css/plugin-design.css`
2. **Edit JavaScript**: Modify `helpers/node/plugin-design/dist/js/plugin-design.js`
3. **Restart**: Run `npm start` to see changes

### Customizing Configuration

**Pattern Lab Config** (`patternlab-config.json`):
- Modify paths, viewport ranges, theme settings
- See [Pattern Lab docs](https://patternlab.io/docs/editing-the-configuration-options/) for all options

**Ice Build Config** (`ice.config.js`):
- Adjust input/output paths
- Configure source maps, hot reload port
- Add additional SCSS include paths

## Programmatic Usage

You can also use this package programmatically:

```javascript
const htwooPL = require('@n8d/htwoo-patternlab-config');

// Get plugin path for copying
const pluginPath = htwooPL.getPluginPath();

// Get configuration templates
const plConfig = htwooPL.getPatternLabConfig();
const iceConfig = htwooPL.getIceConfig();
const scripts = htwooPL.getScripts();

// Get templates directory path
const templatesPath = htwooPL.getTemplatesPath();
```

## Features

### ✨ Ice Build Integration

- **Fast SCSS Compilation**: Optimized build times
- **Watch Mode**: Automatically recompile on file changes
- **Source Maps**: Debug SCSS in browser DevTools
- **Include Paths**: Import from node_modules easily

### ✨ Ice Hotreloader

- **Live CSS Updates**: No page refresh needed
- **Instant Feedback**: See style changes immediately
- **Production Ready**: Disabled in production builds

### ✨ Custom Plugin System

- **UI Customization**: Modify Pattern Lab chrome without forking
- **Easy Updates**: Keep Pattern Lab core up-to-date
- **Flexible**: Add custom styles and JavaScript

## File Structure

After initialization, your project will have:

```
your-project/
├── patternlab-config.json       # Pattern Lab configuration
├── ice.config.js                # Ice Build configuration
├── helpers/
│   └── node/
│       └── plugin-design/       # Custom plugin
│           ├── package.json
│           ├── index.js
│           └── dist/
│               ├── css/
│               │   └── plugin-design.css
│               └── js/
│                   └── plugin-design.js
├── src/                         # Your patterns and source files
└── public/                      # Built output
```

## Advanced Configuration

### Custom Mount Points

Add additional mount points in `patternlab-config.json`:

```json
{
  "serverOptions": {
    "mount": [
      ["/ice-hotreloader", "../node_modules/@n8d/ice-hotreloader/"],
      ["/custom-path", "./custom-directory/"]
    ]
  }
}
```

### Multiple SCSS Entry Points

Extend `ice.config.js`:

```javascript
module.exports = {
  input: ['src/styles', 'src/themes'],
  output: 'public/css',
  // ... other options
};
```

## Troubleshooting

### Plugin Not Loading

1. Verify plugin is in `helpers/node/plugin-design/`
2. Check `patternlab-config.json` has plugin enabled
3. Run `npm run copy:plugin` manually
4. Restart Pattern Lab server

### Hot Reload Not Working

1. Verify Ice Build is running (`npm run ice:watch`)
2. Check `ice.config.js` hotReload is enabled
3. Verify mount point in `patternlab-config.json`
4. Check browser console for errors

### CSS Not Compiling

1. Verify `ice.config.js` paths are correct
2. Run `npm run ice:build` to check for errors
3. Check SCSS syntax errors
4. Verify `@n8d/ice-build` is installed

## Examples

See the [htwoo-core repository](https://github.com/n8design/htwoo) for a complete working example.

## Related Packages

- **[@n8d/htwoo-core](https://www.npmjs.com/package/@n8d/htwoo-core)** - Core CSS framework
- **[@n8d/htwoo-patterns](https://www.npmjs.com/package/@n8d/htwoo-patterns)** - Pattern library for Pattern Lab
- **[@n8d/htwoo-pattern-export](https://www.npmjs.com/package/@n8d/htwoo-pattern-export)** - Pattern export and comparison tool

## Links

- [Documentation](https://lab.n8d.studio/htwoo/)
- [GitHub Repository](https://github.com/n8design/htwoo)
- [Issue Tracker](https://github.com/n8design/htwoo/issues)
- [Pattern Lab Documentation](https://patternlab.io)

## License

MIT - See [LICENSE](../../LICENSE) file for details

## Support

- [GitHub Sponsors - Stefan Bauer](https://github.com/sponsors/StfBauer)
- [GitHub Sponsors - n8design](https://github.com/sponsors/n8design)
