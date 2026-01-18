---
title: "Pivot Bar Overflow"
description: "The Pivot Bar Overflow component provides a responsive pivot navigation that handles limited space by moving tabs to an overflow menu."
type: "components"
layout: "single"
patternId: "molecules-menus-pivotbar-overflow"
category: "molecules"
subcategory: "menus"
seoTitle: "Molecules - Menus Pivotbar Overflow"
seoDescription: "Menus Pivotbar Overflow Molecules"
weight: 41
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-pivotbar has-overflow&quot; role=&quot;menubar&quot;&gt;
      &lt;div class=&quot;hoo-overflow&quot;&gt;
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
  &lt;!--- Fixed element to handle overflow buttons --&gt;
      &lt;div class=&quot;hoo-buttonicon-overflow&quot; aria-haspopup=&quot;true&quot;&gt;
          &lt;button class=&quot;hoo-buttonicon-flyout&quot; aria-haspopup=&quot;true&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ellipses&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ellipses&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;/div&gt;
---

# Pivot Bar Overflow

The Pivot Bar Overflow component provides a responsive pivot navigation that handles limited space by moving tabs to an overflow menu.

## Overview

When horizontal space is limited, the Pivot Bar Overflow automatically hides pivot tabs that don't fit and provides access to them through an overflow menu, ensuring all navigation options remain accessible.

## Features

- Responsive behavior using ResizeObserver API
- Automatic overflow handling for tabs that don't fit
- Overflow menu with dropdown functionality
- Proper ARIA attributes for accessibility
- Hidden items marked with `aria-hidden="true"`
- CSS class `.has-overflow` to enable overflow behavior
- JavaScript-driven responsive calculations
- Consistent styling with standard pivot bar

## CSS Classes

- `.hoo-pivotbar` - Main pivot bar container
- `.has-overflow` - Enables overflow functionality
- `.hoo-overflow` - Wrapper container for overflow items
- `.hoo-buttonpivot` - Pivot buttons (visible and hidden)
- `.hoo-overflow-button` - Overflow menu trigger
- `.is-overflow-item` - Hidden pivot items

## Overflow Configuration

### Required Structure

1. **Container**: `.hoo-pivotbar.has-overflow`
2. **Wrapper**: `.hoo-overflow` around all pivot buttons
3. **Overflow Button**: Button with overflow menu functionality
4. **Hidden Items**: Buttons with `.is-overflow-item` class

### CSS Classes for Overflow

- `.has-overflow` - Enables overflow behavior on the pivot bar
- `.hoo-overflow` - Required wrapper for overflow calculation
- `.is-overflow-item` - Applied to hidden pivot items
- `.hoo-overflow-button` - Overflow menu trigger styling

## JavaScript Integration

The overflow functionality requires JavaScript files:

- **overflow.js**: Handles ResizeObserver and overflow calculations
- **pivot.js**: Manages pivot state and overflow menu cloning

### Key JavaScript Features

- **ResizeObserver**: Monitors container size changes
- **Dynamic Overflow**: Moves tabs in/out of overflow menu
- **Menu Cloning**: Clones overflow items into dropdown menu
- **State Management**: Maintains pivot selection across overflow

### Initialization

## Responsive Behavior

### Overflow Strategy

1. **Full Width**: All pivot tabs display normally
2. **Reduced Width**: Less important tabs move to overflow
3. **Narrow Width**: Only critical tabs remain visible
4. **Overflow Menu**: Hidden tabs accessible via dropdown

### ResizeObserver Integration

The component uses the [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to:

- Monitor container width changes
- Trigger overflow calculations on resize
- Respond to dynamic content changes
- Handle browser zoom and viewport changes

## States and Attributes

### ARIA Attributes

- `role="menubar"` - Pivot bar semantic role
- `role="menuitem"` - Individual pivot buttons
- `aria-pressed="true|false"` - Active pivot state
- `aria-haspopup="menu"` - Overflow button has dropdown
- `aria-expanded="false|true"` - Overflow menu state
- `aria-hidden="true"` - Hidden overflow items

### Visual States

- **Visible**: Standard pivot button display
- **Hidden**: Overflow items with `aria-hidden="true"`
- **Active**: Selected pivot with `aria-pressed="true"`
- **Overflow Menu**: Dropdown containing hidden items

## Usage Guidelines

- Add `.has-overflow` class to enable overflow functionality
- Wrap pivot buttons in `.hoo-overflow` container
- Include overflow button with proper ARIA attributes
- Test responsive behavior at different screen sizes
- Ensure overflow menu is keyboard accessible
- Prioritize pivot tabs based on importance
- Consider mobile touch targets and interaction

## Browser Support

- **ResizeObserver**: Modern browsers (IE11+ with polyfill)
- **Flexbox**: All modern browsers
- **CSS Grid**: Used for overflow calculations
- **JavaScript**: ES6+ features

## SCSS

## Accessibility

- Uses `role="menubar"` for semantic identification
- Implements proper ARIA attributes for overflow menu
- Includes `aria-hidden="true"` for hidden items
- Supports keyboard navigation (Tab, Enter, Space, Arrow keys)
- Provides clear focus indicators
- Maintains logical tab order through visible pivots
- Announces overflow menu state to screen readers
- Follows responsive design accessibility principles