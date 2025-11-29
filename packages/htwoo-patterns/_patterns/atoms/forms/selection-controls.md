---
title: Selection Controls
order: 20
---

# Selection Controls

HTWOO UI provides a set of selection control elements for choosing options in forms, including checkboxes, radio buttons, and toggle switches.

## Overview

Selection controls allow users to select from predefined options. Each type of control serves different purposes depending on the selection behavior needed: multiple selection (checkboxes), single selection from a set (radio buttons), or binary on/off states (toggle switches).

## Checkbox

Checkboxes allow users to select multiple options from a set or toggle a single option on/off.

### Basic Checkbox

```html
<div class="hoo-checkbox">
  <input type="checkbox" id="checkbox1" name="checkbox1">
  <label for="checkbox1">Checkbox option</label>
</div>
```

### Checkbox States

- **Unchecked**: Default state
- **Checked**: Selected state
- **Indeterminate**: Partially selected state (set via JavaScript)
- **Disabled**: Non-interactive state

## Radio Button

Radio buttons allow users to select a single option from a set of mutually exclusive choices.

### Basic Radio Button

```html
<div class="hoo-radiobutton">
  <input type="radio" id="radio1" name="radiogroup" value="option1">
  <label for="radio1">Radio option 1</label>
</div>
<div class="hoo-radiobutton">
  <input type="radio" id="radio2" name="radiogroup" value="option2">
  <label for="radio2">Radio option 2</label>
</div>
```

### Radio Button States

- **Unchecked**: Default state
- **Checked**: Selected state
- **Disabled**: Non-interactive state

## Toggle Switch

Toggle switches provide a visual switch for toggling between two states, typically on/off.

### Basic Toggle

```html
<div class="hoo-toggle">
  <input type="checkbox" id="toggle1" name="toggle1">
  <label for="toggle1">Toggle option</label>
</div>
```

### Toggle States

- **Off**: Default state
- **On**: Activated state
- **Disabled**: Non-interactive state

## Features

- Custom styling that maintains accessibility
- Clear visual feedback for selection states
- Consistent focus states for keyboard navigation
- Support for disabled states
- Proper label association for screen readers
- Themable colors that adapt to the design system

## SCSS Files

**Selection Control Styles:**
- `lib/sass/01-atoms/input/_checkbox.scss`
- `lib/sass/01-atoms/input/_radiobutton.scss`
- `lib/sass/01-atoms/input/_toggle.scss`

## Accessibility

- Uses native HTML form controls for compatibility with assistive technologies
- Maintains keyboard focus states
- Provides sufficient color contrast
- Includes proper label association
- Supports larger touch targets for mobile users
