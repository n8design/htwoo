---
title: "Action Button"
description: "Action buttons are specialized buttons used within flyout menus and dropdown components. They provide a consistent style for interactive options within these expanded UI elements."
type: "components"
layout: "single"
patternId: "atoms-buttons-button-action"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Action"
seoDescription: "Buttons Button Action Atoms"
weight: 80
hasVariants: false
markup: |
  
---

Action buttons are specialized buttons used within flyout menus and dropdown components. They provide a consistent style for interactive options within these expanded UI elements.

## Description

Action buttons are designed specifically for use within dropdown menus, contextual menus, and command bar flyouts. They typically have a more subtle styling than standard buttons and react to hover and selection states within the context of their parent menu.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/buttons

**SCSS Partial Location**\
`/src/styles/01-atoms/buttons/_buttons.scss`

### CSS Classes

**Base Classes**
- `.hoo-action` - Action button styling

**States**
- `.hoo-action:hover` - Hover state
- `.hoo-action:active` - Active/pressed state
- `.hoo-action:focus` - Focus state
- `.hoo-action.selected` - Selected state

### Usage Examples

**Basic Action Button in Flyout**
```html
<div class="hoo-flyout-menu">
  <button class="hoo-action">
    <span class="hoo-action-text">Menu Item 1</span>
  </button>
  <button class="hoo-action">
    <span class="hoo-action-text">Menu Item 2</span>
  </button>
</div>
```

**Action Button with Icon**
```html
<button class="hoo-action">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-action-text">Action Item</span>
</button>
```