---
title: Meta Components
order: 1
---

# Meta Components

HTWOO UI provides a comprehensive set of meta components for displaying tags, labels, and metadata information in various formats and layouts.

## Overview

Meta components in HTWOO UI enable the presentation of categorization information, metadata, and tags in a consistent and accessible manner. These components are designed to be flexible, interactive when needed, and consistent with the HTWOO design language.

## Components

### Tag Lists

HTWOO includes several tag list components for different interaction patterns:

- **[Static Tag List](./tag-list-static.html)**: Non-interactive tags for displaying metadata
- **[Button Tag List](./tag-list-button.html)**: Interactive button tags for actions and filtering
- **[Link Tag List](./tag-list-link.html)**: Clickable link tags for navigation
- **[Primary Tag Lists](./tag-list-static-primary.html)**: Tag lists using primary theme styling

### Tag Variants

Each tag list type supports multiple styling variants:

- **Standard Tags**: Default styling with neutral colors
- **Primary Tags**: Emphasized styling with theme colors
- **Interactive Tags**: Hover states and click interactions
- **Static Tags**: Non-interactive display-only tags

## Features

- Flexible layout with automatic wrapping and consistent spacing
- Multiple interaction types (static, button, link)
- Primary and standard color variants
- Semantic HTML structure using lists
- Responsive design that adapts to container width
- Consistent typography and spacing
- Hover states for interactive elements
- Keyboard navigation support for interactive tags
- Proper focus management and accessibility

## Component Structure

Meta components in HTWOO UI follow a consistent structure:

1. **Container**: `.hoo-meta-list` serves as the main list container
2. **List Items**: Standard `<li>` elements containing individual tags
3. **Tag Elements**: Various tag types (span, button, link) with `.hoo-mtag` class
4. **Label**: `.hoo-mtag-lbl` contains the actual tag text

## CSS Architecture

### Container Layout

The `.hoo-meta-list` container provides:

- **Flexbox layout**: Horizontal flow with wrapping
- **Gap spacing**: Consistent 0.35rem vertical and 0.5rem horizontal gaps
- **Minimum height**: 2.75rem to maintain consistent layout
- **List reset**: Removes default list styling

### Tag Styling

Individual tags (`.hoo-mtag`) include:

- **Inline-flex**: Proper alignment of tag content
- **Border radius**: 0.75em for rounded appearance
- **Height**: 1.5em for consistent sizing
- **Typography**: 1rem base font size with 0.875em labels

## Usage Guidelines

- Use semantic list elements (`<ul>`) for proper accessibility
- Choose appropriate tag type based on interaction needs:
  - **Static**: For display-only metadata
  - **Button**: For filtering or action triggers
  - **Link**: For navigation to related content
- Consider using primary variants to emphasize important tags
- Ensure proper spacing by using the `.hoo-meta-list` container
- Test keyboard navigation for interactive tag lists
- Provide meaningful labels that clearly describe the tag content

## JavaScript Integration

While meta components are primarily CSS-driven, interactive behavior may include:

- Click handlers for button and link tags
- Filtering functionality for tag-based filters
- Dynamic tag addition/removal
- State management for selected tags

## SCSS

## Accessibility Considerations

- Use semantic `<ul>` and `<li>` elements for proper list structure
- Include appropriate ARIA attributes for interactive elements
- Ensure sufficient color contrast for all tag variants
- Support keyboard navigation (Tab, Enter, Space) for interactive tags
- Provide clear focus indicators for all focusable elements
- Use meaningful text content that describes the tag purpose
- Consider `aria-label` or `aria-labelledby` for tag lists when context is needed
- Test with screen readers to ensure proper announcement

## Color and Theming

### Standard Tags
- **Background**: Neutral-100 (light gray)
- **Text**: Neutral-700 (dark gray)
- **Hover**: Theme-700 background with white text

### Primary Tags
- **Background**: Theme-700 (primary brand color)
- **Text**: White (neutral-000)
- **Hover**: Neutral-100 background with dark text

## Browser Compatibility

All meta components are compatible with modern browsers and include:

- Flexbox layout support
- CSS custom properties for theming
- Progressive enhancement for interactive features
- Consistent behavior across different browsers
