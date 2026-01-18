---
title: Form Validation
order: 60
---

# Form Validation

HTWOO UI provides validation states and messaging components to communicate input requirements and errors to users.

## Overview

Form validation helps users input data correctly by providing clear feedback about validation requirements and errors. HTWOO UI includes styling for both validation states and validation messages to guide users through form completion.

## Validation States

HTWOO form elements support the following validation states:

### Invalid State

Indicates that the input data is incorrect or does not meet requirements.

```html
<label for="invalid-input">Email Address</label>
<input class="hoo-input-text is-invalid" type="email" id="invalid-input" name="invalid-input" value="not-an-email">
```

The `is-invalid` class can be applied to any input to show its invalid state. Native HTML validation using the `:invalid` pseudo-class is also supported.

### Valid State

Some browsers also display a valid state when input meets requirements. HTWOO supports this via the native `:valid` pseudo-class.

## Validation Messages

### Error Message

Provides specific feedback about validation errors.

```html
<div class="hoo-field">
  <label for="password-input">Password</label>
  <input class="hoo-input-text is-invalid" type="password" id="password-input" name="password">
  <div class="hoo-validation-message">Password must be at least 8 characters long.</div>
</div>
```

### Helper Text

Provides guidance or requirements for input fields.

```html
<div class="hoo-field">
  <label for="username-input">Username</label>
  <input class="hoo-input-text" type="text" id="username-input" name="username">
  <div class="hoo-input-description">Choose a username between 3-15 characters. Letters and numbers only.</div>
</div>
```

## Required Fields

Indicates fields that must be completed.

```html
<div class="hoo-field">
  <label for="required-input" class="required">Full Name</label>
  <input class="hoo-input-text" type="text" id="required-input" name="fullname" required>
</div>
```

The `required` attribute can be used on any input element, and the `required` class can be added to labels to display a visual indicator.

## Features

- Clear visual indication of validation states
- Descriptive error messages to guide correction
- Support for both client-side and server-side validation
- Consistent styling across different input types
- Accessibility considerations for error communication

## SCSS

**Component Import**

## Accessibility

- Error messages are properly associated with their inputs
- Color is not the only means of indicating errors
- Required fields are identified with both visual and programmatic indicators
- Focus is properly managed after validation
- Screen readers can access validation messages
