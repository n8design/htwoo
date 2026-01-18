# Quick Start Guide

Get your Pattern Lab project enhanced with Ice Build, Ice Hotreloader, and custom plugins in 5 minutes.

## Prerequisites

- Node.js installed
- An existing Pattern Lab project OR a new project directory

## Step 1: Install Pattern Lab (if needed)

If you don't have Pattern Lab installed:

```bash
npm create pattern-lab
```

Or set up manually:

```bash
mkdir my-styleguide && cd my-styleguide
npm init -y
npm install --save-dev @pattern-lab/cli@^6.1.0 @pattern-lab/core@^6.1.0 @pattern-lab/engine-handlebars@^6.1.0 @pattern-lab/uikit-workshop@^6.1.0
```

## Step 2: Install hTWOo Pattern Lab Config

```bash
npm install --save-dev @n8d/htwoo-patternlab-config @n8d/ice-build @n8d/ice-hotreloader npm-run-all fs-extra
```

## Step 3: Initialize Configuration

```bash
npx htwoo-patternlab-init
```

This creates:
- ✅ `patternlab-config.json` - Pattern Lab configuration with Ice Hotreloader
- ✅ `ice.config.js` - Ice Build configuration
- ✅ `helpers/node/plugin-design/` - Custom plugin for UI customization
- ✅ Updated `package.json` scripts

## Step 4: Start Development

```bash
npm start
```

Your style guide is now running at `http://localhost:3000` with:
- 🔥 Live CSS reload (no page refresh)
- ⚡ Fast SCSS compilation
- 🎨 Customizable Pattern Lab UI

## Step 5: Customize (Optional)

### Customize the Plugin UI

Edit these files:
- `helpers/node/plugin-design/dist/css/plugin-design.css` - Custom styles
- `helpers/node/plugin-design/dist/js/plugin-design.js` - Custom JavaScript

### Customize Ice Build

Edit `ice.config.js` to change:
- Input/output paths
- Hot reload port
- Source map settings

### Customize Pattern Lab

Edit `patternlab-config.json` to change:
- Viewport ranges
- Theme (light/dark, compact/cozy/comfortable)
- Logo
- Navigation options

## What You Get

✅ **Fast Development**: Ice Build compiles SCSS quickly
✅ **Live Reload**: CSS updates without browser refresh
✅ **Custom UI**: Modify Pattern Lab appearance without forking
✅ **Parallel Builds**: CSS and Pattern Lab run simultaneously
✅ **Easy Updates**: Keep Pattern Lab core up-to-date

## Common Commands

```bash
# Development with hot reload
npm start

# Build for production
npm run build

# Build Pattern Lab only
npm run pl:build

# Build CSS only
npm run ice:build

# Watch CSS only
npm run ice:watch
```

## Next Steps

1. Add your patterns to `src/_patterns/`
2. Add your SCSS to `src/styles/`
3. Customize the plugin UI
4. Deploy to production with `npm run build`

## Need Help?

- [Full Documentation](./README.md)
- [Pattern Lab Docs](https://patternlab.io)
- [GitHub Issues](https://github.com/n8design/htwoo/issues)
- [hTWOo Documentation](https://lab.n8d.studio/htwoo/)

---

**Time to first development server: ~5 minutes** ⚡
