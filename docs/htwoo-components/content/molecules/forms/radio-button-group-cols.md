---
title: "Radio Button Group /w Columns"
description: "Columns allow you to define a checkbox group across multiple columns. You are able to define different colum counts for mobile and desktop by using the following CSS variables."
type: "components"
layout: "single"
patternId: "molecules-forms-radio-button-group-cols"
category: "molecules"
subcategory: "forms"
seoTitle: "Molecules - Forms Radio Button Group Cols"
seoDescription: "Forms Radio Button Group Cols Molecules"
weight: 999
hasVariants: false
markup: |
  &lt;menu class=&quot;hoo-radiobutton-group&quot; role=&quot;radiogroup&quot; tabindex=&quot;0&quot; style=&quot;--cols-desk: 2; --cols-mobile: 1&quot;&gt;
      &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
          &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg1&quot; value=&quot;apple&quot; class=&quot;hoo-radio&quot;&gt;
          &lt;label for=&quot;rbg1&quot; &gt;Apple&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
          &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg2&quot; value=&quot;banana&quot; class=&quot;hoo-radio&quot;&gt;
          &lt;label for=&quot;rbg2&quot; &gt;Avocado&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
          &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg3&quot; value=&quot;citrus&quot; class=&quot;hoo-radio&quot;&gt;
          &lt;label for=&quot;rbg3&quot; &gt;Banana&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
          &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg4&quot; value=&quot;avocado&quot; class=&quot;hoo-radio&quot;&gt;
          &lt;label for=&quot;rbg4&quot; &gt;Citrus&lt;/label&gt;
      &lt;/li&gt;
  &lt;/menu&gt;
---

Columns allow you to define a checkbox group across multiple columns. You are able to define different colum counts for mobile and desktop by using the following CSS variables.

- --cols-desk
- --cols-mobile

In this example the following CSS variables are defined:

```html
<div class="hoo-checkbox-group" style="--cols-desk: 2; --cols-mobile: 1">
```

This example uses a two columns setup for desktop and mobile just one column.