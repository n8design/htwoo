---
title: "Phone Input"
description: "A specialized text input field designed specifically for telephone numbers."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-phone"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Phone"
seoDescription: "Input Input Text Phone Atoms"
weight: 10.4
hasVariants: false
markup: |
  &lt;input class=&quot;hoo-input-text&quot; type=&quot;phone&quot; id=&quot;toggle-33&quot;   placeholder=&quot;555-8039&quot;  &gt;
---

# Phone Input

A specialized text input field designed specifically for telephone numbers.

## Overview

The phone input provides a standardized way to collect telephone numbers. It triggers a numeric keyboard on mobile devices and can provide format validation for phone numbers.

## Usage

Phone inputs should be used when:
* The required input is specifically a telephone number
* Phone format validation is helpful
* A numeric keyboard would benefit users on mobile devices

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only
* **Invalid** - When the input contains an improperly formatted phone number

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class (shared with other text input types)

## Validation

Unlike email or URL inputs, the telephone input (`type="tel"`) does not provide automatic format validation since phone formats vary by region. Consider implementing pattern validation or using a masking library for consistent formatting.

## Input Masking

For phone number inputs, consider using input masking to ensure consistent formatting. The HTWOO library references [input-masking](https://github.com/estelle/input-masking) as a potential solution.

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions (e.g., include country code)
* Use `aria-describedby` for additional guidance or error messages
* When disabled, include `aria-disabled="true"`
* Consider providing examples of valid format