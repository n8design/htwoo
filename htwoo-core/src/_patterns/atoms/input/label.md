---
title: Form Label
order: 1
---

# Form Label

Labels provide text descriptions for form inputs, ensuring users understand the purpose of each field.

## Overview

Form labels are essential for usability and accessibility, giving users clear information about what data is expected in an input field. They establish a programmatic connection between the label text and the form control.

## Usage

Labels should be used:
* For every input field in a form
* With appropriate text that clearly describes the purpose of the field
* With a `for` attribute that matches the ID of the associated input

## Variants

* **Standard Label** - Basic text label for form fields
* **Required Label** - Label that indicates a required field (typically with an asterisk)
* **Disabled Label** - Visually muted label for disabled form fields

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-label` - Base label class
* `.hoo-label .is-required` - For required field labels
* `.hoo-label .is-disabled` - For disabled field labels

## Accessibility

* Always associate labels with their inputs using the `for` attribute
* Use clear, concise language that describes the field's purpose
* Indicate required fields both visually and programmatically
* Maintain sufficient color contrast for all label states
* Avoid using placeholder text as a substitute for labels
