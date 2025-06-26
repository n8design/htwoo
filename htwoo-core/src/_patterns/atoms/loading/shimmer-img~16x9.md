---
title: Shimmer Image 16:9
order: 72
---

# Shimmer Image 16:9

A widescreen (16:9 aspect ratio) placeholder for image content that's still loading, displayed with a shimmer effect.

## Overview

The 16:9 shimmer image provides an animated loading state specifically for widescreen images commonly used in videos, banners, and modern photography. It maintains the layout while the actual image is loading.

## Usage

The 16:9 shimmer image should be used when:
* Loading widescreen format images that may take time to fetch
* Maintaining layout stability for video thumbnails or widescreen images
* Providing visual feedback for banner or hero image loading states
* Creating skeleton screens for media-rich interfaces

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

For a proper 16:9 aspect ratio, ensure the width:height ratio is 16:9. Some common 16:9 dimensions:
* 320×180 pixels
* 640×360 pixels
* 1280×720 pixels (720p)
* 1920×1080 pixels (1080p)

## Accessibility

* Always include appropriate `width` and `height` attributes to maintain the 16:9 aspect ratio
* Use `alt=""` for decorative shimmer images
* Use appropriate `aria-busy="true"` on container elements during loading
* Consider using `aria-hidden="true"` for purely decorative shimmer elements
