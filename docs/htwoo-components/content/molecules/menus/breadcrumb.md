---
title: "Breadcrumb Navigation"
description: "The Breadcrumb Navigation component provides hierarchical path navigation to help users understand their location within the application."
type: "components"
layout: "single"
patternId: "molecules-menus-breadcrumb"
category: "molecules"
subcategory: "menus"
seoTitle: "Molecules - Menus Breadcrumb"
seoDescription: "Menus Breadcrumb Molecules"
weight: 15
hasVariants: false
markup: |
  
---

# Breadcrumb Navigation

The Breadcrumb Navigation component provides hierarchical path navigation to help users understand their location within the application.

## Overview

Breadcrumbs show the path from the current page back to the top level of the site hierarchy. They help users understand where they are and provide easy navigation back to parent levels.

## Features

- Semantic HTML structure using `<nav>` and `<ol>` elements
- Hierarchical path representation with arrow separators
- Current location indication via `aria-current="location"`
- Hover states for interactive links
- Consistent spacing and typography
- Flexible layout that adapts to content length
- Support for both link and button elements

## CSS Classes

- `.hoo-breadcrumb` - Main breadcrumb container
- `.hoo-breadcrumb-item` - Individual breadcrumb items with last-child styling
- `.hoo-breadcrumb-link` - Breadcrumb links with hover states and padding
- `.hoo-breadcrumb-separator` - Arrow separators between breadcrumb items

## Visual Structure

### Layout

The breadcrumb uses a horizontal flexbox layout:

- **Container**: Flex row with items aligned to the left
- **Items**: Inline-block elements with auto width
- **Links**: Inline-block with consistent padding and line height
- **Separators**: Inline elements with arrow icons

### Typography

- **Font size**: 1rem (16px) for consistent readability
- **Line height**: 32px for proper vertical alignment
- **Font weight**: Bold for the current (last) item

### Spacing

- **Link padding**: 0.5rem left and right
- **Item spacing**: Controlled by separator placement
- **Vertical alignment**: Center-aligned within container

## Button Variant

Breadcrumb items can also use buttons instead of links:

```html
<nav class="hoo-breadcrumb">
  <ol>
    <li class="hoo-breadcrumb-item">
      <button type="button" class="hoo-breadcrumb-link">Home</button>
      <span class="hoo-breadcrumb-separator">
        <svg class="hoo-icon-svg"><!-- Arrow right icon --></svg>
      </span>
    </li>
  </ol>
</nav>
```

Button breadcrumbs include:
- Transparent background
- No border styling
- Cursor pointer on hover
- Inherited font properties

## States

### Default State
- Standard link color and background
- Arrow separators between items

### Hover State
- Background color change to neutral hover state
- Maintains link color consistency

### Current Location
- Bold font weight for the final item
- `aria-current="location"` attribute
- No separator after the last item

## Usage Guidelines

- Always use `<nav>` element for semantic navigation
- Use `<ol>` (ordered list) to represent the hierarchical path
- Include `aria-current="location"` on the current page item
- Provide meaningful link text that clearly indicates the destination
- Don't make the current page item clickable (no href)
- Include separators between items except after the last item
- Keep breadcrumb paths reasonable in length (typically 3-7 levels)

## SCSS

## Accessibility

- Uses semantic `<nav>` element for proper landmark identification
- Implements ordered list (`<ol>`) to show hierarchical relationship
- Includes `aria-current="location"` for current page identification
- Provides clear focus indicators for keyboard navigation
- Maintains proper tab order through breadcrumb items
- Uses meaningful link text for screen reader users
- Follows [WAI-ARIA breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html)