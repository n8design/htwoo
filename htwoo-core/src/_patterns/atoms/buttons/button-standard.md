---
title: Standard
order: 10
---

Standard button is the default button style in the HTWOO UI library. It provides a neutral appearance that can be used for most general actions.

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

**States**
- `.hoo-button:hover` - Hover state
- `.hoo-button:active` - Active/pressed state
- `.hoo-button:focus` - Focus state
- `.hoo-button:disabled` - Disabled state
- `.hoo-button[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Standard Button**
```html
<button class="hoo-button">Standard Button</button>
```

**Disabled Standard Button**
```html
<button class="hoo-button" disabled="true" aria-disabled="true">Disabled Button</button>
```

***