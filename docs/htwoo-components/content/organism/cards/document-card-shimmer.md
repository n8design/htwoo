---
title: "Document Card Shimmer"
description: "The Document Card Shimmer variant provides an animated loading state that maintains the visual structure of the Document Card while content loads asynchronously. It uses shimmer animations to indicate"
type: "components"
layout: "single"
patternId: "organism-cards-document-card-shimmer"
category: "organism"
subcategory: "cards"
seoTitle: "Organism - Cards Document Card Shimmer"
seoDescription: "Cards Document Card Shimmer Organism"
weight: 13
hasVariants: false
markup: |
  
---

# Document Card - Shimmer

The Document Card Shimmer variant provides an animated loading state that maintains the visual structure of the Document Card while content loads asynchronously. It uses shimmer animations to indicate loading progress and enhance perceived performance.

## Overview

This variant creates a skeleton loading state with animated shimmer effects that match the Document Card layout. It provides visual feedback to users during content loading while maintaining the expected card structure and dimensions.

## Features

- **Shimmer Animation**: Subtle animated loading indicators
- **Structural Consistency**: Maintains Document Card layout during loading
- **Performance Enhancement**: Improves perceived loading performance
- **Adaptive Layout**: Same responsive behavior as standard Document Card
- **Smooth Transitions**: Seamless transition from loading to loaded state

## Usage

Ideal for scenarios with:
- Asynchronous content loading
- Network-dependent content
- Large document collections
- Progressive loading patterns
- Performance-sensitive interfaces

## Structure

Maintains the same visual structure as Document Card with shimmer placeholders:
1. **Image Placeholder**: Shimmer animation for image loading
2. **Location Placeholder**: Animated placeholder for location text
3. **Title Placeholder**: Shimmer effect for title loading
4. **Footer Placeholder**: Animated placeholders for metadata

## Animation Behavior

### Shimmer Effect
- **Gradient Animation**: Subtle animated gradient overlay
- **Timing**: Smooth, continuous animation loop
- **Performance**: GPU-accelerated animations for smooth performance
- **Duration**: Appropriate timing for loading perception

### Transition Handling
- **Fade-in**: Smooth transition from shimmer to actual content
- **Layout Preservation**: Maintains card dimensions during transition
- **Content Replacement**: Seamless content substitution
- **State Management**: Clear loading state indicators

## Best Practices

### User Experience
- **Loading Duration**: Don't show shimmer for very short loading times
- **Content Priority**: Load critical content first
- **Error States**: Transition to error states when loading fails
- **Progressive Loading**: Load content progressively as it becomes available

## SCSS Import