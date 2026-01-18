---
title: Tag Primary (Button)
order: 21
---

# Tag Primary (Button)

A clickable tag component with primary theme styling, implemented as a button for triggering actions.

## Overview

The primary button tag is an interactive meta component with enhanced visual emphasis using the primary theme colors. It's used for highlighting important or frequently used tag actions.

## Usage

Primary button tags should be used when:
* The tag action is of primary importance
* You want to highlight specific tags among a group of tags
* The tag represents a featured category or state
* The action deserves visual emphasis

## States

* **Default** - Primary themed appearance
* **Hover** - Visual feedback when mouse is over the tag
* **Focus** - When the tag receives keyboard focus
* **Active** - When the tag is being clicked
* **Disabled** - When the tag is not interactive (add `disabled` attribute)

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag-primary` - Primary theme tag class
* `.hoo-mtag-lbl` - Inner text container

## Events

Primary button tags support standard button events:
* `click` - Fired when the user clicks the tag
* `focus` - Fired when the tag receives focus
* `blur` - Fired when the tag loses focus

## Accessibility

* Button tags have built-in keyboard accessibility
* They can be focused using the Tab key
* They can be activated using the Space or Enter key
* Consider adding appropriate `aria-pressed="true|false"` for toggle-style tags
* For disabled tags, include both the `disabled` attribute and `aria-disabled="true"`
* Ensure sufficient color contrast with the primary theme colors
