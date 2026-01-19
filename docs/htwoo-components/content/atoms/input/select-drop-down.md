---
title: "Custom Select Dropdown"
description: "An enhanced dropdown component that provides a more customizable alternative to the native select element."
type: "components"
layout: "single"
patternId: "atoms-input-select-drop-down"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select Drop Down"
seoDescription: "Input Select Drop Down Atoms"
weight: 31
hasVariants: false
markup: |
  
---

# Custom Select Dropdown

An enhanced dropdown component that provides a more customizable alternative to the native select element.

## Overview

The custom select dropdown provides an improved user experience for selection menus with additional styling options, better mobile support, and more control over the appearance and behavior compared to native select elements.

## Usage

Custom select dropdowns should be used when:
* More styling control is needed than native selects provide
* The dropdown requires custom behavior or interactions
* Complex options with icons or formatting are needed
* A more consistent cross-browser appearance is desired

## Variants

* **Standard Dropdown** - Basic dropdown with text options
* **Grouped Dropdown** - Options organized in groups
* **Person Dropdown** - Specialized dropdown for person selection

## States

* **Default** - Normal closed state
* **Open** - When the dropdown menu is expanded
* **Focus** - When the component has keyboard focus
* **Disabled** - When the dropdown cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-select-dropdown` - Container for the custom dropdown
* `.hoo-select-dropdown-button` - The button that triggers the dropdown
* `.hoo-select-dropdown-text` - The selected option text
* `.hoo-select-dropdown-icon` - The dropdown indicator icon
* `.hoo-select-dropdown-menu` - The dropdown menu container
* `.hoo-select-dropdown-option` - Individual option in the dropdown

## Accessibility

* Use appropriate ARIA roles and attributes
* Ensure keyboard navigation works for all options
* Implement proper focus management
* Support screen readers with appropriate announcements
* When disabled, include `aria-disabled="true"`

Accessibility implementation based on [Making a Better Custom Select Element](https://24ways.org/2019/making-a-better-custom-select-element/)