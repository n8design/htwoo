---
title: Quick Links Components
order: 1
---

# Quick Links Components

Quick Links provide users with fast access to frequently used resources, applications, or content within Microsoft 365 and SharePoint environments. The HTWOO UI library offers a comprehensive set of quick link components in various layouts and styles.

## Overview

Quick Links components are designed to improve user productivity by providing immediate access to important resources. They support multiple presentation formats including lists, tiles, buttons, and grids, each optimized for different use cases and screen sizes.

## Component Categories

### List Components
- **[List Item](./ql-list-item)**: Basic list-style quick link with icon and description
- **[List Grid](./ql-list-grid)**: Grid layout for list-style quick links
- **[Compact Item](./ql-compact-item)**: Minimal space list item with editing capabilities

### Tile Components
- **[Standard Tiles](./ql-tiles)**: Square tiles with icons and titles
- **[Medium Tiles](./ql-tiles-medium)**: Larger tiles for prominent display
- **[Large Tiles](./ql-tiles-large)**: Maximum size tiles for hero sections
- **[XLarge Tiles](./ql-tiles-xlarge)**: Extra large tiles for featured content
- **[Fill Tiles](./ql-tiles-fill)**: Flexible tiles that adapt to container

### Button Components
- **[Outline Buttons](./ql-list-button-outline)**: Button-style with outline border
- **[Filled Buttons](./ql-list-button-fill)**: Solid background button style
- **[No Outline Buttons](./ql-list-button-no-outline)**: Clean button without borders

## Key Features

- **Multiple Layouts**: List, tile, button, and grid arrangements
- **Responsive Design**: Adapts to various screen sizes and containers
- **Edit Mode Support**: Built-in editing capabilities for content management
- **Icon Integration**: Support for both image and SVG icons
- **Accessibility**: Keyboard navigation and screen reader support
- **Hover Effects**: Interactive feedback for better user experience

## Layout Options

### List Layout
- Horizontal arrangement with icon, title, and description
- Compact vertical spacing for dense information display
- Suitable for navigation menus and resource lists

### Tile Layout
- Square or rectangular cards with centered content
- Visual emphasis on icons and titles
- Ideal for application launchers and featured content

### Button Layout
- Traditional button appearance with various styling options
- Consistent spacing and alignment
- Perfect for action-oriented quick links

### Grid Layout
- Organized arrangement of multiple quick links
- Flexible column configurations (4, 6, 8, 12 columns)
- Responsive behavior for different screen sizes

## Edit Mode Features

Quick Links support edit mode for content management:
- **Add/Remove**: Ability to add or remove quick links
- **Reorder**: Drag and drop functionality for reorganization
- **Edit Properties**: Modify titles, descriptions, and icons
- **Menu Actions**: Context menus for quick actions

## Size Variants

### Compact
- Minimal height (48px)
- Essential information only
- Suitable for dense layouts

### Standard
- Balanced information display
- Icon, title, and description
- Most common use case

### Large
- Maximum information display
- Enhanced visual hierarchy
- Prominent placement scenarios

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: Sufficient contrast ratios for all text and icons
- **Alternative Text**: Meaningful descriptions for icon images

## Performance Considerations

- **Lazy Loading**: Icons and images load as needed
- **Responsive Images**: Appropriate image sizes for different displays
- **Efficient Rendering**: Optimized CSS for smooth animations
- **Caching Strategy**: Efficient caching of frequently accessed resources

## Usage Guidelines

### Content Organization
- Group related quick links together
- Use descriptive titles and helpful descriptions
- Maintain consistent icon styles within collections
- Consider user workflow and task prioritization

### Visual Hierarchy
- Use larger tiles for primary actions
- Employ consistent spacing and alignment
- Maintain color consistency across similar function groups
- Balance information density with usability

### Responsive Behavior
- Test layouts across different screen sizes
- Ensure touch targets are appropriately sized
- Consider mobile-first design principles
- Implement progressive disclosure for complex collections

## SCSS Import

