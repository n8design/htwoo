---
title: "Shimmer Theming Support"
description: "Guidelines for applying theme variations to shimmer loading components."
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-theming-support"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Theming Support"
seoDescription: "Loading Shimmer Theming Support Atoms"
weight: 80
markup: |
  &lt;h3&gt;Theming support for shimmer&lt;/h3&gt;
  &lt;p&gt;Shimmer also supports theming based on the SharePoint theme. This can be accomplished in two ways.
      The following three themes are supported.&lt;/p&gt;
  &lt;ul&gt;
      &lt;li&gt;No theme or &lt;code&gt;hoo-ph-primary&lt;/code&gt; - use for the primary theme base background colors;&lt;/li&gt;
      &lt;li&gt;&lt;code&gt;hoo-ph-neutral&lt;/code&gt; - use for the neutral based background color gradient.&lt;/li&gt;
      &lt;li&gt;&lt;code&gt;hoo-ph-fancy&lt;/code&gt; - use for the fancy gradients based background color gradient.&lt;/li&gt;
  &lt;/ul&gt;
  &lt;p&gt;This style sheet classes can be added to a complete block as well es directly on the placeholder container.&lt;/p&gt;
  &lt;h3&gt;Block theming&lt;/h3&gt;
  Apply any of the theming classes on the surrounding block.
  &lt;h4&gt;No Theme on Block&lt;/h4&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt; &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;h4&gt;Neutral Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-neutral&quot;&gt;
      &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt;    &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;    &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;h4&gt;Primary Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-primary&quot;&gt;
      &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt; &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;h4&gt;Fancy Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-fancy&quot;&gt;
      &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt; &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
  &lt;h3&gt;Inline theming&lt;/h3&gt;
  Apply any of the theming classes on the placeholder element.
  &lt;h4&gt;No Theme on Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;h4&gt;Neutral Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-circle&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-squared&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;&lt;h4&gt;Primary Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-circle hoo-ph-primary&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-squared hoo-ph-primary&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-row hoo-ph-primary&quot;&gt;&lt;/div&gt;&lt;h4&gt;Fancy Theme Block&lt;/h4&gt;
  &lt;div class=&quot;hoo-ph-circle hoo-ph-fancy&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-squared hoo-ph-fancy&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;hoo-ph-row hoo-ph-fancy&quot;&gt;&lt;/div&gt;
---

# Shimmer Theming Support

Guidelines for applying theme variations to shimmer loading components.

## Overview

Shimmer components support multiple theming options to match the overall design system. Theming can be applied in two ways: either by adding a theme class to the shimmer element itself or by applying a theme class to the parent container.

## Supported Theme Variants

* **Default/Neutral** (`hoo-ph-neutral`) - Uses a neutral gray-based background gradient
* **Primary** (`hoo-ph-primary`) - Uses the primary theme colors for the background gradient
* **Fancy** (`hoo-ph-fancy`) - Uses a multi-colored gradient for a more vibrant effect

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* Theme classes:
  * `.hoo-ph-primary` - Primary theme coloring
  * `.hoo-ph-neutral` - Neutral theme coloring (also the default)
  * `.hoo-ph-fancy` - Fancy gradient theme

## Best Practices

* Use consistent theming across related shimmer elements
* Choose theme variants that match or complement your application's color scheme
* Use the fancy theme sparingly and only when it aligns with your brand's visual style
* Consider using the primary theme for greater visual connection to your brand
* Use the neutral theme for general-purpose loading states or when subtlety is preferred

## Animation

All shimmer variants use the same animation timing and style, only the colors of the gradients differ. The animation is a continuous left-to-right movement of the background gradient.

## Accessibility

* Ensure sufficient contrast between the shimmer gradient colors and the background
* Consider users with motion sensitivity when using shimmer effects extensively
* Do not rely on color alone to convey the meaning of different shimmer themes