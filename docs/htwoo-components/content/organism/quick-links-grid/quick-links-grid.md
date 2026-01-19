---
title: "Quick Links Grid"
description: "A comprehensive demonstration component showcasing all available quick links grid variations. Provides examples and documentation for compact, list, button, and tile-style quick links in responsive gr"
type: "components"
layout: "single"
patternId: "organism-quick-links-grid-quick-links-grid"
category: "organism"
subcategory: "quick-links-grid"
seoTitle: "Organism - Quick Links Grid Quick Links Grid"
seoDescription: "Quick Links Grid Quick Links Grid Organism"
weight: 10
hasVariants: false
markup: |
  
---

# Quick Links Grid

A comprehensive demonstration component showcasing all available quick links grid variations. Provides examples and documentation for compact, list, button, and tile-style quick links in responsive grid layouts.

## Overview

The quick links grid component serves as a demonstration and reference for all available quick links grid variations. It showcases different styling approaches including compact items, list format, button styles (outline, no-outline, filled), grid layout, and tile variations with different image sizes.

## Features

- **Multiple Variations**: Demonstrates all available quick links grid styles
- **Responsive Grid**: Configurable column counts and responsive breakpoints
- **Style Comparison**: Side-by-side comparison of different approaches
- **Documentation**: Inline documentation with CSS classes and variants
- **Interactive Examples**: Live demonstrations of each grid type
- **Flexible Layout**: Supports different column configurations

## Available Variations

### 1. Quick Links Compact Items
- **Control Class**: `.hoo-qlcompact`
- **Features**: Icon and title only, minimal visual footprint
- **Use Case**: Space-efficient navigation in dashboards

### 2. Quick Links List Items
- **Control Class**: `.hoo-qllist`
- **Features**: Icon, title, and optional description
- **Use Case**: Informational navigation with context

### 3. Quick Links Button - Outline
- **Control Class**: `.hoo-qlbtn`
- **Variants**: `.center`, `.one-line`
- **Features**: Outlined button styling with hover effects
- **Use Case**: Secondary navigation and tools

### 4. Quick Links Button - No Outline
- **Control Class**: `.hoo-qlbtn .no-outline`
- **Variants**: `.center`, `.one-line`
- **Features**: Clean button styling without borders
- **Use Case**: Subtle navigation options

### 5. Quick Links Button - Filled
- **Control Class**: `.hoo-qlbtn .filled`
- **Variants**: `.center`, `.one-line`
- **Features**: Filled background for high visibility
- **Use Case**: Primary actions and call-to-actions

### 6. Quick Links Grid
- **Control Class**: `.hoo-qlgrid`
- **Features**: Standard grid layout
- **Use Case**: Basic grid organization

### 7. Quick Links Tiles
- **Control Class**: `.hoo-qltiles`
- **Variants**: `default`, `.img-m`, `.img-l`, `.img-xl`
- **Features**: Image-based tiles with different sizes
- **Use Case**: Visual navigation with large images

## Data Structure

```json
{
    "col-count": "col-4",
    "quick-links": [
        {
            "href": "/action1",
            "title": "First Action",
            "description": "Description for first action",
            "qlimg": {
                "src": "/icons/action1.svg",
                "alt": "Action 1 icon"
            }
        }
    ]
}
```

## CSS Classes

### Grid Container Classes
- `.col-2`: Two-column grid layout
- `.col-3`: Three-column grid layout  
- `.col-4`: Four-column grid layout
- `.col-6`: Six-column grid layout

### Quick Links Item Classes
- `.hoo-qlcompact`: Compact item styling
- `.hoo-qllist`: List item styling
- `.hoo-qlbtn`: Button base styling
- `.hoo-qlbtn.outline`: Outlined button (default)
- `.hoo-qlbtn.no-outline`: Button without outline
- `.hoo-qlbtn.filled`: Filled button styling
- `.hoo-qlgrid`: Standard grid item
- `.hoo-qltiles`: Tile-based styling

### Modifier Classes
- `.center`: Centered content alignment
- `.one-line`: Single-line title truncation
- `.img-m`: Medium image tiles
- `.img-l`: Large image tiles
- `.img-xl`: Extra large image tiles

## Use Cases

### Style Selection Guide

#### Choose **Compact** when:
- Space is limited (dashboards, sidebars)
- Simple navigation without descriptions needed
- Maximum density is required

#### Choose **List** when:
- Context and descriptions are important
- Users need additional information to make decisions
- Professional, informational presentation is desired

#### Choose **Button Outline** when:
- Secondary navigation or tools
- Professional appearance with subtle prominence
- Hover interaction feedback is desired

#### Choose **Button Filled** when:
- Primary actions or call-to-actions
- High visibility and prominence is needed
- Clear action-oriented navigation

#### Choose **Tiles** when:
- Visual content is primary (images, screenshots)
- App launchers or visual categories
- Large, touch-friendly targets are needed

## Responsive Behavior

### Column Counts by Screen Size
- **Mobile**: 1 column (< 576px)
- **Small**: 2 columns (576px - 768px)
- **Medium**: 3 columns (768px - 992px)
- **Large**: 4-6 columns (992px+)

### Breakpoint Considerations
- Compact items can support more columns
- List items need more horizontal space
- Tiles require the most space per item

## Accessibility

- **Keyboard Navigation**: All variations support full keyboard navigation
- **Screen Reader Support**: Proper semantic structure and descriptions
- **Focus Management**: Clear focus indicators across all variations
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility
- **Color Contrast**: Meets WCAG AA standards for all variations

## Performance

- **Modular Loading**: Load only the variations you need
- **CSS Grid**: Efficient layout with native browser support
- **No JavaScript**: Pure CSS implementation for all variations
- **Icon Optimization**: Support for SVG icons and lazy loading

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **CSS Grid**: Native grid layout support in all modern browsers
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Mobile Browsers**: Optimized for mobile and tablet interfaces

### Individual Grid Components
- `organism-quick-links-compact-grid`: Compact items grid
- `organism-quick-links-list-grid`: List items grid  
- `organism-quick-links-button-outline-grid`: Outline button grid
- `organism-quick-links-button-no-outline-grid`: No outline button grid
- `organism-quick-links-button-filled-grid`: Filled button grid
- `organism-quick-links-tiles-grid`: Tiles grid

### Molecule Components
- `molecules-ql-compact-item`: Individual compact item
- `molecules-ql-list-item`: Individual list item
- `molecules-ql-button-*`: Various button components
- `molecules-ql-tiles-*`: Various tile components

## SCSS Import

## Customization

### Grid Configuration

### Theme Customization

## Integration Guidelines

### Choosing the Right Variation
1. **Analyze your content**: Icon-only, or with descriptions?
2. **Consider your space**: How much horizontal/vertical space is available?
3. **Define the hierarchy**: Primary actions vs. secondary navigation?
4. **Test with users**: Which style best supports your user's mental model?

### Mixing Variations
- Use consistent variations within a single section
- Different sections can use different variations
- Maintain visual hierarchy between sections
- Ensure consistent interaction patterns