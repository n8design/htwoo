---
title: Checkbox Group - Horizontal
order: 11
---

# Checkbox Group - Horizontal

A horizontal layout variant of the checkbox group component that arranges related checkbox controls in a single row. Optimized for compact forms and scenarios where horizontal space is available.

## Overview

The horizontal checkbox group component creates an accessible collection of checkbox controls arranged horizontally instead of vertically. This layout is ideal for compact forms, toolbar-style selections, or when screen real estate favors horizontal arrangement over vertical stacking.

## Features

- **Horizontal Layout**: Arranges checkboxes in a single row
- **Space Efficient**: Optimal use of horizontal space
- **Responsive Wrapping**: Wraps to multiple rows on smaller screens
- **Consistent Semantics**: Same accessibility features as vertical variant
- **Flexible Spacing**: Configurable gap between checkbox items
- **Touch Friendly**: Appropriate spacing for touch interfaces

## Structure

The component consists of:
1. **Container**: `<menu>` with `.hoo-checkbox-group.horizontal` classes
2. **List Items**: `<li>` elements containing individual checkboxes
3. **Checkboxes**: `{{>atoms-checkbox}}` components for each option

## Data Structure

```json
{
    "checkbox-group": {
        "items": [
            {
                "id": "filter-active",
                "name": "status-filters",
                "value": "active",
                "label": "Active",
                "checked": true
            },
            {
                "id": "filter-pending",
                "name": "status-filters",
                "value": "pending", 
                "label": "Pending",
                "checked": false
            },
            {
                "id": "filter-completed",
                "name": "status-filters",
                "value": "completed",
                "label": "Completed", 
                "checked": false
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-checkbox-group`: Base checkbox group styling
- `.hoo-checkbox-group.horizontal`: Horizontal layout modifier
- `.hoo-checkbox-group.horizontal.compact`: Reduced spacing variant
- `.hoo-checkbox-group.horizontal.wrap`: Allows wrapping on small screens

## Styling

### Layout
- **Direction**: Horizontal (row) layout using CSS flexbox
- **Spacing**: 24px gap between checkbox items (configurable)
- **Alignment**: Items aligned to container start
- **Wrapping**: Responsive wrapping on smaller screens

### Responsive Behavior
- **Large Screens**: Single row layout with full spacing
- **Medium Screens**: Single row with reduced spacing
- **Small Screens**: Wraps to multiple rows as needed
- **Mobile**: Stacks vertically on very small screens

## Use Cases

### Filter Controls
```handlebars
<div class="filter-bar">
    <label class="filter-label">Show:</label>
    {{> molecules-checkbox-group-horizontal}}
</div>
```

### Toolbar Options
```handlebars
<div class="toolbar">
    <div class="toolbar-section">
        <span class="toolbar-label">Options:</span>
        {{> molecules-checkbox-group-horizontal}}
    </div>
</div>
```

### Quick Settings
```handlebars
<section class="quick-settings">
    <h3>Display Options</h3>
    {{> molecules-checkbox-group-horizontal}}
</section>
```

### Inline Preferences
```handlebars
<div class="preferences-row">
    <span class="preference-label">Notifications:</span>
    {{> molecules-checkbox-group-horizontal}}
</div>
```

## Accessibility

### Same as Vertical Variant
- **Semantic HTML**: Uses `<menu>` element with proper list structure
- **ARIA Roles**: `role="checkbox"` on container
- **Keyboard Navigation**: Tab to group, arrow keys between options  
- **Screen Reader**: Clear group announcements
- **Focus Management**: Proper focus indicators

### Horizontal-Specific Considerations
- **Visual Scanning**: Horizontal layout supports left-to-right reading
- **Touch Targets**: Maintains minimum 44px touch targets
- **Spacing**: Adequate spacing prevents accidental selections

## Keyboard Interactions

- **Tab**: Focus the checkbox group
- **Arrow Left/Right**: Navigate between checkboxes horizontally
- **Arrow Up/Down**: Navigate between checkboxes (alternative)
- **Space**: Toggle the focused checkbox
- **Tab (from group)**: Move to next form element

## Responsive Design

### Breakpoint Behavior

## Form Integration

### Within Compact Forms
```handlebars
<form class="compact-form">
    <div class="form-row">
        <label>Categories:</label>
        {{> molecules-checkbox-group-horizontal}}
    </div>
</form>
```

### As Filter Interface
```handlebars
<div class="search-filters">
    <div class="filter-group">
        <h4>Content Type</h4>
        {{> molecules-checkbox-group-horizontal}}
    </div>
</div>
```

## When to Use Horizontal Layout

### Choose Horizontal When:
- **Limited Vertical Space**: When vertical space is constrained
- **Few Options**: Works best with 2-5 checkbox options
- **Toolbar Context**: Part of toolbar or action bar interfaces
- **Inline Filters**: When checkboxes are part of filter interfaces

### Choose Vertical When:
- **Many Options**: More than 5-6 checkbox options
- **Long Labels**: When checkbox labels are lengthy
- **Mobile-First**: When mobile experience is primary concern
- **Form Context**: Traditional form layouts favor vertical

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
