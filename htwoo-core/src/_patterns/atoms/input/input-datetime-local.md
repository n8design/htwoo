---
title: Date and Time Input
order: 15.3
---

# Date and Time Input

A specialized input field for selecting both a date and time in a single control.

## Overview

The date and time input (datetime-local) provides an interface for users to select both a specific date and time, typically through a combined picker interface. This ensures consistent formatting for precise date and time selection.

## Usage

Date and time inputs should be used when:
* Both a date and time need to be selected together
* Precise timestamp selection is required
* Event scheduling or time-specific appointments are being created

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-date` - Base date input class (shared with other date input types)

## Format

The datetime-local input value uses the format "YYYY-MM-DDThh:mm" (e.g., "2025-06-21T15:30" for June 21, 2025, at 3:30 PM).

## Browser Support Note

The datetime-local input has varying levels of browser support and appearance. Consider providing fallbacks or enhancements for consistent user experience across browsers.

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions if needed
* Ensure keyboard navigability for the picker interface
* When disabled, include `aria-disabled="true"`
* Consider providing separate date and time inputs for users who may find the combined control difficult to use
