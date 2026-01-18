---
title: "Button Group"
description: "A collection of related buttons presented as a unified interface element. Button groups provide visual cohesion for related actions while maintaining clear separation between individual button functio"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-group"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Group"
seoDescription: "Buttons Button Group Atoms"
weight: 50
markup: |
  
---

# Button Group

A collection of related buttons presented as a unified interface element. Button groups provide visual cohesion for related actions while maintaining clear separation between individual button functions and states.

## Overview

The Button Group component organizes multiple buttons into a cohesive unit, commonly used for related actions, toggle states, or segmented controls. It provides consistent spacing, alignment, and visual treatment while preserving individual button accessibility and interaction states.

## Features

- **Unified Appearance**: Visually connected buttons with shared borders
- **Flexible Layout**: Horizontal and vertical orientation support
- **Consistent Spacing**: Optimized spacing between grouped buttons
- **State Management**: Individual button states within the group
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility Ready**: Maintains focus management and keyboard navigation
- **Visual Hierarchy**: Clear primary/secondary action differentiation

## Structure

The component consists of:
1. **Group Container**: `.hoo-button-group` - Main wrapper element
2. **Button Elements**: Individual buttons with group styling
3. **Separator Elements**: Visual dividers between buttons (when needed)
4. **State Indicators**: Active/selected state management

## Data Structure

```json
{
    "button-group": {
        "groupLabel": "File operations",
        "buttons": [
            {
                "label": "Save",
                "class": "hoo-button-primary",
                "disabled": false
            },
            {
                "label": "Cancel",
                "class": "hoo-button-standard",
                "disabled": false
            },
            {
                "label": "Delete",
                "class": "hoo-button-danger",
                "disabled": false
            }
        ]
    }
}
```

### Toggle Group Example

```json
{
    "button-group": {
        "groupLabel": "Text alignment",
        "options": [
            {
                "label": "Left",
                "value": "left",
                "active": true
            },
            {
                "label": "Center", 
                "value": "center",
                "active": false
            },
            {
                "label": "Right",
                "value": "right",
                "active": false
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-button-group`: Main group container
- `.hoo-button-group-vertical`: Vertical layout variant
- `.hoo-toggle-group`: Toggle functionality styling
- `.hoo-button-toggle`: Individual toggle button styling
- `.hoo-button-group .hoo-button`: Button styling within groups

## Styling

### Layout and Spacing
- **Button Spacing**: Connected borders with no gaps
- **Group Padding**: Consistent outer spacing
- **Border Handling**: Shared borders between buttons
- **Corner Radius**: Rounded corners on group ends only

### Visual Design

### State Management
- **Hover**: Individual button hover states
- **Focus**: Clear focus indicators within group
- **Active**: Selected state for toggle groups
- **Disabled**: Consistent disabled styling

## Use Cases

### Action Groups
```handlebars
<div class="document-actions">
    {{#button-group}}
    <div class="hoo-button-group" role="group" aria-label="Document actions">
        <button class="hoo-button hoo-button-primary">Save</button>
        <button class="hoo-button hoo-button-standard">Save As</button>
        <button class="hoo-button hoo-button-standard">Export</button>
    </div>
    {{/button-group}}
</div>
```

### Form Controls
```handlebars
<form class="settings-form">
    <div class="form-group">
        <label>Text Alignment</label>
        {{> atoms-button-group}}
    </div>
</form>
```

### Navigation Controls
```handlebars
<nav class="pagination-nav">
    {{#button-group}}
    <div class="hoo-button-group" role="group" aria-label="Pagination">
        <button class="hoo-button hoo-button-standard">Previous</button>
        <button class="hoo-button hoo-button-standard">1</button>
        <button class="hoo-button hoo-button-primary">2</button>
        <button class="hoo-button hoo-button-standard">3</button>
        <button class="hoo-button hoo-button-standard">Next</button>
    </div>
    {{/button-group}}
</nav>
```

### Toolbar Actions
```handlebars
<div class="editor-toolbar">
    {{#button-group}}
    <div class="hoo-button-group hoo-toggle-group" role="group" aria-label="Text formatting">
        <button class="hoo-button hoo-button-toggle" aria-pressed="false">Bold</button>
        <button class="hoo-button hoo-button-toggle" aria-pressed="false">Italic</button>
        <button class="hoo-button hoo-button-toggle" aria-pressed="false">Underline</button>
    </div>
    {{/button-group}}
</div>
```

## Button Types in Groups

### Primary Actions
- **Save/Submit**: Primary button styling
- **Create/Add**: Important positive actions
- **Apply/Confirm**: Commitment actions

### Secondary Actions
- **Cancel/Close**: Standard button styling
- **Edit/Modify**: Non-destructive modifications
- **View/Preview**: Information actions

### Destructive Actions
- **Delete/Remove**: Danger button styling
- **Reset/Clear**: Cautionary actions
- **Archive/Disable**: Significant changes

## Accessibility

- **ARIA Roles**: Proper `role="group"` and labeling
- **Keyboard Navigation**: Tab through individual buttons
- **Screen Reader Support**: Clear group announcements
- **Focus Management**: Logical focus order within group
- **State Announcements**: Toggle states properly announced
- **High Contrast**: Clear button boundaries in all modes

## Keyboard Interactions

- **Tab**: Navigate between button groups
- **Arrow Keys**: Navigate within toggle groups (optional)
- **Space/Enter**: Activate focused button
- **Escape**: Exit group focus (contextual)

## Responsive Behavior

### Mobile Adaptations

### Container Adaptations
- **Narrow Containers**: Stack buttons vertically
- **Wide Containers**: Maintain horizontal layout
- **Touch Targets**: Ensure adequate spacing for mobile

## Performance

- **Lightweight CSS**: Efficient styling with minimal overhead
- **Event Delegation**: Single event listener for group interactions
- **State Management**: Efficient toggle state handling
- **Render Optimization**: Minimal DOM manipulation

## Browser Support

- **Modern Browsers**: Full support across all contemporary browsers
- **Flexbox**: Excellent support for layout features
- **CSS Grid**: Alternative layout method support
- **Legacy Graceful**: Degrades to individual buttons

## SCSS Files

**Styles:**
- `lib/sass/atoms/buttons.scss`

## JavaScript Integration

### Toggle Group Management

## Best Practices

### Design Guidelines
- **Logical Grouping**: Group related actions together
- **Visual Hierarchy**: Use appropriate button styles for action importance
- **Consistent Sizing**: Maintain uniform button heights within groups
- **Clear Labels**: Use concise, descriptive button labels