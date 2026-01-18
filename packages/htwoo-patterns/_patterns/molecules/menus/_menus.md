---
title: Menu Components
order: 1
---

# Menu Components

HTWOO UI provides a comprehensive set of menu and navigation components for creating consistent navigation experiences.

## Overview

Menu components in HTWOO UI enable the creation of various navigation patterns including vertical navigation, breadcrumbs, command bars, and pivot navigation. These components are designed to be accessible, interactive, and consistent with the HTWOO design language.

## Components

### Navigation Components

HTWOO includes several navigation components for different use cases:

- **[Vertical Navigation](./nav.html)**: Multi-level tree navigation with expandable items
- **[Breadcrumb Navigation](./breadcrumb.html)**: Hierarchical path navigation
- **[Breadcrumb with Buttons](./breadcrumb-buttons.html)**: Interactive breadcrumb with button functionality

### Command & Action Bars

Components for displaying commands and actions:

- **[Command Bar](./cmdbar.html)**: Toolbar with action buttons
- **[Command Bar Overflow](./cmdbar-overflow.html)**: Command bar with overflow menu
- **[Pivot Bar](./pivotbar.html)**: Tab-style navigation for content sections
- **[Pivot Bar Overflow](./pivotbar-overflow.html)**: Pivot navigation with overflow handling

### Specialized Menus

Additional menu components for specific contexts:

- **[Teams Toolbar](./teams-toolbar.html)**: Microsoft Teams-style toolbar

## Features

- Multi-level vertical navigation (up to 5 levels)
- Expandable/collapsible menu items with smooth transitions
- Current page indicators and aria-current support
- Interactive JavaScript behavior for menu state management
- Responsive design that adapts to container width
- Keyboard navigation support
- Screen reader accessibility with proper ARIA attributes
- Consistent styling across all menu types
- Icon support for menu items and actions
- Overflow handling for limited space scenarios

## JavaScript Integration

Menu components include JavaScript functionality for interactive behavior:

### Navigation Menu JavaScript

The navigation menu includes the following interactive features:

- **Current item highlighting**: Automatically sets `aria-current` on clicked items
- **Expand/collapse functionality**: Toggle menu items with child navigation
- **Event handling**: Click events for navigation and icon buttons

#### Key JavaScript Classes

- `.hoo-nav` - Main navigation container
- `.hoo-navitem` - Individual navigation items
- `.hoo-navitem-link` - Navigation links
- `.hoo-buttonicon` - Expandable menu icons

#### Usage

## Component Structure

Menu components in HTWOO UI follow a consistent structure:

1. **Container**: Main wrapper element (e.g., `.hoo-nav`, `.hoo-breadcrumb`, `.hoo-cmdbar`)
2. **List/Menu Elements**: Semantic `<nav>`, `<menu>`, `<ol>`, or `<ul>` elements
3. **Items**: Individual menu items with appropriate roles and attributes
4. **Links/Buttons**: Interactive elements within menu items
5. **Icons**: Optional icons for visual enhancement and functionality

## Usage Guidelines

- Use semantic HTML elements (`<nav>`, `<menu>`, `<ol>`) for proper accessibility
- Include proper ARIA attributes for screen reader support
- Ensure keyboard navigation is functional across all menu types
- Use consistent icon placement and sizing
- Implement proper focus management for keyboard users
- Consider mobile responsiveness and touch interaction
- Test with screen readers to ensure accessibility compliance

## SCSS

## Accessibility Considerations

- Use proper semantic HTML elements for navigation
- Include ARIA attributes (`role`, `aria-expanded`, `aria-current`)
- Ensure keyboard navigation works correctly
- Provide clear focus indicators
- Support screen reader navigation
- Use meaningful link text and labels
- Consider color contrast for all interactive elements
- Test with assistive technologies

## Browser Compatibility

All menu components are compatible with modern browsers and include:

- Progressive enhancement for JavaScript functionality
- Fallback styling for non-JavaScript environments
- Consistent behavior across different browsers
- Support for touch and mouse interactions
