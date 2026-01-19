---
title: "Shimmer Squared"
description: "A rectangular shimmer placeholder for content blocks that are still loading."
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-squared"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Squared"
seoDescription: "Loading Shimmer Squared Atoms"
weight: 60
hasVariants: false
markup: |
  
---

# Shimmer Squared

A rectangular shimmer placeholder for content blocks that are still loading.

## Overview

The shimmer squared provides an animated loading state for rectangular UI elements. It's designed to represent the loading state of cards, buttons, images, or other rectangular content until the actual content is ready to be displayed.

## Usage

Shimmer squared elements should be used when:
* Loading rectangular content like cards, images, or buttons
* Maintaining UI layout consistency during loading states
* Providing visual feedback for loading rectangular elements
* Creating skeleton screens for component-heavy interfaces

## Variants

Shimmer squared elements can be styled with different theme classes:
* **Default** - Standard neutral shimmer effect
* **Primary** - Primary theme colored shimmer
* **Neutral** - Explicitly neutral shimmer
* **Fancy** - Multi-colored gradient shimmer effect

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-ph-squared` - Base squared shimmer class
* `.hoo-ph-primary` - Primary theme coloring
* `.hoo-ph-neutral` - Neutral theme coloring
* `.hoo-ph-fancy` - Fancy gradient theme

## Animation

The shimmer effect uses a background gradient animation that moves from left to right, creating a shimmering effect that indicates content is loading. The animation runs continuously until the actual content is loaded and the shimmer is replaced.

## Customization

The size of the shimmer squared element can be adjusted using standard CSS properties:
* `width` - Specify the width of the rectangular area
* `height` - Specify the height of the rectangular area
* `border-radius` - Add rounded corners for specific UI elements

## Accessibility

* When replacing content with shimmer placeholders, maintain the same layout and spacing
* Use `aria-busy="true"` on container elements during loading
* Avoid conveying essential information solely through the shimmer effect
* Consider using `aria-hidden="true"` on purely decorative shimmer elements