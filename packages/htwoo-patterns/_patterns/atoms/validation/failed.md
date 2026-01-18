---
title: Error Message
---

## Overview
Error messages provide feedback to users when their input fails validation or when a form submission encounters an error. This component displays an error message with a characteristic color that helps users identify issues that need correction.

## Usage
Error messages should be associated with the specific form element they refer to using proper ARIA attributes. The `errorRelationID` should match the `aria-describedby` attribute on the corresponding input field.

Example:
```html
<div>
  <label for="username">Username</label>
  <input type="text" id="username" name="username" aria-describedby="username-error" class="hoo-input">
  <span class="hoo-error" id="username-error">Username already exists</span>
</div>
```

## CSS Classes

- `.hoo-error`: The main class for error message styling

## SCSS Variables and Properties

- Color: Uses the `$errorText` color variable
- Font size: 12px (converted to rem)

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/form

## Accessibility

- Error messages should be associated with form controls using `aria-describedby` or `aria-errormessage`
- The message should be clear, concise, and provide direction on how to fix the issue
- The error message should be visible both visually and to screen readers
