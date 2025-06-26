---
title: Breadcrumb with Buttons
order: 21
---

# Breadcrumb with Buttons

The Breadcrumb with Buttons component provides hierarchical navigation using interactive buttons instead of links.

## Overview

This variant of the breadcrumb navigation uses buttons for each breadcrumb item, making it ideal for single-page applications or scenarios where navigation requires JavaScript interaction rather than traditional page navigation.

## Features

- Interactive button-based navigation
- Semantic HTML structure using `<nav>` and `<ol>` elements
- Hierarchical path representation with arrow separators
- Current location indication via `aria-current="location"`
- Keyboard navigation support with proper focus management
- Consistent styling with standard breadcrumb links
- Accessible labeling with `aria-label` and `tabindex`

## CSS Classes

- `.hoo-breadcrumb` - Main breadcrumb container
- `.hoo-breadcrumb-item` - Individual breadcrumb items
- `.hoo-breadcrumb-link` - Breadcrumb buttons with consistent styling
- `.hoo-breadcrumb-separator` - Arrow separators between items

## Button Styling

Button breadcrumbs inherit the same visual styling as link breadcrumbs but include additional properties:

- **Background**: Transparent background
- **Border**: No border styling
- **Font**: Inherits font properties from parent
- **Cursor**: Pointer cursor on hover
- **Padding**: Same padding as link variants (0.5rem)
- **Size**: Same font size as link variants (1rem)

## Differences from Link Breadcrumbs

| Feature | Links | Buttons |
|---------|--------|---------|
| Navigation | Page-based (href) | JavaScript-based (onclick) |
| Accessibility | Standard link navigation | Button role with custom handlers |
| Use Case | Multi-page applications | Single-page applications |
| Keyboard | Enter key follows link | Enter/Space activates button |

## Usage Guidelines

- Use buttons when navigation requires JavaScript processing
- Ideal for single-page applications or dynamic content switching
- Include `aria-label="Breadcrumb"` on the nav element
- Add `tabindex="0"` to the nav element for keyboard accessibility
- Provide meaningful button text that indicates the destination
- Use `aria-current="location"` on the current page button
- Include click handlers for all button interactions
- Test keyboard navigation (Tab, Enter, Space)

## JavaScript Integration

Button breadcrumbs typically require JavaScript for functionality:

## SCSS

## Accessibility

- Uses semantic `<nav>` element with `aria-label="Breadcrumb"`
- Implements ordered list (`<ol>`) for hierarchical structure
- Includes `tabindex="0"` for keyboard accessibility
- Uses `aria-current="location"` for current page identification
- Provides clear focus indicators for keyboard navigation
- Maintains proper tab order through breadcrumb buttons
- Supports Enter and Space key activation
- Follows [WAI-ARIA breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html)
