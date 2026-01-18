---
title: "Color Input"
description: "A specialized input field for selecting color values."
type: "components"
layout: "single"
patternId: "atoms-input-input-color"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Color"
seoDescription: "Input Input Color Atoms"
weight: 18
hasVariants: false
markup: |
  &lt;input class=&quot;hoo-input-color&quot; type=&quot;color&quot; value=&quot;#000&quot; hsla &gt;
---

# Color Input

A specialized input field for selecting color values.

## Overview

The color input provides a standardized interface for users to select colors, typically through a color picker interface. This ensures consistent color value formatting and provides a visual way to select colors.

## Usage

Color inputs should be used when:
* The user needs to select a specific color
* Visual color selection is important
* A standardized color format (hex) is needed

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-color` - Base color input class

## Attributes

* `value` - Sets the default color (format: "#RRGGBB")

## Accessibility

* Always associate with a `<label>` element
* Consider alternative input methods for users who may have difficulty with visual color selection
* Ensure color contrast meets accessibility standards for the selected colors
* When disabled, include `aria-disabled="true"`
* Consider adding color names or descriptions for selected colors