---
title: Radio Button Group
order: 20
---

# Radio Button Group

A semantic container for grouping related radio button controls with proper accessibility semantics. Provides consistent styling and keyboard navigation for single-selection choices within forms.

## Overview

The radio button group component creates an accessible collection of radio button controls using semantic HTML with proper ARIA roles. It enables users to select one option from a related set of choices while maintaining keyboard navigation and screen reader compatibility.

## Features

- **Semantic Structure**: Uses `<menu>` element with `role="radiogroup"`
- **Keyboard Navigation**: Full keyboard support with arrow key navigation
- **Single Selection**: Enforces single selection within the group
- **Screen Reader Support**: Proper announcements and group context
- **Mutual Exclusivity**: Selecting one option deselects others
- **Flexible Layout**: Supports vertical stacking and custom layouts

## Structure

The component consists of:
1. **Container**: `<menu>` with `.hoo-radiobutton-group` class and `role="radiogroup"`
2. **List Items**: `<li>` elements with `role="radio"` containing individual radio buttons
3. **Radio Buttons**: `{{>atoms-radiobutton}}` components for each option

## Data Structure

```json
{
    "radiobutton-group": {
        "name": "delivery-method",
        "items": [
            {
                "id": "delivery-standard",
                "name": "delivery-method",
                "value": "standard",
                "label": "Standard Delivery (5-7 days)",
                "checked": true
            },
            {
                "id": "delivery-express",
                "name": "delivery-method", 
                "value": "express",
                "label": "Express Delivery (2-3 days)",
                "checked": false
            },
            {
                "id": "delivery-overnight",
                "name": "delivery-method",
                "value": "overnight", 
                "label": "Overnight Delivery",
                "checked": false
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-radiobutton-group`: Main container styling
- `.hoo-radiobutton-group.horizontal`: Horizontal layout variant
- `.hoo-radiobutton-group.columns`: Multi-column layout variant
- `.hoo-radiobutton-group.compact`: Compact spacing variant

## Styling

### Visual Design
- **Layout**: Vertical stacking by default
- **Spacing**: 12px gap between radio button items
- **Padding**: Container padding for proper spacing
- **Alignment**: Left-aligned radio buttons with proper label alignment

### Interactive States
- **Focus**: Focus ring on the group container
- **Individual Focus**: Each radio button maintains its own focus state
- **Hover**: Subtle hover effects on radio button items  
- **Selection**: Clear visual indication of selected option

## Use Cases

### Payment Method Selection
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Payment Method</legend>
    {{#radiobutton-group}}
    <menu class="hoo-radiobutton-group" role="radiogroup" tabindex="0">
        <!-- Credit card, PayPal, bank transfer options -->
    </menu>
    {{/radiobutton-group}}
</fieldset>
```

### Delivery Options
```handlebars
<div class="delivery-selector">
    <h3>Delivery Method</h3>
    {{> molecules-radio-button-group}}
</div>
```

### Priority Selection
```handlebars
<section class="priority-settings">
    <h2>Task Priority</h2>
    {{> molecules-radio-button-group}}
</section>
```

### Theme Selection
```handlebars
<div class="theme-selector">
    <h3>Choose Theme</h3>
    {{> molecules-radio-button-group}}
</div>
```

## Accessibility

- **Semantic HTML**: Uses `<menu>` element with proper ARIA radiogroup role
- **ARIA Roles**: `role="radiogroup"` on container, `role="radio"` on items
- **Keyboard Navigation**: Arrow keys for navigation within group
- **Screen Reader**: Clear group announcements and selection states
- **Focus Management**: Proper focus indicators and roving tabindex
- **Label Association**: Each radio button properly associated with its label

## Keyboard Interactions

- **Tab**: Focus the radio button group (first or checked item)
- **Arrow Up/Down**: Navigate between radio button options
- **Arrow Left/Right**: Navigate between radio button options (alternative)
- **Space**: Select the focused radio button
- **Tab (from group)**: Move to next form element

## Form Integration

### Within Fieldset
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Select One Option</legend>
    {{> molecules-radio-button-group}}
</fieldset>
```

### With Validation
```handlebars
<div class="hoo-field" role="group">
    <div class="field-label">Preferred Contact Method *</div>
    {{> molecules-radio-button-group}}
    <output class="hoo-validation">Please select a contact method</output>
</div>
```

## JavaScript Integration

### Getting Selected Value

### Setting Value Programmatically

### Handling Change Events

## Validation

- **Required Selection**: Can enforce selection requirement
- **Custom Validation**: Support for custom validation rules
- **Real-time Feedback**: Validation updates as user makes selection
- **Group Validation**: Validates entire group rather than individual items

## Comparison with Checkbox Group

### Radio Button Group
- **Single Selection**: Only one option can be selected
- **Mutual Exclusivity**: Selecting one deselects others
- **Use Case**: When user must choose exactly one option

### Checkbox Group  
- **Multiple Selection**: Multiple options can be selected
- **Independent**: Each checkbox is independent
- **Use Case**: When user can choose zero or more options

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Graceful degradation with standard radio button behavior
- **Screen Readers**: Excellent support in NVDA, JAWS, VoiceOver
- **Mobile**: Optimized for touch interfaces and mobile screen readers

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`

**Molecule Styles:**
- `lib/sass/molecules/forms.scss`

## Performance

- **Lightweight**: Minimal CSS and HTML structure
- **No JavaScript**: Pure HTML/CSS implementation
- **Efficient Rendering**: Optimized for groups of radio buttons
- **Memory Efficient**: Clean DOM structure with minimal overhead
