---
title: "Select"
description: "The select component provides a dropdown menu for selecting a single option from a list."
type: "components"
layout: "single"
patternId: "atoms-input-select"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select"
seoDescription: "Input Select Atoms"
weight: 30
markup: |
  &lt;div class=&quot;hoo-select&quot;&gt;
      &lt;div id=&#39;custom-select-status&#39; class=&#39;hidden-visually&#39; aria-live=&quot;polite&quot;&gt;&lt;/div&gt;
      &lt;input type=&quot;text&quot; id=&quot;hoo-select-input&quot; class=&quot;hoo-select-text&quot; aria-autocomplete=&quot;both&quot;
          aria-controls=&quot;custom-select-list&quot; autocomplete=&quot;off&quot; &gt;
      &lt;button class=&quot;hoo-buttonicon&quot; 
          
          
          &gt;
          &lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                  
                  &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
              &lt;/svg&gt;
          &lt;/span&gt;&lt;/button&gt;
      &lt;ul class=&quot;hoo-select-dropdown&quot;&gt;
          &lt;li data-value=&quot;&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;
              
          &lt;/li&gt;
      &lt;/ul&gt;
      
  &lt;/div&gt;
---

# Select

The select component provides a dropdown menu for selecting a single option from a list.

## Overview

Select inputs (or dropdowns) allow users to choose one option from a list of pre-defined options. They are space-efficient for longer lists of options and provide a standardized selection interface.

## Usage

Select inputs should be used when:
* There's a list of mutually exclusive options
* Space is limited but the number of options is large
* A single selection is required from a predefined list

## Variants

* **Standard Select** - Basic dropdown with text options
* **Grouped Select** - Options organized in groups with `<optgroup>`
* **Custom Dropdown** - Enhanced UI with icons and custom styling

## States

* **Default** - Normal state
* **Open** - When the dropdown is expanded
* **Focus** - When the select has keyboard focus
* **Disabled** - When the select cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-select` - Base class for the select element

## Accessibility

* Always associate with a `<label>` element
* Ensure keyboard navigability within the dropdown
* Use `aria-expanded` for custom select implementations
* Ensure sufficient color contrast for all states
* When disabled, include `aria-disabled="true"`

Accessibility implementation based on [Making a Better Custom Select Element](https://24ways.org/2019/making-a-better-custom-select-element/)