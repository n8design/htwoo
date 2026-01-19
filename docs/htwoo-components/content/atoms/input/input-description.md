---
title: "Input Description"
description: "A helper text component that provides additional context, instructions, or explanations for form inputs. Enhances user understanding and improves form completion rates through clear, accessible guidan"
type: "components"
layout: "single"
patternId: "atoms-input-input-description"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Description"
seoDescription: "Input Input Description Atoms"
weight: 91
hasVariants: false
markup: |
  
---

# Input Description

A helper text component that provides additional context, instructions, or explanations for form inputs. Enhances user understanding and improves form completion rates through clear, accessible guidance.

## Overview

The input description component provides supplementary information for form fields, helping users understand what information is expected, formatting requirements, or additional context. It uses semantic HTML and proper ARIA relationships for accessibility.

## Features

- **Semantic HTML**: Uses `<p>` element for proper text semantics
- **ARIA Integration**: Linked to form controls via `aria-describedby`
- **Dynamic IDs**: Auto-generates unique IDs for proper relationships
- **Conditional Rendering**: Only renders when description content exists
- **HTML Content Support**: Allows rich text formatting within descriptions
- **Responsive Design**: Adapts to different screen sizes and layouts

## Structure

The component consists of:
1. **Container**: `<p>` element with `.hoo-input-description` class
2. **ID Generation**: Dynamic ID based on `descRef` and numeric suffix
3. **Content**: HTML or text content providing guidance

## Data Structure

```json
{
    "input": {
        "description": {
            "text": "Enter your full legal name as it appears on official documents",
            "descRef": "fullname"
        }
    }
}
```

### With HTML Content

```json
{
    "input": {
        "description": {
            "text": "Password must contain:<br>• At least 8 characters<br>• One uppercase letter<br>• One lowercase letter<br>• One number",
            "descRef": "password"
        }
    }
}
```

## CSS Classes

- `.hoo-input-description`: Base description styling
- `.hoo-input-description.emphasized`: Emphasized styling for important instructions
- `.hoo-input-description.subtle`: Subdued styling for optional guidance
- `.hoo-input-description.error`: Error-related description styling

## Styling

### Visual Design
- **Typography**: 12px font size, 16px line height
- **Color**: `#605e5c` (neutral gray) for standard descriptions
- **Spacing**: 4px top margin from input, 8px bottom margin
- **Width**: Full width of parent container

### Layout
- **Position**: Appears below the associated form control
- **Alignment**: Left-aligned text
- **Responsive**: Wraps text appropriately on small screens
- **Spacing**: Consistent vertical rhythm with other form elements

### Variants
- **Default**: Standard neutral gray text
- **Emphasized**: Darker text for important instructions
- **Subtle**: Lighter text for optional guidance
- **Error**: Red-tinted text for error-related descriptions

## Use Cases

### Format Instructions
```handlebars
<label for="phone">Phone Number</label>
<input type="tel" id="phone" aria-describedby="phone-desc" />
{{#input.description}}
<p class="hoo-input-description" id="phone-desc">
    Please enter your phone number in the format (555) 123-4567
</p>
{{/input.description}}
```

### Password Requirements
```handlebars
<label for="password">New Password</label>
<input type="password" id="password" aria-describedby="password-desc" />
{{#input.description}}
<p class="hoo-input-description" id="password-desc">
    Password must be at least 8 characters and include uppercase, lowercase, and numbers
</p>
{{/input.description}}
```

### Data Usage Explanation
```handlebars
<label for="email">Email Address</label>
<input type="email" id="email" aria-describedby="email-desc" />
{{#input.description}}
<p class="hoo-input-description" id="email-desc">
    We'll only use your email for account notifications and security alerts
</p>
{{/input.description}}
```

### File Upload Guidelines
```handlebars
<label for="avatar">Profile Picture</label>
<input type="file" id="avatar" aria-describedby="avatar-desc" accept="image/*" />
{{#input.description}}
<p class="hoo-input-description" id="avatar-desc">
    Supported formats: JPG, PNG, GIF. Maximum size: 2MB
</p>
{{/input.description}}
```

## Accessibility

- **Semantic Structure**: Uses `<p>` element for proper text semantics
- **ARIA Relationships**: Connected to form controls via `aria-describedby`
- **Screen Reader Support**: Automatically read when user focuses on input
- **Unique IDs**: Generated IDs prevent conflicts in complex forms
- **Clear Language**: Uses plain language for better comprehension
- **Multiple Descriptions**: Supports multiple description blocks per input

## Dynamic ID Generation

The component uses `getLastNumericId` helper to generate unique IDs:

```handlebars
{{#if descRef}}id="{{ descRef }}-{{ getLastNumericId }}"{{/if}}
```

This ensures multiple descriptions have unique identifiers for proper ARIA relationships.

## Integration Examples

### With Validation
```handlebars
<label for="username">Username</label>
<input type="text" id="username" aria-describedby="username-desc username-error" />
{{#input.description}}
<p class="hoo-input-description" id="username-desc">
    Username must be 3-20 characters and contain only letters, numbers, and underscores
</p>
{{/input.description}}
{{#input.error}}
<output class="hoo-validation" id="username-error">Username is already taken</output>
{{/input.error}}
```

### Within Field Component
```handlebars
{{#field}}
<div class="hoo-field" role="group">
    <label class="hoo-label" for="email">Email Address</label>
    <input class="hoo-input" type="email" id="email" aria-describedby="email-desc" />
    {{>atoms-input-description}}
</div>
{{/field}}
```

## Content Guidelines

### Writing Effective Descriptions
- **Be Concise**: Keep descriptions brief but informative
- **Use Plain Language**: Avoid technical jargon when possible
- **Be Specific**: Provide concrete examples when helpful
- **Consider Context**: Tailor descriptions to user's knowledge level

### Formatting Guidelines
- **Use Lists**: For multiple requirements or options
- **Bold Important Info**: Emphasize critical requirements
- **Include Examples**: Show expected formats or values
- **Link to Help**: Reference detailed help documentation when needed

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Browsers**: Graceful degradation with standard `<p>` element
- **Screen Readers**: Excellent support in NVDA, JAWS, VoiceOver
- **Mobile**: Optimized for mobile screen readers and touch interfaces

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`
- `lib/sass/atoms/forms.scss`

## Performance

- **Lightweight**: Minimal CSS with no JavaScript dependencies
- **Conditional Rendering**: Only renders when description content exists
- **Efficient DOM**: Uses single `<p>` element
- **Server Rendering**: Fully compatible with server-side rendering