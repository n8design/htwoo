---
title: Select
order: 30
---

# Select

The select component provides a dropdown menu for selecting a single option from a list.

## Overview

Select inputs (or dropdowns) allow users to choose one option from a list of pre-defined options. They are space-efficient for longer lists of options and provide a standardized selection interface.

## Usage

Select inputs should be used when:
* There's a list of mutually exclusive options
* Space is limited but the number of options is large
* A single selection is required from a predefined list

## Variants

* **Standard Select** - Basic dropdown with text options
* **Grouped Select** - Options organized in groups with `<optgroup>`
* **Custom Dropdown** - Enhanced UI with icons and custom styling

## States

* **Default** - Normal state
* **Open** - When the dropdown is expanded
* **Focus** - When the select has keyboard focus
* **Disabled** - When the select cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-select` - Base class for the select element

## Accessibility

* Always associate with a `<label>` element
* Ensure keyboard navigability within the dropdown
* Use `aria-expanded` for custom select implementations
* Ensure sufficient color contrast for all states
* When disabled, include `aria-disabled="true"`

Accessibility implementation based on [Making a Better Custom Select Element](https://24ways.org/2019/making-a-better-custom-select-element/)
