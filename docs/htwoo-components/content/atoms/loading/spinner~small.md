---
title: "Small Spinner"
description: "A smaller variant of the circular loading indicator for compact UI elements."
type: "components"
layout: "single"
patternId: "atoms-loading-spinner~small"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Spinner~small"
seoDescription: "Loading Spinner~small Atoms"
weight: 32
markup: |
  
---

# Small Spinner

A smaller variant of the circular loading indicator for compact UI elements.

## Overview

The small spinner is a reduced-size version of the standard spinner component, designed for scenarios where space is limited but loading state feedback is still needed.

## Usage

Small spinners should be used when:
* Space is constrained in the UI
* Loading occurs within a smaller component or element
* The loading indicator needs to be subtle or less prominent
* Inline with text or other compact UI elements

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-spinner` - Base spinner class
* `.small` - Modifier class for the small size variant

## Dimensions

The small spinner has a width and height of 1rem (16px), making it 20% smaller than the standard spinner.

## Accessibility

* Include `role="status"` to indicate a status message to screen readers
* Add a descriptive `aria-label` to explain what is loading
* Consider using `aria-hidden="true"` for purely decorative small spinners
* Ensure the spinner has sufficient contrast even at smaller sizes