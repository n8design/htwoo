---
title: Generic Dialog
order: 11
---

# Generic Dialog

The Generic Dialog provides the foundational dialog implementation in the HTWOO design system. Built on the HTML5 `<dialog>` element, it offers a flexible, accessible container for displaying content, gathering user input, and managing user interactions in both modal and non-modal contexts.

## Overview

The Generic Dialog serves as the base component for all dialog variants in HTWOO. It provides essential dialog functionality including positioning, sizing, content management, and accessibility features while remaining flexible enough to support various use cases and customization needs.

## Features

### HTML5 Foundation
- **Native Dialog Element**: Built on HTML5 `<dialog>` for optimal accessibility
- **Browser Support**: Leverages native browser dialog functionality
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Navigation**: Built-in Escape key support for closing

### Flexible Configuration
- **Modal and Non-Modal**: Supports both `show()` and `showModal()` methods
- **Custom Dimensions**: Configurable width and height via CSS variables
- **Content Areas**: Header, content, and action sections
- **Resize Support**: Optional resize functionality for user control

### Visual Design
- **Modern Styling**: Rounded corners (0.5rem) and smooth transitions
- **Backdrop Effects**: Blur and saturation effects for modal dialogs
- **Responsive Layout**: Adapts to viewport constraints
- **Theme Integration**: Inherits HTWOO theme colors and typography

## Structure

The Generic Dialog consists of three main areas:
1. **[Dialog Header](../molecules/dialogs/dialog-header)**: Optional title bar with close button
2. **[Dialog Content](../molecules/dialogs/dialog-content)**: Main content area
3. **Dialog Actions**: Optional button area for user actions

## Data Structure

```json
{
    "dialog": {
        "button": {
            "label": "Show Dialog",
            "props": "id=\"btn-dialog\""
        }
    },
    "modal-dialog": {
        "button": {
            "label": "Show Modal Dialog", 
            "props": "id=\"btn-modal-dialog\""
        }
    }
}
```

## CSS Classes

### Container Classes
- **`.hoo-dlg`**: Main dialog container with base styling
- **`.hoo-dlgheader`**: Header section with title and close button
- **`.hoo-dlgcontent`**: Content area with padding and overflow handling
- **`.hoo-dlg-actions`**: Footer area for action buttons

### Modifier Classes
- **`.statusbar`**: Converts dialog to status bar appearance
- **`.msg`**: Lightweight message bar styling
- **`[resize="true"]`**: Enables user resizing functionality

## Styling

### Base Dimensions

### Visual Properties
- **Background**: Neutral-000 (#ffffff) for clean appearance
- **Border**: None (relies on backdrop and shadow)
- **Border Radius**: 0.5rem for modern appearance
- **Color**: Neutral-700 (#323130) for text content
- **Transition**: 0.5s ease-in-out for smooth animations

### Backdrop Effects

## JavaScript Integration

### Basic Dialog Control

### Using HOODialog Class

### Event Handling

## Use Cases

### Content Display
- **Information Dialogs**: Displaying detailed information or help content
- **Media Viewers**: Image, video, or document preview interfaces
- **Detail Views**: Expanded views of list items or cards
- **Report Displays**: Charts, graphs, and data visualizations

### User Input
- **Form Dialogs**: Data entry and editing interfaces
- **Confirmation Dialogs**: User action confirmations
- **Settings Panels**: Configuration and preference interfaces
- **Wizard Interfaces**: Multi-step processes and workflows

### Application Features
- **About Dialogs**: Application information and credits
- **Help Systems**: Contextual help and documentation
- **Tool Palettes**: Design and editing tools
- **Search Interfaces**: Advanced search and filter options

## Accessibility

### Native HTML5 Benefits
- **Focus Trapping**: Automatic focus management within dialog
- **Keyboard Support**: Built-in Escape key handling for closing
- **Screen Reader**: Native dialog semantics and state announcements
- **ARIA Integration**: Automatic ARIA attributes and roles

### Enhanced Accessibility
- **Focus Restoration**: Returns focus to launching element on close
- **Tab Order**: Logical tab order within dialog content
- **Close Methods**: Multiple ways to close (button, Escape, backdrop)
- **Clear Labels**: Descriptive button labels and instructions

### Visual Accessibility
- **High Contrast**: Compatible with high contrast display modes
- **Focus Indicators**: Clear visual focus states for keyboard navigation
- **Text Scaling**: Responsive to user font size preferences
- **Color Independence**: Doesn't rely solely on color for information

## Best Practices

### Content Strategy
- **Single Purpose**: Each dialog should have one clear purpose
- **Concise Content**: Keep content focused and scannable
- **Clear Actions**: Use descriptive, action-oriented button labels
- **Logical Flow**: Organize content in logical reading order

### User Experience
- **Non-Intrusive Timing**: Don't interrupt critical user workflows
- **Clear Escape Routes**: Always provide obvious ways to close
- **Responsive Feedback**: Show immediate feedback for user actions
- **Context Preservation**: Maintain user context when appropriate

### Development
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Error Handling**: Graceful handling of content loading failures
- **Performance**: Optimize for fast loading and smooth interactions
- **Testing**: Test with keyboard users and screen readers

## Variants and Extensions

### Status Bar Mode
```html
<dialog class="hoo-dlg statusbar">
    <div class="hoo-icon">
        <svg><!-- Status icon --></svg>
    </div>
    <div class="hoo-dlg-content">Status message</div>
    <div class="hoo-dlg-actions">
        <button>Dismiss</button>
    </div>
</dialog>
```

### Message Bar Mode
```html
<dialog class="hoo-dlg msg">
    <div class="hoo-dlg-content">
        Brief message content with minimal padding
    </div>
</dialog>
```

## Browser Support

- **Modern Browsers**: Full support in Chrome 37+, Firefox 98+, Safari 15.4+
- **HTML5 Dialog**: Requires native `<dialog>` element support
- **CSS Features**: Modern CSS (custom properties, backdrop-filter)
- **JavaScript**: ES6+ features for enhanced functionality
- **Polyfills**: dialog-polyfill available for older browser support

## SCSS Import

