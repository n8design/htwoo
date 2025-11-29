---
title: XSmall Spinner
order: 33
---

# XSmall Spinner

The smallest variant of the circular loading indicator for highly compact UI elements.

## Overview

The extra small spinner is the most compact version of the spinner component, designed for very limited spaces where a loading indicator is still needed but must be extremely subtle.

## Usage

XSmall spinners should be used when:
* Space is extremely constrained in the UI
* Loading occurs within tiny UI elements
* The loading indicator needs to be very subtle or minimally intrusive
* Inline within dense text or compact controls

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-spinner` - Base spinner class
* `.xsmall` - Modifier class for the extra small size variant

## Dimensions

The XSmall spinner has a width and height of 0.75rem (12px), making it 40% smaller than the standard spinner.

## Accessibility

* Include `role="status"` to indicate a status message to screen readers
* Add a descriptive `aria-label` to explain what is loading
* Consider using `aria-hidden="true"` for purely decorative XSmall spinners
* Ensure the spinner has sufficient contrast even at this smallest size
* Consider adding a tooltip or additional label for context at this small size
