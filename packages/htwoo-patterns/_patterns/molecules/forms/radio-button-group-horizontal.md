---
title: Radio Button Group - Horizontal
order: 21
---

# Radio Button Group - Horizontal

A horizontal layout variant of the radio button group component that arranges related radio button controls in a single row. Optimized for compact forms and scenarios where horizontal space is available.

## Overview

The horizontal radio button group component creates an accessible collection of radio button controls arranged horizontally instead of vertically. This layout is ideal for compact forms, toolbar-style selections, or when screen real estate favors horizontal arrangement while maintaining single-selection functionality.

## Features

- **Horizontal Layout**: Arranges radio buttons in a single row
- **Single Selection**: Maintains mutual exclusivity across horizontal layout
- **Space Efficient**: Optimal use of horizontal space
- **Responsive Wrapping**: Wraps to multiple rows on smaller screens
- **Consistent Semantics**: Same accessibility features as vertical variant
- **Touch Friendly**: Appropriate spacing for touch interfaces

## Structure

The component consists of:
1. **Container**: `<menu>` with `.hoo-radiobutton-group.horizontal` classes
2. **List Items**: `<li>` elements with `role="radio"` containing individual radio buttons
3. **Radio Buttons**: `{{>atoms-radiobutton}}` components for each option

## Data Structure

```json
{
    "radiobutton-group": {
        "name": "priority-level",
        "items": [
            {
                "id": "priority-low",
                "name": "priority-level",
                "value": "low",
                "label": "Low",
                "checked": false
            },
            {
                "id": "priority-medium",
                "name": "priority-level",
                "value": "medium",
                "label": "Medium",
                "checked": true
            },
            {
                "id": "priority-high", 
                "name": "priority-level",
                "value": "high",
                "label": "High",
                "checked": false
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-radiobutton-group`: Base radio button group styling
- `.hoo-radiobutton-group.horizontal`: Horizontal layout modifier
- `.hoo-radiobutton-group.horizontal.compact`: Reduced spacing variant
- `.hoo-radiobutton-group.horizontal.wrap`: Allows wrapping on small screens

## Styling

### Layout
- **Direction**: Horizontal (row) layout using CSS flexbox
- **Spacing**: 24px gap between radio button items (configurable)
- **Alignment**: Items aligned to container start
- **Wrapping**: Responsive wrapping on smaller screens

### Responsive Behavior
- **Large Screens**: Single row layout with full spacing
- **Medium Screens**: Single row with reduced spacing
- **Small Screens**: Wraps to multiple rows as needed
- **Mobile**: Stacks vertically on very small screens

## Use Cases

### Size Selection
```handlebars
<div class="size-selector">
    <label id="size-label" class="selection-label">Size:</label>
    {{> molecules-radio-button-group-horizontal}}
</div>
```

### Rating Selection
```handlebars
<div class="rating-selector">
    <span class="rating-label">Rate this item:</span>
    {{> molecules-radio-button-group-horizontal}}
</div>
```

### Priority Selection
```handlebars
<div class="priority-selector">
    <h3>Priority Level</h3>
    {{> molecules-radio-button-group-horizontal}}
</div>
```

### View Mode Toggle
```handlebars
<div class="view-controls">
    <span class="control-label">View:</span>
    {{> molecules-radio-button-group-horizontal}}
</div>
```

## Accessibility

### Same as Vertical Variant
- **Semantic HTML**: Uses `<menu>` element with `role="radiogroup"`
- **ARIA Roles**: Proper radiogroup and radio roles
- **Keyboard Navigation**: Arrow key navigation between options
- **Screen Reader**: Clear group announcements and selection states
- **Focus Management**: Roving tabindex within group

### Horizontal-Specific Considerations
- **Visual Scanning**: Horizontal layout supports left-to-right reading
- **Touch Targets**: Maintains minimum 44px touch targets
- **Spacing**: Adequate spacing prevents accidental selections
- **Grouping**: Clear visual grouping despite horizontal layout

## Keyboard Interactions

- **Tab**: Focus the radio button group (first or selected item)
- **Arrow Left/Right**: Navigate between radio buttons horizontally
- **Arrow Up/Down**: Navigate between radio buttons (alternative)
- **Space**: Select the focused radio button
- **Tab (from group)**: Move to next form element

## Responsive Design

### Breakpoint Behavior

## Form Integration

### Within Compact Forms
```handlebars
<form class="product-form">
    <div class="form-row">
        <label>Color:</label>
        {{> molecules-radio-button-group-horizontal}}
    </div>
    <div class="form-row">
        <label>Size:</label>
        {{> molecules-radio-button-group-horizontal}}
    </div>
</form>
```

### As Selection Interface
```handlebars
<div class="selection-interface">
    <div class="selection-group">
        <h4>Delivery Speed</h4>
        {{> molecules-radio-button-group-horizontal}}
    </div>
</div>
```

## When to Use Horizontal Layout

### Choose Horizontal When:
- **Limited Vertical Space**: When vertical space is constrained
- **Few Options**: Works best with 2-5 radio button options
- **Short Labels**: When option labels are brief (1-2 words)
- **Toolbar Context**: Part of toolbar or control interfaces
- **Comparison**: When options are meant to be compared side-by-side

### Choose Vertical When:
- **Many Options**: More than 5-6 radio button options
- **Long Labels**: When radio button labels are lengthy
- **Mobile-First**: When mobile experience is primary concern
- **Form Context**: Traditional form layouts favor vertical stacking

## Single Selection Behavior

### Mutual Exclusivity
- Selecting any radio button deselects all others in the group
- Only one option can be selected at a time
- Selection state is maintained across layout changes

### JavaScript Behavior

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Flexbox**: Uses CSS flexbox for horizontal layout
- **Legacy Support**: Graceful degradation to vertical layout
- **Mobile**: Optimized responsive behavior for all screen sizes

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`

**Molecule Styles:**
- `lib/sass/molecules/forms.scss`

## Performance

- **CSS Flexbox**: Efficient native layout system
- **Minimal CSS**: Additional horizontal-specific styles only
- **Responsive**: Single component handles all screen sizes
- **Touch Optimized**: Optimized spacing for touch interfaces
