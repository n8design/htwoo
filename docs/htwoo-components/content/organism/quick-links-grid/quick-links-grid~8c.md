---
title: "Quick Link Grid with 8 columns"
description: "An 8-column variant of the Quick Links Grid designed for higher content density while maintaining usability. This configuration is ideal for comprehensive navigation interfaces, utility collections, a"
type: "components"
layout: "single"
patternId: "organism-quick-links-grid-quick-links-grid~8c"
category: "organism"
subcategory: "quick-links-grid"
seoTitle: "Organism - Quick Links Grid Quick Links Grid~8c"
seoDescription: "Quick Links Grid Quick Links Grid~8c Organism"
weight: 999
markup: |
  
---

# Quick Links Grid - 8 Columns

An 8-column variant of the Quick Links Grid designed for higher content density while maintaining usability. This configuration is ideal for comprehensive navigation interfaces, utility collections, and scenarios where maximum information display is prioritized.

## Overview

The 8-column grid provides increased content density without sacrificing usability. It's designed for power users and interfaces where comprehensive access to multiple resources is essential, such as admin dashboards and tool collections.

## Features

- **Higher Density**: Increased content display within available space
- **Comprehensive Navigation**: Ideal for showing large collections of links
- **Efficient Space Use**: Maximizes utility of available screen real estate
- **Responsive Design**: Adapts to 5 columns on tablets, 3 columns on mobile

## Grid Behavior

### Desktop (> 1024px)
- **CSS Grid**: 5 columns for tile layouts, base 10-column grid
- **Item Spanning**: Buttons span 4 columns, maintaining proportional sizing
- **Content Density**: Higher density while preserving readability

### Tablet (768px - 1024px)
- **CSS Grid**: 5 columns maintained for consistent experience
- **Touch Interaction**: Adequate spacing for touch interfaces
- **Visual Hierarchy**: Clear organization maintained

### Mobile (< 768px)
- **CSS Grid**: 3 columns for optimal mobile navigation
- **Progressive Disclosure**: Priority content emphasized
- **Performance**: Efficient mobile rendering

## Use Cases

- **Admin Dashboards**: Comprehensive administrative interfaces
- **Tool Collections**: Large collections of utility applications
- **Resource Libraries**: Extensive resource and document libraries
- **Power User Interfaces**: Advanced navigation for experienced users

## Supported Content Types

- **Compact Items** (`molecules-ql-compact-item`) - Primary recommendation
- **List Items** (`molecules-ql-list-item`) - Detailed high-density navigation
- **Small Tiles** (`molecules-ql-tiles`) - Visual navigation with higher density
- **Button Variants** - Outline and no-outline buttons work well

## Configuration

```json
{
    "col-count": "CanvasSection-xl8"
}
```