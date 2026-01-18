---
title: Quick Link Grid with 4 columns
---

# Quick Links Grid - 4 Columns

A 4-column variant of the Quick Links Grid optimized for large tiles and featured applications. This configuration provides prominent display of key navigation items with maximum visual impact and is ideal for executive dashboards, featured application launchers, and primary navigation hubs.

## Overview

The 4-column grid maximizes visual impact by providing larger tiles and more prominent display of navigation items. It's designed for scenarios where fewer, more important items need to be showcased with maximum visibility and accessibility.

## Features

- **Large Tile Support**: Optimized for `molecules-ql-tiles-large` and prominent displays
- **Featured Content**: Ideal for highlighting key applications and important navigation
- **Responsive Design**: Adapts to 3 columns on tablets, 2 columns on mobile
- **High Impact**: Maximum visual prominence for critical navigation items

## Grid Behavior

### Desktop (> 1024px)
- **CSS Grid**: 3 columns for tile layouts
- **Item Spanning**: Buttons span 12 columns (full width), tiles span 1 column
- **Content Types**: Large tiles, featured buttons, grid items spanning 6 columns

### Tablet (768px - 1024px)  
- **CSS Grid**: Maintains 3 columns with adjusted spacing
- **Touch Optimization**: Larger touch targets maintained
- **Visual Hierarchy**: Preserved across breakpoints

### Mobile (< 768px)
- **CSS Grid**: 2 columns for optimal mobile display
- **Touch Targets**: Minimum 44px touch target compliance
- **Simplified Layout**: Focus on essential navigation

## Use Cases

- **Executive Dashboards**: High-level navigation for leadership interfaces
- **Featured Applications**: Showcasing primary business applications
- **Landing Pages**: Main navigation for company portals
- **Category Browsers**: Top-level category navigation with visual prominence

## Supported Content Types

- **Large Tiles** (`molecules-ql-tiles-large`) - Primary recommendation
- **Standard Tiles** (`molecules-ql-tiles`) - Alternative option
- **Filled Buttons** (`molecules-ql-list-button-fill-center`) - Action-oriented
- **Grid Items** (`molecules-ql-grid-item`) - Traditional grid format

## Configuration

```json
{
    "col-count": "CanvasSection-xl4"
}
```
