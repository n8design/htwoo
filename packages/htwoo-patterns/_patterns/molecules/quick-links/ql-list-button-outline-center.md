---
title: Quick Link Button - Outline Center
order: 50
---

# Quick Link Button - Outline Center

A button-style quick link with outline border, centered content layout, and support for both icon and description text. This variant provides professional appearance with centered alignment for balanced visual presentation.

## Overview

The outline center button combines the professional appearance of an outlined button with centered content alignment. It's ideal for navigation scenarios where visual prominence is needed without the boldness of filled backgrounds, while maintaining centered typography and icon placement for balanced composition.

## Features

- **Outline Styling**: Professional border with transparent background
- **Centered Layout**: Vertical stacking of icon and text content with center alignment
- **Flexible Content**: Supports icon, title, and optional description
- **Hover Effects**: Interactive feedback with background color change
- **Touch Optimized**: Appropriate sizing for mobile and touch interfaces
- **Icon Integration**: Support for both image and SVG icons

## Structure

The component consists of:
1. **Link Container**: `.hoo-qllink` - Link wrapper element
2. **Button Container**: `.hoo-qlbtn.center` - Main button with center alignment
3. **Icon Area**: `.hoo-ql-media` - Icon display (optional)
4. **Info Area**: `.hoo-qlinfo` - Text content container
5. **Title**: `.hoo-qltitle` - Primary text
6. **Description**: `.hoo-qldesc` - Secondary descriptive text (optional)

## Data Structure

```json
{
    "quick-link": {
        "href": "/team-collaboration",
        "title": "Team Collaboration",
        "description": "Shared workspaces and project tools",
        "qlimg": {
            "src": "/icons/collaboration.svg",
            "alt": "Collaboration icon"
        }
    }
}
```

### With SVG Icon

```json
{
    "quick-link": {
        "href": "/analytics",
        "title": "Analytics Dashboard", 
        "description": "View reports and metrics",
        "qlsvg": {
            "iconName": "chart-bar",
            "size": "24"
        }
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qlbtn`: Main button container
- `.hoo-qlbtn.center`: Centered content layout modifier
- `.hoo-ql-media`: Icon container (24px)
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Title text styling
- `.hoo-qldesc`: Description text styling

## Styling

### Visual Design
- **Border**: 1px solid `#d1d1d1` with 4px border radius
- **Background**: Transparent with white hover state
- **Padding**: 16px vertical and horizontal spacing
- **Minimum Height**: 80px for touch accessibility
- **Text Alignment**: Center-aligned text and icon

### Layout
- **Direction**: Vertical (column) layout
- **Alignment**: All content centered horizontally
- **Gap**: 8px between icon and text content
- **Text Spacing**: 4px gap between title and description

### Interactive States
- **Default**: Outlined border with transparent background
- **Hover**: Light background (`#f3f2f1`) with subtle transition
- **Focus**: Blue focus ring for keyboard accessibility
- **Active**: Pressed state with slightly darker background

## Use Cases

### Service Portal Navigation
```handlebars
<section class="service-portal">
    <h2>IT Services</h2>
    <div class="services-grid">
        <!-- Service options with descriptions -->
        {{> molecules-ql-list-button-outline-center}}
    </div>
</section>
```

### Feature Discovery
```handlebars
<div class="feature-highlights">
    <h3>Discover Features</h3>
    <div class="features-grid">
        <!-- Feature buttons with centered descriptions -->
        {{> molecules-ql-list-button-outline-center}}
    </div>
</div>
```

### Resource Directory
```handlebars
<nav class="resource-nav">
    <h3>Resources</h3>
    <div class="resource-grid">
        <!-- Resource links with centered layout -->
        {{> molecules-ql-list-button-outline-center}}
    </div>
</nav>
```

### Professional Dashboard
```handlebars
<section class="dashboard-section">
    <h2>Quick Access</h2>
    <div class="access-grid">
        <!-- Professional navigation with centered content -->
        {{> molecules-ql-list-button-outline-center}}
    </div>
</section>
```

## Typography

- **Title Font Size**: 14px
- **Title Line Height**: 20px
- **Title Font Weight**: 600 (semi-bold)
- **Description Font Size**: 12px
- **Description Line Height**: 16px
- **Description Font Weight**: 400 (normal)
- **Text Alignment**: Center for all text elements

## Content Guidelines

### Title Text
- Keep titles concise but descriptive (2-4 words ideal)
- Use sentence case for better readability
- Ensure titles are meaningful when centered
- Test with various text lengths for layout stability

### Description Text
- Provide helpful context in 1-2 short sentences
- Keep descriptions brief to maintain visual balance
- Use active voice when describing actions
- Ensure descriptions complement rather than repeat titles

### Icon Selection
- Use icons that clearly represent the content or action
- Maintain consistent icon style and weight
- Ensure icons work well with centered layout
- Provide meaningful alt text for accessibility

## Accessibility

- **Keyboard Navigation**: Full keyboard navigation support
- **Focus Management**: Clear focus indicators for keyboard users
- **Screen Reader Support**: Proper semantic structure and descriptions
- **Touch Targets**: Minimum 44px touch target size
- **Color Contrast**: Meets WCAG AA contrast requirements
- **Content Structure**: Logical heading and description hierarchy

## Performance

- **Lightweight CSS**: Minimal styling with efficient hover transitions
- **Icon Loading**: Supports lazy loading for better performance
- **No JavaScript**: Pure CSS implementation
- **Scalable**: Works efficiently in grids with many items

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **CSS Features**: Uses standard CSS properties with excellent support
- **Hover States**: Appropriate fallbacks for touch-only devices
- **Responsive**: Works well across all device types and screen sizes

## SCSS Import

## Layout Variations

### Standard Center Layout
- Icon above title and description
- All content centered horizontally
- Consistent vertical spacing

### Content-Only Center Layout
- No icon, just centered text
- Title and description stacked vertically
- Maintains center alignment

## Integration Examples

### Within Card Layout
```handlebars
<div class="dashboard-card">
    <div class="card-header">
        <h3>Quick Tools</h3>
    </div>
    <div class="card-body">
        <div class="tools-grid">
            {{> molecules-ql-list-button-outline-center}}
        </div>
    </div>
</div>
```

### Professional Navigation
```handlebars
<nav class="primary-navigation" role="navigation">
    <div class="nav-grid">
        {{#each navigation-items}}
        {{> molecules-ql-list-button-outline-center quick-link=this}}
        {{/each}}
    </div>
</nav>
```
