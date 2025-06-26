---
title: Standard w/ icon - Left
order: 15
---

Standard button with an icon on the left side provides visual reinforcement for the button's action while maintaining the default button styling. The icon is positioned to the left of the button text by default.

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

**States**
- `.hoo-button:hover` - Hover state
- `.hoo-button:active` - Active/pressed state
- `.hoo-button:focus` - Focus state
- `.hoo-button:disabled` - Disabled state
- `.hoo-button[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Standard Button with Left Icon**
```html
<button class="hoo-button">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Standard Action</span>
</button>
```

**Disabled Standard Button with Left Icon**
```html
<button class="hoo-button" disabled="true" aria-disabled="true">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Disabled Button</span>
</button>
```

***