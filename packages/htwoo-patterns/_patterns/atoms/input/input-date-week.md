---
title: Week Input
order: 15.2
---

# Week Input

A specialized date input field for selecting a specific week of the year.

## Overview

The week input provides an interface for users to select a specific week number within a year, typically through a specialized picker interface. This ensures consistent date formatting for week selection.

## Usage

Week inputs should be used when:
* The required input is specifically a week number within a year
* Week-based planning or reporting is needed
* Precise day-level selection isn't required

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

The week input value uses the format "YYYY-Www" where "ww" is the week number (e.g., "2025-W25" for the 25th week of 2025).

## Week Numbering

Note that week numbering may differ between locales and standards (ISO vs. non-ISO). The HTML input follows ISO 8601 standard where weeks start on Monday and the first week of the year contains January 4th.

## Accessibility

* Always associate with a `<label>` element
* Provide clear format instructions if needed
* Ensure keyboard navigability for the picker interface
* When disabled, include `aria-disabled="true"`
* Consider the needs of users who may prefer direct text entry
