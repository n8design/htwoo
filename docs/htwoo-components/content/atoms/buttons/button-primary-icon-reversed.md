---
title: "Primary w/ icon - Right"
description: "Primary button with an icon on the right side combines the prominence of primary styling with visual reinforcement using an icon. The icon is positioned to the right of the button text using the `.is-"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-primary-icon-reversed"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Primary Icon Reversed"
seoDescription: "Buttons Button Primary Icon Reversed Atoms"
weight: 26
hasVariants: false
markup: |
  
---

Primary button with an icon on the right side combines the prominence of primary styling with visual reinforcement using an icon. The icon is positioned to the right of the button text using the `.is-reversed` class.

To disable this button simply add the `disable="true"` as well as the `aria-disabled="true"` to it.

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
- `.hoo-button-primary` - Primary button styling
- `.hoo-icon` - Icon styling within button
- `.is-reversed` - Modifier to position icon on the right

**States**
- `.hoo-button-primary:hover` - Hover state
- `.hoo-button-primary:active` - Active/pressed state
- `.hoo-button-primary:focus` - Focus state
- `.hoo-button-primary:disabled` - Disabled state
- `.hoo-button-primary[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Primary Button with Right Icon**
```html
<button class="hoo-button-primary is-reversed">
  <span class="hoo-button-label">Primary Action</span>
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
</button>
```

**Disabled Primary Button with Right Icon**
```html
<button class="hoo-button-primary is-reversed" disabled="true" aria-disabled="true">
  <span class="hoo-button-label">Disabled Primary</span>
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
</button>
```

***