---
title: "Pivot Bar"
description: "The Pivot Bar component provides tab-style navigation for switching between different content sections or views."
type: "components"
layout: "single"
patternId: "molecules-menus-pivotbar"
category: "molecules"
subcategory: "menus"
seoTitle: "Molecules - Menus Pivotbar"
seoDescription: "Menus Pivotbar Molecules"
weight: 40
hasVariants: false
markup: |
  &lt;menu class=&quot;hoo-pivotbar&quot;&gt;
      &lt;button class=&quot;hoo-button-pivot is-active&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Coffee&quot;&gt;Coffee&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Matcha&quot;&gt;Matcha&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Ice Tea&quot;&gt;Ice Tea&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Aqua Minerale&quot;&gt;Aqua Minerale&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Earl Grey&quot;&gt;Earl Grey&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Darjeeling tea&quot;&gt;Darjeeling tea&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Chai Latte&quot;&gt;Chai Latte&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-pivot&quot;&gt;&lt;span class=&quot;hoo-pivot-inner&quot; title=&quot;Gin Tonic&quot;&gt;Gin Tonic&lt;/span&gt;
  &lt;/button&gt;
  &lt;/menu&gt;
---

# Pivot Bar

The Pivot Bar component provides tab-style navigation for switching between different content sections or views.

## Overview

The Pivot Bar displays navigation tabs in a horizontal layout, allowing users to switch between different content areas. It's commonly used for sectioned content, filters, or view switching within applications.

## Features

- Horizontal tab-style navigation layout
- Support for active/selected state indication
- Semantic `<menu>` element with proper ARIA roles
- Responsive design that adapts to content
- Integration with pivot button components
- Clean, minimal visual design
- Keyboard navigation support

## CSS Classes

- `.hoo-pivotbar` - Main pivot bar container with flexbox layout
- Uses pivot button classes from atoms layer:
  - `.hoo-buttonpivot` - Individual pivot buttons/tabs
  - `.hoo-buttonpivot-label` - Button text labels

## Layout Properties

### Container Structure

- **Display**: Flex row layout
- **Direction**: Row (horizontal)
- **Spacing**: No margin or padding on container
- **Alignment**: Natural flow of flex items

### Button Integration

The pivot bar works with pivot buttons to provide:

- Consistent spacing between tabs
- Proper visual hierarchy
- Active state indication through `aria-pressed` attribute
- Hover and focus states

## States and Attributes

### ARIA Attributes

- `role="menubar"` - Indicates the pivot bar as a menu container
- `role="menuitem"` - Individual pivot buttons as menu items
- `aria-pressed="true|false"` - Indicates active/selected state

### Visual States

- **Default**: Standard pivot button appearance
- **Active**: Visual indication of current selection (via `aria-pressed="true"`)
- **Hover**: Interactive feedback on mouse over
- **Focus**: Clear focus indicators for keyboard navigation

## Responsive Behavior

For responsive scenarios with limited space, consider using the [Pivot Bar Overflow](./pivotbar-overflow.html) variant which includes:

- Overflow menu for hidden items
- Dynamic hiding/showing of tabs based on available space
- `aria-hidden` attributes for hidden items

## Usage Guidelines

- Use `role="menubar"` on the pivot bar container
- Include `role="menuitem"` on each pivot button
- Use `aria-pressed` to indicate the currently selected tab
- Provide clear, concise labels for each pivot option
- Ensure only one pivot is active at a time
- Consider overflow handling for responsive layouts
- Test keyboard navigation (Tab, Enter, Arrow keys)

## JavaScript Integration

While the pivot bar itself is primarily CSS-driven, interactive behavior typically includes:

- Click handlers to switch between pivot states
- Management of `aria-pressed` attributes
- Content switching based on selected pivot
- Overflow menu handling (in overflow variant)

## SCSS

## Accessibility

- Uses semantic `<menu>` element with `role="menubar"`
- Implements proper ARIA attributes for state management
- Supports keyboard navigation (Tab, Enter, Space, Arrow keys)
- Provides clear focus indicators
- Maintains logical tab order through pivot items
- Uses `aria-pressed` for screen reader state announcement
- Ensures sufficient color contrast for all states