---
title: PnP Search Grid - 8 Columns
---

# PnP Search Grid - 8 Columns

An 8-column variant of the PnP Search Grid designed for high-density content presentation. This configuration maximizes information display while maintaining usability, making it ideal for wide containers and content-rich interfaces.

## Overview

The 8-column grid provides high content density without overwhelming users. Each grid item spans 2 columns, resulting in 4 visible items per row on desktop, offering efficient space utilization for large displays and comprehensive navigation scenarios.

## Features

- **High Density**: 8-column grid with 4 items per row
- **Efficient Space Use**: Maximizes content display in available space
- **Large Display Optimized**: Designed for wide screens and containers
- **Canvas Integration**: Uses `CanvasSection-xl8` class for responsive behavior

## Grid Behavior

### Desktop (> 640px)
- **Grid Template**: `repeat(8, 1fr)` - 8 equal columns
- **Items Per Row**: 4 (each item spans 2 columns)
- **Gap**: 1rem vertical, 2rem horizontal

### Mobile (<= 640px)
- **Grid Template**: `repeat(2, 1fr)` - 2 equal columns  
- **Items Per Row**: 2 (each item spans 1 column)
- **Gap**: 1rem both directions

## Use Cases

- **Wide Dashboards**: Main content areas with maximum information density
- **Search Results**: Displaying comprehensive search result sets
- **Large Displays**: Interfaces optimized for wide monitors
- **Content Discovery**: Browse interfaces requiring high item visibility

## Configuration

The 8-column variant uses the JSON configuration with canvas section class:

```json
{
    "col-count": "CanvasSection-xl8"
}
```
