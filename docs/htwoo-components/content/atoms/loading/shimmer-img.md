---
title: "Shimmer Image"
description: "A placeholder for image content that's still loading, displayed with a shimmer effect."
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-img"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Img"
seoDescription: "Loading Shimmer Img Atoms"
weight: 70
hasVariants: false
markup: |
  &lt;img src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=&quot; class=&quot;&quot; width=&quot;&quot; height=&quot;&quot;&gt;
---

# Shimmer Image

A placeholder for image content that's still loading, displayed with a shimmer effect.

## Overview

The shimmer image provides an animated loading state for image elements. It uses a transparent placeholder image with CSS classes to create a shimmer effect, maintaining layout consistency while the actual image is loading.

## Usage

Shimmer images should be used when:
* Loading actual image content that may take time to fetch
* Maintaining layout stability during image loading
* Providing visual feedback for image loading states
* Creating skeleton screens for image-heavy interfaces

## Variants

* **Default/Standard** - Basic rectangular image placeholder
* **1:1** - Square aspect ratio image placeholder
* **16:9** - Widescreen aspect ratio image placeholder
* **16:10** - Common screen aspect ratio image placeholder

Shimmer images can also be styled with different theme classes:
* **Default** - Standard neutral shimmer effect
* **Primary** - Primary theme colored shimmer
* **Neutral** - Explicitly neutral shimmer
* **Fancy** - Multi-colored gradient shimmer effect

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* Base class (apply one of the following):
  * `.hoo-ph-squared` - Standard rectangle shimmer effect
  * `.hoo-ph-circle` - Circle shimmer effect (for round images)

* Theme classes (optional):
  * `.hoo-ph-primary` - Primary theme coloring
  * `.hoo-ph-neutral` - Neutral theme coloring
  * `.hoo-ph-fancy` - Fancy gradient theme

## Accessibility

* Always include appropriate `width` and `height` attributes to prevent layout shifts
* Use `alt=""` for decorative shimmer images
* Use appropriate `aria-busy="true"` on container elements during loading
* Consider using `aria-hidden="true"` for purely decorative shimmer elements