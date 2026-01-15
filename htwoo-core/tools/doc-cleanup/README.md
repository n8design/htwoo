# Documentation Cleanup Tools

This directory contains utility scripts for cleaning up and maintaining the markdown documentation files in the htwoo-core project.

## Available Scripts

### `run-all-cleanup.js`
Runs all cleanup scripts in sequence.

```bash
node tools/doc-cleanup/run-all-cleanup.js
```

### Individual Cleanup Tools

#### `remove-js-blocks.js`
Removes JavaScript and TypeScript code blocks from markdown files.

```bash
node tools/doc-cleanup/remove-js-blocks.js
```

#### `remove-scss-blocks.js`
Removes SCSS and CSS code blocks from markdown files.

```bash
node tools/doc-cleanup/remove-scss-blocks.js
```

#### `remove-related-components.js`
Removes "Related Components" sections from markdown files.

```bash
node tools/doc-cleanup/remove-related-components.js
```

## Purpose

These tools are designed to help maintain a cleaner documentation approach by:

1. Removing code blocks that are better maintained in dedicated source files
2. Encouraging reference to interactive examples via Storybook
3. Keeping documentation focused on component behavior and usage
4. Simplifying maintenance of documentation

## Usage

Run these tools whenever you need to clean up the documentation files in the project.
