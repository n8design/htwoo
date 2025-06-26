---
title: Toggle Switch
order: 35
---

# Toggle Switch

A toggle switch is a visual control that allows users to switch between two states: on and off.

## Overview

Toggle switches provide a visual way to enable or disable a setting, feature, or functionality. They are similar to checkboxes but have a more distinct on/off visual representation and are typically used for binary settings that take immediate effect.

## Usage

Toggle switches should be used when:
* The option is clearly binary (on/off, enabled/disabled)
* The change takes immediate effect (no form submission required)
* The state is important to visualize at a glance
* Space allows for a larger control compared to a checkbox

## States

* **Off** - Default unchecked state
* **On** - Checked/enabled state
* **Focus** - When the toggle has keyboard focus
* **Disabled** - When the toggle cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-toggle` - Container for the toggle switch
* `.hoo-toggle-input` - The underlying checkbox input
* `.hoo-toggle-label` - The visible toggle switch
* `.hoo-toggle-onlabel` - Text label for the "on" state
* `.hoo-toggle-offlabel` - Text label for the "off" state

## Accessibility

* Use `role="switch"` on the input element
* Ensure the toggle is keyboard accessible
* Provide clear on/off labels (visually or via aria-label)
* Ensure sufficient color contrast between states
* When disabled, include `aria-disabled="true"`
