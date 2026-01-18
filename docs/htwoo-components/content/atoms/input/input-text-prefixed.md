---
title: "Text Input with Prefix"
description: "A text input field with a prefix element attached at the beginning of the input."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-prefixed"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Prefixed"
seoDescription: "Input Input Text Prefixed Atoms"
weight: 10.7
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-input-group&quot;&gt;
      &lt;div id=&quot;suffix-label-toggle-33&quot; class=&quot;hoo-input-prefix&quot;&gt;https://&lt;/div&gt;
      &lt;input class=&quot;hoo-input-text&quot;  id=&quot;toggle-33&quot; 
          placeholder=&quot;A placeholder text&quot;  &gt;
  &lt;/div&gt;
---

# Text Input with Prefix

A text input field with a prefix element attached at the beginning of the input.

## Overview

The prefixed text input extends the standard text input by adding a visual element before the input field, typically used for currency symbols, domain prefixes, or other contextual information about the expected input.

## Usage

Text inputs with prefixes should be used when:
* The input requires a unit or currency indicator at the start
* Additional context about the expected format is needed
* Visual distinction of the prefix from the input value is important

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Invalid** - When the input contains invalid data

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-group` - Container for the input and prefix
* `.hoo-input-text` - The text input element
* `.hoo-input-prefix` - The prefix element

## Accessibility

* Always associate the input with a `<label>` element
* Ensure the prefix is clearly connected to the input visually and semantically
* Use `aria-describedby` if the prefix provides important information
* When disabled, include `aria-disabled="true"`