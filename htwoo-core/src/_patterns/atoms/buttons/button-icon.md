---
title: Icon Button
order: 50
---

Icon buttons display only an icon without text, providing a compact interface element for common actions. They use the standard button styling but are typically rendered in a square shape to accommodate the icon.

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
- `.hoo-button` - Base button styling
- `.hoo-icon` - Icon styling within button

**States**
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:focus` - Focus state
- `:disabled` - Disabled state
- `[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Icon Button**
```html
<button class="hoo-button">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="sr-only">Action description for screen readers</span>
</button>
```

**Disabled Icon Button**
```html
<button class="hoo-button" disabled="true" aria-disabled="true">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="sr-only">Action description for screen readers</span>
</button>
```

### Accessibility

Icon buttons should always include a text alternative for screen readers, typically using a `<span>` with the `sr-only` class that visually hides the text but keeps it accessible to assistive technologies.

***