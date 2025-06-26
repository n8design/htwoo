---
title: Primary w/ icon - Left
order: 25
---

Primary button with an icon on the left side combines the prominence of primary styling with visual reinforcement using an icon. The icon is positioned to the left of the button text by default.

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

**States**
- `.hoo-button-primary:hover` - Hover state
- `.hoo-button-primary:active` - Active/pressed state
- `.hoo-button-primary:focus` - Focus state
- `.hoo-button-primary:disabled` - Disabled state
- `.hoo-button-primary[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Primary Button with Left Icon**
```html
<button class="hoo-button-primary">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Primary Action</span>
</button>
```

**Disabled Primary Button with Left Icon**
```html
<button class="hoo-button-primary" disabled="true" aria-disabled="true">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Disabled Primary</span>
</button>
```

***