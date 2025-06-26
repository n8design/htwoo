---
title: Disabled Form Label
order: 1.2
---

# Disabled Form Label

Labels associated with disabled form inputs, visually indicating that the field is not interactive.

## Overview

Disabled form labels provide a visual indication that the associated form field is not currently available for user interaction. They typically appear grayed out or with reduced opacity to match the disabled state of their associated inputs.

## Usage

Disabled form labels should be used when:
* The associated input field is disabled
* The form field is not relevant in the current context
* The form field is shown for reference but not meant to be edited

## Visual Characteristics

Disabled labels typically include:
* Reduced opacity or grayed-out text
* Consistent styling to match disabled form controls
* Visual indication that the field is not interactive

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-label` - Base label class
* `.hoo-label--disabled` - Modifier class for disabled field labels

## Accessibility

* Always ensure the associated input has both `disabled` and `aria-disabled="true"` attributes
* Maintain sufficient color contrast even in the disabled state
* Consider providing context for why the field is disabled if it's not obvious
* Remember that disabled inputs and their values are not submitted with the form
