---
title: Command Bar
order: 30
---

# Command Bar

The Command Bar component provides a horizontal toolbar for displaying action buttons and commands.

## Overview

The Command Bar is a flexible toolbar that displays command buttons in a horizontal layout. It supports various button types and can adapt to different content lengths and screen sizes.

## Features

- Horizontal flexbox layout for command buttons
- Consistent height (44px) across all toolbar instances
- Support for various command button types
- Automatic spacing and alignment of buttons
- Responsive behavior for different screen sizes
- Proper semantic structure with `role="toolbar"`
- Integration with command button variants

## CSS Classes

- `.hoo-cmdbar` - Main command bar container with flexbox layout
- Uses command button classes from atoms layer:
  - `.hoo-buttoncmd` - Individual command buttons
  - `.hoo-buttoncmd-icon` - Button icons
  - `.hoo-buttoncmd-label` - Button text labels
  - `.hoo-buttoncmd-caret` - Dropdown indicators

## Layout Properties

### Container Structure

- **Display**: Flex row layout
- **Height**: 44px fixed height
- **Alignment**: Items centered vertically, justified to the left
- **Spacing**: No margin or padding on container
- **Direction**: Row (horizontal)

### Button Integration

The command bar extends the command button styling and provides:

- Consistent button heights within the toolbar
- Proper spacing between adjacent buttons
- Unified visual appearance across button types

## Button Variants

Command bars support different button configurations:

### Standard Command Button
```html
<button type="button" class="hoo-buttoncmd">
  <div class="hoo-buttoncmd-icon"><!-- Icon --></div>
  <div class="hoo-buttoncmd-label">Label</div>
</button>
```

### Command Button with Dropdown
```html
<button type="button" class="hoo-buttoncmd">
  <div class="hoo-buttoncmd-icon"><!-- Icon --></div>
  <div class="hoo-buttoncmd-label">Label</div>
  <div class="hoo-buttoncmd-caret"><!-- Chevron --></div>
</button>
```

### Icon-Only Command Button
```html
<button type="button" class="hoo-buttoncmd">
  <div class="hoo-buttoncmd-icon"><!-- Icon --></div>
</button>
```

## Usage Guidelines

- Use `role="toolbar"` on the command bar container for accessibility
- Group related commands together logically
- Place primary actions on the left, secondary actions on the right
- Include dropdown carets only when the button has a dropdown menu
- Provide meaningful labels and icons for all command buttons
- Consider responsive behavior for mobile devices
- Test keyboard navigation through toolbar buttons

## Responsive Considerations

- Command bars should adapt gracefully to smaller screens
- Consider using overflow menus for limited space scenarios
- Icons may be more important than labels on narrow screens
- Maintain proper touch targets (minimum 44px) on mobile devices

## SCSS

## Accessibility

- Uses `role="toolbar"` for proper semantic identification
- Supports keyboard navigation (Tab, Enter, Space, Arrow keys)
- Provides clear focus indicators for all interactive elements
- Maintains logical tab order through toolbar buttons
- Includes proper ARIA attributes when dropdowns are present
- Ensures sufficient color contrast for all button states
- Supports screen reader navigation with meaningful button labels
