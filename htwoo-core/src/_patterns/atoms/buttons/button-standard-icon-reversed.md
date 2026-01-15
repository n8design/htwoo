---
title: Standard w/ icon - Right
order: 16
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