---
title: "Time Input"
description: "A specialized input field for selecting time values."
type: "components"
layout: "single"
patternId: "atoms-input-input-time"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Time"
seoDescription: "Input Input Time Atoms"
weight: 16
hasVariants: false
markup: |
  &lt;input type=&quot;time&quot; class=&quot;hoo-input-time&quot; id=&quot;toggle-33&quot;  name=&quot;my-timepicker-name&quot; value=&quot;09:45&quot; min=&quot;09:00&quot; max=&quot;18:00&quot;  &gt;
---

# Time Input

A specialized input field for selecting time values.

## Overview

The time input provides a standardized interface for users to select times, either through direct text input or a time picker interface. This ensures consistent time formatting and validation.

## Usage

Time inputs should be used when:
* The required input is specifically a time value
* Consistent time formatting is important
* Time selection needs to be precise

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Readonly** - When the input is read-only

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-time` - Base time input class

## Attributes

* `min` - Minimum allowed time (format: "HH:MM")
* `max` - Maximum allowed time (format: "HH:MM")
* `step` - Time intervals in seconds (e.g., 60 for minute intervals)

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions
* Ensure keyboard navigability for the time picker
* Consider time format expectations across different locales
* When disabled, include `aria-disabled="true"`