---
title: Checkbox
order: 20
---

# Checkbox

Checkboxes allow users to select one or more items from a set of options.

## Overview

Checkboxes are selection controls that let users select multiple options from a set. They appear as squares that are filled when selected, and can be toggled on and off by the user.

## Usage

Checkboxes should be used when:
* Multiple selection is allowed from a list of options
* A single binary option needs to be toggled on or off
* Independent options need to be selected

## States

* **Unchecked** - Default state
* **Checked** - When selected
* **Indeterminate** - When in a partial state (JavaScript controlled)
* **Disabled** - When the checkbox cannot be interacted with
* **Focus** - When the checkbox has keyboard focus

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-checkbox` - Container for the checkbox and label
* `.hoo-checkbox-input` - The checkbox input element
* `.hoo-checkbox-label` - The label associated with the checkbox

## Accessibility

* Always provide a visible label
* Use native checkbox elements for best accessibility
* Ensure proper focus indication
* Group related checkboxes with fieldset and legend
* When disabled, include `aria-disabled="true"`
