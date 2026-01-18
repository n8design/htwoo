---
title: "Select Dropdowns"
description: "HTWOO UI provides select dropdown components for choosing from a list of options in forms."
type: "components"
layout: "single"
patternId: "atoms-forms-select-dropdowns"
category: "atoms"
subcategory: "forms"
seoTitle: "Atoms - Forms Select Dropdowns"
seoDescription: "Forms Select Dropdowns Atoms"
weight: 30
markup: |
  
---

# Select Dropdowns

HTWOO UI provides select dropdown components for choosing from a list of options in forms.

## Overview

Select dropdowns allow users to choose one option (or multiple options) from a predefined list. They save space in forms by showing only the currently selected option until the user interacts with the element.

## Basic Select Dropdown

The standard select dropdown for single option selection.

```html
<label for="basic-select">Choose an option</label>
<select class="hoo-select" id="basic-select" name="basic-select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

## Grouped Select Dropdown

Select dropdown with options organized into groups.

```html
<label for="grouped-select">Choose an option</label>
<select class="hoo-select" id="grouped-select" name="grouped-select">
  <optgroup label="Group 1">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </optgroup>
</select>
```

## Multiple Select

Select dropdown that allows multiple option selection.

```html
<label for="multi-select">Choose multiple options</label>
<select class="hoo-select" id="multi-select" name="multi-select" multiple>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

## Features

- Consistent styling with other form elements
- Custom dropdown indicator
- Support for option grouping
- Multiple selection capability
- Proper focus states for keyboard navigation
- Support for disabled state
- Responsive design that adapts to container width

## States

- **Default**: Normal state
- **Focus**: When the select has keyboard focus
- **Open**: When the dropdown is expanded
- **Disabled**: When the select is non-interactive

## JavaScript Integration

For enhanced accessibility and custom styling, HTWOO provides ARIA-compliant select functionality:

### ARIA Select Enhancement

### Key JavaScript Features

- **ARIA Compliance**: Full screen reader support with proper roles
- **Keyboard Navigation**: Arrow keys, Enter, Escape, and typing to filter
- **Custom Styling**: Enhanced visual styling while maintaining accessibility
- **Auto-complete**: Type-ahead filtering of options
- **Focus Management**: Proper focus states and announcements

### Enhanced HTML Structure

For JavaScript-enhanced selects, use this structure:

```html
<div class="hoo-custom-select" role="combobox" aria-haspopup="listbox">
    <input type="text" aria-autocomplete="both" aria-controls="select-list">
    <ul id="select-list" role="listbox">
        <li class="hoo-option" role="option">Option 1</li>
        <li class="hoo-option" role="option">Option 2</li>
        <li class="hoo-option" role="option">Option 3</li>
    </ul>
</div>
```

## SCSS

## Accessibility

- Maintains native select functionality for keyboard support
- Uses proper label association
- Provides sufficient color contrast
- Supports standard keyboard navigation patterns
- Includes focus indicators for keyboard users