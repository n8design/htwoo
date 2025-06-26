---
title: Basic Tooltip
hidden: false
order: 5
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
