---
title: Month Input
order: 15.1
---

# Month Input

A specialized date input field for selecting a specific month and year.

## Overview

The month input provides an interface for users to select a month and year combination, typically through a specialized picker interface. This ensures consistent date formatting for month selection.

## Usage

Month inputs should be used when:
* The required input is specifically a month/year combination
* Precise day-level selection isn't required
* Month-level reporting or filtering is needed

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

The month input value uses the format "YYYY-MM" (e.g., "2025-06" for June 2025).

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions if needed
* Ensure keyboard navigability for the picker interface
* When disabled, include `aria-disabled="true"`
* Consider the needs of users who may prefer direct text entry
