---
title: "Invalid Text Input"
description: "A text input that indicates validation errors or invalid input."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-invalid"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Invalid"
seoDescription: "Input Input Text Invalid Atoms"
weight: 10.6
hasVariants: false
markup: |
  
---

# Invalid Text Input

A text input that indicates validation errors or invalid input.

## Overview

Invalid text inputs visually indicate that the entered value does not meet the required criteria or validation rules. This state provides immediate feedback to users about input problems.

## Usage

Invalid text inputs should be used when:
* The entered value does not meet validation requirements
* Form submission has been attempted with errors
* Real-time validation feedback is appropriate

## Visual Characteristics

Invalid inputs are visually distinct from valid inputs:
* Red border or highlight (ensuring sufficient color contrast)
* Often accompanied by an error message or icon
* May include additional validation message text

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class
* `.hoo-input--invalid` - Class for invalid state styling
* `.hoo-validation-message` - Class for the error message

## Accessibility

* Always include `aria-invalid="true"` for invalid inputs
* Connect error messages using `aria-describedby`
* Ensure error messages are clear and actionable
* Don't rely on color alone to indicate errors
* Consider when to trigger validation (on blur, on submit, etc.)