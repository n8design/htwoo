---
title: Quick Links Grid
order: 1
---

# Quick Links Grid

The Quick Links Grid is a comprehensive organism-level component system that provides flexible, responsive layouts for displaying collections of quick link components. It supports multiple column configurations, various quick link styles, and modern CSS Grid with container queries for optimal responsive behavior.

## Overview

The Quick Links Grid serves as a versatile container that organizes quick link molecules into responsive layouts. It supports multiple display modes, from compact navigation items to large application tiles, making it suitable for dashboards, portals, navigation hubs, and content discovery interfaces.

## Features

- **Flexible Grid System**: Support for 4, 6, 8, and 12-column responsive layouts
- **Container Queries**: Modern CSS container queries for advanced responsive behavior
- **Multiple Content Types**: Supports all quick link molecular components
- **Mixed Layouts**: Combine different quick link styles within the same grid
- **Responsive Design**: Automatic adaptation to container width and screen size
- **Performance Optimized**: Efficient CSS Grid rendering with minimal JavaScript
- **Accessibility First**: Full keyboard navigation and screen reader support

## Grid Configurations

### Column Layouts

The Quick Links Grid supports four primary column configurations:

- **[4-Column Grid](./quick-links-grid~4c.html)** - Large tiles, featured applications, wide layouts
- **[6-Column Grid](./quick-links-grid~6c.html)** - Balanced layouts, standard applications
- **[8-Column Grid](./quick-links-grid~8c.html)** - Compact layouts, higher density content
- **[12-Column Grid](./quick-links-grid.html)** - Maximum density, comprehensive navigation

### Content Types

The grid system supports multiple quick link molecular components:

1. **Compact Items** - Space-efficient navigation with minimal height
2. **List Items** - Detailed links with descriptions and metadata
3. **Button Styles** - Action-oriented buttons (outline, filled, no-outline)
4. **Tile Styles** - Visual tiles (small, medium, large, extra-large, fill)
5. **Grid Items** - Traditional grid-based quick links

## Structure

The component consists of:
1. **Canvas Container**: `.CanvasSection-xl[n]` - Responsive column control wrapper
2. **Grid Container**: `.hoo-ql-grid` - Main CSS Grid layout container  
3. **Quick Link Items**: Various molecular components for content display
4. **Container Queries**: Advanced responsive behavior based on container size

## Data Structure

```json
{
    "col-count": "CanvasSection-xl12",
    "bodyClass": "medium-margin",
    "quick-links": [
        {
            "href": "/apps/sharepoint",
            "title": "SharePoint",
            "description": "Collaborate and share documents",
            "qlimg": {
                "src": "/_layouts/images/sharepoint.png",
                "alt": "SharePoint icon"
            }
        },
        {
            "href": "/apps/teams", 
            "title": "Microsoft Teams",
            "description": "Chat, meet, and collaborate",
            "qlimg": {
                "src": "/_layouts/images/teams.png",
                "alt": "Teams icon"
            }
        }
    ]
}
```

## CSS Classes

### Container Classes
- `.CanvasSection-xl4`: 4-column layout container
- `.CanvasSection-xl6`: 6-column layout container
- `.CanvasSection-xl8`: 8-column layout container
- `.CanvasSection-xl12`: 12-column layout container

### Grid Classes
- `.hoo-ql-grid`: Main CSS Grid container with responsive behavior
- Container queries: `@container quicklinksgrid` for advanced responsive design

### Quick Link Component Classes
- `.hoo-qlcompact`: Compact item styling (spans 2 grid columns)
- `.hoo-qllist`: List item styling (spans 2 grid columns)
- `.hoo-qlbtn`: Button styling (spans 3 grid columns)
- `.hoo-qltiles`: Tile styling (variable span based on size)
- `.hoo-qlgrid`: Grid item styling (spans 3-6 grid columns)

## Responsive Behavior

### CSS Grid Breakpoints

#### Desktop (> 1024px)
- **12-Column**: 10 CSS grid columns, items span 1-3 columns
- **8-Column**: 5 CSS grid columns for tiles
- **6-Column**: 5 CSS grid columns for tiles  
- **4-Column**: 3 CSS grid columns for tiles

#### Tablet (768px - 1024px)
- **All Layouts**: Reduced to 5 CSS grid columns
- **Item Spanning**: Adjusted spans maintain proportions
- **Gap Spacing**: Maintained for readability

#### Mobile (480px - 768px)
- **All Layouts**: Reduced to 3 CSS grid columns
- **Touch Optimization**: Larger touch targets
- **Simplified Layout**: Focus on essential navigation

#### Small Mobile (< 480px)
- **All Layouts**: 2 CSS grid columns maximum
- **Vertical Stacking**: Priority content first
- **Minimal Spacing**: Optimized for small screens

### Container Query Support

The grid uses modern container queries for advanced responsive behavior:

## Content Type Integration

### Compact Navigation

Perfect for sidebar navigation and utility links:

```handlebars
<div class="CanvasSection-xl8">
    {{> organism-quick-links-compact-grid }}
</div>
```

### Application Tiles

Ideal for application launchers and featured content:

```handlebars
<div class="CanvasSection-xl6">
    {{> organism-quick-links-tiles-grid }}
</div>
```

### Button Actions

Great for action-oriented interfaces:

```handlebars
<div class="CanvasSection-xl4">
    {{> organism-quick-links-button-filled-grid }}
</div>
```

### List Items

Excellent for detailed navigation with descriptions:

```handlebars
<div class="CanvasSection-xl12">
    {{> organism-quick-links-list-grid }}
</div>
```

## Advanced Features

### Grid Span Control

Different quick link types automatically span appropriate grid columns:

- **Compact Items**: 2 columns (high density)
- **List Items**: 2 columns (high density)
- **Buttons**: 3 columns (medium density)
- **Small Tiles**: 1 column (maximum density)
- **Large Tiles**: 2-3 columns (low density, high impact)

### Aspect Ratio Maintenance

For tile-based layouts, the grid maintains square aspect ratios:

## Use Cases

### Enterprise Dashboards
- Application launchers with mixed content types
- Navigation hubs with hierarchical organization
- Role-based content presentation

### SharePoint Portals
- Site navigation with visual tiles
- Document library quick access
- Department and team portals

### Intranet Homepages
- Company application directory
- News and announcement navigation
- Employee resource centers

### Mobile Applications
- Touch-optimized app launchers
- Category-based navigation
- Responsive content browsers

## Accessibility

### Keyboard Navigation
- **Tab Order**: Logical progression through grid items
- **Arrow Keys**: Optional grid navigation support
- **Focus Management**: Clear focus indicators across all components
- **Escape Handling**: Proper focus return for modal interactions

### Screen Reader Support
- **Grid Structure**: Proper ARIA grid roles and properties
- **Item Descriptions**: Comprehensive item labeling
- **Navigation Hints**: Clear instructions for grid navigation
- **Content Relationships**: Proper heading and section structure

### Visual Accessibility
- **High Contrast**: Support for high contrast modes
- **Color Independence**: No color-only information conveyance
- **Focus Indicators**: Clear visual focus states
- **Text Scaling**: Support for browser zoom up to 200%

## Performance Optimization

### CSS Grid Efficiency
- **Native Performance**: Leverages browser-optimized CSS Grid
- **Minimal JavaScript**: Layout handled entirely by CSS
- **Hardware Acceleration**: GPU-accelerated rendering when available

### Loading Strategies
- **Lazy Loading**: Implement for large grids with many items
- **Progressive Enhancement**: Core functionality without JavaScript
- **Image Optimization**: Responsive images with proper sizing
- **Virtual Scrolling**: Consider for extremely large datasets

### Caching and Updates
- **Template Caching**: Efficient template rendering
- **Incremental Updates**: Update individual items without full re-render
- **State Management**: Minimize DOM manipulation

## Browser Support

### Modern Browsers
- **Chrome 87+**: Full CSS Grid and container query support
- **Firefox 110+**: Complete feature compatibility
- **Safari 16+**: Full support including container queries
- **Edge 87+**: Complete modern CSS Grid support

### Fallback Support
- **IE 11**: Graceful degradation with flexbox fallbacks
- **Older Browsers**: Progressive enhancement approach
- **No JavaScript**: Full functionality maintained

## Integration Patterns

### Dashboard Integration

```handlebars
<main class="company-dashboard">
    <section class="featured-section">
        <h2>Featured Applications</h2>
        <div class="CanvasSection-xl4">
            {{> organism-quick-links-tiles-large-grid }}
        </div>
    </section>
    
    <section class="apps-section">
        <h2>All Applications</h2>
        <div class="CanvasSection-xl8">
            {{> organism-quick-links-tiles-grid }}
        </div>
    </section>
    
    <section class="utilities-section">  
        <h2>Quick Links</h2>
        <div class="CanvasSection-xl12">
            {{> organism-quick-links-compact-grid }}
        </div>
    </section>
</main>
```

### Portal Navigation

```handlebars
<nav class="portal-navigation" role="navigation">
    <div class="nav-primary">
        <h2>Primary Navigation</h2>
        <div class="CanvasSection-xl6">
            {{> organism-quick-links-button-filled-grid }}
        </div>
    </div>
    
    <div class="nav-secondary">
        <h2>Resources</h2>
        <div class="CanvasSection-xl12">
            {{> organism-quick-links-list-grid }}
        </div>
    </div>
</nav>
```

### Molecular Components
- [Quick Link Compact Item](../../molecules/quick-links/ql-compact-item.html) - Space-efficient navigation
- [Quick Link List Item](../../molecules/quick-links/ql-list-item.html) - Detailed navigation with descriptions  
- [Quick Link Tiles](../../molecules/quick-links/ql-tiles.html) - Visual application tiles
- [Quick Link Buttons](../../molecules/quick-links/ql-list-button-fill-center.html) - Action-oriented buttons

### Other Grid Systems
- [PnP Search Grid](../pnp-search-grid/) - Search-focused grid layout
- [Cards Layout](../cards/) - Card-based content organization

## SCSS Import

## Configuration Examples

### High-Density Navigation

```json
{
    "col-count": "CanvasSection-xl12",
    "bodyClass": "compact-spacing"
}
```

### Featured Application Layout

```json
{
    "col-count": "CanvasSection-xl4", 
    "bodyClass": "featured-layout"
}
```

### Balanced Dashboard

```json
{
    "col-count": "CanvasSection-xl6",
    "bodyClass": "standard-spacing"
}
```
- Maximum spacing between items
- Optimal tile sizes

### Medium Containers (768px - 1200px)
- Reduced column count (typically 50% of desktop)
- Adjusted spacing and tile sizes
- Maintained aspect ratios

### Small Containers (< 768px)
- Minimum column count (2-3 columns)
- Stacked layout for very narrow containers
- Touch-optimized spacing

## Content Types

### Application Tiles
```handlebars
<div class="hoo-quicklinks-grid CanvasSection-xl6">
    {{#each applications}}
    {{> molecules-ql-tiles size="medium" }}
    {{/each}}
</div>
```

### Navigation Links
```handlebars
<div class="hoo-quicklinks-grid CanvasSection-xl8">
    {{#each navigationItems}}
    {{> molecules-ql-list-item }}
    {{/each}}
</div>
```

### Mixed Dashboard
```handlebars
<div class="hoo-quicklinks-grid CanvasSection-xl12">
    {{#each primaryApps}}
    {{> molecules-ql-tiles-large }}
    {{/each}}
    {{#each secondaryApps}}
    {{> molecules-ql-tiles }}
    {{/each}}
    {{#each utilityLinks}}
    {{> molecules-ql-compact-item }}
    {{/each}}
</div>
```

## Performance Considerations

- **CSS Grid**: Native browser optimization for grid layouts
- **Container Queries**: Modern responsive behavior without JavaScript
- **Lazy Loading**: Implement for large collections of quick links
- **Virtual Scrolling**: Consider for extremely large grids
- **Image Optimization**: Optimize icons and images for web delivery

## Accessibility

- **Keyboard Navigation**: Logical tab order through grid items
- **Screen Readers**: Proper grid structure announcement
- **Focus Management**: Clear focus indicators for grid items
- **Responsive Design**: Maintains usability across all screen sizes
- **Touch Targets**: Adequate sizing for touch interaction

## Usage Guidelines

### Content Organization
- Group related items together within the grid
- Use consistent quick link styles within sections
- Consider visual hierarchy when mixing different component types
- Maintain logical ordering for navigation and workflow

### Visual Design
- Maintain consistent spacing between grid items
- Use appropriate column counts for content density
- Consider white space and visual breathing room
- Ensure proper alignment across different quick link types

### Responsive Strategy
- Test layouts across various container sizes
- Ensure content remains accessible on all devices
- Consider touch interaction patterns for mobile
- Plan for different screen orientations

## Integration Patterns

### Dashboard Layout
```handlebars
<main class="dashboard">
    <section class="featured-apps">
        <h2>Featured Applications</h2>
        {{> organism-quick-links-grid col-count="CanvasSection-xl4" }}
    </section>
    
    <section class="all-apps">
        <h2>All Applications</h2>
        {{> organism-quick-links-grid col-count="CanvasSection-xl8" }}
    </section>
</main>
```

### Navigation Portal
```handlebars
<nav class="portal-navigation">
    <div class="nav-grid">
        {{> organism-quick-links-grid col-count="CanvasSection-xl6" }}
    </div>
</nav>
```

## SCSS Import

