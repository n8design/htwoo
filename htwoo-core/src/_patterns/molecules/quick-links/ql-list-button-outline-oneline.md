---
title: Quick Link Button - Outline One Line
order: 51
---

# Quick Link Button - Outline One Line

A compact button-style quick link with outline border and single-line title display. This variant is optimized for space-efficient layouts where visual prominence is needed with minimal vertical space usage.

## Overview

The outline one-line button provides professional button styling with strict single-line text truncation. It's ideal for dense layouts, toolbars, or navigation areas where space efficiency is critical while maintaining the polished appearance of outlined buttons.

## Features

- **Outline Styling**: Professional border with transparent background
- **Single-Line Title**: Text truncation with ellipsis for consistent height
- **Compact Height**: Minimal vertical space usage (48px)
- **Icon Integration**: Support for both image and SVG icons
- **Hover Effects**: Interactive feedback with background color change
- **Touch Optimized**: Appropriate touch targets despite compact size

## Structure

The component consists of:
1. **Link Container**: `.hoo-qllink` - Link wrapper element
2. **Button Container**: `.hoo-qlbtn.oneline` - Main button with single-line constraint
3. **Icon Area**: `.hoo-ql-media` - Icon display (optional)
4. **Info Area**: `.hoo-qlinfo` - Text content container
5. **Title**: `.hoo-qltitle` - Single-line title with ellipsis

## Data Structure

```json
{
    "quick-link": {
        "href": "/employee-directory",
        "title": "Employee Directory Search",
        "qlimg": {
            "src": "/icons/directory.svg",
            "alt": "Directory icon"
        }
    }
}
```

### With SVG Icon

```json
{
    "quick-link": {
        "href": "/time-tracking",
        "title": "Time Tracking System",
        "qlsvg": {
            "iconName": "clock",
            "size": "20"
        }
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qlbtn`: Main button container
- `.hoo-qlbtn.oneline`: Single-line text constraint modifier
- `.hoo-ql-media`: Icon container (20px for compact layout)
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Title text with ellipsis overflow

## Styling

### Visual Design
- **Border**: 1px solid `#d1d1d1` with 4px border radius
- **Background**: Transparent with light hover state
- **Padding**: 12px vertical, 16px horizontal
- **Height**: Fixed 48px height for consistency
- **Text Overflow**: Ellipsis truncation for long titles

### Layout
- **Direction**: Horizontal layout (icon beside text)
- **Alignment**: Items vertically centered
- **Gap**: 8px between icon and text
- **Text Constraint**: Single line with `white-space: nowrap`

### Interactive States
- **Default**: Outlined border with transparent background
- **Hover**: Light background (`#f3f2f1`) with smooth transition
- **Focus**: Blue focus ring for keyboard accessibility
- **Active**: Pressed state with subtle background change

## Use Cases

### Toolbar Actions
```handlebars
<div class="action-toolbar">
    <div class="toolbar-actions">
        <!-- Compact action buttons in toolbar -->
        {{> molecules-ql-list-button-outline-oneline}}
    </div>
</div>
```

### Dense Navigation
```handlebars
<nav class="compact-nav">
    <div class="nav-items">
        <!-- Space-efficient navigation options -->
        {{> molecules-ql-list-button-outline-oneline}}
    </div>
</nav>
```

### Quick Access Bar
```handlebars
<section class="quick-access">
    <h3>Quick Access</h3>
    <div class="access-bar">
        <!-- Single-line quick access buttons -->
        {{> molecules-ql-list-button-outline-oneline}}
    </div>
</section>
```

### Sidebar Navigation
```handlebars
<aside class="sidebar">
    <div class="sidebar-links">
        <!-- Compact sidebar navigation -->
        {{> molecules-ql-list-button-outline-oneline}}
    </div>
</aside>
```

## Typography

- **Font Size**: 14px
- **Line Height**: 20px (1lh for single line)
- **Font Weight**: 600 (semi-bold)
- **Text Overflow**: `ellipsis` with `overflow: hidden`
- **White Space**: `nowrap` to prevent wrapping

## Text Truncation

### Content Guidelines
- Design for titles that may be truncated
- Test with long titles to ensure meaningful truncation
- Use descriptive first words in titles
- Consider tooltip support for full title display

## Content Guidelines

### Title Text
- **Front-load Important Words**: Put key terms at the beginning
- **Be Descriptive**: Ensure truncated text still provides meaning
- **Test Truncation**: Verify titles work when cut off
- **Consistent Length**: Aim for similar title lengths in groups

### Icon Selection
- **Smaller Icons**: Use 20px icons for compact layout
- **Clear Recognition**: Ensure icons are recognizable at smaller size
- **Consistent Style**: Maintain visual consistency across toolbar
- **Meaningful Alt Text**: Provide descriptive alt text

## Accessibility

- **Keyboard Navigation**: Full keyboard navigation support
- **Focus Indicators**: Clear focus states for keyboard users
- **Screen Reader Support**: Proper semantic structure
- **Touch Targets**: Maintains 44px minimum touch target width
- **Truncation Support**: Consider tooltips for full title access
- **Color Contrast**: Meets WCAG AA standards

## Performance

- **Efficient Layout**: Simple horizontal layout with minimal reflows
- **CSS-Only Truncation**: No JavaScript required for text truncation
- **Lightweight**: Minimal CSS footprint
- **Scalable**: Efficient rendering in large lists

## When to Use One-Line Variant

### Choose One-Line When:
- **Space Constraints**: Vertical space is limited
- **Toolbar Context**: Part of action bars or toolbars
- **Dense Lists**: Need to fit many options in limited space
- **Consistent Height**: Visual alignment is important

### Choose Multi-Line When:
- **Descriptive Content**: Need additional context or descriptions
- **Reading Comprehension**: Full titles are important for understanding
- **Accessibility**: Users need complete information visible

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **CSS Text Overflow**: Excellent support for ellipsis truncation
- **Flexbox Layout**: Native support for horizontal alignment
- **Touch Devices**: Optimized for touch interaction

## SCSS Import

## Integration Examples

### Toolbar Integration
```handlebars
<div class="document-toolbar">
    <div class="toolbar-section">
        <span class="toolbar-label">Actions:</span>
        <div class="toolbar-buttons">
            {{#each toolbar-actions}}
            {{> molecules-ql-list-button-outline-oneline quick-link=this}}
            {{/each}}
        </div>
    </div>
</div>
```

### Navigation Sidebar
```handlebars
<nav class="app-sidebar" role="navigation">
    <div class="sidebar-header">
        <h2>Navigation</h2>
    </div>
    <div class="sidebar-content">
        {{#each nav-items}}
        {{> molecules-ql-list-button-outline-oneline quick-link=this}}
        {{/each}}
    </div>
</nav>
```
