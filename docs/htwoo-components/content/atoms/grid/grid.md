---
title: "Liquid UI Grid System"
description: "`hoo-grid` - defines the base CSS Grid on any container"
type: "components"
layout: "single"
patternId: "atoms-grid-grid"
category: "atoms"
subcategory: "grid"
seoTitle: "Atoms - Grid Grid"
seoDescription: "Grid Grid Atoms"
weight: 5
markup: |
  &lt;div class=&quot;hoo-grid&quot;&gt;
      &lt;div class=&quot;demo-item&quot;&gt;Demo Item&lt;/div&gt;
      &lt;div class=&quot;demo-item2&quot;&gt;Demo Item&lt;/div&gt;
  &lt;/div&gt;
---

### Use Grid System with CSS classes

`hoo-grid` - defines the base CSS Grid on any container

### Use Grid System with SCSS

Through a mixing you can turn any container into a grid system.

### Placing elements on the grid

The placement of elements can be accomplished with the following SASS mixin.

The SASS mixing has the following input:

@include gridSpan([grid span], [Starting column], [Starting row]);

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/base

***