---
title: "PnP Search Grid - 4 Columns"
description: "A 4-column variant of the PnP Search Grid optimized for narrow containers and focused content presentation. This configuration provides a compact, organized layout suitable for sidebars, small dashboa"
type: "components"
layout: "single"
patternId: "organism-pnp-search-grid-pnp-search-grid~4c"
category: "organism"
subcategory: "pnp-search-grid"
seoTitle: "Organism - Pnp Search Grid Pnp Search Grid~4c"
seoDescription: "Pnp Search Grid Pnp Search Grid~4c Organism"
weight: 999
markup: |
  
---

# PnP Search Grid - 4 Columns

A 4-column variant of the PnP Search Grid optimized for narrow containers and focused content presentation. This configuration provides a compact, organized layout suitable for sidebars, small dashboard sections, and mobile-first interfaces.

## Overview

The 4-column grid maximizes content visibility while maintaining usability in constrained spaces. Each grid item spans 2 columns, resulting in 2 visible items per row on desktop and falling back to a single column on mobile devices.

## Features

- **Compact Layout**: 4-column grid with 2 items per row
- **Mobile Responsive**: Single column layout on mobile devices
- **Optimized Spacing**: Balanced gaps for readability
- **Canvas Integration**: Uses `CanvasSection-xl4` class for responsive behavior

## Grid Behavior

### Desktop (> 640px)
- **Grid Template**: `repeat(4, 1fr)` - 4 equal columns
- **Items Per Row**: 2 (each item spans 2 columns)
- **Gap**: 1rem vertical, 2rem horizontal

### Mobile (<= 640px)  
- **Grid Template**: `repeat(2, 1fr)` - 2 equal columns
- **Items Per Row**: 2 (each item spans 1 column)
- **Gap**: 1rem both directions

## Use Cases

- **Sidebar Navigation**: Compact navigation in sidebar layouts
- **Mobile Dashboards**: Primary interface for mobile applications
- **Focused Content**: When fewer options enhance user decision-making
- **Narrow Containers**: Content areas with width constraints

## Configuration

The 4-column variant uses the JSON configuration with canvas section class:

```json
{
    "col-count": "CanvasSection-xl4"
}
```