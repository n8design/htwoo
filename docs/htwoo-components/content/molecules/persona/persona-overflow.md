---
title: "Persona Overflow"
description: "The persona overflow component provides a compact way to indicate additional users when there isn't enough space to display all personas in a list or grid. It shows a count of remaining users in a cir"
type: "components"
layout: "single"
patternId: "molecules-persona-persona-overflow"
category: "molecules"
subcategory: "persona"
seoTitle: "Molecules - Persona Persona Overflow"
seoDescription: "Persona Persona Overflow Molecules"
weight: 11
markup: |
  &lt;div class=&quot;hoo-persona-overflow&quot;&gt;
      &lt;div class=&quot;hoo-persona-data&quot;&gt;
          +21
      &lt;/div&gt;
  &lt;/div&gt;
---

# Persona Overflow

The persona overflow component provides a compact way to indicate additional users when there isn't enough space to display all personas in a list or grid. It shows a count of remaining users in a circular badge format.

## Overview

The persona overflow component is designed to be used alongside persona components to indicate when there are more users than can be displayed in the available space. It maintains visual consistency with the persona components while providing clear numerical feedback.

## Features

- **Compact Design**: Circular badge format that doesn't take up much space
- **Numerical Display**: Shows count of additional users (e.g., "+21")
- **Consistent Styling**: Matches the visual design of persona components
- **Flexible Positioning**: Can be placed at the end of persona lists

## Usage

The overflow component is typically used in scenarios where:
- User lists exceed available display space
- Facepiles need to show additional user counts
- Team member displays have space constraints
- Gallery views need overflow indicators

## Styling

The component uses a circular design with:
- Fixed dimensions (32px × 32px by default)
- Centered content alignment
- Neutral background color (`#f3f2f1`)
- Readable typography

## CSS Classes

- `.hoo-persona-overflow`: Main container element
- `.hoo-persona-data`: Content container for the number display

## Design Specifications

- **Size**: 32px × 32px circle
- **Background**: Light gray (`#f3f2f1`)
- **Typography**: 14px font size
- **Alignment**: Center-aligned content
- **Border Radius**: 50% for circular appearance

## Accessibility

- Text content is clearly readable with sufficient contrast
- Component can be made focusable for keyboard navigation
- Screen readers can announce the overflow count
- Consider adding aria-label for better context

## Use Cases

1. **Facepiles**: Show additional team members beyond the visible limit
2. **User Lists**: Indicate more users in constrained spaces
3. **Gallery Views**: Display overflow count in user galleries
4. **Team Displays**: Show additional team members in cards or widgets

## Integration

The overflow component works seamlessly with:
- Persona components of various sizes
- Facepile layouts
- User list interfaces
- Team member displays

## SCSS Import