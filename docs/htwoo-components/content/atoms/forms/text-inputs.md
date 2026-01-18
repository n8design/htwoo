---
title: "Text Input Elements"
description: "HTWOO UI provides a variety of text input elements for collecting different types of text-based data from users."
type: "components"
layout: "single"
patternId: "atoms-forms-text-inputs"
category: "atoms"
subcategory: "forms"
seoTitle: "Atoms - Forms Text Inputs"
seoDescription: "Forms Text Inputs Atoms"
weight: 10
markup: |
  
---

# Text Input Elements

HTWOO UI provides a variety of text input elements for collecting different types of text-based data from users.

## Overview

Text input elements are the foundation of form interfaces, allowing users to enter various types of text data. HTWOO UI offers a consistent styling approach across different specialized text inputs, ensuring a cohesive user experience while providing the right input type for each data need.

## Text Input Types

### Standard Text Input

The basic text input is used for general single-line text entry.

```html
<label for="standard-text">Standard Text</label>
<input class="hoo-input-text" id="standard-text" type="text" placeholder="Enter text">
```

### Email Input

Specialized for email address entry with built-in validation.

```html
<label for="email-input">Email Address</label>
<input class="hoo-input-text" id="email-input" type="email" placeholder="name@example.com">
```

### Password Input

Secure input field that masks character entry.

```html
<label for="password-input">Password</label>
<input class="hoo-input-text" id="password-input" type="password" placeholder="Enter password">
```

### URL Input

Specialized for web address entry with validation.

```html
<label for="url-input">Website</label>
<input class="hoo-input-text" id="url-input" type="url" placeholder="https://example.com">
```

### Phone Input

Optimized for phone number entry.

```html
<label for="phone-input">Phone Number</label>
<input class="hoo-input-text" id="phone-input" type="tel" placeholder="(123) 456-7890">
```

### Textarea

Multi-line text input for longer content.

```html
<label for="textarea">Comments</label>
<textarea class="hoo-input-text" id="textarea" rows="4" placeholder="Enter comments"></textarea>
```

## Features

- Consistent styling across all text input types
- Clear focus states for keyboard navigation
- Support for placeholder text
- Validation states with appropriate styling
- Support for readonly and disabled states
- Responsive width that adapts to containers

## States

All text inputs support the following states:

- **Default**: Normal input state
- **Focus**: Visual indication when the input has focus
- **Disabled**: Visually and functionally disabled state
- **Readonly**: Non-editable but still selectable state
- **Invalid**: Visual indication of validation errors
- **Required**: Indicates the field must be filled

## SCSS Files

**Input Styles:**
- `lib/sass/01-atoms/input/`

## Accessibility

- Always pair inputs with proper labels
- Use appropriate input types for validation
- Ensure proper color contrast
- Provide clear error messages for invalid inputs
- Support keyboard navigation