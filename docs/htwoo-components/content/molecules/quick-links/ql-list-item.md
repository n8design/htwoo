---
title: "Quick Link List Item"
description: "The quick link list item is a fundamental component for displaying navigation links in a horizontal list format. It combines an icon, title, and optional description in a clean, accessible layout opti"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-item"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Item"
seoDescription: "Quick Links Ql List Item Molecules"
weight: 10
hasVariants: false
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
  &lt;article class=&quot;hoo-qllist&quot;&gt;
      &lt;figure class=&quot;hoo-ql-media&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
      &lt;/figure&gt;
      &lt;div class=&quot;hoo-qlinfo&quot;&gt;
          &lt;div class=&quot;hoo-qltitle&quot;&gt;Quick-link title&lt;/div&gt;
          &lt;div class=&quot;hoo-qldesc&quot;&gt;Quick-links description lorem ipsum dolor sit amet&lt;/div&gt;
      &lt;/div&gt;
  &lt;/article&gt;&lt;/a&gt;
---

# Quick Link List Item

The quick link list item is a fundamental component for displaying navigation links in a horizontal list format. It combines an icon, title, and optional description in a clean, accessible layout optimized for content-heavy interfaces.

## Overview

The list item component provides a compact way to present quick links with comprehensive information. It supports both image and SVG icons, optional descriptions, and edit mode functionality for content management scenarios.

## Features

- **Icon Support**: Compatible with both image icons and SVG graphics
- **Flexible Content**: Optional description field for additional context
- **Edit Mode**: Built-in editing capabilities with action menus
- **Hover Effects**: Interactive feedback for better user experience
- **Responsive Design**: Adapts to container width constraints
- **Accessibility**: Proper semantic markup and keyboard navigation

## Structure

The component consists of:
1. **Container**: `.hoo-qllist` - Main article container
2. **Icon Area**: `.hoo-ql-media` - Icon or image display
3. **Information**: `.hoo-qlinfo` - Text content container
4. **Title**: `.hoo-qltitle` - Primary link text
5. **Description**: `.hoo-qldesc` - Optional descriptive text
6. **Menu**: `.hoo-qllink-menu` - Edit mode actions (when enabled)

## Data Structure

```json
{
    "quick-link": {
        "href": "/target-url",
        "title": "Quick Link Title",
        "description": "Optional description text",
        "qlimg": {
            "src": "path/to/icon.png",
            "alt": "Icon description"
        },
        "mode": false
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qllist`: Main list item container
- `.hoo-ql-media`: Icon/image container (24px × 24px)
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Primary title text
- `.hoo-qldesc`: Description text (optional)
- `.hoo-qllink-menu`: Edit mode menu container
- `.hoo-qllink-menuitem`: Menu item wrapper
- `.mode-edit`: Edit mode modifier class

## Styling

### Layout
- **Height**: Minimum 40px, flexible based on content
- **Padding**: 10px vertical, 12px horizontal gap
- **Icon Size**: 24px × 24px fixed dimensions
- **Text Flow**: Flexible width with line clamping

### Interactive States
- **Default**: Neutral gray text (`#605e5c`)
- **Hover**: Theme color (`#0078d4`) with border highlight
- **Focus**: Keyboard focus ring for accessibility
- **Active**: Border highlight for touch feedback

### Edit Mode
- **Hover**: Light gray border with visible action menu
- **Menu**: Positioned absolutely in top-right corner
- **Actions**: Close button with hover states

## Typography

- **Title**: 14px font, 20px line height, single line with ellipsis
- **Description**: 14px font, 20px line height, two lines maximum
- **Weight**: 400 (normal) for both title and description

## Accessibility

- **Semantic HTML**: Uses proper `<article>` and `<a>` elements
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Readers**: Descriptive text for all interactive elements
- **Focus Management**: Clear focus indicators and logical tab order
- **Alt Text**: Meaningful alternative text for icons and images

## Usage Guidelines

### Content
- Keep titles concise and descriptive
- Use descriptions to provide helpful context
- Ensure icons are relevant and recognizable
- Maintain consistent terminology across similar links

### Layout
- Group related quick links together
- Maintain consistent spacing between items
- Consider information hierarchy when ordering
- Use dividers or grouping for large collections

### Performance
- Optimize icon images for web delivery
- Use appropriate image formats (SVG preferred)
- Implement lazy loading for large lists
- Consider virtualization for very long lists

## SCSS Import