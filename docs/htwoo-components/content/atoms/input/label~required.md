---
title: "Required Form Label"
description: "Labels that indicate form fields which are mandatory for form submission."
type: "components"
layout: "single"
patternId: "atoms-input-label~required"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Label~required"
seoDescription: "Input Label~required Atoms"
weight: 1.1
markup: |
  
---

# Required Form Label

Labels that indicate form fields which are mandatory for form submission.

## Overview

Required form labels visually indicate that the associated form field must be completed before the form can be submitted. They typically include an asterisk or other indicator to differentiate them from optional fields.

## Usage

Required form labels should be used when:
* The form field must be completed before submission
* Users need to clearly understand which fields are mandatory
* Validation will be performed to ensure the field is not empty

## Visual Characteristics

Required labels typically include:
* An asterisk (*) or other visual indicator
* Consistent styling across all required fields in the form
* Clear visual distinction from optional fields

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-label` - Base label class
* `.hoo-label--required` - Modifier class for required field labels
* `.hoo-required-indicator` - Class for the required symbol (typically an asterisk)

## Accessibility

* Use both the `required` and `aria-required="true"` attributes on the input
* Consider adding a note explaining that fields marked with an asterisk are required
* Ensure the required indicator has sufficient color contrast
* Don't rely solely on color to indicate required fields
* Error handling should clearly indicate which required fields are missing