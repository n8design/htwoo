---
title: "Date and Time Inputs"
description: "HTWOO UI provides a range of date and time input elements for collecting temporal data in forms."
type: "components"
layout: "single"
patternId: "atoms-forms-date-time-inputs"
category: "atoms"
subcategory: "forms"
seoTitle: "Atoms - Forms Date Time Inputs"
seoDescription: "Forms Date Time Inputs Atoms"
weight: 40
markup: |
  
---

# Date and Time Inputs

HTWOO UI provides a range of date and time input elements for collecting temporal data in forms.

## Overview

Date and time inputs enable users to input chronological information in a structured format. These specialized input types provide built-in validation and native date/time pickers in most browsers, improving the user experience for temporal data entry.

## Date Input

Standard date picker for selecting a specific day.

```html
<label for="date-input">Select a date</label>
<input class="hoo-input-text" type="date" id="date-input" name="date-input">
```

## Time Input

Time picker for selecting a specific time.

```html
<label for="time-input">Select a time</label>
<input class="hoo-input-text" type="time" id="time-input" name="time-input">
```

## DateTime-Local Input

Combined date and time picker for selecting both a date and time.

```html
<label for="datetime-input">Select a date and time</label>
<input class="hoo-input-text" type="datetime-local" id="datetime-input" name="datetime-input">
```

## Month Input

Specialized input for selecting a specific month and year.

```html
<label for="month-input">Select a month</label>
<input class="hoo-input-text" type="month" id="month-input" name="month-input">
```

## Week Input

Input for selecting a specific week within a year.

```html
<label for="week-input">Select a week</label>
<input class="hoo-input-text" type="week" id="week-input" name="week-input">
```

## Features

- Consistent styling with other form elements
- Native browser date/time pickers on supported browsers
- Built-in validation for date and time formats
- Support for min/max date ranges
- Support for step intervals (e.g., 15-minute increments)
- Proper focus states for keyboard interaction
- Support for disabled and readonly states

## SCSS

## SCSS Files

**Input Styles:**
- `lib/sass/01-atoms/input/`

## Usage Guidance

- Use the appropriate input type for the specific temporal data needed
- Consider providing format hints via placeholder or helper text
- Set reasonable min/max values when applicable
- For complex date/time requirements, consider using specialized date picker components

## Accessibility

- Built on native HTML input elements for assistive technology compatibility
- Provides keyboard access to date/time selection
- Format validation helps prevent input errors
- Label association ensures proper identification
- Focus states are clearly visible for keyboard navigation