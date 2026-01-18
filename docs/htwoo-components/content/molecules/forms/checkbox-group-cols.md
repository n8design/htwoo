---
title: "Checkbox Group /w Columns"
description: "Columns allow you to define a checkbox group across multiple columns. You are able to define different colum counts for mobile and desktop by using the following CSS variables."
type: "components"
layout: "single"
patternId: "molecules-forms-checkbox-group-cols"
category: "molecules"
subcategory: "forms"
seoTitle: "Molecules - Forms Checkbox Group Cols"
seoDescription: "Forms Checkbox Group Cols Molecules"
weight: 999
markup: |
  &lt;menu class=&quot;hoo-checkbox-group&quot; role=&quot;group&quot; tabindex=&quot;0&quot; style=&quot;--cols-desk: 2; --cols-mobile: 1&quot;&gt;
      &lt;li tabindex=&quot;-1&quot;&gt;
          &lt;input type=&quot;checkbox&quot; name=&quot;chbg1&quot; id=&quot;chbg1&quot; value=&quot;&quot; class=&quot;hoo-checkbox&quot; &gt;&lt;label for=&quot;chbg1&quot;&gt;Apple&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot;&gt;
          &lt;input type=&quot;checkbox&quot; name=&quot;chbg2&quot; id=&quot;chbg2&quot; value=&quot;&quot; class=&quot;hoo-checkbox&quot; &gt;&lt;label for=&quot;chbg2&quot;&gt;Avocado&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot;&gt;
          &lt;input type=&quot;checkbox&quot; name=&quot;chbg3&quot; id=&quot;chbg3&quot; value=&quot;&quot; class=&quot;hoo-checkbox&quot; &gt;&lt;label for=&quot;chbg3&quot;&gt;Banana&lt;/label&gt;
      &lt;/li&gt;
      &lt;li tabindex=&quot;-1&quot;&gt;
          &lt;input type=&quot;checkbox&quot; name=&quot;chbg4&quot; id=&quot;chbg4&quot; value=&quot;&quot; class=&quot;hoo-checkbox&quot; &gt;&lt;label for=&quot;chbg4&quot;&gt;Citrus&lt;/label&gt;
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