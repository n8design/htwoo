---
title: "Primary Button Tag List"
description: "A list of clickable primary-styled button tags for emphasizing important actions and interactive elements."
type: "components"
layout: "single"
patternId: "molecules-meta-tag-list-button-primary"
category: "molecules"
subcategory: "meta"
seoTitle: "Molecules - Meta Tag List Button Primary"
seoDescription: "Meta Tag List Button Primary Molecules"
weight: 21
markup: |
  &lt;ul class=&quot;hoo-meta-list&quot;&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Fluent&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Design&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;at&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;its&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
      &lt;li&gt;&lt;button class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;best&lt;/span&gt;
  &lt;/button&gt;&lt;/li&gt;
  &lt;/ul&gt;
---

# Primary Button Tag List

A list of clickable primary-styled button tags for emphasizing important actions and interactive elements.

## Overview

The Primary Button Tag List provides a structured way to display multiple interactive button tags with primary theme styling as a cohesive group. It's ideal for highlighting important filter options, featured actions, or priority interactive elements that need visual emphasis.

## Features

- Interactive primary-styled button elements with click functionality
- Emphasized visual appearance using brand colors
- Inverse hover states for visual feedback
- Keyboard navigation support (Tab, Enter, Space)
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- Semantic HTML structure with proper button elements
- High-contrast styling for important actions

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag-primary` - Primary button styling with brand colors and hover states
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Default State

- **Background**: Theme-700 (primary brand color)
- **Text color**: White (neutral-000)
- **Border**: None
- **Cursor**: Pointer

### Hover State

- **Background**: Neutral-100 (light gray) - inverse of standard tags
- **Text color**: Neutral-700 (dark gray)
- **Transition**: Smooth color transition

### Focus State

- **Outline**: Browser default focus indicator
- **High contrast**: Clear focus visibility for keyboard users

## JavaScript Integration

Primary button tag lists work the same as standard button tags but with emphasized styling:

### Basic Click Handling

### Priority Filter Management

## Usage Guidelines

Use primary button tag lists when:

- Highlighting important filter categories
- Creating priority action buttons
- Emphasizing featured or special options
- Building interfaces where certain tags need prominence
- Developing systems with tier-based interactions
- Creating visual hierarchy among interactive elements

### Visual Hierarchy Strategy

Combine with standard button tags for effective hierarchy:

```html
<ul class="hoo-meta-list">
  <!-- Primary buttons for important actions -->
  <li>
    <button type="button" class="hoo-mtag-primary">
      <span class="hoo-mtag-lbl">Featured</span>
    </button>
  </li>
  
  <!-- Standard buttons for regular actions -->
  <li>
    <button type="button" class="hoo-mtag">
      <span class="hoo-mtag-lbl">Technology</span>
    </button>
  </li>
  <li>
    <button type="button" class="hoo-mtag">
      <span class="hoo-mtag-lbl">Design</span>
    </button>
  </li>
</ul>
```

## States and Attributes

### ARIA Attributes

- `aria-pressed="true|false"` - For toggleable primary tag states
- `aria-label` - For additional context when button text needs clarification
- `role="button"` - Implicit with button elements

### Custom States

## SCSS

## Accessibility

- Uses semantic `<button>` elements for proper interactive behavior
- Maintains excellent color contrast in both default and hover states
- Supports keyboard navigation (Tab, Enter, Space)
- Provides clear focus indicators for keyboard users
- Includes proper list structure with `<ul>` and `<li>` elements
- Supports ARIA attributes for enhanced state communication
- Maintains proper tab order through button elements
- Ensures sufficient color contrast for all interactive states

## Brand Integration

### Color Usage

- Leverages primary brand color for emphasis
- Provides inverse hover states for clear interaction feedback
- Maintains accessibility while emphasizing importance
- Integrates with overall design system theming

## CSS Classes

* `.hoo-meta-list` - Container for the list of tags

## JavaScript Interaction

Primary button tags in the list can be wired to JavaScript event handlers:

## Accessibility

* Properly structured lists with `<ul>` and `<li>` elements
* Button tags are naturally keyboard accessible
* For multi-selectable tag lists, consider using `aria-pressed="true|false"` to indicate selection state
* Ensure sufficient color contrast with the primary theme colors
* For tags that control content visibility, use appropriate ARIA attributes to indicate relationships