---
title: Form Field
order: 40
---

# Form Field

A complete form field component that combines a label, input control, optional description, and validation message into a cohesive, accessible unit. Provides consistent styling and semantic structure for individual form inputs.

## Overview

The field component creates a complete form input experience by combining multiple atomic components (label, input, description, validation) into a single, reusable unit. It ensures proper accessibility relationships and consistent visual styling across all form inputs.

## Features

- **Complete Field Structure**: Includes label, input, description, and validation
- **Accessibility**: Proper ARIA relationships between all field elements
- **Semantic Markup**: Uses appropriate HTML structure with `role="group"`
- **Flexible Input Types**: Supports any input type through atomic components
- **Validation Integration**: Built-in validation message display
- **Responsive Design**: Mobile-optimized layout and touch targets

## Structure

The component consists of:
1. **Container**: `<div>` with `.hoo-field` class and `role="group"`
2. **Label**: `{{>atoms-label}}` - Field label component
3. **Input**: `{{>atoms-input-text}}` - Input control component
4. **Description**: `{{>atoms-input-description}}` - Optional help text
5. **Validation**: `{{>atoms-validation-message}}` - Error/success messages

## Data Structure

```json
{
    "field": {
        "label": {
            "text": "Email Address",
            "for": "email-input",
            "required": true
        },
        "input": {
            "type": "email",
            "id": "email-input",
            "name": "email",
            "placeholder": "Enter your email address",
            "required": true,
            "description": {
                "text": "We'll use this to send you important updates"
            },
            "error": {
                "text": "Please enter a valid email address"
            }
        }
    }
}
```

## CSS Classes

- `.hoo-field`: Main field container
- `.hoo-field.error`: Field in error state
- `.hoo-field.success`: Field in success state
- `.hoo-field.disabled`: Disabled field state
- `.hoo-field.required`: Required field styling

## Styling

### Visual Design
- **Container**: Flexible column layout with consistent spacing
- **Spacing**: 8px gap between label, input, description, and validation
- **Width**: Full width by default, responsive to container
- **Alignment**: Left-aligned content with proper visual hierarchy

### Layout
- **Direction**: Vertical stacking (column) layout
- **Gap**: 8px between child elements
- **Margins**: 16px bottom margin between fields
- **Responsive**: Stacks efficiently on mobile devices

### States
- **Default**: Standard neutral appearance
- **Focus**: Highlighted input with focus ring
- **Error**: Red accent color for validation states
- **Success**: Green accent color for successful validation
- **Disabled**: Reduced opacity and disabled interactions

## Use Cases

### Basic Text Input
```handlebars
{{#field}}
<div class="hoo-field" role="group">
  <label class="hoo-label" for="name">Full Name</label>
  <input class="hoo-input" type="text" id="name" name="name" />
</div>
{{/field}}
```

### Email with Description
```handlebars
{{#field}}
<div class="hoo-field" role="group">
  <label class="hoo-label required" for="email">Email Address</label>
  <input class="hoo-input" type="email" id="email" name="email" required />
  <p class="hoo-input-description">We'll never share your email</p>
</div>
{{/field}}
```

### Field with Validation
```handlebars
{{#field}}
<div class="hoo-field error" role="group">
  <label class="hoo-label" for="password">Password</label>
  <input class="hoo-input" type="password" id="password" name="password" />
  <output class="hoo-validation">Password must be at least 8 characters</output>
</div>
{{/field}}
```

## Accessibility

- **Semantic Structure**: Uses `role="group"` for field grouping
- **Label Association**: Proper `for` attribute linking labels to inputs
- **Description Linking**: `aria-describedby` connects descriptions to inputs
- **Validation Linking**: `aria-describedby` includes validation message IDs
- **Screen Reader**: Clear announcement of field purpose and state
- **Keyboard Navigation**: Standard tab order through field elements
- **Required Fields**: Proper `required` attribute and visual indicators

## Validation

- **Real-time Validation**: Updates validation state as user types
- **Error Messages**: Clear, actionable error messaging
- **Success States**: Positive feedback for valid inputs
- **Multiple Errors**: Support for multiple validation messages
- **Accessibility**: Screen reader announcements for validation changes

## Form Integration

- **Field Groups**: Works within `molecules-fieldset` components
- **Form Layouts**: Integrates with various form layout patterns
- **Data Binding**: Supports two-way data binding in frameworks
- **Validation Libraries**: Compatible with form validation libraries

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Progressive Enhancement**: Graceful degradation in older browsers
- **Mobile Browsers**: Optimized for mobile form interaction
- **Touch Devices**: Appropriate touch targets and mobile keyboards

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/forms.scss`
- `lib/sass/atoms/input.scss`

**Molecule Styles:**
- `lib/sass/molecules/forms.scss`

## Performance

- **Lightweight**: Minimal CSS footprint
- **No JavaScript**: Pure HTML/CSS implementation
- **Server Rendering**: Optimized for server-side rendering
- **Lazy Loading**: Can be loaded on-demand for form interactions
