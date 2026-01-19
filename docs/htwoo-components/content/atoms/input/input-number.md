---
title: "Number Input"
description: "A specialized input field for numeric data that includes increment and decrement controls."
type: "components"
layout: "single"
patternId: "atoms-input-input-number"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Number"
seoDescription: "Input Input Number Atoms"
weight: 12
hasVariants: false
markup: |
  
---

# Number Input

A specialized input field for numeric data that includes increment and decrement controls.

## Overview

The number input provides a specialized field for numerical data entry, with built-in validation and increment/decrement controls. It helps ensure that only valid numerical data is entered.

## Usage

Number inputs should be used when:
* The input must be a numeric value
* A specific range of values is allowed
* Increment/decrement functionality is helpful
* Preventing non-numeric input is important

## Attributes

* `min` - Specifies the minimum value allowed
* `max` - Specifies the maximum value allowed
* `step` - Specifies the interval between valid values
* `value` - Sets the default value

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Invalid** - When the input contains a value outside the allowed range

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-number` - Base number input class

## Accessibility

* Always associate with a `<label>` element
* Provide clear minimum and maximum values when applicable
* Ensure controls are usable with keyboard navigation
* When disabled, include `aria-disabled="true"`
* Consider adding `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes