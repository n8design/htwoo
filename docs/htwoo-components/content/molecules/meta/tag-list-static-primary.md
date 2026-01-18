---
title: "Primary Static Tag List"
description: "A list of non-interactive primary-styled tags for displaying emphasized metadata and important labels."
type: "components"
layout: "single"
patternId: "molecules-meta-tag-list-static-primary"
category: "molecules"
subcategory: "meta"
seoTitle: "Molecules - Meta Tag List Static Primary"
seoDescription: "Meta Tag List Static Primary Molecules"
weight: 11
markup: |
  &lt;ul class=&quot;hoo-meta-list&quot;&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Fluent&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Design&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;at&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;its&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;best&lt;/span&gt;
  &lt;/span&gt;&lt;/li&gt;
  &lt;/ul&gt;
---

# Primary Static Tag List

A list of non-interactive primary-styled tags for displaying emphasized metadata and important labels.

## Overview

The Primary Static Tag List provides a structured way to display multiple informational tags with primary theme styling as a cohesive group. It's ideal for highlighting important metadata, featured categories, priority labels, or significant statuses that need visual emphasis.

## Features

- Non-interactive display-only tags with primary theme styling
- Emphasized visual appearance using brand colors
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- Semantic HTML structure with proper list elements
- High-contrast styling for important information
- Accessible markup with proper semantic elements

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag-primary` - Primary tag styling with brand colors and emphasis
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Primary Tag Styling

- **Background**: Theme-700 (primary brand color)
- **Text color**: White (neutral-000)
- **Border radius**: 0.75em for rounded appearance
- **Height**: 1.5em for consistent sizing
- **Typography**: 1rem base with 0.875em label text

### Emphasis and Contrast

- **High contrast**: White text on brand background for maximum readability
- **Visual hierarchy**: Stands out from standard neutral tags
- **Brand consistency**: Uses primary theme colors for emphasis

## Usage Guidelines

Use primary static tag lists when:

- Highlighting featured or important content
- Displaying priority status information
- Indicating special categories or classifications
- Emphasizing key metadata that requires attention
- Showing badges or awards that need visual prominence
- Creating visual hierarchy among different tag types

### Content Guidelines

- Reserve for truly important or special information
- Use sparingly to maintain impact and hierarchy
- Consider combining with standard tags for contrast
- Keep labels concise and impactful
- Use consistent terminology for similar priority levels

### Visual Hierarchy

When combining with other tag types:

```html
<ul class="hoo-meta-list">
  <!-- Primary tags for important information -->
  <li>
    <span class="hoo-mtag-primary">
      <span class="hoo-mtag-lbl">Featured</span>
    </span>
  </li>
  
  <!-- Standard tags for regular information -->
  <li>
    <span class="hoo-mtag">
      <span class="hoo-mtag-lbl">Technology</span>
    </span>
  </li>
  <li>
    <span class="hoo-mtag">
      <span class="hoo-mtag-lbl">Design</span>
    </span>
  </li>
</ul>
```

## Layout Behavior

### Responsive Wrapping

The primary static tag list automatically wraps to new lines when:

- Container width becomes too narrow
- Mixed primary and standard tags require space
- Content is viewed on smaller screens

### Spacing and Alignment

- Maintains consistent gaps with other tag types
- Provides visual prominence without disrupting layout
- Aligns properly with standard tag lists

## SCSS

## Accessibility

- Uses semantic `<span>` elements for non-interactive content
- Includes proper `<ul>` and `<li>` list structure
- Maintains excellent color contrast (white on brand color)
- Supports screen reader navigation through list structure
- Provides clear visual hierarchy for sighted users
- No focus management needed due to non-interactive nature
- Clear, descriptive text content for each tag

## Brand and Theming

### Color Usage

- Leverages primary brand color for consistency
- Maintains high contrast for accessibility
- Integrates with overall design system
- Supports theme customization via CSS custom properties

### Theme Integration

## CSS Classes

* `.hoo-meta-list` - Container for the list of tags

## Customization

Primary static tag lists maintain the primary theme color but can be customized:
* Adjust spacing for different density requirements
* Combine with icons for enhanced visual meaning
* Use with tooltips for additional information

## Accessibility

* Properly structured lists with `<ul>` and `<li>` elements
* Since static tags are not interactive, they don't receive focus
* For tags representing important metadata, consider adding appropriate `aria-label` to provide context
* Ensure sufficient color contrast with the primary theme colors
* If tags represent status information, consider using appropriate ARIA live regions