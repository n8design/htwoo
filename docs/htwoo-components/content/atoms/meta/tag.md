---
title: "Tag (Button)"
description: "A clickable tag component implemented as a button for triggering actions."
type: "components"
layout: "single"
patternId: "atoms-meta-tag"
category: "atoms"
subcategory: "meta"
seoTitle: "Atoms - Meta Tag"
seoDescription: "Meta Tag Atoms"
weight: 20
hasVariants: false
markup: |
  &lt;button class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;
  &lt;/button&gt;
---

# Tag (Button)

A clickable tag component implemented as a button for triggering actions.

## Overview

The button tag is an interactive meta component used when the tag needs to trigger an action like filtering content, toggling visibility, or other non-navigational interactions.

## Usage

Button tags should be used when:
* The tag needs to perform an action when clicked
* The tag interaction doesn't change the current page
* The tag needs to toggle a state or filter
* You need to capture click events on the tag

## States

* **Default** - Standard appearance
* **Hover** - Visual feedback when mouse is over the tag
* **Focus** - When the tag receives keyboard focus
* **Active** - When the tag is being clicked
* **Disabled** - When the tag is not interactive (add `disabled` attribute)

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag` - Base tag class
* `.hoo-mtag-lbl` - Inner text container

## Events

Button tags support standard button events:
* `click` - Fired when the user clicks the tag
* `focus` - Fired when the tag receives focus
* `blur` - Fired when the tag loses focus

## Accessibility

* Button tags have built-in keyboard accessibility
* They can be focused using the Tab key
* They can be activated using the Space or Enter key
* Consider adding appropriate `aria-pressed="true|false"` for toggle-style tags
* For disabled tags, include both the `disabled` attribute and `aria-disabled="true"`