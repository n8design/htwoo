---
title: Tooltip Components
order: 1
---

# Tooltip Components

Tooltips in HTWOO provide contextual information or additional details when a user hovers over or focuses on an element. They appear in a small overlay with a directional arrow indicating the related element.

## Overview

Tooltips enhance usability by providing supplementary information without cluttering the interface. They appear on hover or focus states and can be positioned in various ways around the triggering element.

## Positioning Options

HTWOO tooltips can be positioned in 12 different ways around the target element:

* **Top**: top-left, top-center, top-right
* **Right**: right-top, right-center, right-bottom
* **Bottom**: bottom-left, bottom-center, bottom-right
* **Left**: left-top, left-center, left-bottom

## SCSS Imports

**Main Component**

**SCSS Partial Location**

## Position Classes

The position class determines where the arrow appears and affects the tooltip's placement:

* `.top-center`: Arrow on top, centered
* `.top-left`: Arrow on top, aligned left
* `.top-right`: Arrow on top, aligned right
* `.bottom-center`: Arrow on bottom, centered
* `.bottom-left`: Arrow on bottom, aligned left
* `.bottom-right`: Arrow on bottom, aligned right
* `.left-top`: Arrow on left, aligned top
* `.left-center`: Arrow on left, centered vertically
* `.left-bottom`: Arrow on left, aligned bottom
* `.right-top`: Arrow on right, aligned top
* `.right-center`: Arrow on right, centered vertically
* `.right-bottom`: Arrow on right, aligned bottom

## Accessibility

For accessible tooltips, follow these guidelines:

* Use `role="tooltip"` on the tooltip element
* Connect the tooltip to its trigger using `aria-describedby` on the trigger element
* Make tooltips visible on both hover and focus for keyboard navigation
* Ensure tooltip content is concise and helpful
* Use sufficient color contrast between text and background
* Avoid using tooltips for essential information that should be directly visible

## Usage Best Practices

* Use tooltips for supplementary information only
* Keep tooltip content brief and focused
* Position tooltips to avoid obscuring important content
* Consider the trigger element's position relative to screen edges
* Test tooltip display on touch devices
* Ensure tooltips don't interfere with form completion
