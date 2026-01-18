---
title: URL Input
order: 10.3
---

# URL Input

A specialized text input field designed specifically for web addresses.

## Overview

The URL input provides a standardized way to collect valid web addresses. It offers built-in validation and may trigger specialized keyboard layouts on mobile devices to facilitate URL entry.

## Usage

URL inputs should be used when:
* The required input is specifically a web address
* URL format validation is needed
* Specialized keyboard layouts would benefit users on mobile devices

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only
* **Invalid** - When the input contains an improperly formatted URL

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class (shared with other text input types)

## Validation

The URL input provides automatic browser validation for common URL format errors. For more complex validation requirements, additional JavaScript validation may be necessary.

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions (e.g., include https://)
* Use `aria-describedby` for additional guidance or error messages
* When disabled, include `aria-disabled="true"`
* Consider providing examples of valid format
