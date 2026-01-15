---
title: Sticky Table
order: 30
---

## Overview
The Sticky Table variant enables headers, footers, and/or columns to remain visible during scrolling, improving usability for large datasets that require horizontal or vertical scrolling.

## Position Modifier Classes

You can define where the table cells should be sticky by applying the following additional classes:

* `top` - Sticky on top during vertical scrolling
* `left` - Sticky on the left side during horizontal scrolling
* `right` - Sticky on the right side during horizontal scrolling
* `bottom` - Sticky on bottom during vertical scrolling

These classes can be freely combined for corner elements, for example:

```html
<th class="is-sticky top left">
    <!-- Content -->
</th>
```

To support multiple columns make sure you include the [table.js](../../js/table) in your code. From the htwoo-core package `node_modules/htwoo-core/lib/js/table`.

To init the sticky behaviout call the following function.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/table

***
