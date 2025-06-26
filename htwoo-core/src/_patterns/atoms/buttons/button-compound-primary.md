---
title: Compound Primary
order: 40
---

Primary compound buttons combine the prominence of a primary button with multi-line content, including both a label and a description. This component is ideal for important actions that require additional explanation.

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
- `.hoo-buttoncomp-primary` - Primary compound button container
- `.hoo-buttoncomp-primary-label` - Primary text label
- `.hoo-buttoncomp-primary-desc` - Secondary description text

**States**
- `.hoo-buttoncomp-primary:hover` - Hover state
- `.hoo-buttoncomp-primary:active` - Active/pressed state
- `.hoo-buttoncomp-primary:focus` - Focus state
- `.hoo-buttoncomp-primary:disabled` - Disabled state
- `.hoo-buttoncomp-primary[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Primary Compound Button**
```html
<button class="hoo-buttoncomp-primary">
  <span class="hoo-buttoncomp-primary-label">Primary Action</span>
  <span class="hoo-buttoncomp-primary-desc">With description text</span>
</button>
```

**Disabled Primary Compound Button**
```html
<button class="hoo-buttoncomp-primary" disabled="true" aria-disabled="true">
  <span class="hoo-buttoncomp-primary-label">Disabled Primary</span>
  <span class="hoo-buttoncomp-primary-desc">With description text</span>
</button>
```

***