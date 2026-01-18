---
title: "Icon Tool"
description: "This icon tool allows to selet custom sets out of the Fluent Design Icon System."
type: "components"
layout: "single"
patternId: "design-tokens-icon-overview"
category: "design-tokens"

seoTitle: "Design - Tokens Icon Overview"
seoDescription: "Tokens Icon Overview Design"
weight: 999
hasVariants: false
markup: |
  &lt;link href=&quot;/htwoo-core/images/fluent-ui-filled.svg&quot; as=&quot;image&quot; type=&quot;image/svg+xml&quot; class=&quot;object-embedd pl-ico-filled&quot;
      loading=&quot;lazy&quot; rel=&quot;subresource&quot;&gt;
  &lt;link href=&quot;/htwoo-core/images/fluent-ui-regular.svg&quot; as=&quot;image&quot; type=&quot;image/svg+xml&quot; class=&quot;object-embedd pl-ico-regular&quot;
      loading=&quot;lazy&quot; rel=&quot;subresource&quot;&gt;
  &lt;header class=&quot;pl-header&quot;&gt;&lt;a href=&quot;https://lab.n8d.studio/htwoo/&quot;&gt;
      &lt;img src=&quot;../../styleguide/images/htwoo-logo-vertical.jpg&quot; class=&quot;pl-header-logo&quot; alt=&quot;hTWOo Icon Logo&quot;&gt;&lt;/a&gt;
  &lt;div class=&quot;pl-header-title&quot;&gt;Icon Tool&lt;/div&gt;
  &lt;/header&gt;
  &lt;section role=&quot;header&quot; class=&quot;pl-iconsearch&quot;&gt;
      &lt;div class=&quot;hoo-input-search&quot;&gt;
          &lt;svg class=&quot;hoo-icon icon-search&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-search&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;
          &lt;input class=&quot;hoo-input-text&quot; type=&quot;search&quot; placeholder=&quot;Search&quot; &gt;
      &lt;/div&gt;
      &lt;section class=&quot;pl-toolbar&quot;&gt;
          &lt;div class=&quot;pl-iconname&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;pl-actions&quot;&gt;
              &lt;div class=&quot;pl-selection&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-42&quot;&gt;Selected Icons&lt;/label&gt;
                  &lt;div class=&quot;pl-selection-ctn&quot; id=&quot;plOverViewTgl2&quot;&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;pl-action&quot;&gt;
                  &lt;div class=&quot;pl-action-item pl-act-stylswtch&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-42&quot;&gt;Icon Style&lt;/label&gt;
                      &lt;div class=&quot;hoo-toggle&quot;&gt;
                          &lt;input type=&quot;checkbox&quot; class=&quot;hoo-toggle-cb&quot; name=&quot;pl-overview-toggle&quot; id=&quot;toggle-31&quot; &gt;
                          &lt;label for=&quot;toggle-31&quot; class=&quot;hoo-toggle-label&quot;&gt;&lt;span class=&quot;hoo-toggle-slider&quot;&gt;&lt;/span&gt;&lt;span class=&quot;hoo-toggle-checked&quot;&gt;Filled&lt;/span&gt;&lt;span class=&quot;hoo-toggle-unchecked&quot;&gt;Regular&lt;/span&gt;
              &lt;/label&gt;
          &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pl-action-item pl-act-dwnld&quot;&gt;
          &lt;button class=&quot;hoo-button-primary&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Download&lt;/span&gt;
      &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;/section&gt;
  &lt;/section&gt;
  &lt;main class=&quot;pl-icongrid&quot;&gt;
  &lt;/main&gt;
  &lt;script src=&quot;../../js/pl-icon-finder.js&quot;&gt;
  &lt;/script&gt;
---

## Usage

This icon tool allows to selet custom sets out of the Fluent Design Icon System.


## Install
To install all icons to your project:

```sh
npm i @n8d/htwoo-icons
```