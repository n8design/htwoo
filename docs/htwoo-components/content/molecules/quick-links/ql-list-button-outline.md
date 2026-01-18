---
title: "Quick Link Button - Outline"
description: "The Outline Button style quick link provides a clean, button-like interface with a subtle border for quick access to resources and applications. This variant offers a professional appearance while mai"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-button-outline"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Button Outline"
seoDescription: "Quick Links Ql List Button Outline Molecules"
weight: 31
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
      &lt;article class=&quot;hoo-qlbtn&quot;&gt;
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

# Quick Link Button - Outline

The Outline Button style quick link provides a clean, button-like interface with a subtle border for quick access to resources and applications. This variant offers a professional appearance while maintaining clear visual hierarchy and interactive feedback.

## Overview

The Outline Button quick link combines the familiar button interface pattern with the functionality of quick links. The outline styling provides visual definition without the visual weight of filled buttons, making it suitable for layouts requiring subtle emphasis while maintaining clear actionability.

## Features

### Visual Design
- **Outline Border**: Subtle 1px border using theme colors for definition
- **Clean Background**: Transparent or minimal background for visual lightness
- **Icon Integration**: 24px icons with consistent spacing and alignment
- **Typography**: Clear, readable text with proper hierarchy
- **Hover States**: Interactive feedback with border and background changes

### Layout Options
- **Horizontal Layout**: Icon and text arranged side-by-side
- **Flexible Width**: Adapts to content and container constraints
- **Consistent Spacing**: Uniform padding and margins throughout
- **Grid Compatible**: Works seamlessly within grid layouts

### Interactive Features
- **Click Target**: Full button area serves as clickable region
- **Keyboard Support**: Full keyboard navigation and activation
- **Focus Indicators**: Clear focus states for accessibility
- **Touch Friendly**: Optimized touch targets for mobile devices

## Structure

The component consists of:
1. **Container**: `.hoo-qlbutton` - Main button container
2. **Icon Area**: `.hoo-ql-media` - Icon display area
3. **Text Area**: `.hoo-qlinfo` - Text content container
4. **Title**: `.hoo-qltitle` - Primary link text

## Variants

### Standard Outline
- Basic outline button with standard sizing
- Most common use case for general navigation

### Center Aligned
- Text centered within button area
- Useful for uniform grid layouts

### One Line
- Single line text with truncation
- Compact variant for space-constrained layouts

## Use Cases

- **Action-Oriented Links**: Resources that require clear call-to-action
- **Grid Layouts**: Consistent appearance within organized grids
- **Secondary Navigation**: Important but not primary navigation elements
- **Form Integration**: Links within form-like interfaces
- **Dashboard Widgets**: Quick access within dashboard layouts

## Accessibility

- **Button Semantics**: Proper button role and keyboard support
- **ARIA Labels**: Descriptive labels for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: Sufficient contrast for text and border elements
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility

## Theme Integration

The outline button integrates with HTWOO themes:
- **Border Colors**: Uses theme accent colors for borders
- **Text Colors**: Inherits theme text colors for consistency
- **Hover States**: Theme-aware hover and focus states
- **High Contrast**: Supports high contrast mode requirements

## SCSS Import