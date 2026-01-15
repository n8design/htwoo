---
title: Disabled Text Input
order: 10.5
---

# Disabled Text Input

A text input in the disabled state, which prevents user interaction.

## Overview

Disabled text inputs visually indicate that a form control is not currently available for interaction. They are typically grayed out and do not receive focus or allow input.

## Usage

Disabled text inputs should be used when:
* The input is not relevant to the current context
* The input is not available due to certain conditions
* The value is shown for reference only and should not be changed

## Visual Characteristics

Disabled inputs are visually distinct from enabled inputs:
* Reduced opacity or grayed-out appearance
* No hover or focus states
* Cursor indicates the element is not interactive

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class
* `.hoo-input--disabled` - Class for disabled styling (optional, the `disabled` attribute also applies styling)

## Accessibility

* Always include both the `disabled` attribute and `aria-disabled="true"` 
* Consider whether a readonly state might be more appropriate than disabled
* Provide context for why the field is disabled when necessary
* Remember that disabled fields are not submitted with the form
* Consider disabling associated labels for visual consistency
