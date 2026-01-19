---
title: "Quick Links Compact Grid"
description: "A responsive grid layout for displaying quick links in compact form. Features minimal visual elements with icon and title only, optimized for space-efficient navigation in dashboards and landing pages"
type: "components"
layout: "single"
patternId: "organism-quick-links-grid-quick-links-compact-grid"
category: "organism"
subcategory: "quick-links-grid"
seoTitle: "Organism - Quick Links Grid Quick Links Compact Grid"
seoDescription: "Quick Links Grid Quick Links Compact Grid Organism"
weight: 40
hasVariants: false
markup: |
  
---

# Quick Links Compact Grid

A responsive grid layout for displaying quick links in compact form. Features minimal visual elements with icon and title only, optimized for space-efficient navigation in dashboards and landing pages.

## Overview

The quick links compact grid organizes navigation items in a clean, space-efficient grid layout. Each item displays only an icon and title, making it ideal for areas where screen real estate is limited but multiple quick access points are needed.

## Features

- **Compact Design**: Minimal visual footprint with icon and title only
- **Responsive Grid**: Adapts to different screen sizes and container widths
- **Icon Integration**: Supports both image and SVG icons (24px standard)
- **Touch Optimized**: Appropriate touch targets for mobile interaction
- **Flexible Layout**: Configurable column counts and grid spacing
- **Hover Effects**: Interactive feedback with subtle visual changes

## Structure

The component consists of:
1. **Grid Container**: `.hoo-ql-grid` - Main grid layout container
2. **Grid Items**: `{{> molecules-ql-compact-item}}` - Individual compact quick links
3. **Responsive Columns**: CSS Grid with responsive breakpoints

## Data Structure

```json
{
    "quick-links": [
        {
            "href": "/documents",
            "title": "Documents",
            "qlimg": {
                "src": "/icons/documents.svg",
                "alt": "Documents icon"
            }
        },
        {
            "href": "/calendar",
            "title": "Calendar",
            "qlimg": {
                "src": "/icons/calendar.svg", 
                "alt": "Calendar icon"
            }
        },
        {
            "href": "/contacts",
            "title": "Contacts",
            "qlimg": {
                "src": "/icons/contacts.svg",
                "alt": "Contacts icon"
            }
        }
    ]
}
```

## CSS Classes

- `.hoo-ql-grid`: Main grid container
- `.hoo-ql-grid.col-2`: Two-column grid layout
- `.hoo-ql-grid.col-3`: Three-column grid layout
- `.hoo-ql-grid.col-4`: Four-column grid layout
- `.hoo-ql-grid.col-6`: Six-column grid layout
- `.hoo-qlcompact`: Individual compact item styling

## Styling

### Grid Layout
- **Default**: Auto-responsive columns based on content
- **Grid Gap**: 16px spacing between items
- **Min Column Width**: 120px minimum item width
- **Max Columns**: 6 columns maximum on large screens

### Visual Design
- **Item Background**: Transparent with hover state
- **Border**: 1px solid `#d1d1d1` with 4px border radius
- **Padding**: 16px internal spacing
- **Height**: Minimal height based on content
- **Alignment**: Centered icon and text

### Responsive Behavior
- **Large Screens**: Up to 6 columns
- **Medium Screens**: 3-4 columns
- **Small Screens**: 2 columns
- **Mobile**: Single column stack

## Use Cases

### Dashboard Navigation
```handlebars
<section class="dashboard-quicklinks">
    <h2>Quick Access</h2>
    <div class="hoo-ql-grid col-4">
        <!-- Email, Calendar, Documents, Tasks -->
    </div>
</section>
```

### Application Launcher
```handlebars
<div class="app-launcher">
    <h3>Applications</h3>
    <div class="hoo-ql-grid col-6">
        <!-- Various app shortcuts -->
    </div>
</div>
```

### Category Navigation
```handlebars
<nav class="category-nav">
    <div class="hoo-ql-grid col-3">
        <!-- Product categories or service areas -->
    </div>
</nav>
```

### Portal Homepage
```handlebars
<section class="portal-sections">
    <h2>Portal Sections</h2>
    <div class="hoo-ql-grid">
        <!-- Auto-responsive grid of portal sections -->
    </div>
</section>
```

## Accessibility

- **Semantic Structure**: Uses proper link elements within list structure
- **Keyboard Navigation**: Full keyboard navigation support
- **Screen Reader Support**: Clear link text and icon descriptions
- **Focus Management**: Visible focus indicators for keyboard users
- **Touch Targets**: Minimum 44px touch target size
- **Color Contrast**: Meets WCAG AA contrast requirements

## Performance

- **Lightweight**: Minimal CSS and HTML structure
- **CSS Grid**: Modern, efficient layout with native browser support
- **No JavaScript**: Pure CSS implementation for optimal performance
- **Lazy Loading**: Icons can be lazy-loaded for better initial page load

## Grid Variations

### Column Count Classes
- `.col-2`: Two columns on all screen sizes
- `.col-3`: Three columns on medium+ screens
- `.col-4`: Four columns on large screens
- `.col-6`: Six columns on extra large screens

### Responsive Breakpoints
- **Mobile**: 1 column (< 576px)
- **Small**: 2 columns (576px - 768px)
- **Medium**: 3-4 columns (768px - 992px)
- **Large**: 4-6 columns (992px+)

## Content Guidelines

### Icon Selection
- Use consistent icon style (outline, filled, or mixed)
- Ensure icons are recognizable at 24px size
- Provide meaningful alt text for accessibility
- Consider brand consistency and visual hierarchy

### Title Text
- Keep titles concise (1-2 words preferred)
- Use clear, descriptive language
- Avoid technical jargon or abbreviations
- Test with different text lengths for layout stability

## Browser Support

- **Modern Browsers**: Full CSS Grid support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Flexbox fallback for older browsers
- **Mobile Browsers**: Optimized for mobile and tablet interfaces
- **Progressive Enhancement**: Graceful degradation on older browsers

## SCSS Import

## Integration Examples

### With Section Header
```handlebars
<section class="quick-access-section">
    <header class="section-header">
        <h2>Quick Access</h2>
        <p>Access your most used tools and resources</p>
    </header>
    {{> organism-quick-links-compact-grid}}
</section>
```

### Within Card Layout
```handlebars
<div class="dashboard-card">
    <div class="card-header">
        <h3>Navigation</h3>
    </div>
    <div class="card-body">
        {{> organism-quick-links-compact-grid}}
    </div>
</div>
```