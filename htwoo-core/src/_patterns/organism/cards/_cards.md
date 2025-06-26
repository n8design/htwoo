---
title: Card Components
order: └── Teams Splash Card
    ├── Card Splash Header (Molecule)
    ├── Card Splash Title (Molecule)
    ├── Card Splash Description (Molecule)
    └── Card Splash Footer (Molecule)
```

## Key Featuresrganisms

The Card organism collection provides a comprehensive set of card-based UI components designed for displaying content in structured, visually appealing formats. These components combine multiple molecular-level card elements to create complete, functional card interfaces for various content types and use cases.

## Overview

Card organisms represent the highest level of card implementation in the HTWOO design system. They combine card elements (image, title, location, footer, etc.) into complete, self-contained content containers that adapt to different layout contexts and content requirements.

## Components

### Document Cards
- **[Document Card](./document-card)**: Standard document/content card with image, title, location, and footer
- **[Document Card Click](./document-card-click)**: Clickable variant with enhanced interaction
- **[Document Card HTML](./document-card-html)**: HTML content variant for rich content display
- **[Document Card Shimmer](./document-card-shimmer)**: Loading state variant with shimmer effect

### Specialty Cards
- **[Teams Splash Card](./teams-splash-card)**: Feature-rich promotional card for Microsoft Teams integration

## Architecture

### Component Hierarchy
```
Card Organisms
├── Document Card Family
│   ├── Card Image (Molecule)
│   ├── Card Location (Molecule)
│   ├── Card Title (Molecule)
│   └── Card Footer (Molecule)
└── Teams Splash Card
    ├── Card Splash Header (Molecule)
    ├── Card Splash Title (Molecule)
    ├── Card Splash Description (Molecule)
    └── Card Splash Footer (Molecule)
```

### Molecular Dependencies
All card organisms depend on molecular-level card elements:
- **[Card Elements](../molecules/cards-elements/)**: Individual card building blocks
- **[Button Components](../molecules/buttons/)**: Footer action buttons
- **[Avatar Components](../molecules/avatar/)**: Author/user representation
- **[Typography](../atoms/typography/)**: Text styling and hierarchy

## Key Features

### Adaptive Layout
- **Flexible Width**: Cards adapt to parent container dimensions
- **Responsive Design**: Optimal display across different screen sizes
- **Grid Compatibility**: Works seamlessly with CSS Grid and Flexbox layouts
- **Container Queries**: Adapts to container dimensions, not just viewport

### Visual Design
- **Elevation**: Box shadow for visual hierarchy (elevation level 4)
- **Border Styling**: Subtle borders for content separation
- **Consistent Spacing**: Uniform padding and margins throughout
- **Theme Integration**: Inherits HTWOO theme colors and typography

### Interactive Features
- **Clickable Containers**: Full card click areas for navigation
- **Hover States**: Visual feedback for interactive elements
- **Focus Management**: Keyboard navigation support
- **Link Preservation**: Maintains proper link semantics and styling

### Content Flexibility
- **Multi-format Support**: Images, text, metadata, and actions
- **Rich Content**: HTML content support for complex layouts
- **Loading States**: Shimmer effects for asynchronous content
- **Customizable Elements**: Modular composition of card elements

## Use Cases

### Content Management
- **Document Libraries**: File and document collections
- **Media Galleries**: Image and video content organization
- **Article Collections**: Blog posts and news articles
- **Product Catalogs**: E-commerce product displays

### Business Applications
- **Dashboard Widgets**: Key information display
- **Team Directories**: Employee and contact information
- **Project Portfolios**: Work samples and case studies
- **Resource Centers**: Tools and application launchers

### Microsoft 365 Integration
- **SharePoint Lists**: Document and list item display
- **Teams Apps**: Application cards and feature highlights
- **Power Platform**: Custom application interfaces
- **Viva Connections**: Dashboard card components

## Styling Architecture

### Document Card Styling

### Teams Splash Card Styling

## Accessibility Features

### Semantic Structure
- **Article Elements**: Cards use `<article>` for semantic content containers
- **Heading Hierarchy**: Proper heading structure for card titles
- **Link Semantics**: Maintains proper link structure for navigation
- **Landmark Roles**: Clear content boundaries for screen readers

### Keyboard Navigation
- **Focusable Elements**: All interactive elements are keyboard accessible
- **Tab Order**: Logical tab order through card elements
- **Link Navigation**: Proper link activation with Enter key
- **Focus Indicators**: Clear visual focus states

### Screen Reader Support
- **Alternative Text**: Images include descriptive alt text
- **Content Structure**: Logical reading order for card information
- **Link Context**: Meaningful link text and context
- **State Announcements**: Interactive state changes announced

### Visual Accessibility
- **Color Contrast**: Sufficient contrast ratios for all text
- **Focus Management**: Clear focus indicators
- **Text Scaling**: Responsive to user font size preferences
- **High Contrast**: Compatible with high contrast modes

## Performance Optimization

### Rendering Efficiency
- **Minimal DOM**: Lightweight card structure for fast rendering
- **CSS Grid**: Efficient layout with CSS Grid and Flexbox
- **Image Loading**: Optimized image loading with proper sizing
- **Lazy Loading**: Support for deferred content loading

### Loading States
- **Shimmer Effects**: Visual feedback during content loading
- **Progressive Enhancement**: Core functionality without JavaScript
- **Skeleton Screens**: Content placeholder patterns
- **Async Content**: Graceful handling of dynamic content

### Memory Management
- **Event Handling**: Efficient event delegation
- **Image Optimization**: Proper image sizing and formats
- **CSS Optimization**: Minimal CSS specificity and reuse
- **Resource Cleanup**: Proper cleanup of dynamic content

## Best Practices

### Content Strategy
- **Clear Hierarchy**: Use consistent visual hierarchy across cards
- **Meaningful Titles**: Descriptive, scannable card titles
- **Relevant Metadata**: Include useful contextual information
- **Action Clarity**: Clear, action-oriented button labels

### Visual Design
- **Consistent Spacing**: Uniform spacing patterns across card types
- **Image Quality**: High-quality, properly sized images
- **Typography Scale**: Consistent font sizes and line heights
- **Color Usage**: Appropriate use of theme colors

### User Experience
- **Loading Feedback**: Clear loading states for dynamic content
- **Error Handling**: Graceful error states and fallbacks
- **Touch Targets**: Adequate touch target sizes for mobile
- **Navigation Flow**: Logical navigation patterns

### Development
- **Component Reuse**: Leverage shared card elements
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Testing Strategy**: Test across different content types and lengths  
- **Performance Monitoring**: Monitor rendering performance with many cards

## Integration Examples

### SharePoint Framework (SPFx)

### React Integration
For React applications, use the `@n8d/htwoo-react` package which provides card components with the same design system styling. Card components are available in Storybook for interactive examples and documentation.

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **CSS Grid**: Requires CSS Grid support for optimal layout
- **Flexbox**: Uses Flexbox for internal card layout
- **CSS Custom Properties**: Theme integration through CSS variables
- **HTML5 Semantic Elements**: Uses modern HTML5 semantic elements

## SCSS Import

