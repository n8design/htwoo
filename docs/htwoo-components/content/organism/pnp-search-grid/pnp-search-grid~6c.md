---
title: "PnP Search Grid - 6 Columns"
description: "A 6-column variant of the PnP Search Grid that provides a balanced layout between content density and readability. This configuration offers moderate information density suitable for medium-sized cont"
type: "components"
layout: "single"
patternId: "organism-pnp-search-grid-pnp-search-grid~6c"
category: "organism"
subcategory: "pnp-search-grid"
seoTitle: "Organism - Pnp Search Grid Pnp Search Grid~6c"
seoDescription: "Pnp Search Grid Pnp Search Grid~6c Organism"
weight: 999
markup: |
  
---

# PnP Search Grid - 6 Columns

A 6-column variant of the PnP Search Grid that provides a balanced layout between content density and readability. This configuration offers moderate information density suitable for medium-sized containers and standard dashboard layouts.

## Overview

The 6-column grid strikes an optimal balance between displaying sufficient content and maintaining visual clarity. Each grid item spans 2 columns, resulting in 3 visible items per row on desktop while maintaining responsive behavior for smaller screens.

## Features

- **Balanced Layout**: 6-column grid with 3 items per row
- **Moderate Density**: Good balance of content and whitespace
- **Responsive Design**: Adapts gracefully to different screen sizes
- **Canvas Integration**: Uses `CanvasSection-xl6` class for responsive behavior

## Grid Behavior

### Desktop (> 640px)
- **Grid Template**: `repeat(6, 1fr)` - 6 equal columns
- **Items Per Row**: 3 (each item spans 2 columns)
- **Gap**: 1rem vertical, 2rem horizontal

### Mobile (<= 640px)
- **Grid Template**: `repeat(2, 1fr)` - 2 equal columns
- **Items Per Row**: 2 (each item spans 1 column)
- **Gap**: 1rem both directions

## Use Cases

- **Standard Dashboards**: Main content areas with moderate information density
- **Category Navigation**: Browsing interfaces with balanced content presentation
- **Medium Containers**: Content areas with standard width constraints
- **Multi-purpose Interfaces**: Versatile layouts for various content types

## Configuration

The 6-column variant uses the JSON configuration with canvas section class:

```json
{
    "col-count": "CanvasSection-xl6"
}
```