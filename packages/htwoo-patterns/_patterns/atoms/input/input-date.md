---
title: Date Input
order: 15
---

# Date Input

A specialized input field for selecting dates using a calendar interface.

## Overview

The date input provides a standardized interface for users to select dates, either through direct text input or a calendar picker interface. This ensures consistent date formatting and validation.

## Usage

Date inputs should be used when:
* The required input is specifically a calendar date
* Consistent date formatting is important
* The range of valid dates is predictable

## Variants

* **Basic Date** (`type="date"`) - For selecting a specific day
* **Month** (`type="month"`) - For selecting a month/year combination
* **Week** (`type="week"`) - For selecting a specific week number
* **Date-Time** (`type="datetime-local"`) - For selecting both date and time

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-date` - Base date input class

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions
* Consider including date format examples
* Ensure keyboard navigability for the calendar picker
* When disabled, include `aria-disabled="true"`
