---
title: Quick Link Grid with 12 columns
---

# Quick Links Grid - 12 Columns

The 12-column variant of the Quick Links Grid provides maximum content density and comprehensive navigation capabilities. This configuration is designed for complex interfaces, extensive application catalogs, and scenarios requiring maximum information display within available space.

## Overview

The 12-column grid offers the highest content density while maintaining usability and accessibility standards. It's ideal for comprehensive dashboards, application directories, and interfaces where users need access to extensive collections of resources and tools.

## Features

- **Maximum Density**: Highest content display capability
- **Comprehensive Display**: Ideal for large collections of navigation items
- **Mixed Content Support**: Optimal for combining different quick link types
- **Responsive Design**: Intelligent scaling to 6 columns on tablets, 3 on mobile

## Grid Behavior

### Desktop (> 1024px)
- **CSS Grid**: 10 columns base grid for optimal tile distribution
- **Item Spanning**: Compact/list items span 2 columns, buttons span 3 columns
- **Content Organization**: Maximum items per row while maintaining readability

### Tablet (768px - 1024px)
- **CSS Grid**: 5 columns for balanced tablet experience
- **Content Prioritization**: Essential navigation remains accessible
- **Touch Optimization**: Maintained touch target compliance

### Mobile (< 768px)
- **CSS Grid**: 3 columns for optimal mobile navigation
- **Progressive Enhancement**: Core functionality preserved
- **Performance**: Efficient rendering on mobile devices

## Use Cases

- **Enterprise Application Catalogs**: Comprehensive application directories
- **Administrative Interfaces**: Complex admin dashboards with extensive tools
- **Resource Centers**: Large collections of documents, tools, and utilities
- **Navigation Hubs**: Central navigation for large organizations

## Mixed Content Example

```handlebars
<div class="CanvasSection-xl12">
    <div class="hoo-ql-grid">
        {{#each featuredApps}}
        {{> molecules-ql-tiles-medium quick-link=this}}
        {{/each}}
        {{#each standardApps}}
        {{> molecules-ql-tiles quick-link=this}}
        {{/each}}
        {{#each utilityLinks}}
        {{> molecules-ql-compact-item quick-link=this}}
        {{/each}}
        {{#each actionItems}}
        {{> molecules-ql-list-item quick-link=this}}
        {{/each}}
    </div>
</div>
```

## Supported Content Types

- **Compact Items** (`molecules-ql-compact-item`) - Primary recommendation for density
- **List Items** (`molecules-ql-list-item`) - Detailed navigation with descriptions
- **Small Tiles** (`molecules-ql-tiles`) - Visual elements with high density
- **Mixed Content** - Combination of multiple quick link types
- **Button Variants** - All button styles supported

## Configuration

```json
{
    "col-count": "CanvasSection-xl12",
    "bodyClass": "medium-margin"
}
```
