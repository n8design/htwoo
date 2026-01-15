---
title: Checkbox Group
order: 10
---

# Checkbox Group

A semantic container for grouping related checkbox controls with proper accessibility semantics. Provides consistent styling and keyboard navigation for multiple checkbox selections within forms.

## Overview

The checkbox group component creates an accessible collection of checkbox controls using semantic HTML with proper ARIA roles. It enables users to select multiple options from a related set of choices while maintaining keyboard navigation and screen reader compatibility.

## Features

- **Semantic Structure**: Uses `<menu>` element with proper ARIA roles
- **Keyboard Navigation**: Full keyboard support with tab and arrow key navigation
- **Multiple Selection**: Supports selecting multiple checkbox options
- **Screen Reader Support**: Proper announcements and group context
- **Flexible Layout**: Supports vertical stacking and custom layouts
- **Individual Control**: Each checkbox can be independently controlled

## Structure

The component consists of:
1. **Container**: `<menu>` with `.hoo-checkbox-group` class and `role="checkbox"`
2. **List Items**: `<li>` elements containing individual checkboxes
3. **Checkboxes**: `{{>atoms-checkbox}}` components for each option

## Data Structure

```json
{
    "checkbox-group": {
        "items": [
            {
                "id": "notify-email",
                "name": "notifications",
                "value": "email",
                "label": "Email notifications",
                "checked": true
            },
            {
                "id": "notify-sms", 
                "name": "notifications",
                "value": "sms",
                "label": "SMS notifications",
                "checked": false
            },
            {
                "id": "notify-push",
                "name": "notifications", 
                "value": "push",
                "label": "Push notifications",
                "checked": false
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-checkbox-group`: Main container styling
- `.hoo-checkbox-group.horizontal`: Horizontal layout variant
- `.hoo-checkbox-group.columns`: Multi-column layout variant
- `.hoo-checkbox-group.compact`: Compact spacing variant

## Styling

### Visual Design
- **Layout**: Vertical stacking by default
- **Spacing**: 12px gap between checkbox items
- **Padding**: Container padding for proper spacing
- **Alignment**: Left-aligned checkboxes with proper label alignment

### Interactive States
- **Focus**: Focus ring on the group container
- **Individual Focus**: Each checkbox maintains its own focus state
- **Hover**: Subtle hover effects on checkbox items
- **Selection**: Clear visual indication of checked items

## Use Cases

### Preferences Settings
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Notification Preferences</legend>
    {{#checkbox-group}}
    <menu class="hoo-checkbox-group" role="checkbox" tabindex="0">
        <!-- Email, SMS, Push notification checkboxes -->
    </menu>
    {{/checkbox-group}}
</fieldset>
```

### Permission Selection
```handlebars
<div class="permission-selector">
    <h3>User Permissions</h3>
    {{> molecules-checkbox-group}}
</div>
```

### Feature Toggles
```handlebars
<section class="feature-settings">
    <h2>Features</h2>
    {{> molecules-checkbox-group}}
</section>
```

### Multi-select Filters
```handlebars
<div class="filter-panel">
    <h3>Categories</h3>
    {{> molecules-checkbox-group}}
</div>
```

## Accessibility

- **Semantic HTML**: Uses `<menu>` element with proper list structure
- **ARIA Roles**: `role="checkbox"` on container, proper roles throughout
- **Keyboard Navigation**: Tab to group, arrow keys between options
- **Screen Reader**: Clear group announcements and individual checkbox states
- **Focus Management**: Proper focus indicators and keyboard interaction
- **Label Association**: Each checkbox properly associated with its label

## Keyboard Interactions

- **Tab**: Focus the checkbox group
- **Arrow Keys**: Navigate between individual checkboxes
- **Space**: Toggle the focused checkbox
- **Enter**: Toggle the focused checkbox (alternative)
- **Tab (from group)**: Move to next form element

## Form Integration

### Within Fieldset
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Select Options</legend>
    {{> molecules-checkbox-group}}
</fieldset>
```

### With Validation
```handlebars
<div class="hoo-field" role="group">
    <div class="field-label">Required Preferences *</div>
    {{> molecules-checkbox-group}}
    <output class="hoo-validation">Please select at least one option</output>
</div>
```

## JavaScript Integration

### Getting Selected Values

### Setting Values Programmatically

## Validation

- **Required Selection**: Can enforce minimum selection requirements
- **Maximum Selection**: Can limit maximum number of selections
- **Custom Validation**: Support for custom validation rules
- **Real-time Feedback**: Validation updates as user makes selections

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Graceful degradation with standard checkbox behavior
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
- **Efficient Rendering**: Optimized for large numbers of checkboxes
- **Memory Efficient**: Clean DOM structure with minimal overhead
