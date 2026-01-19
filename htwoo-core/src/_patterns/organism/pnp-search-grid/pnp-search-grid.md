---
title: PnP Search Grid - 12 Columns
---

# PnP Search Grid

A comprehensive grid layout system designed for displaying search results and quick links in Microsoft 365 and SharePoint environments. The PnP (Patterns and Practices) search grid provides flexible column layouts with responsive behavior optimized for various screen sizes and content densities.

## Overview

The PnP Search Grid is an organism-level component that combines multiple quick link items into organized grid layouts. It supports both compact and list-style presentations, making it suitable for dashboards, search results, navigation hubs, and content discovery interfaces.

## Features

- **Flexible Grid System**: Support for 4, 6, 8, and 12-column layouts
- **Responsive Design**: Automatic adaptation to screen sizes and container constraints
- **Dual Display Modes**: Compact items and list items for different use cases
- **Canvas Integration**: Seamless integration with SharePoint canvas sections
- **Custom Grid Gap**: Optimized spacing between grid items
- **Mobile Optimization**: Responsive breakpoints for mobile and tablet devices

## Components

### Grid Layouts

The PnP Search Grid supports multiple column configurations:

- **12-Column Grid** - Maximum density for wide displays
- **8-Column Grid** - Balanced layout for standard screens
- **6-Column Grid** - Moderate density for medium containers
- **4-Column Grid** - Minimal columns for narrow layouts

### Display Modes

Each grid supports two content presentation styles:

- **Compact Grid** - Space-efficient items with minimal height
- **List Grid** - Detailed items with descriptions and extended content

## Structure

The component consists of:
1. **Canvas Container**: `.CanvasSection-xl[n]` - Responsive column control
2. **Grid Container**: `.hoo-pnpsearch-grid` - Main grid layout container
3. **Selection Wrapper**: `<pnp-select>` - Individual item selection container
4. **Quick Link Items**: Molecular components for content display

## Data Structure

```json
{
    "col-count": "CanvasSection-xl12",
    "quick-links": [
        {
            "href": "/site/documents",
            "title": "Document Library",
            "description": "Access shared documents and files",
            "qlimg": {
                "src": "/_layouts/images/documents.png",
                "alt": "Documents icon"
            }
        },
        {
            "href": "/site/lists",
            "title": "Lists",
            "description": "View and manage site lists",
            "qlimg": {
                "src": "/_layouts/images/lists.png", 
                "alt": "Lists icon"
            }
        }
    ]
}
```

## CSS Classes

### Grid Container Classes
- `.hoo-pnpsearch-grid`: Main grid container with responsive layout
- `.CanvasSection-xl12`: 12-column canvas section
- `.CanvasSection-xl8`: 8-column canvas section  
- `.CanvasSection-xl6`: 6-column canvas section
- `.CanvasSection-xl4`: 4-column canvas section

### Item Wrapper
- `pnp-select`: Selection wrapper with grid positioning

## Styling

### Grid Layout
- **Display**: CSS Grid with responsive columns
- **Gap**: 1rem vertical, 2rem horizontal (adjusts to 1.5rem on smaller screens)
- **Padding**: No container padding (relies on items for spacing)
- **Grid Template**: Dynamic columns based on canvas section class

### Responsive Behavior
- **>= 1280px**: Vertical sections use 4-column max regardless of canvas size
- **<= 1366px**: Reduced gap spacing (1.5rem)
- **<= 640px**: Falls back to 2-column layout with 1rem gap

### Grid Item Positioning
- **Span**: Each item spans 2 grid columns by default
- **Box Sizing**: Border-box for consistent sizing
- **Padding**: 0.5rem internal padding
- **Color**: White text for visibility

## Column Configurations

### 12-Column Layout (`CanvasSection-xl12`)
- **Desktop**: 12 equal columns (items span 2 = 6 visible items per row)
- **Large Vertical**: 4 columns maximum
- **Mobile**: 2 columns

### 8-Column Layout (`CanvasSection-xl8`)
- **Desktop**: 8 equal columns (items span 2 = 4 visible items per row)
- **Mobile**: 2 columns

### 6-Column Layout (`CanvasSection-xl6`)
- **Desktop**: 6 equal columns (items span 2 = 3 visible items per row)
- **Mobile**: 2 columns

### 4-Column Layout (`CanvasSection-xl4`)
- **Desktop**: 4 equal columns (items span 2 = 2 visible items per row)
- **Mobile**: 2 columns

## Use Cases

### SharePoint Search Results
- Display search results in organized grid layouts
- Support for different result densities based on content type
- Integration with SharePoint search web parts

### Navigation Hubs
- Create visual navigation experiences
- Organize links by category or department
- Support both compact and detailed presentations

### Dashboard Widgets
- Quick access to frequently used resources
- Customizable layouts for different screen sizes
- Integration with Microsoft 365 applications

### Content Discovery
- Browse available resources and applications
- Visual exploration of site content
- Category-based organization

## Accessibility

- **Keyboard Navigation**: Full keyboard support through underlying quick link components
- **Screen Readers**: Proper semantic markup with grid structure
- **Focus Management**: Logical tab order through grid items
- **Color Contrast**: Maintains accessibility standards across all column layouts
- **Touch Targets**: Adequate size for mobile interaction

## Performance Considerations

- **CSS Grid**: Efficient layout rendering with native browser support
- **Responsive Images**: Optimized icon loading for different screen densities
- **Lazy Loading**: Content loading optimization for large grids
- **Selection State**: Lightweight selection wrapper for interactive features

## Browser Support

- **Modern Browsers**: Full CSS Grid support (Chrome 57+, Firefox 52+, Safari 10.1+)
- **Internet Explorer**: Graceful degradation with flexbox fallbacks
- **Mobile Browsers**: Touch-optimized interactions and responsive layouts

### Molecular Components
- [Quick Link Compact Item](../molecules/quick-links/ql-compact-item.html) - Space-efficient grid items
- [Quick Link List Item](../molecules/quick-links/ql-list-item.html) - Detailed grid items with descriptions

### Other Grid Layouts
- [Quick Links Grid](../quick-links-grid/) - Alternative grid system for quick links
- [Cards Layout](../cards/) - Card-based grid alternatives

## SCSS Import

## Configuration Variants

### Column Count Classes
Use these canvas section classes to control grid density:

```html
<!-- Maximum density -->
<div class="CanvasSection-xl12">...</div>

<!-- High density -->  
<div class="CanvasSection-xl8">...</div>

<!-- Medium density -->
<div class="CanvasSection-xl6">...</div>

<!-- Low density -->
<div class="CanvasSection-xl4">...</div>
```

### Content Type Selection
Choose the appropriate molecular component based on space and information requirements:

```handlebars
<!-- For compact spaces -->
{{> molecules-ql-compact-item }}

<!-- For detailed information -->
{{> molecules-ql-list-item }}
```
