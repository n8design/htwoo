---
title: "Quick Link Compact Item"
description: "The compact quick link item is designed for space-constrained environments where maximum information density is required. It provides essential navigation functionality in a minimal 48px height format"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-compact-item"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql Compact Item"
seoDescription: "Quick Links Ql Compact Item Molecules"
weight: 11
hasVariants: false
markup: |
  
---

# Quick Link Compact Item

The compact quick link item is designed for space-constrained environments where maximum information density is required. It provides essential navigation functionality in a minimal 48px height format.

## Overview

The compact variant optimizes space usage while maintaining usability and accessibility. It's perfect for sidebars, toolbars, or any interface where vertical space is at a premium while still requiring quick access to important resources.

## Features

- **Minimal Height**: Fixed 48px height for consistent layouts
- **Icon Integration**: 48px × 48px icon area with rounded corners
- **Single Line Title**: Truncated with ellipsis for long titles
- **Edit Capabilities**: Built-in edit menu for content management
- **Hover Feedback**: Visual feedback for interactive elements
- **Flexible Width**: Adapts to container constraints

## Structure

The component consists of:
1. **Container**: `.hoo-qlcompact` - Main compact container
2. **Icon Area**: `.hoo-ql-media` - Icon/image display area
3. **Info Area**: `.hoo-qlinfo` - Title container
4. **Title**: `.hoo-qltitle` - Primary link text (clamped to 2 lines)
5. **Menu**: `.hoo-qlmenu` - Edit mode actions

## Data Structure

```json
{
    "quick-link": {
        "href": "/target-url",
        "title": "Compact Quick Link Title",
        "qlimg": {
            "src": "path/to/icon.png",
            "alt": "Icon description"
        }
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qlcompact`: Main compact container
- `.hoo-ql-media`: Icon container (48px × 48px with 4px border radius)
- `.hoo-qlinfo`: Title information container
- `.hoo-qltitle`: Primary title text (2-line clamp)
- `.hoo-qlmenu`: Edit mode menu container
- `.hoo-qlmenuitem`: Menu item wrapper
- `.mode-edit`: Edit mode modifier class

## Styling

### Dimensions
- **Height**: Fixed 48px for consistent alignment
- **Gap**: 12px between icon and text content
- **Icon**: 48px × 48px with 4px border radius
- **Border Radius**: 4px for the overall container

### Interactive States
- **Default**: Neutral text color with transparent border
- **Hover**: Theme color border (`#0078d4`)
- **Active**: Solid border for touch feedback
- **Focus**: Keyboard focus ring for accessibility

### Edit Mode Behavior
- **Hover**: Light gray border (`#c8c6c4`) with visible menu
- **Menu**: Positioned absolutely for overlay display
- **Actions**: Edit and delete options as needed

## Typography

- **Font Size**: 14px base size
- **Line Height**: 21px for optimal readability
- **Line Clamp**: Maximum 2 lines with ellipsis overflow
- **Font Weight**: 400 (normal)

## Layout Behavior

- **Flexbox**: Horizontal layout with center alignment
- **Flex Grow**: Icon maintains fixed size, text grows to fill
- **Text Wrap**: Balanced wrapping for better line breaks
- **Overflow**: Hidden with ellipsis for long titles

## Accessibility

- **Semantic Markup**: Proper article and link structure
- **Keyboard Support**: Tab navigation and Enter/Space activation
- **Screen Reader**: Descriptive content for assistive technology
- **Focus Indicators**: Clear visual focus states
- **Touch Targets**: Minimum 44px touch target size

## Use Cases

### Sidebar Navigation
```handlebars
<aside class="sidebar">
    <nav class="quick-links">
        {{#each compactLinks}}
        {{> molecules-ql-compact-item }}
        {{/each}}
    </nav>
</aside>
```

### Toolbar Integration
```handlebars
<div class="toolbar">
    <div class="toolbar-section">
        {{#each toolbarLinks}}
        {{> molecules-ql-compact-item}}
        {{/each}}
    </div>
</div>
```

### Dense Lists
```handlebars
<div class="resource-list">
    {{#each resources}}
    {{> molecules-ql-compact-item }}
    {{/each}}
</div>
```

## Performance Considerations

- **Icon Optimization**: Use SVG icons when possible for scalability
- **Lazy Loading**: Implement for long lists of compact items
- **Virtual Scrolling**: Consider for very large collections
- **Efficient Rendering**: Minimize DOM manipulation in edit modes

## Usage Guidelines

- **Content**: Keep titles short and descriptive
- **Grouping**: Use consistent spacing between related items
- **Icons**: Maintain consistent icon style and size
- **Hierarchy**: Use visual cues to indicate importance
- **Spacing**: Allow adequate breathing room despite compact design

## SCSS Import