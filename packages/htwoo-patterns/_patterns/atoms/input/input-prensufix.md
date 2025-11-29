---
title: Input with Prefix and Suffix
order: 14
---

# Input with Prefix and Suffix

A text input field with both prefix and suffix elements attached.

## Overview

This component extends the standard text input by adding visual elements before and after the input field, typically used for units, currency symbols, domain prefixes, or other contextual information about the expected input format.

## Usage

Inputs with prefix and suffix should be used when:
* The input requires context at both the beginning and end
* Format restrictions need to be visually indicated
* Domain or unit specifications need to be clearly shown

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Invalid** - When the input contains invalid data

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-group` - Container for the input with prefix/suffix
* `.hoo-input-text` - The text input element
* `.hoo-input-prefix` - The prefix element
* `.hoo-input-suffix` - The suffix element

## Accessibility

* Always associate the input with a `<label>` element
* Ensure the prefix and suffix are clearly connected to the input visually and semantically
* Use `aria-describedby` if the prefix/suffix provides important information
* When disabled, include `aria-disabled="true"`
