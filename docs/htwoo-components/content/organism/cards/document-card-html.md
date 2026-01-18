---
title: "Document Card HTML"
description: "The Document Card HTML variant supports rich HTML content display within the card structure, enabling more complex content layouts while maintaining the consistent visual design and adaptive behavior "
type: "components"
layout: "single"
patternId: "organism-cards-document-card-html"
category: "organism"
subcategory: "cards"
seoTitle: "Organism - Cards Document Card Html"
seoDescription: "Cards Document Card Html Organism"
weight: 12
hasVariants: false
markup: |
  &lt;article class=&quot;hoo-doccard&quot;&gt;
      &lt;div class=&quot;hoo-cardhtml&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-cardlocation&quot;&gt;Marketing&lt;/div&gt;
      &lt;div class=&quot;hoo-cardtitle&quot;&gt;
      &lt;/div&gt;
      &lt;footer class=&quot;hoo-cardfooter&quot;&gt;
          &lt;div class=&quot;hoo-avatar-32&quot;&gt;
              &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;32&quot; width=&quot;32&quot; loading=&quot;lazy&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;hoo-cardfooter-data&quot;&gt;
              &lt;div class=&quot;hoo-cardfooter-name&quot;&gt;Man on the moon&lt;/div&gt;
              &lt;div class=&quot;hoo-cardfooter-modified&quot;&gt;Created a seconds ago&lt;/div&gt;
          &lt;/div&gt;
      &lt;/footer&gt;
  &lt;/article&gt;
---

# Document Card - HTML

The Document Card HTML variant supports rich HTML content display within the card structure, enabling more complex content layouts while maintaining the consistent visual design and adaptive behavior of the standard Document Card system.

## Overview

This variant extends the Document Card to support rich HTML content, allowing for formatted text, embedded media, and complex layouts within the card structure. It maintains the same responsive behavior and accessibility features while enabling enhanced content presentation.

## Features

- **Rich HTML Content**: Support for formatted HTML content and embedded elements
- **Adaptive Layout**: Maintains flexible width and container adaptation  
- **Enhanced Content**: Complex layouts with mixed media and formatted text
- **Standard Structure**: Builds on the same molecular component foundation
- **Theme Integration**: Inherits HTWOO theme styling and color schemes

## Usage

Ideal for scenarios requiring:
- Formatted text content with HTML markup
- Embedded media within card content
- Complex content layouts beyond simple text
- Rich content previews and presentations

## Structure

Extends the standard Document Card structure to accommodate HTML content:
1. **Card Image**: Visual preview or thumbnail (standard)
2. **Card Location**: Source or category information (standard)
3. **Card Title**: Document name or headline (standard)
4. **Card Content**: Rich HTML content area (enhanced)
5. **Card Footer**: Author, date, and metadata (standard)

## Content Guidelines

### HTML Content
- Use semantic HTML elements for proper structure
- Maintain consistent typography hierarchy
- Ensure accessibility with proper ARIA labels
- Test content with various lengths and formats

### Media Integration
- Optimize images and media for card dimensions
- Provide appropriate alt text for accessibility
- Consider loading performance with rich content
- Maintain responsive behavior across screen sizes

## SCSS Import