---
title: "Validation Message"
description: "An accessible validation feedback component that displays error messages, success notifications, and other form validation states. Uses semantic HTML output element for proper screen reader announceme"
type: "components"
layout: "single"
patternId: "atoms-input-validation-message"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Validation Message"
seoDescription: "Input Validation Message Atoms"
weight: 90
hasVariants: false
markup: |
  &lt;output class=&quot;hoo-validation&quot; id=&quot;field-x-error-42&quot; &gt;lorem ipsum dolor sit amet, consectetur adipiscing elit&lt;/output&gt;
---

# Validation Message

An accessible validation feedback component that displays error messages, success notifications, and other form validation states. Uses semantic HTML output element for proper screen reader announcements.

## Overview

The validation message component provides accessible feedback for form validation states. It uses the semantic `<output>` element to ensure screen readers announce validation changes dynamically, improving the user experience for all users.

## Features

- **Semantic HTML**: Uses `<output>` element for proper accessibility
- **Dynamic IDs**: Auto-generates unique IDs for ARIA relationships
- **Screen Reader Support**: Automatic announcements of validation changes
- **Conditional Rendering**: Only renders when validation error exists
- **ARIA Integration**: Proper linking with form controls via `aria-describedby`
- **Visual States**: Supports error, warning, and success states

## Structure

The component consists of:
1. **Container**: `<output>` element with `.hoo-validation` class
2. **ID Generation**: Dynamic ID based on `errorRef` and numeric suffix
3. **Content**: Validation message text

## Data Structure

```json
{
    "input": {
        "error": {
            "text": "This field is required",
            "errorRef": "username"
        }
    }
}
```

### Multiple Validation States

```json
{
    "input": {
        "error": {
            "text": "Password must contain at least 8 characters, one uppercase letter, and one number",
            "errorRef": "password",
            "type": "error"
        }
    }
}
```

## CSS Classes

- `.hoo-validation`: Base validation message styling
- `.hoo-validation.error`: Error state (red styling)
- `.hoo-validation.warning`: Warning state (amber styling)  
- `.hoo-validation.success`: Success state (green styling)
- `.hoo-validation.info`: Information state (blue styling)

## Styling

### Visual Design
- **Error Color**: `#d13438` (red) for error messages
- **Warning Color**: `#ff8c00` (amber) for warnings
- **Success Color**: `#107c10` (green) for success messages
- **Info Color**: `#0078d4` (blue) for informational messages
- **Typography**: 12px font size, 16px line height
- **Icon**: Optional status icon before text

### Layout
- **Position**: Appears below the associated form control
- **Spacing**: 4px top margin from input
- **Width**: Full width of parent container
- **Alignment**: Left-aligned text

### Animation
- **Fade In**: Smooth appearance when validation triggers
- **Fade Out**: Graceful removal when validation clears
- **Height Transition**: Smooth height change to prevent layout shift

## Use Cases

### Required Field Validation
```handlebars
<label for="email">Email Address *</label>
<input type="email" id="email" aria-describedby="email-error" required />
{{#input.error}}
<output class="hoo-validation error" id="email-error">Email address is required</output>
{{/input.error}}
```

### Format Validation
```handlebars
<label for="phone">Phone Number</label>
<input type="tel" id="phone" aria-describedby="phone-error" />
{{#input.error}}
<output class="hoo-validation error" id="phone-error">Please enter a valid phone number (e.g., 555-123-4567)</output>
{{/input.error}}
```

### Success Feedback
```handlebars
<label for="username">Username</label>
<input type="text" id="username" aria-describedby="username-success" />
{{#input.success}}
<output class="hoo-validation success" id="username-success">Username is available!</output>
{{/input.success}}
```

### Password Strength
```handlebars
<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-info" />
{{#input.info}}
<output class="hoo-validation info" id="password-info">Password strength: Strong</output>
{{/input.info}}
```

## Accessibility

- **Semantic Element**: Uses `<output>` element for live announcements
- **ARIA Live**: Automatically announces changes to screen readers
- **Unique IDs**: Generated IDs prevent conflicts in complex forms
- **Linked Controls**: Connected to form controls via `aria-describedby`
- **Clear Language**: Uses plain language for validation messages
- **Color Independence**: Doesn't rely solely on color for meaning

## Validation Integration

### Client-Side Validation

### Server-Side Validation
```handlebars
{{#if validationErrors.email}}
{{#input.error}}
<output class="hoo-validation error" id="email-error">{{validationErrors.email}}</output>
{{/input.error}}
{{/if}}
```

## Dynamic ID Generation

The component uses `getLastNumericId` helper to generate unique IDs:

```handlebars
{{#if errorRef}}id="{{ errorRef }}-{{ getLastNumericId }}"{{/if}}
```

This ensures multiple validation messages have unique identifiers for proper ARIA relationships.

## Browser Support

- **Modern Browsers**: Full support for `<output>` element in Chrome, Firefox, Safari, Edge
- **Legacy Browsers**: Graceful degradation with `<div>` fallback styling
- **Screen Readers**: Excellent support in NVDA, JAWS, VoiceOver
- **Mobile**: Optimized for mobile screen readers and touch interfaces

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`
- `lib/sass/atoms/forms.scss`

## Performance

- **Minimal Footprint**: Lightweight CSS with no JavaScript dependencies
- **Conditional Rendering**: Only renders when validation state exists
- **Efficient DOM**: Uses single `<output>` element
- **No Layout Shift**: Proper spacing prevents content jumping