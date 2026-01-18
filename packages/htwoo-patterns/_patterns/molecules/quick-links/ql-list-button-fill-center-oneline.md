---
title: Quick Link Button - Fill Center One Line
order: 33
---

# Quick Link Button - Filled Center One Line

A compact button-style quick link with filled background, centered content, and single-line title display. This variant is optimized for space-constrained layouts where visual prominence is needed with minimal vertical space.

## Overview

The filled center one-line button combines the visual impact of a filled background with centered alignment and single-line text truncation. It's ideal for action-oriented navigation where space efficiency and visual prominence are both important.

## Features

- **Filled Background**: Theme-colored background with white text
- **Centered Layout**: Vertical stacking of icon and text content
- **One Line Title**: Single line display with ellipsis truncation
- **Compact Height**: Optimized for minimal vertical space usage
- **Icon Integration**: Support for both image and SVG icons
- **Hover Effects**: Interactive feedback with darker background

## Structure

The component consists of:
1. **Container**: `.hoo-qlbtn.filled.oneline.center` - Main button container
2. **Icon Area**: `.hoo-ql-media` - Icon display (24px)
3. **Info Area**: `.hoo-qlinfo` - Text content container
4. **Title**: `.hoo-qltitle` - Single-line title text

## Data Structure

```json
{
    "quick-link": {
        "href": "/target-action",
        "title": "Single Line Action Title",
        "qlimg": {
            "src": "path/to/icon.png",
            "alt": "Action icon"
        }
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qlbtn`: Main button container
- `.filled`: Filled background modifier
- `.oneline`: Single-line text modifier
- `.center`: Centered layout modifier
- `.hoo-ql-media`: Icon container (24px)
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Title text (1-line clamp)

## Styling

### Visual Design
- **Background**: Theme primary color (`#0078d4`)
- **Text Color**: White (`#ffffff`)
- **Border**: 1px solid theme color with 4px border radius
- **Padding**: 12px vertical and horizontal
- **Minimum Height**: 62px for touch accessibility

### Layout
- **Direction**: Vertical (column) layout
- **Alignment**: Centered text and icon
- **Gap**: 12px between icon and text
- **Text Truncation**: Single line with ellipsis overflow

### Interactive States
- **Default**: Theme background with white text
- **Hover**: Darker theme background (`#106ebe`)
- **Focus**: Keyboard focus ring for accessibility
- **Active**: Pressed state feedback

## Typography

- **Font Size**: 14px
- **Line Height**: 20px (1lh for single line)
- **Font Weight**: 400 (normal)
- **Text Align**: Center
- **Line Clamp**: 1 line maximum with ellipsis

## Use Cases

### Action Buttons
- Primary actions in toolbars
- Featured functionality buttons
- Call-to-action elements

### Navigation
- Section navigation in dashboards
- Category browsing buttons
- Application launchers

### Compact Interfaces
- Mobile-optimized layouts
- Sidebar action buttons
- Card-based interfaces

## Accessibility

- **Color Contrast**: High contrast white text on colored background
- **Touch Targets**: Minimum 44px touch target size
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Descriptive content and proper labeling
- **Focus Management**: Clear focus indicators

## Usage Guidelines

### Content
- Keep titles short and action-oriented
- Use clear, recognizable icons
- Ensure text remains readable when truncated
- Consider the impact of single-line constraints

### Layout
- Group related actions together
- Maintain consistent spacing
- Consider visual hierarchy within button collections
- Plan for different screen sizes

### Performance
- Optimize icons for web delivery
- Use appropriate image formats
- Consider loading states for dynamic content

## SCSS Import

