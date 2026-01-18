---
title: "Webpart Title"
description: "The WebPart Title component provides an editable title header specifically designed for SharePoint Framework (SPFx) web parts and Microsoft 365 applications. It enables inline editing with proper acce"
type: "components"
layout: "single"
patternId: "molecules-webpart-related-webpart-title"
category: "molecules"
subcategory: "webpart-related"
seoTitle: "Molecules - Webpart Related Webpart Title"
seoDescription: "Webpart Related Webpart Title Molecules"
weight: 10
hasVariants: false
markup: |
  &lt;h3 class=&quot;hoo-webpart-header&quot;&gt;
      &lt;div role=&quot;textbox&quot; placeholder=&quot;News&quot; aria-placeholder=&quot;News&quot; contenteditable=&quot;true&quot;&gt;This is just a sample web part title&lt;/div&gt;
  &lt;/h3&gt;
---

# WebPart Title

The WebPart Title component provides an editable title header specifically designed for SharePoint Framework (SPFx) web parts and Microsoft 365 applications. It enables inline editing with proper accessibility support and seamless integration with SharePoint's theming system.

## Overview

The WebPart Title component creates a semantic heading element that can be edited directly in-place. It's designed to work seamlessly with SharePoint's edit and view modes, providing content authors with an intuitive way to customize web part titles without navigating to separate configuration panels.

## Features

### Inline Editing
- **Direct Content Editing**: Click to edit titles directly in the interface
- **Contenteditable Support**: Leverages native browser contenteditable functionality
- **Placeholder Text**: Shows helpful placeholder when title is empty
- **Real-time Updates**: Immediate visual feedback during editing

### SharePoint Integration
- **SPFx Compatible**: Designed specifically for SharePoint Framework development
- **Edit Mode Awareness**: Automatically adapts to SharePoint's edit and view modes
- **Theme Integration**: Inherits SharePoint theme colors and typography
- **Property Pane Integration**: Can be connected to SPFx property pane configuration

### Accessibility
- **Semantic HTML**: Uses proper heading structure (`h3` element)
- **ARIA Support**: Includes `role="textbox"` and `aria-placeholder` attributes
- **Keyboard Navigation**: Full keyboard support for editing operations
- **Screen Reader Friendly**: Provides meaningful context for assistive technologies

## Usage

### SPFx Integration
Perfect for SharePoint Framework web part development:

1. **Property Binding**: Connect to web part properties for persistent storage
2. **Edit Mode Detection**: Enable/disable editing based on page mode
3. **Theme Inheritance**: Automatically adapts to current SharePoint theme
4. **Event Handling**: Implement save/update logic for content changes

### Content Management
- **Empty State**: Shows placeholder text when no title is set
- **Content Validation**: Can be extended with custom validation logic
- **Character Limits**: Supports maximum length restrictions
- **Rich Text**: Supports basic text formatting if needed

## Styling

### Typography
- **Font Size**: 20px (1.25rem) for optimal hierarchy
- **Font Weight**: 600 (semi-bold) for proper heading emphasis
- **Color**: Uses theme-aware neutral-700 color
- **Line Height**: Optimized for readability

### Layout
- **Margins**: Proper spacing for web part header placement
- **Text Overflow**: Ellipsis handling for long titles
- **Responsive**: Adapts to container width constraints

### Edit States
- **Hover**: Cursor changes to text cursor on hover
- **Focus**: Clear focus indicators for editing state
- **Empty**: Placeholder styling with muted color (neutral-400)

## Accessibility Features

### Keyboard Support
- **Tab Navigation**: Focusable element in tab order
- **Enter/Return**: Confirm editing changes
- **Escape**: Cancel editing (if implemented)

### Screen Reader Support
- **Semantic Structure**: Proper heading hierarchy
- **Role Attribution**: Clear textbox role identification
- **State Announcements**: Edit state changes announced to screen readers
- **Placeholder Access**: Accessible placeholder text via aria-placeholder

### Visual Accessibility
- **Color Contrast**: High contrast ratios for all text
- **Focus Indicators**: Clear visual focus states
- **Text Size**: Adequate size for readability

## Best Practices

### Content Guidelines
- **Concise Titles**: Keep titles short and descriptive
- **Meaningful Text**: Use clear, purpose-driven titles
- **Consistent Voice**: Maintain consistent tone across web parts
- **Avoid Jargon**: Use plain language for better accessibility

### Development
- **Property Binding**: Always bind to persistent web part properties
- **Error Handling**: Implement graceful error handling for save operations
- **Validation**: Add appropriate content validation
- **Performance**: Optimize for fast rendering and editing responsiveness

### User Experience
- **Clear Affordances**: Make editing capabilities obvious
- **Immediate Feedback**: Provide instant visual feedback
- **Error Recovery**: Handle edit failures gracefully
- **Consistent Behavior**: Maintain consistent editing patterns

## Browser Support

- **Modern Browsers**: Full support in all modern browsers
- **Contenteditable**: Requires contenteditable API support
- **ARIA**: Requires basic ARIA attribute support
- **CSS Grid/Flexbox**: For responsive layout features

## SCSS Import