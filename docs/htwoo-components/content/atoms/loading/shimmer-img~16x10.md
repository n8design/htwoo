---
title: "Shimmer Image 16:10"
description: ""A 16:10 aspect ratio placeholder for image content that's still loading, displayed with a shimmer effect.""
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-img~16x10"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Img~16x10"
seoDescription: "Loading Shimmer Img~16x10 Atoms"
weight: 73
markup: |
  
---

# Shimmer Image 16:10

A 16:10 aspect ratio placeholder for image content that's still loading, displayed with a shimmer effect.

## Overview

The 16:10 shimmer image provides an animated loading state specifically for images with a 16:10 aspect ratio, commonly used in computer displays and certain photography formats. It maintains the layout while the actual image is loading.

## Usage

The 16:10 shimmer image should be used when:
* Loading images with 16:10 aspect ratio that may take time to fetch
* Maintaining layout stability for specific image formats
* Providing visual feedback for screen-optimized image loading states
* Creating skeleton screens for document previews or computer display optimized content

## SCSS

**Main Component**\
@n8d/htwoo-core/components/loading

**Component Import**

**SCSS Partial Location**

## CSS Classes

* Base class:
  * `.hoo-ph-squared` - Standard rectangle shimmer effect

* Theme classes (optional):
  * `.hoo-ph-primary` - Primary theme coloring
  * `.hoo-ph-neutral` - Neutral theme coloring
  * `.hoo-ph-fancy` - Fancy gradient theme

## Dimensions

For a proper 16:10 aspect ratio, ensure the width:height ratio is 16:10 (or 8:5). Some common 16:10 dimensions:
* 320×200 pixels
* 640×400 pixels
* 1280×800 pixels
* 1920×1200 pixels

## Accessibility

* Always include appropriate `width` and `height` attributes to maintain the 16:10 aspect ratio
* Use `alt=""` for decorative shimmer images
* Use appropriate `aria-busy="true"` on container elements during loading
* Consider using `aria-hidden="true"` for purely decorative shimmer elements