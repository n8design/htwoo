---
title: "Basic Tooltip"
description: "The Basic Tooltip component provides additional information or context when a user hovers over or focuses on an interactive element. Tooltips help improve usability without cluttering the interface wi"
type: "components"
layout: "single"
patternId: "atoms-tooltip-tooltip"
category: "atoms"
subcategory: "tooltip"
seoTitle: "Atoms - Tooltip Tooltip"
seoDescription: "Tooltip Tooltip Atoms"
weight: 5
hasVariants: true
markup: |
  &lt;div class=&quot;hoo-tooltip&quot; role=&quot;tooltip&quot;&gt;
      &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
  &lt;/div&gt;
variants:
  - id: "atoms-tooltip-tooltip-bottom-center"
    title: "Bottom Center"
    variantName: "bottom-center"
    markup: |
      &lt;div class=&quot;hoo-tooltip bottom-center&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-bottom-left"
    title: "Bottom Left"
    variantName: "bottom-left"
    markup: |
      &lt;div class=&quot;hoo-tooltip bottom-left&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-bottom-right"
    title: "Bottom Right"
    variantName: "bottom-right"
    markup: |
      &lt;div class=&quot;hoo-tooltip bottom-right&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-left-bottom"
    title: "Left Bottom"
    variantName: "left-bottom"
    markup: |
      &lt;div class=&quot;hoo-tooltip left-bottom&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-left-center"
    title: "Left Center"
    variantName: "left-center"
    markup: |
      &lt;div class=&quot;hoo-tooltip left-center&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-left-top"
    title: "Left Top"
    variantName: "left-top"
    markup: |
      &lt;div class=&quot;hoo-tooltip left-top&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-right-bottom"
    title: "Right Bottom"
    variantName: "right-bottom"
    markup: |
      &lt;div class=&quot;hoo-tooltip right-bottom&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-right-center"
    title: "Right Center"
    variantName: "right-center"
    markup: |
      &lt;div class=&quot;hoo-tooltip right-center&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-right-top"
    title: "Right Top"
    variantName: "right-top"
    markup: |
      &lt;div class=&quot;hoo-tooltip right-top&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-top-center"
    title: "Top Center"
    variantName: "top-center"
    markup: |
      &lt;div class=&quot;hoo-tooltip top-center&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-top-left"
    title: "Top Left"
    variantName: "top-left"
    markup: |
      &lt;div class=&quot;hoo-tooltip right-bottom&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
  - id: "atoms-tooltip-tooltip-top-right"
    title: "Top Right"
    variantName: "top-right"
    markup: |
      &lt;div class=&quot;hoo-tooltip top-right&quot; role=&quot;tooltip&quot;&gt;
          &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
      &lt;/div&gt;
---

## Overview
The Basic Tooltip component provides additional information or context when a user hovers over or focuses on an interactive element. Tooltips help improve usability without cluttering the interface with permanently visible help text.

## Usage

The tooltip component should be used with interactive elements to provide additional context. The tooltip requires both the outer container (`hoo-tooltip`) with positioning class and the inner content container (`hoo-tooltip-content`).

Example:
```html
<button aria-describedby="tooltip1">Help</button>
<div id="tooltip1" class="hoo-tooltip top-center" role="tooltip">
    <div class="hoo-tooltip-content">This is help text</div>
</div>
```

## Accessibility

- Use `role="tooltip"` on the tooltip element
- Connect to the target element with `aria-describedby`
- Ensure tooltip is visible on both hover and focus states
- Keep content concise and helpful
- Test with screen readers and keyboard navigation

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/tooltip