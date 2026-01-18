---
title: "Text Input with Suffix"
description: "A text input field with a suffix element attached at the end of the input."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-suffixed"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Suffixed"
seoDescription: "Input Input Text Suffixed Atoms"
weight: 11
markup: |
  &lt;div class=&quot;hoo-input-group&quot;&gt;
      &lt;input class=&quot;hoo-input-text&quot;  id=&quot;toggle-33&quot; 
          placeholder=&quot;A placeholder text&quot; data-suffix=&quot;.com&quot;  aria-labelledby=&quot;suffix-label-toggle-33&quot; &gt;
      &lt;div id=&quot;suffix-label-toggle-33&quot; class=&quot;hoo-input-suffix&quot;&gt;.com&lt;/div&gt;
  &lt;/div&gt;
  
---

# Text Input with Suffix

A text input field with a suffix element attached at the end of the input.

## Overview

The suffixed text input extends the standard text input by adding a visual element after the input field, typically used for units, currency symbols, or contextual information about the expected input.

## Usage

Text inputs with suffixes should be used when:
* The input requires a unit or currency indicator
* Additional context about the expected format is needed
* Visual distinction of the suffix from the input value is important

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **Invalid** - When the input contains invalid data

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-group` - Container for the input and suffix
* `.hoo-input-text` - The text input element
* `.hoo-input-suffix` - The suffix element

## Accessibility

* Always associate the input with a `<label>` element
* Ensure the suffix is clearly connected to the input visually and semantically
* Use `aria-describedby` if the suffix provides important information
* When disabled, include `aria-disabled="true"`