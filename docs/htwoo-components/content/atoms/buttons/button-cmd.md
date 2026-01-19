---
title: "Command Button"
description: "Command buttons provide a specialized style for application commands, often used in toolbars and command bars. When no dropdown items are specified, the button renders without a chevron down and witho"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-cmd"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Cmd"
seoDescription: "Buttons Button Cmd Atoms"
weight: 70
hasVariants: false
markup: |
  
---

Command buttons provide a specialized style for application commands, often used in toolbars and command bars. When no dropdown items are specified, the button renders without a chevron down and without any flyout menu.

## Supported States:

* Default - Normal button state
* Hover - Mouse over state
* Active - Pressed state
* Focus - Focused through keyboard navigation
* Disabled - Non-interactive state

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/buttons

**SCSS Partial Location**\
`/src/styles/01-atoms/buttons/_buttons.scss`

### CSS Classes

**Base Classes**
- `.hoo-button` - Base button styling (used for Command buttons)
- `.hoo-cmd` - Specific modifier for command buttons

**States**
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:focus` - Focus state
- `:disabled` - Disabled state
- `[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Command Button**
```html
<button class="hoo-button hoo-cmd">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Command Action</span>
</button>
```

**Command Button with Icon Only**
```html
<button class="hoo-button hoo-cmd" title="Command Action">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="sr-only">Command Action</span>
</button>
```

### Accessibility

Command buttons, especially icon-only variants, should include text alternatives like tooltips (`title` attribute) and visually hidden text (`.sr-only`) for screen readers.

***