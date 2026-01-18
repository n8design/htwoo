---
title: "Button Tag List"
description: "A list of clickable button tags for triggering actions, filtering content, or toggling states."
type: "components"
layout: "single"
patternId: "molecules-meta-tag-list-button"
category: "molecules"
subcategory: "meta"
seoTitle: "Molecules - Meta Tag List Button"
seoDescription: "Meta Tag List Button Molecules"
weight: 20
hasVariants: false
markup: |
  &lt;ul class=&quot;hoo-meta-list&quot;&gt;
      &lt;li&gt;
          &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;
      &lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
      &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Fluent&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
      &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Design&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
      &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;at&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
      &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;its&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
      &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;best&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/ul&gt;
---

# Button Tag List

A list of clickable button tags for triggering actions, filtering content, or toggling states.

## Overview

The Button Tag List provides a structured way to display multiple interactive button tags as a cohesive group. It's ideal for creating filterable interfaces, action menus, or any scenario where tags need to trigger JavaScript functionality.

## Features

- Interactive button elements with click functionality
- Hover states for visual feedback
- Keyboard navigation support (Tab, Enter, Space)
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- Semantic HTML structure with proper button elements
- Focus management and accessibility support

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag` - Button styling with hover states and interactive behavior
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Default State

- **Background**: Neutral-100 (light gray)
- **Text color**: Neutral-700 (dark gray)
- **Border**: None
- **Cursor**: Pointer on hover

### Hover State

- **Background**: Theme-700 (primary brand color)
- **Text color**: White (neutral-000)
- **Transition**: Smooth color transition

### Focus State

- **Outline**: Browser default focus indicator
- **Accessibility**: Clear focus visibility for keyboard users

## JavaScript Integration

Button tag lists are designed for JavaScript interaction:

### Basic Click Handling

### Toggle State Management

### Multi-Selection Support

## Usage Guidelines

Use button tag lists when:

- Creating filterable content interfaces
- Building tag-based search or discovery features
- Implementing category selection controls
- Developing interactive tag management systems
- Creating toggleable filter options
- Building content organization tools

### Interaction Patterns

- **Filtering**: Use for content filtering where tags act as toggle switches
- **Actions**: Trigger specific actions based on tag selection
- **State Management**: Toggle states for multi-selection scenarios
- **Navigation**: Quick actions that don't require full page navigation

## States and Attributes

### ARIA Attributes

- `aria-pressed="true|false"` - For toggleable tag states
- `aria-multiselectable="true"` - On container for multi-selection
- `aria-label` - For additional context when needed
- `role="button"` - Implicit with button elements

### Custom States

## SCSS

## Accessibility

- Uses semantic `<button>` elements for proper interactive behavior
- Supports keyboard navigation (Tab, Enter, Space)
- Provides clear focus indicators for keyboard users
- Includes proper list structure with `<ul>` and `<li>` elements
- Supports ARIA attributes for enhanced state communication
- Maintains proper tab order through button elements
- Provides visual feedback for hover and focus states
- Ensures sufficient color contrast for all states