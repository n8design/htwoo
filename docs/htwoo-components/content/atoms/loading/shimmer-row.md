---
title: "Shimmer Row"
description: ""A horizontal shimmer placeholder for text content that's still loading.""
type: "components"
layout: "single"
patternId: "atoms-loading-shimmer-row"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Shimmer Row"
seoDescription: "Loading Shimmer Row Atoms"
weight: 50
markup: |
  &lt;div class=&quot;hoo-ph-row&quot;&gt;&lt;/div&gt;
---

# Shimmer Row

A horizontal shimmer placeholder for text content that's still loading.

## Overview

The shimmer row provides an animated loading state for lines of text or horizontal content elements. It's designed to represent the loading state of text, labels, headings, or other linear content until the actual content is ready to be displayed.

## Usage

Shimmer rows should be used when:
* Loading text content like headings, paragraphs, or labels
* Maintaining UI layout consistency during loading states
* Providing visual feedback for loading text elements
* Creating skeleton screens for content-heavy interfaces

## Variants

Shimmer rows can be styled with different theme classes:
* **Default** - Standard neutral shimmer effect
* **Primary** - Primary theme colored shimmer
* **Neutral** - Explicitly neutral shimmer
* **Fancy** - Multi-colored gradient shimmer effect

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-ph-row` - Base row shimmer class
* `.hoo-ph-primary` - Primary theme coloring
* `.hoo-ph-neutral` - Neutral theme coloring
* `.hoo-ph-fancy` - Fancy gradient theme

## Animation

The shimmer effect uses a background gradient animation that moves from left to right, creating a shimmering effect that indicates content is loading. The animation runs continuously until the actual content is loaded and the shimmer is replaced.

## Accessibility

* When replacing text with shimmer placeholders, maintain the same layout and spacing
* Use `aria-busy="true"` on container elements during loading
* Avoid conveying essential information solely through the shimmer effect
* Consider using `aria-hidden="true"` on purely decorative shimmer elements
* Use multiple row shimmers to mimic paragraph structure when appropriate