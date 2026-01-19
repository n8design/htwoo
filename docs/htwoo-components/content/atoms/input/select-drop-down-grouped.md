---
title: "Grouped Select Dropdown"
description: "An enhanced dropdown component with options organized into logical groups."
type: "components"
layout: "single"
patternId: "atoms-input-select-drop-down-grouped"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select Drop Down Grouped"
seoDescription: "Input Select Drop Down Grouped Atoms"
weight: 31.1
hasVariants: false
markup: |
  
---

# Grouped Select Dropdown

An enhanced dropdown component with options organized into logical groups.

## Overview

The grouped select dropdown extends the custom select dropdown by organizing options into categorical groups, making it easier for users to find and select from a large number of options.

## Usage

Grouped select dropdowns should be used when:
* There are many options that can be logically categorized
* Users benefit from seeing options organized by category or type
* The dropdown contains enough options that grouping improves usability
* Users need to quickly find options within specific categories

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
* `.hoo-select-dropdown-group` - Container for a group of options
* `.hoo-select-dropdown-group-header` - Header text for a group
* `.hoo-select-dropdown-option` - Individual option in the dropdown

## Accessibility

* Use appropriate ARIA roles and attributes
* Ensure keyboard navigation works both between and within groups
* Implement proper focus management
* Support screen readers with appropriate group announcements
* When disabled, include `aria-disabled="true"`