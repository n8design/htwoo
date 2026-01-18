---
title: Radio Button
order: 25
---

# Radio Button

Radio buttons allow users to select a single option from a set of mutually exclusive choices.

## Overview

Radio buttons appear as small circles that are filled when selected. They work in groups where only one option can be selected at a time, making them ideal for mutually exclusive choices.

## Usage

Radio buttons should be used when:
* Only one option can be selected from a set
* The list of options is relatively small (2-7 items)
* All options need to be visible at once
* Users need to compare options visually

## States

* **Unchecked** - Default state
* **Checked** - When selected
* **Disabled** - When the radio button cannot be interacted with
* **Focus** - When the radio button has keyboard focus

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-radio` - Container for the radio button and label
* `.hoo-radio-input` - The radio input element
* `.hoo-radio-label` - The label associated with the radio button

## Accessibility

* Always provide a visible label
* Use native radio elements for best accessibility
* Ensure proper focus indication
* Group related radio buttons with fieldset and legend
* Ensure all radio buttons in a group share the same `name` attribute
* When disabled, include `aria-disabled="true"`
