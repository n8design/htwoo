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