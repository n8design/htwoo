---
title: "Top Center"
description: "The Top-Center tooltip variant displays a tooltip with the arrow pointing upward and centered horizontally. This positioning is ideal when the tooltip should appear directly above the target element."
type: "components"
layout: "single"
patternId: "atoms-tooltip-tooltip-top-center"
category: "atoms"
subcategory: "tooltip"
seoTitle: "Atoms - Tooltip Tooltip Top Center"
seoDescription: "Tooltip Tooltip Top Center Atoms"
weight: 10
markup: |
  &lt;div class=&quot;hoo-tooltip top-center&quot; role=&quot;tooltip&quot;&gt;
      &lt;div class=&quot;hoo-tooltip-content&quot;&gt;Tooltip&lt;/div&gt;
  &lt;/div&gt;
  
---

## Overview
The Top-Center tooltip variant displays a tooltip with the arrow pointing upward and centered horizontally. This positioning is ideal when the tooltip should appear directly above the target element.

## Usage

Use top-center tooltips when:
- The tooltip should appear directly above the element
- There is sufficient space above the element
- Centering the tooltip provides the best visual connection to the element

## Accessibility

Remember to maintain proper accessibility by associating the tooltip with its target element using `aria-describedby`.

Example:
```html
<button aria-describedby="help-tooltip">Help</button>
<div id="help-tooltip" class="hoo-tooltip top-center" role="tooltip">
    <div class="hoo-tooltip-content">Additional help information</div>
</div>
```