---
title: Teams Toolbar
order: 50
---

# Teams Toolbar

The Teams Toolbar component provides a Microsoft Teams-style toolbar that combines command bar functionality with search capabilities. This specialized molecular component creates a unified interface for application commands and content discovery, maintaining consistency with Microsoft Teams design language.

## Overview

The Teams Toolbar is a composite molecular component that integrates a command bar with overflow functionality and a search box, providing a familiar interface experience similar to Microsoft Teams applications. It balances powerful functionality with clean design, offering users both quick actions and search capabilities within a single interface element.

## Features

### Design Integration
- **Microsoft Teams Styling**: Authentic Teams visual design language
- **Elevated Surface**: Subtle elevation (level 4) for prominence  
- **Consistent Height**: Standard 48px height for interface consistency
- **Flexible Layout**: Responsive flex container adapting to content needs

### Functional Components
- **Command Bar Integration**: Full command bar with overflow behavior
- **Search Integration**: Seamless search box with Teams styling
- **Responsive Behavior**: Intelligent adaptation to container constraints
- **Action Prioritization**: Smart overflow management for secondary commands

### Layout Characteristics
- **Horizontal Flow**: Left-aligned commands, right-aligned search
- **Space Distribution**: Equal flex growth for balanced spacing
- **Edge Padding**: Consistent 20px horizontal padding
- **Centered Alignment**: Vertically centered content for visual balance

## Structure

The Teams Toolbar consists of two main molecular components:
1. **[Command Bar with Overflow](./cmdbar-overflow.html)** - Action commands with responsive overflow
2. **[Search Box](../../atoms/input/)** - Integrated search functionality

## Data Structure

```json
{
    "cmdBarButtons": [
        {
            "iconAction": "icon-plus",
            "label": "New Item",
            "ddItems": [
                {
                    "label": "Document",
                    "icon": "icon-document"
                },
                {
                    "label": "Folder", 
                    "icon": "icon-folder"
                }
            ]
        },
        {
            "iconAction": "icon-upload",
            "label": "Upload",
            "ddItems": [
                {
                    "label": "Files",
                    "icon": "icon-document"
                },
                {
                    "label": "Folder",
                    "icon": "icon-folder"
                }
            ]
        },
        {
            "iconAction": "icon-share",
            "label": "Share"
        }
    ],
    "searchbox": {
        "placeholder": "Search files, people, and messages...",
        "ariaLabel": "Search application content"
    }
}
```

## CSS Classes

### Container Classes
- `.hoo-teams-toolbar`: Main Teams toolbar container with elevation and layout

### Inherited Classes
From child components:
- **Command Bar**: `.hoo-cmdbar`, `.hoo-buttoncmd`, `.hoo-overflow-button`
- **Search Box**: `.hoo-searchbox`, `.hoo-searchbox-input`, `.hoo-search-icon`

## Styling

### Visual Design
- **Background**: Inherits from theme, typically white or Teams surface color
- **Elevation**: Level 4 shadow for subtle depth and separation
- **Height**: Fixed 48px height maintaining interface consistency
- **Padding**: 20px horizontal padding for adequate spacing

### Layout Behavior
- **Display**: Flex row with space-between justification
- **Flex Growth**: Each child component grows equally (flex: 1)
- **Alignment**: Vertically centered items with consistent baseline
- **Overflow**: Command bar handles overflow, search maintains minimum width

### Responsive Characteristics
- **Large Screens**: Full command bar with extended search box
- **Medium Screens**: Prioritized commands with compact search
- **Small Screens**: Essential commands only with minimal search box
- **Mobile**: Touch-optimized button sizes with accessible search

## Integration Patterns

### Application Header

```html
<header class="app-header">
    <div class="app-branding">
        <img src="logo.svg" alt="Application name">
    </div>
    {{> molecules-teams-toolbar }}
    <div class="app-user-menu">
        {{> molecules-user-menu }}
    </div>
</header>
```

### Content Area Toolbar

```html
<main class="content-area">
    <section class="content-toolbar">
        {{> molecules-teams-toolbar }}
    </section>
    <section class="content-body">
        <!-- Main content -->
    </section>
</main>
```

### Dashboard Integration

```html
<div class="dashboard-container">
    {{> molecules-teams-toolbar }}
    <div class="dashboard-content">
        {{> organism-dashboard-grid }}
    </div>
</div>
```

## JavaScript Integration

### Initialization

### Event Handling

## Use Cases

### Microsoft Teams Applications
- **File Management**: Document libraries with search and action capabilities
- **Channel Interfaces**: Team content management with integrated search
- **Application Dashboards**: Unified command and search interface

### SharePoint Online
- **Modern Pages**: Site content management interfaces
- **Document Libraries**: File and folder management with search
- **List Views**: Data management with filtering and actions

### Office 365 Applications
- **Web Applications**: Consistent interface across Office 365 suite
- **Power Platform**: Custom applications with professional interface
- **Teams Apps**: Tab applications requiring command and search

### Enterprise Applications
- **Line of Business**: Custom enterprise applications
- **Productivity Tools**: Internal tools requiring unified interface
- **Collaboration Platforms**: Team-focused applications

## Accessibility

### Keyboard Navigation
- **Tab Order**: Logical progression through commands then search
- **Arrow Keys**: Command bar navigation with arrow key support
- **Enter/Space**: Command activation with standard key support
- **Escape**: Close overflow menus and clear search focus

### Screen Reader Support
- **Toolbar Role**: Proper toolbar landmark with descriptive label
- **Search Role**: Search landmark for content discovery
- **Button Labels**: Clear, descriptive labels for all commands
- **State Announcements**: Dynamic state changes announced properly

### Visual Accessibility
- **Focus Indicators**: Clear visual focus states for all interactive elements
- **High Contrast**: Support for high contrast themes and Teams themes
- **Color Independence**: No color-only information conveyance
- **Text Scaling**: Support for browser zoom up to 200%

### Touch Accessibility
- **Touch Targets**: Minimum 44px touch target size maintained
- **Gesture Support**: Standard touch gestures for mobile interaction
- **Spacing**: Adequate spacing between interactive elements
- **Responsive Touch**: Touch-optimized layouts for mobile devices

## Performance Considerations

### Rendering Optimization
- **CSS Grid/Flexbox**: Efficient layout with modern CSS features
- **Component Isolation**: Independent component initialization
- **Event Delegation**: Efficient event handling for dynamic content
- **Lazy Loading**: Progressive enhancement for advanced features

### Search Performance
- **Debounced Input**: Debounced search input to prevent excessive queries
- **Caching**: Client-side caching of search results and suggestions
- **Progressive Loading**: Incremental search result loading
- **Offline Support**: Cached search capability for offline scenarios

### Memory Management
- **Event Cleanup**: Proper event listener cleanup on component destruction
- **Reference Management**: Avoid memory leaks with proper reference handling
- **Dynamic Content**: Efficient handling of dynamic toolbar content

## Browser Support

### Modern Browsers
- **Chrome 87+**: Full feature support including container queries
- **Firefox 110+**: Complete compatibility with all features
- **Safari 16+**: Full support including advanced CSS features
- **Edge 87+**: Complete modern feature support

### Teams Client Support
- **Teams Desktop**: Full integration with Teams desktop application
- **Teams Web**: Complete web client compatibility
- **Teams Mobile**: Mobile-optimized experience and touch support

### Fallback Support
- **IE 11**: Graceful degradation with limited functionality
- **Older Browsers**: Progressive enhancement approach
- **No JavaScript**: Core functionality maintained without JavaScript

## Teams Theme Integration

### Theme System
- **Teams Light**: Default light theme matching Teams visual design
- **Teams Dark**: Dark theme for low-light environments
- **Teams High Contrast**: Accessibility-focused high contrast theme

### CSS Custom Properties

### Dynamic Theming

### Molecular Components
- [Command Bar with Overflow](./cmdbar-overflow.html) - Core command functionality
- [Search Box](../../atoms/input/) - Integrated search capabilities
- [Command Bar](./cmdbar.html) - Basic command bar functionality

### Template Components  
- [Teams Dashboard](../../templates/teams/) - Complete Teams dashboard layout
- [Teams Splash Screen](../../templates/teams/) - Teams application welcome screens

### Theme Components
- Teams Light Theme - Default Teams light appearance
- Teams Dark Theme - Teams dark mode support
- Teams High Contrast Theme - Accessibility-focused theming

## SCSS Import

// Initialize search functionality
import { initSearch } from '@n8d/htwoo-core/js/search.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize both components
  initMenu();
  initSearch();
});
```

## Responsive Behavior

The Teams Toolbar adapts to different screen sizes by:

- Utilizing command bar overflow for limited space
- Adjusting search box width based on available space
- Maintaining usability on mobile devices
- Preserving important commands while hiding less critical ones

## SCSS

## Accessibility

- Inherits accessibility features from child components
- Maintains logical tab order through toolbar and search
- Provides proper semantic structure with landmarks
- Supports keyboard navigation (Tab, Enter, Space)
- Includes appropriate ARIA attributes from component parts
- Ensures search input has proper labeling
- Maintains focus management between toolbar sections
