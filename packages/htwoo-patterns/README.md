# @n8d/htwoo-patterns

Pattern library for the [hTWOo design system](https://lab.n8d.studio/htwoo/). This package contains the Handlebars templates, data files, Handlebars helpers and images from htwoo-core, for use in style guide tools such as Pattern Lab and Pattern Dump.

## Overview

This package provides:
- **Pattern Templates** (`.hbs`) - Handlebars templates for all hTWOo components
- **Pattern Data** (`.json`) - Sample data and configuration for patterns
- **Pattern Documentation** (`.md`) - Documentation for each pattern
- **Handlebars Helpers** (`helpers/hbs`) - Helpers used by the templates (`dynamicPartial`, `generateFacepile`, ...)
- **Images** - All required image assets

Styles, themes and scripts come from [`@n8d/htwoo-core`](https://www.npmjs.com/package/@n8d/htwoo-core), which is a peer dependency. Both packages are released together at the same version.

## Installation

```bash
npm install @n8d/htwoo-core @n8d/htwoo-patterns
```

> **Changed in 2.9.0:** the package no longer runs a `postinstall` script, so installing it never copies files into your project.

### Using with Pattern Dump

Install both packages, then add `"@n8d/htwoo-patterns"` to `packages` in your Pattern Dump config:

```bash
npm install @n8d/htwoo-core @n8d/htwoo-patterns
```

```ts
packages: ["@n8d/htwoo-patterns"],
```

### Pattern Lab

Copy the patterns into your Pattern Lab source folder yourself (adjust `source/` to the `paths.source` in your `patternlab-config.json`):

```bash
npx shx cp -r node_modules/@n8d/htwoo-patterns/_patterns node_modules/@n8d/htwoo-patterns/_data node_modules/@n8d/htwoo-patterns/images source/
```

For a ready-made Pattern Lab setup (Ice Build, hot reload, plugins) see [`@n8d/htwoo-patternlab-config`](https://www.npmjs.com/package/@n8d/htwoo-patternlab-config).

## Package Contents

```
@n8d/htwoo-patterns/
├── _patterns/          # Pattern templates organized by atomic design
│   ├── atoms/
│   ├── design-tokens/
│   ├── molecules/
│   ├── organism/
│   ├── templates/
│   └── pages/
├── _data/              # Pattern data files
├── helpers/hbs/        # Handlebars helpers
├── images/             # Image assets
└── lib/                # CLI (htwoo-toggle-patterns)
```

## Usage

```handlebars
{{> atoms-button }}
{{> molecules-card }}
```

Refer to the [hTWOo documentation](https://lab.n8d.studio/htwoo/) for detailed pattern usage.

### Toggling Pattern Visibility

Control which patterns are visible in Pattern Lab by toggling the `hidden` property:

```bash
# Toggle visibility for all patterns (true <-> false)
npx htwoo-toggle-patterns toggle

# Hide all patterns (set hidden: true)
npx htwoo-toggle-patterns hide

# Show all patterns (set hidden: false)
npx htwoo-toggle-patterns show

# Preview changes without modifying files
npx htwoo-toggle-patterns toggle --dry-run
npx htwoo-toggle-patterns hide --dry-run --verbose
```

This modifies the YAML frontmatter in your Pattern Lab's `_patterns/**/*.md` files. The `hidden` property controls visibility in the Pattern Lab interface.

## Package Maintainers

The package contents are generated from `htwoo-core` and are **not committed** to git.

```bash
cd htwoo-core
npm run build:patterns-package
```

The build:
1. Wipes `_patterns`, `_data`, `helpers` and `images` in this package
2. Copies `src/_patterns`, `src/_data`, `src/images` and `helpers/hbs` from htwoo-core, skipping tooling files (`*.sh`, `*.new`, `*.tmp`)
3. Fails if two templates or data files resolve to the same pattern handle (`<group>-<file name>`)

Check handle collisions on their own with `npm run check:collisions`. `prepack` runs this check and the version check, so a package with collisions or a version that doesn't match `@n8d/htwoo-core` is never packed.

Versions are kept in sync with `htwoo-core/scripts/sync-versions.js`.

## Related Packages

- **[@n8d/htwoo-core](https://www.npmjs.com/package/@n8d/htwoo-core)** - Styles, themes and scripts
- **[@n8d/htwoo-patternlab-config](https://www.npmjs.com/package/@n8d/htwoo-patternlab-config)** - Pattern Lab setup

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
