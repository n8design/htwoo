---
title: "Quick Link Button - Fill One Line"
description: "The One Line Fill Button quick link provides a compact, single-line interface with solid background styling for quick access to resources. This variant maximizes space efficiency while maintaining str"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-button-fill-oneline"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Button Fill Oneline"
seoDescription: "Quick Links Ql List Button Fill Oneline Molecules"
weight: 30
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
      &lt;article class=&quot;hoo-qlbtn filled one-line&quot;&gt;
          &lt;figure class=&quot;hoo-ql-media&quot;&gt;
              &lt;img src=&quot;../../images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
          &lt;/figure&gt;
          &lt;div class=&quot;hoo-qlinfo&quot;&gt;
              &lt;div class=&quot;hoo-qltitle&quot;&gt;
                  This is a really long title to get everything working lorem ipsum dolor sit amet
              &lt;/div&gt;
              &lt;div class=&quot;hoo-qldesc&quot;&gt;
                  Quick-links description lorem ipsum dolor sit amet
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/article&gt;
  &lt;/a&gt;
  
---

# Quick Link Button Fill - One Line

The One Line Fill Button quick link provides a compact, single-line interface with solid background styling for quick access to resources. This variant maximizes space efficiency while maintaining strong visual presence and clear actionability.

## Overview

The One Line Fill Button combines the visual prominence of filled buttons with space-efficient single-line text display. This variant is ideal for dense layouts, toolbars, and interfaces requiring compact yet visually distinct quick access elements.

## Features

### Compact Design
- **Single Line Text**: Title truncated with ellipsis for long names
- **Fixed Height**: Consistent vertical dimensions for grid alignment
- **Space Efficient**: Maximized information density
- **Clean Truncation**: Elegant text overflow handling

### Visual Styling
- **Solid Background**: Filled button style with theme colors
- **Icon Integration**: 24px icons with optimized spacing
- **Typography**: Single line title with proper font sizing
- **Interactive States**: Hover and focus feedback with color changes

### Layout Features
- **Grid Compatible**: Designed for consistent grid arrangements
- **Flexible Width**: Adapts to container and content constraints
- **Uniform Height**: Consistent button height across components
- **Touch Optimized**: Appropriate touch targets for mobile use

## Structure

The component consists of:
1. **Container**: `.hoo-qlbutton.hoo-qlbutton-fill` - Main filled button container
2. **Icon Area**: `.hoo-ql-media` - Icon display area
3. **Text Container**: `.hoo-qlinfo` - Single-line text wrapper
4. **Title**: `.hoo-qltitle` - Truncated primary text

## Styling Features

### Text Handling
- **Ellipsis Truncation**: Graceful handling of long titles
- **Single Line Display**: `white-space: nowrap` prevents wrapping
- **Consistent Height**: Fixed line height for uniform appearance
- **Readable Typography**: Optimized font size and weight

### Background Treatment
- **Solid Fill**: Strong background color for visual prominence
- **Theme Integration**: Uses primary or accent theme colors
- **Hover Enhancement**: Darker/lighter background on interaction
- **Focus States**: Clear keyboard focus indicators

## Use Cases

- **Compact Toolbars**: Space-constrained navigation areas
- **Dense Grids**: High-density layout requirements
- **Mobile Interfaces**: Touch-optimized compact navigation
- **Dashboard Panels**: Quick actions within limited space
- **Sidebar Navigation**: Compact vertical navigation menus

## Responsive Behavior

- **Mobile Optimization**: Touch-friendly sizing and spacing
- **Container Adaptation**: Flexes to available space
- **Grid Integration**: Maintains consistent grid proportions
- **Text Scaling**: Responsive text sizing based on container

## Accessibility

- **Button Semantics**: Proper button role and behavior
- **Keyboard Navigation**: Full keyboard support and focus management
- **Screen Reader Support**: Descriptive text and ARIA labels
- **Color Contrast**: High contrast for text on background
- **Touch Accessibility**: Minimum touch target requirements

## Theme Integration

- **Color Schemes**: Adapts to light, dark, and high contrast themes
- **Brand Colors**: Uses organization's primary and accent colors
- **State Colors**: Theme-appropriate hover and focus states
- **Consistency**: Maintains visual harmony with other components

## Performance

- **Efficient Rendering**: Optimized CSS for smooth interactions
- **Minimal Reflow**: Stable dimensions prevent layout shifts
- **Smooth Transitions**: Hardware-accelerated hover effects
- **Icon Optimization**: Efficient icon loading and caching

## SCSS Import