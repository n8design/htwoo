---
title: "Quick Link Button - Fill Center"
description: "A prominent button-style quick link with filled background, centered content, and multi-line title support. This variant provides maximum visual impact while allowing for more descriptive content."
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-button-fill-center"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Button Fill Center"
seoDescription: "Quick Links Ql List Button Fill Center Molecules"
weight: 35
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
      &lt;article class=&quot;hoo-qlbtn filled center&quot;&gt;
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

# Quick Link Button - Filled Center

A prominent button-style quick link with filled background, centered content, and multi-line title support. This variant provides maximum visual impact while allowing for more descriptive content.

## Overview

The filled center button offers the highest visual prominence in the quick link family, combining theme-colored backgrounds with centered layouts and flexible text display. It's perfect for primary actions and featured content.

## Features

- **Filled Background**: Theme-colored background with white text
- **Centered Layout**: Vertical stacking of icon and text content  
- **Multi-line Support**: Up to 2 lines for title with optional description
- **Visual Prominence**: Highest contrast and visual weight
- **Icon Integration**: Centered icon display above text
- **Hover Effects**: Interactive feedback with enhanced contrast

## Key Differences from One-Line Variant

- **Text Lines**: Supports 2-line titles vs single line
- **Description**: Optional description field available
- **Height**: Taller to accommodate additional content
- **Use Case**: More descriptive content vs compact actions

## CSS Classes

- `.hoo-qlbtn`: Main button container
- `.filled`: Filled background modifier
- `.center`: Centered layout modifier
- `.hoo-qltitle`: Title text (2-line clamp)
- `.hoo-qldesc`: Description text (2-line clamp)

## Use Cases

- **Primary Actions**: Main call-to-action buttons
- **Featured Content**: Highlighted applications or sections
- **Dashboard Cards**: Prominent dashboard elements
- **Hero Buttons**: Primary navigation in hero sections

## SCSS Import