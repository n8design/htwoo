---
title: "Password Input"
description: "A specialized text input field designed for secure password entry."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-password"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Password"
seoDescription: "Input Input Text Password Atoms"
weight: 10.2
hasVariants: false
markup: |
  &lt;input class=&quot;hoo-input-text&quot; type=&quot;password&quot; id=&quot;toggle-33&quot;   placeholder=&quot;https://example.com&quot;  &gt;
---

# Password Input

A specialized text input field designed for secure password entry.

## Overview

The password input provides a secure way to collect sensitive information by masking the entered characters. It may include additional features like password visibility toggling and strength indicators.

## Usage

Password inputs should be used when:
* The input contains sensitive information that should be masked
* Secure credential entry is required
* User privacy during input is important

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Invalid** - When the password doesn't meet required criteria

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class (shared with other text input types)

## Security Considerations

* Consider implementing password strength indicators
* Avoid storing passwords in plain text
* Consider providing a "show password" toggle option for better usability
* Do not disable paste functionality (it hinders password managers)

## Accessibility

* Always associate with a `<label>` element
* Provide clear password requirements
* If validation errors occur, ensure error messages are associated properly
* When disabled, include `aria-disabled="true"`
* Consider adding `autocomplete="new-password"` for new password fields and `autocomplete="current-password"` for existing password entry