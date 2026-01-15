---
title: Command Bar Overflow
order: 31
---

# Command Bar Overflow

The Command Bar Overflow component provides a responsive command bar that handles limited space by moving items to an overflow menu.

## Overview

When screen space is limited, the Command Bar Overflow automatically hides less important commands in an overflow menu, ensuring the most critical actions remain visible while maintaining accessibility and usability.

## Features

- Responsive behavior that adapts to available space
- Automatic overflow handling for commands that don't fit
- Overflow menu with "More" button trigger
- Proper ARIA attributes for accessibility
- Hidden items marked with `aria-hidden="true"`
- CSS class `.is-overflow-item` for styling hidden items
- Support for all command button variants
- Consistent visual design with standard command bar

## CSS Classes

- `.hoo-cmdbar` - Main command bar container
- `.hoo-buttoncmd` - Command buttons (visible and hidden)
- `.hoo-overflow-button` - Overflow menu trigger button
- `.is-overflow-item` - Hidden command items in overflow

## Overflow Behavior

### Responsive Strategy

1. **Available Space**: Commands display normally in horizontal layout
2. **Limited Space**: Less critical commands move to overflow menu
3. **Very Limited Space**: Only most important commands remain visible
4. **Overflow Menu**: Hidden commands accessible via "More" button

### Priority System

Commands typically overflow in this order (least to most important):
1. Secondary actions (Share, Print)
2. Editing actions (Format, Style)
3. Primary actions (New, Save, Edit)

## States and Attributes

### ARIA Attributes

- `role="toolbar"` - Command bar semantic role
- `aria-haspopup="menu"` - Indicates overflow button opens a menu
- `aria-expanded="false|true"` - Overflow menu state
- `aria-hidden="true"` - Hidden overflow items

### CSS Classes

- `.is-overflow-item` - Applied to hidden commands
- `.hoo-overflow-button` - Overflow menu trigger styling

## JavaScript Integration

Overflow behavior typically requires JavaScript for:

- **Responsive calculations**: Measuring available space
- **Dynamic overflow**: Moving items in/out of overflow menu
- **Menu management**: Opening/closing overflow menu
- **Accessibility updates**: Managing ARIA attributes

### Example JavaScript Pattern

## Usage Guidelines

- Prioritize commands based on user importance and frequency
- Use meaningful labels for the overflow menu trigger ("More", "Additional actions")
- Include proper ARIA attributes for overflow menu interaction
- Test responsive behavior at different screen sizes
- Ensure keyboard navigation works through visible and overflow commands
- Consider touch targets on mobile devices
- Implement proper focus management when overflow menu opens/closes

## Accessibility

- Uses `role="toolbar"` for semantic toolbar identification
- Implements proper ARIA attributes for overflow menu
- Includes `aria-hidden="true"` for hidden overflow items
- Supports keyboard navigation (Tab, Enter, Space, Escape)
- Provides clear focus indicators for all interactive elements
- Maintains logical tab order through visible commands
- Announces overflow menu state changes to screen readers

## SCSS

