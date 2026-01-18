---
title: "Primary"
description: "Primary button also has on disabled state the correct color values."
type: "components"
layout: "single"
patternId: "atoms-buttons-button-primary"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Primary"
seoDescription: "Buttons Button Primary Atoms"
weight: 20
markup: |
  &lt;button class=&quot;hoo-button-primary&quot;&gt;
      &lt;span class=&quot;hoo-button-label&quot;&gt;Button&lt;/span&gt;
  &lt;/button&gt;
  
---

Primary button also has on disabled state the correct color values.

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

**States**
- `.hoo-button-primary:hover` - Hover state
- `.hoo-button-primary:active` - Active/pressed state
- `.hoo-button-primary:focus` - Focus state
- `.hoo-button-primary:disabled` - Disabled state
- `.hoo-button-primary[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Primary Button**
```html
<button class="hoo-button-primary">Primary Button</button>
```

**Disabled Primary Button**
```html
<button class="hoo-button-primary" disabled="true" aria-disabled="true">Disabled Primary</button>
```

***