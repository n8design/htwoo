---
title: "Quick Link Grid with 6 columns"
description: "A 6-column variant of the Quick Links Grid that provides a balanced layout between content density and visual clarity. This configuration offers optimal balance for standard dashboard layouts, applica"
type: "components"
layout: "single"
patternId: "organism-quick-links-grid-quick-links-grid~6c"
category: "organism"
subcategory: "quick-links-grid"
seoTitle: "Organism - Quick Links Grid Quick Links Grid~6c"
seoDescription: "Quick Links Grid Quick Links Grid~6c Organism"
weight: 999
markup: |
  
---

# Quick Links Grid - 6 Columns

A 6-column variant of the Quick Links Grid that provides a balanced layout between content density and visual clarity. This configuration offers optimal balance for standard dashboard layouts, application directories, and comprehensive navigation interfaces.

## Overview

The 6-column grid strikes the perfect balance between displaying sufficient content and maintaining visual clarity. It's the most versatile configuration, suitable for a wide range of applications from business dashboards to content discovery interfaces.

## Features

- **Balanced Layout**: Optimal balance between content density and usability
- **Versatile Content**: Supports all quick link molecular components effectively
- **Standard Configuration**: Most commonly used grid layout for business applications
- **Responsive Design**: Adapts to 5 columns on tablets, 3 columns on mobile

## Grid Behavior

### Desktop (> 1024px)
- **CSS Grid**: 5 columns for tile layouts, 10 columns base grid
- **Item Spanning**: Lists/compact items span 4 columns, buttons span 4 columns
- **Content Density**: Moderate density with good visual breathing room

### Tablet (768px - 1024px)
- **CSS Grid**: Maintains 5 columns with proportional adjustments
- **Readability**: Preserved spacing for comfortable interaction
- **Touch Optimization**: Maintained accessibility standards

### Mobile (< 768px)
- **CSS Grid**: 3 columns for balanced mobile experience
- **Content Priority**: Essential navigation remains prominent
- **Performance**: Optimized for mobile rendering

## Use Cases

- **Business Dashboards**: Standard corporate dashboard layouts
- **Application Directories**: Comprehensive application catalogs
- **Department Portals**: Departmental navigation and resource centers
- **Content Discovery**: Resource libraries and documentation hubs

## Supported Content Types

- **Standard Tiles** (`molecules-ql-tiles`) - Primary recommendation
- **Medium Tiles** (`molecules-ql-tiles-medium`) - Enhanced visual impact
- **List Items** (`molecules-ql-list-item`) - Detailed navigation
- **Compact Items** (`molecules-ql-compact-item`) - Higher density
- **Button Variants** - All button styles work effectively

## Configuration

```json
{
    "col-count": "CanvasSection-xl6"
}
```