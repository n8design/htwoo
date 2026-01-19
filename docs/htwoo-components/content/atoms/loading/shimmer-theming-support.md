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
hasVariants: false
markup: |
  
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