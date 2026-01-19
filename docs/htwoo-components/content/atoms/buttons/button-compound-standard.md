---
title: "Compound Standard"
description: "Compound buttons include both a label and a description, allowing for more detailed context on the button's action. The standard compound button uses the default button styling with additional structu"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-compound-standard"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Compound Standard"
seoDescription: "Buttons Button Compound Standard Atoms"
weight: 30
hasVariants: false
markup: |
  
---

Compound buttons include both a label and a description, allowing for more detailed context on the button's action. The standard compound button uses the default button styling with additional structure for multi-line content.

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
- `.hoo-buttoncomp` - Compound button container
- `.hoo-buttoncomp-label` - Primary text label
- `.hoo-buttoncomp-desc` - Secondary description text

**States**
- `.hoo-buttoncomp:hover` - Hover state
- `.hoo-buttoncomp:active` - Active/pressed state
- `.hoo-buttoncomp:focus` - Focus state
- `.hoo-buttoncomp:disabled` - Disabled state
- `.hoo-buttoncomp[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Compound Button**
```html
<button class="hoo-buttoncomp">
  <span class="hoo-buttoncomp-label">Compound Button</span>
  <span class="hoo-buttoncomp-desc">With description text</span>
</button>
```

**Disabled Compound Button**
```html
<button class="hoo-buttoncomp" disabled="true" aria-disabled="true">
  <span class="hoo-buttoncomp-label">Disabled Compound</span>
  <span class="hoo-buttoncomp-desc">With description text</span>
</button>
```

***