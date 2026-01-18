---
title: "Elevations"
description: "Classes can be used directly:"
type: "components"
layout: "single"
patternId: "design-tokens-elevations-elevations"
category: "design-tokens"
subcategory: "elevations"
seoTitle: "Design - Tokens Elevations Elevations"
seoDescription: "Tokens Elevations Elevations Design"
weight: 1000
hasVariants: false
markup: |
  &lt;ul class=&quot;sg-elevations&quot;&gt;
      &lt;li class=&quot;sg-elevation&quot;&gt;&lt;span class=&quot;sg-elevationbox hoo-elevation4&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sg-label&quot;&gt;hoo-elevation4&lt;br /&gt;hoo-elevation4&lt;br /&gt;&lt;/span&gt;
  &lt;/li&gt;
  &lt;li class=&quot;sg-elevation&quot;&gt;&lt;span class=&quot;sg-elevationbox hoo-elevation8&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sg-label&quot;&gt;hoo-elevation8&lt;br /&gt;hoo-elevation8&lt;br /&gt;&lt;/span&gt;
  &lt;/li&gt;
  &lt;li class=&quot;sg-elevation&quot;&gt;&lt;span class=&quot;sg-elevationbox hoo-elevation16&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sg-label&quot;&gt;hoo-elevation16&lt;br /&gt;hoo-elevation16&lt;br /&gt;&lt;/span&gt;
  &lt;/li&gt;
  &lt;li class=&quot;sg-elevation&quot;&gt;&lt;span class=&quot;sg-elevationbox hoo-elevation64&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sg-label&quot;&gt;hoo-elevation64&lt;br /&gt;hoo-elevation64&lt;br /&gt;&lt;/span&gt;
  &lt;/li&gt;
  &lt;/ul&gt;
  &lt;!--end sg-colors--&gt;&lt;small&gt;To add to these items, use Sass variables that start with&lt;code&gt;$color-brand-&lt;/code&gt;in&lt;code&gt;./source/css/scss/abstracts/_variables.scss&lt;/code&gt;&lt;/small&gt;
---

Classes can be used directly:

* **hoo-elevation4**  - 4px elevation
* **hoo-elevation8**  - 8px elevation
* **hoo-elevation16** - 16px elevation
* **hoo-elevation64** - 64px elevation

### Custom use

For custom elevations the base style also provides a mixin:

Elevation only takes unit-less values in this case it uses `32px`:

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/base

***