---
title: "Spinner"
description: "A circular loading indicator that provides visual feedback during processes with indeterminate duration."
type: "components"
layout: "single"
patternId: "atoms-loading-spinner"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Spinner"
seoDescription: "Loading Spinner Atoms"
weight: 30
hasVariants: true
markup: |
  
variants:
  - id: "atoms-loading-spinner-large"
    title: "Large Spinner"
    variantName: "large"
    markup: |
      
  - id: "atoms-loading-spinner-small"
    title: "Small Spinner"
    variantName: "small"
    markup: |
      
  - id: "atoms-loading-spinner-xsmall"
    title: "XSmall Spinner"
    variantName: "xsmall"
    markup: |
      
---

# Spinner

A circular loading indicator that provides visual feedback during processes with indeterminate duration.

## Overview

The spinner is an animated loading indicator that rotates continuously to indicate that an operation is in progress. It's ideal for scenarios where the duration of the loading operation is unknown or variable.

## Usage

Spinners should be used when:
* The duration of the operation is unknown
* Space is limited and a compact loading indicator is needed
* A general "loading" or "processing" state needs to be indicated
* The loading indicator might appear in various contexts throughout the application

## Variants

* **Default** - Standard size for most use cases
* **XSmall** - Extra small spinner for inline or compact UI elements
* **Small** - Smaller spinner for more compact UI areas
* **Large** - Larger spinner for more prominent loading states

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-spinner` - Base spinner class
* `.xsmall` - Modifier for extra small spinner
* `.small` - Modifier for small spinner
* `.large` - Modifier for large spinner

## Customization

The spinner uses CSS variables for theming:
* `--themePrimary` - Primary color for the spinner (active segment)
* `--themeLight` - Light color for the inactive segments

## Accessibility

* Include `role="status"` to indicate a status message to screen readers
* Add a descriptive `aria-label` to explain what is loading
* Consider using `aria-live="polite"` for dynamic updates
* For spinners that block interaction, use `aria-busy="true"` on the container

## Animation

The spinner uses a continuous rotation animation with a cubic-bezier timing function for a smooth, natural-feeling rotation. The animation runs indefinitely until the spinner is removed from the DOM.