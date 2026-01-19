---
title: "Person Select Dropdown"
description: "A specialized dropdown component designed specifically for selecting people, featuring avatars and user information."
type: "components"
layout: "single"
patternId: "atoms-input-select-drop-down-person"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select Drop Down Person"
seoDescription: "Input Select Drop Down Person Atoms"
weight: 31.2
hasVariants: false
markup: |
  
---

# Person Select Dropdown

A specialized dropdown component designed specifically for selecting people, featuring avatars and user information.

## Overview

The person select dropdown extends the custom select dropdown with visual elements tailored for person selection. It includes avatars, names, and potentially additional user information like roles or departments.

## Usage

Person select dropdowns should be used when:
* Users need to select a person from a list
* Visual identification through avatars is helpful
* Additional person information assists in selection
* The dropdown is part of assignment, mention, or people-focused functionality

## States

* **Default** - Normal closed state
* **Open** - When the dropdown menu is expanded
* **Focus** - When the component has keyboard focus
* **Disabled** - When the dropdown cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-select-dropdown` - Base container for the dropdown
* `.hoo-select-dropdown-person` - Modifier for person selection styling
* `.hoo-select-dropdown-button` - The button that triggers the dropdown
* `.hoo-select-dropdown-text` - The selected option text
* `.hoo-select-dropdown-icon` - The dropdown indicator icon
* `.hoo-select-dropdown-menu` - The dropdown menu container
* `.hoo-select-dropdown-option` - Individual option in the dropdown
* `.hoo-avatar` - Avatar component within the option
* `.hoo-person-info` - Container for person text information
* `.hoo-person-name` - Person's name
* `.hoo-person-details` - Additional person details

## Accessibility

* Use appropriate ARIA roles and attributes
* Ensure keyboard navigation works for all options
* Implement proper focus management
* Support screen readers with appropriate person information
* When disabled, include `aria-disabled="true"`
* Ensure avatars have appropriate alt text or are marked as decorative