---
title: "Left Center"
description: "The Left-Center tooltip variant displays a tooltip with the arrow pointing to the left and centered vertically. This positioning is ideal when the tooltip should appear to the right of the target elem"
type: "components"
layout: "single"
patternId: "atoms-tooltip-tooltip~left-center"
category: "atoms"
subcategory: "tooltip"
seoTitle: "Atoms - Tooltip Tooltip~left Center"
seoDescription: "Tooltip Tooltip~left Center Atoms"
weight: 10
markup: |
  
---

## Overview
The Left-Center tooltip variant displays a tooltip with the arrow pointing to the left and centered vertically. This positioning is ideal when the tooltip should appear to the right of the target element.

## Usage

Use left-center tooltips when:
- The tooltip should appear to the right of the element
- There is limited vertical space above or below the element
- There is sufficient horizontal space to the right of the element
- The content is better displayed with a vertical orientation

## Accessibility

For left-aligned tooltips, ensure they don't extend beyond the viewable area of the screen, especially on smaller devices.

Example:
```html
<span aria-describedby="definition" class="term">Technical term</span>
<div id="definition" class="hoo-tooltip left-center" role="tooltip">
    <div class="hoo-tooltip-content">Definition of the technical term</div>
</div>
```