---
title: "Vertical Navigation"
description: "The Vertical Navigation component provides a multi-level tree navigation system with expandable menu items."
type: "components"
layout: "single"
patternId: "molecules-menus-nav"
category: "molecules"
subcategory: "menus"
seoTitle: "Molecules - Menus Nav"
seoDescription: "Menus Nav Molecules"
weight: 10
hasVariants: false
markup: |
  &lt;nav class=&quot;hoo-nav&quot;&gt;
      &lt;menu role=&quot;tree&quot; class=&quot;hoo-nav-list&quot; role=&quot;tree&quot;&gt;
          &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
              &lt;div class=&quot;hoo-navitem-text&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                      
                      
                      &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                      &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
                          &lt;/use&gt;
                      &lt;/svg&gt;&lt;/span&gt;
              &lt;/button&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1&lt;/a&gt;
      &lt;/div&gt;
      &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
          &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
              &lt;div class=&quot;hoo-navitem-text&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                              
                              
                              &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                      &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
                          &lt;/use&gt;
                      &lt;/svg&gt;&lt;/span&gt;
              &lt;/button&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.1&lt;/a&gt;
      &lt;/div&gt;
      &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
          &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
              &lt;div class=&quot;hoo-navitem-text&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                                      
                                      
                                      &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                      &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
                          &lt;/use&gt;
                      &lt;/svg&gt;&lt;/span&gt;
              &lt;/button&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.1.1&lt;/a&gt;
      &lt;/div&gt;
      &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
          &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
              &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.1.1.1&lt;/a&gt;
          &lt;/div&gt;
      &lt;/li&gt;
      &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
          &lt;div class=&quot;hoo-navitem-text&quot;&gt;
              &lt;button class=&quot;hoo-buttonicon&quot; 
                                              
                                              
                                              &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
                      &lt;/use&gt;
                  &lt;/svg&gt;&lt;/span&gt;
          &lt;/button&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2.1.1&lt;/a&gt;
  &lt;/div&gt;
  &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
      &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
          &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2.1.1.1&lt;/a&gt;
      &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2.1.1.2&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2.1.1.3&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.3.1.1&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2.1&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.3.1&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.2&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 1.3&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; aria-current=&quot;page&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 2&lt;/a&gt;
  &lt;/div&gt;
  &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;
          &lt;button class=&quot;hoo-buttonicon&quot; 
                      
                      
                      &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;
      &lt;/button&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 3&lt;/a&gt;
  &lt;/div&gt;
  &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
      &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
          &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 3.1&lt;/a&gt;
      &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 3.2&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 3.3&lt;/a&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;li role=&quot;treeitem&quot; class=&quot;hoo-navitem&quot; aria-expanded=&quot;false&quot; &gt;
      &lt;div class=&quot;hoo-navitem-text&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;hoo-navitem-link&quot;&gt;Item 4&lt;/a&gt;
  &lt;/div&gt;
  &lt;menu class=&quot;hoo-nav-listsub&quot; role=&quot;group&quot;&gt;
  &lt;/menu&gt;
  &lt;/li&gt;
  &lt;/ul&gt;
  &lt;/nav&gt;
---

# Vertical Navigation

The Vertical Navigation component provides a multi-level tree navigation system with expandable menu items.

## Overview

The Vertical Navigation supports hierarchical navigation structures up to five levels deep. It includes interactive functionality for expanding/collapsing menu items and highlighting the current page location.

## Features

- Multi-level navigation support (up to 5 levels)
- Expandable/collapsible menu items with smooth visual feedback
- Current page indication via `aria-current` attribute
- Interactive JavaScript behavior for state management
- Proper semantic HTML structure using `<nav>` and `<menu>` elements
- ARIA tree navigation pattern for accessibility
- Visual hierarchy with indented sub-navigation levels
- Hover states for improved user interaction

## CSS Classes

- `.hoo-nav` - Main navigation container with border styling
- `.hoo-nav-list` - Primary navigation list (role="tree")
- `.hoo-nav-listsub` - Sub-navigation lists (role="group")
- `.hoo-navitem` - Individual navigation items with expand/collapse state
- `.hoo-navitem-text` - Container for item content with flex layout
- `.hoo-navitem-link` - Navigation links with proper padding and hover states
- `.hoo-buttonicon` - Expandable menu icons that rotate when expanded

## JavaScript Functionality

The navigation component includes interactive JavaScript for:

### Current Item Management

### Expand/Collapse Behavior

### Event Handling

- Click events on `.hoo-navitem` for current page highlighting
- Click events on `.hoo-buttonicon` for expand/collapse functionality
- Proper event delegation to handle dynamically added items

## Multi-Level Structure

The navigation supports nested levels with automatic indentation:

- **Level 1**: Base padding and margin
- **Level 2**: Additional left margin via CSS custom properties
- **Level 3**: Further increased indentation
- **Level 4 & 5**: Progressive indentation up to maximum depth

### CSS Custom Properties for Levels

## States and Attributes

### ARIA Attributes

- `aria-expanded="true|false"` - Indicates if menu item is expanded
- `aria-current="page"` - Identifies the current page/location
- `role="tree"` - Main navigation semantic role
- `role="treeitem"` - Individual navigation items
- `role="group"` - Sub-navigation containers

### Visual States

- **Default**: Standard menu item appearance
- **Hover**: Background color change and link color change
- **Current**: Left border highlight and background color
- **Expanded**: Rotated arrow icon and visible sub-menu
- **Collapsed**: Standard arrow icon and hidden sub-menu

## Usage Guidelines

- Initialize JavaScript functionality using `initMenu()`
- Use meaningful link text for accessibility
- Provide proper href attributes for all navigation links
- Limit navigation depth to 5 levels maximum
- Include expand/collapse icons only for items with child navigation
- Test keyboard navigation and screen reader compatibility

## Integration

## SCSS

## Accessibility

- Uses semantic `<nav>` and `<menu>` elements
- Implements ARIA tree navigation pattern
- Supports keyboard navigation (Tab, Enter, Space)
- Provides clear focus indicators
- Uses proper ARIA attributes for state management
- Maintains logical tab order through navigation hierarchy
- Ensures sufficient color contrast for all states