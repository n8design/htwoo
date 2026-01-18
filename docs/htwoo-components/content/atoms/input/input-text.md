---
title: "Text Input"
description: "The standard text input field used for single-line text entry in forms."
type: "components"
layout: "single"
patternId: "atoms-input-input-text"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text"
seoDescription: "Input Input Text Atoms"
weight: 10
hasVariants: false
markup: |
  &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-33&quot;  type=&quot;text&quot;  
      placeholder=&quot;A placeholder text&quot;  &gt;
---

# Text Input

The standard text input field used for single-line text entry in forms.

## Overview

Text inputs are the most common form elements used for collecting user data in a single line. They allow users to enter alphanumeric information and can be customized for different validation requirements.

## Usage

Text inputs should be used when:
* The expected input is a single line of text
* No special formatting or validation is required
* A simple string value is needed

## Variants

The text input serves as the base for many specialized inputs:
* Email (`type="email"`)
* Password (`type="password"`)
* URL (`type="url"`)
* Phone (`type="tel"`)
* Search (`type="search"`)

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input is disabled
* **Readonly** - When the input is read-only
* **Invalid** - When the input contains invalid data

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class
* `.hoo-input--disabled` - For disabled state styling
* `.hoo-input--invalid` - For validation error styling

## Accessibility

* Always associate with a `<label>` element
* Use `aria-describedby` to link to error or description text
* Ensure proper focus states for keyboard navigation
* When disabled, include `aria-disabled="true"`