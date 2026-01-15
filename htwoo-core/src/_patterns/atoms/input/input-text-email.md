---
title: Email Input
order: 10.1
---

# Email Input

A specialized text input field designed specifically for email addresses.

## Overview

The email input provides a standardized way to collect valid email addresses. It offers built-in validation and may trigger specialized keyboard layouts on mobile devices to facilitate email address entry.

## Usage

Email inputs should be used when:
* The required input is specifically an email address
* Email format validation is needed
* Specialized keyboard layouts would benefit users on mobile devices

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only
* **Invalid** - When the input contains an improperly formatted email address

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class (shared with other text input types)

## Validation

The email input provides automatic browser validation for common email format errors. For more complex validation requirements, additional JavaScript validation may be necessary.

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions when necessary
* Use `aria-describedby` for additional guidance or error messages
* When disabled, include `aria-disabled="true"`
* Consider providing examples of valid format
