---
title: Shimmer Image 1:1
order: 71
---

# Shimmer Image 1:1

A square (1:1 aspect ratio) placeholder for image content that's still loading, displayed with a shimmer effect.

## Overview

The 1:1 shimmer image provides an animated loading state specifically for square images like profile pictures, thumbnails, or other square-format images. It maintains the layout while the actual image is loading.

## Usage

The 1:1 shimmer image should be used when:
* Loading square format images that may take time to fetch
* Maintaining layout stability during image loading
* Providing visual feedback for square image loading states
* Creating skeleton screens for avatar or profile images

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

## Accessibility

* Always include equal `width` and `height` attributes to maintain square aspect ratio
* Use `alt=""` for decorative shimmer images
* Use appropriate `aria-busy="true"` on container elements during loading
* Consider using `aria-hidden="true"` for purely decorative shimmer elements
