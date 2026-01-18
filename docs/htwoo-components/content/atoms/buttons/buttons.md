---
title: "Buttons"
description: "The HTWOO UI library provides a versatile set of button components for various user interactions. These buttons support different styles, states, and variations."
type: "components"
layout: "single"
patternId: "atoms-buttons-buttons"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Buttons"
seoDescription: "Buttons Buttons Atoms"
weight: 999
hasVariants: false
markup: |
  
---

The HTWOO UI library provides a versatile set of button components for various user interactions. These buttons support different styles, states, and variations.

## Button Types

* Standard - Base button style (.hoo-button)
* Primary - Prominent button for main actions (.hoo-button-primary)
* Compound - Multi-line button with description (.hoo-buttoncomp)
* Primary Compound - Multi-line primary button (.hoo-buttoncomp-primary)

## Supported States

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

**Button Types**
- `.hoo-button` - Standard button styling
- `.hoo-button-primary` - Primary button styling
- `.hoo-buttoncomp` - Compound button with description
- `.hoo-buttoncomp-primary` - Primary compound button with description

**States**
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:focus` - Focus state
- `:disabled` - Disabled state
- `[aria-disabled="true"]` - ARIA disabled state

### Accessibility 

To properly disable buttons, use both the `disabled="true"` attribute and `aria-disabled="true"` to ensure screen readers recognize the disabled state.

### Usage Examples

**Button Types**
```html
<button class="hoo-button">Standard Button</button>
<button class="hoo-button-primary">Primary Button</button>
```

**Compound Button**
```html
<button class="hoo-buttoncomp">
  <span class="hoo-buttoncomp-label">Compound Button</span>
  <span class="hoo-buttoncomp-desc">With description text</span>
</button>
```