---
title: "Quick Link List Grid"
description: "A grid layout specifically optimized for displaying quick link list items in organized, responsive arrangements. This component bridges molecular list items with grid-based layouts for structured cont"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-grid"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Grid"
seoDescription: "Quick Links Ql List Grid Molecules"
weight: 37
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
      &lt;article class=&quot;hoo-qlgrid&quot;&gt;
          &lt;figure class=&quot;hoo-ql-media&quot;&gt;
              &lt;img src=&quot;../../images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
          &lt;/figure&gt;
          &lt;div class=&quot;hoo-qlinfo&quot;&gt;
              &lt;div class=&quot;hoo-qltitle&quot;&gt;
                  This is a really long title to get everything working lorem ipsum dolor sit amet
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/article&gt;
  &lt;/a&gt;
  
---

# Quick Link List Grid

A grid layout specifically optimized for displaying quick link list items in organized, responsive arrangements. This component bridges molecular list items with grid-based layouts for structured content presentation.

## Overview

The list grid provides a structured way to display multiple quick link list items while maintaining their horizontal layout characteristics. It's designed for content-heavy interfaces where detailed information needs organized presentation.

## Features

- **List Item Integration**: Optimized for quick link list items
- **Responsive Grid**: Adapts to container width
- **Content Density**: Efficient space usage for information-rich layouts
- **Flexible Columns**: Supports various column configurations
- **Consistent Spacing**: Uniform gaps between list items
- **Overflow Handling**: Graceful content overflow management

## Structure

The grid contains quick link list items arranged in a responsive grid pattern:
1. **Grid Container**: Manages layout and spacing
2. **List Items**: Individual quick link list components
3. **Responsive Behavior**: Adapts column count to available space

## CSS Classes

- `.hoo-ql-list-grid`: Main grid container
- `.grid-row`: Row container for items
- `.grid-item`: Individual item wrapper

## Use Cases

- **Navigation Menus**: Organized navigation with descriptions
- **Resource Lists**: Documents, tools, and application collections
- **Directory Layouts**: Team members, contacts, or organizational units
- **Content Catalogs**: Structured content with metadata display

## Responsive Behavior

- **Large Screens**: Multiple columns with full content display
- **Medium Screens**: Reduced columns with maintained readability
- **Small Screens**: Single or dual column layout with responsive text

## SCSS Import