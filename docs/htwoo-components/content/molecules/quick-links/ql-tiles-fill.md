---
title: "Quick Link Tiles - Fill"
description: "Flexible tile variant that adapts its size to fill available container space while maintaining the core tile design principles. This variant provides maximum layout flexibility for responsive designs."
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-tiles-fill"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql Tiles Fill"
seoDescription: "Quick Links Ql Tiles Fill Molecules"
weight: 22
hasVariants: false
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
  &lt;article class=&quot;hoo-qltiles img-fill&quot;&gt;
      &lt;figure class=&quot;hoo-ql-media&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
      &lt;/figure&gt;
      &lt;div class=&quot;hoo-qlinfo&quot;&gt;
          &lt;div class=&quot;hoo-qltitle&quot;&gt;This is a really long title to get everything working lorem ipsum dolor sit amet&lt;/div&gt;
      &lt;/div&gt;
  &lt;/article&gt;&lt;/a&gt;
---

# Quick Link Tiles - Fill

Flexible tile variant that adapts its size to fill available container space while maintaining the core tile design principles. This variant provides maximum layout flexibility for responsive designs.

## Overview

Fill tiles automatically adjust their dimensions to utilize available container space efficiently. They maintain the square aspect ratio and theme-colored styling while providing responsive behavior that adapts to various layout contexts.

## Features

- **Flexible Sizing**: Adapts to container constraints
- **Container Responsive**: Responds to parent container dimensions
- **Aspect Ratio Maintained**: Preserves square format across sizes
- **Layout Adaptable**: Works in various grid configurations
- **Dynamic Icons**: Icon size adjusts proportionally
- **Theme Integration**: Full theme color support

## Size Behavior

- **Container Driven**: Size determined by parent container
- **Minimum/Maximum**: Respects minimum and maximum size constraints
- **Proportional Scaling**: Icons and text scale appropriately
- **Grid Flexible**: Adapts to grid column sizing
- **Responsive**: Maintains usability across size ranges

## CSS Classes

- `.hoo-qltiles`: Main tile container
- `.fill`: Fill behavior modifier (if applicable)
- Standard tile classes for styling

## Use Cases

- **Responsive Layouts**: Layouts that need to adapt to various screen sizes
- **Dynamic Grids**: Grids with changing column counts
- **Flexible Dashboards**: Dashboards with resizable areas
- **Container-Based Design**: Layouts driven by container queries

## Layout Considerations

- **Container Size**: Ensure parent containers provide appropriate constraints
- **Aspect Ratio**: Verify square aspect ratio is maintained across sizes
- **Content Scaling**: Test text and icon readability at various sizes
- **Responsive Breakpoints**: Plan for different size ranges

## SCSS Files

**Quick Link Tile Styles:**
- `lib/sass/02-molecules/quicklinks/quicklinks-tiles`