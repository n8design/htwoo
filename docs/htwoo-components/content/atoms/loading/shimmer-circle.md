---
title: "Shimmer Circle"
description: "A circular shimmer placeholder for avatar, icon, or circular image content that's still loading."
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-circle"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Circle"
seoDescription: "Loading Shimmer Circle Atoms"
weight: 40
hasVariants: false
markup: |
  
---

# Shimmer Circle

A circular shimmer placeholder for avatar, icon, or circular image content that's still loading.

## Overview

The shimmer circle provides an animated loading state for circular UI elements. It's designed to represent the loading state of avatars, profile pictures, circular icons, or other circular content until the actual content is ready to be displayed.

## Usage

Shimmer circles should be used when:
* Loading circular content like user avatars or profile images
* Maintaining UI layout consistency during loading states
* Providing visual feedback for loading circular elements
* Replacing circular images or icons that are still being fetched

## Variants

Shimmer circles can be styled with different theme classes:
* **Default** - Standard neutral shimmer effect
* **Primary** - Primary theme colored shimmer
* **Neutral** - Explicitly neutral shimmer
* **Fancy** - Multi-colored gradient shimmer effect

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-ph-circle` - Base circle shimmer class
* `.hoo-ph-primary` - Primary theme coloring
* `.hoo-ph-neutral` - Neutral theme coloring
* `.hoo-ph-fancy` - Fancy gradient theme

## Animation

The shimmer effect uses a background gradient animation that moves from left to right, creating a shimmering effect that indicates content is loading. The animation runs continuously until the actual content is loaded and the shimmer is replaced.

## Accessibility

* When replacing content with shimmer placeholders, maintain the same layout and spacing
* Use `aria-busy="true"` on container elements during loading
* Avoid conveying essential information solely through the shimmer effect
* Consider using `aria-hidden="true"` on purely decorative shimmer elements