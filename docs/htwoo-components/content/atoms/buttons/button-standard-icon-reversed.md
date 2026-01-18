---
title: "Standard w/ icon - Right"
description: "Standard button with an icon on the right side provides visual reinforcement for the button's action while maintaining the default button styling. The icon is positioned to the right of the button tex"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-standard-icon-reversed"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Standard Icon Reversed"
seoDescription: "Buttons Button Standard Icon Reversed Atoms"
weight: 16
hasVariants: false
markup: |
  &lt;button class=&quot;hoo-button is-reversed&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
      &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-right&quot;&gt;
          &lt;/use&gt;
      &lt;/svg&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Button&lt;/span&gt;
  &lt;/button&gt;
---

Standard button with an icon on the right side provides visual reinforcement for the button's action while maintaining the default button styling. The icon is positioned to the right of the button text using the `.is-reversed` class.

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
- `.hoo-button` - Standard button styling
- `.hoo-icon` - Icon styling within button
- `.is-reversed` - Modifier to position icon on the right

**States**
- `.hoo-button:hover` - Hover state
- `.hoo-button:active` - Active/pressed state
- `.hoo-button:focus` - Focus state
- `.hoo-button:disabled` - Disabled state
- `.hoo-button[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Standard Button with Right Icon**
```html
<button class="hoo-button is-reversed">
  <span class="hoo-button-label">Standard Action</span>
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
</button>
```

**Disabled Standard Button with Right Icon**
```html
<button class="hoo-button is-reversed" disabled="true" aria-disabled="true">
  <span class="hoo-button-label">Disabled Button</span>
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
</button>
```

***