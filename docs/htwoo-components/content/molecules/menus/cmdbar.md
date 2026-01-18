---
title: "Command Bar"
description: "The Command Bar component provides a horizontal toolbar for displaying action buttons and commands."
type: "components"
layout: "single"
patternId: "molecules-menus-cmdbar"
category: "molecules"
subcategory: "menus"
seoTitle: "Molecules - Menus Cmdbar"
seoDescription: "Menus Cmdbar Molecules"
weight: 30
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-cmdbar&quot; role=&quot;toolbar&quot;&gt;
      &lt;div class=&quot;hoo-buttoncmd&quot;  aria-haspopup=&quot;true&quot;  &gt;
          &lt;button class=&quot;hoo-buttoncmd&quot; aria-haspopup=&quot;true&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;&lt;span class=&quot;hoo-button-icon hoo-buttonchevron&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
  &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
      &lt;/use&gt;
  &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
      &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-buttoncmd&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; &gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;
  &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-buttoncmd&quot;  aria-haspopup=&quot;true&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; aria-haspopup=&quot;true&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;&lt;span class=&quot;hoo-button-icon hoo-buttonchevron&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
  &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
      &lt;/use&gt;
  &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
      &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-buttoncmd&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; &gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;
  &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-buttoncmd&quot;  aria-haspopup=&quot;true&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; aria-haspopup=&quot;true&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg &quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;&lt;span class=&quot;hoo-button-icon hoo-buttonchevron&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
  &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
      &lt;/use&gt;
  &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
      &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-buttoncmd&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; &gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;
  &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
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