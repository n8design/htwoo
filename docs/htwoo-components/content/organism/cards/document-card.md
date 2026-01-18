---
title: "Document Card"
description: "The Document Card is a flexible, self-contained content container designed for displaying documents, files, and content items in a structured, visually appealing format. It automatically adapts to its"
type: "components"
layout: "single"
patternId: "organism-cards-document-card"
category: "organism"
subcategory: "cards"
seoTitle: "Organism - Cards Document Card"
seoDescription: "Cards Document Card Organism"
weight: 10
hasVariants: false
markup: |
  &lt;a href=&quot;#&quot; class=&quot;hoo-doccard-link&quot;&gt;
  &lt;article class=&quot;hoo-doccard&quot;&gt;
      &lt;figure class=&quot;hoo-cardimage&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/card-images/coffee-image.jpg&quot; width=&quot;320&quot; height=&quot;180&quot; alt=&quot;&quot;&gt;
      &lt;/figure&gt;
      &lt;div class=&quot;hoo-cardlocation&quot;&gt;Marketing&lt;/div&gt;
      &lt;div class=&quot;hoo-cardtitle&quot;&gt;
      &lt;/div&gt;
      &lt;footer class=&quot;hoo-cardfooter&quot;&gt;
          &lt;div class=&quot;hoo-avatar&quot;&gt;
              &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; loading=&quot;lazy&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;hoo-cardfooter-data&quot;&gt;
              &lt;div class=&quot;hoo-cardfooter-name&quot;&gt;Man on the moon&lt;/div&gt;
              &lt;div class=&quot;hoo-cardfooter-modified&quot;&gt;Created a seconds ago&lt;/div&gt;
          &lt;/div&gt;
      &lt;/footer&gt;
  &lt;/article&gt;&lt;/a&gt;
---

# Document Card

The Document Card is a flexible, self-contained content container designed for displaying documents, files, and content items in a structured, visually appealing format. It automatically adapts to its parent container and provides a consistent interface for content preview and navigation.

## Overview

The Document Card serves as the primary card component for content libraries, file repositories, and document management interfaces. It combines visual preview capabilities with essential metadata display, creating an intuitive browsing experience for users working with document collections.

## Features

### Adaptive Layout
- **Flexible Width**: Automatically adjusts to parent container without predefined width
- **Responsive Design**: Optimizes display across different screen sizes and containers
- **Grid Compatible**: Works seamlessly with CSS Grid and Flexbox layouts
- **Container Queries**: Adapts to container dimensions rather than just viewport

### Visual Design
- **Elevation**: Box shadow (elevation level 4) for visual hierarchy
- **Border Styling**: Subtle 1px border in neutral-200 for content separation
- **Consistent Spacing**: Uniform padding and margins throughout card structure
- **Theme Integration**: Inherits HTWOO theme colors and typography

### Interactive Features
- **Full Card Click**: Entire card serves as clickable navigation area
- **Link Semantics**: Maintains proper link structure and accessibility
- **Hover States**: Visual feedback for interactive elements
- **Focus Management**: Keyboard navigation support with clear focus indicators

### Content Structure
- **Image Preview**: Visual representation of document or content
- **Location Context**: Source or category information
- **Title Display**: Clear, readable document name or headline
- **Metadata Footer**: Author, date, and additional context information

## Structure

The Document Card consists of four main molecular components:
1. **[Card Image](/components/molecules/cards-elements/card-image/)**: Visual preview or thumbnail
2. **[Card Location](/components/molecules/cards-elements/card-location/)**: Source or path information
3. **[Card Title](/components/molecules/cards-elements/card-title/)**: Document name or headline
4. **[Card Footer](/components/molecules/cards-elements/card-footer/)**: Author, date, and metadata

## Data Structure

```json
{
    "card-title": "New Marketing Strategy Document with Extended Title",
    "card-location": "Marketing Department",
    "mugshot": "../../images/avatars/author-001.jpg",
    "card-footer-name": "Jane Rodriguez",
    "card-footer-modified": "Created 3 hours ago",
    "card-image-url": "../../images/previews/document-preview.jpg"
}
```

## CSS Classes

### Container Classes
- **`.hoo-doccard-link`**: Link wrapper with proper link styling
- **`.hoo-doccard`**: Main card container with elevation and layout
- **`.hoo-cardimg`**: Image container with responsive sizing
- **`.hoo-cardlocation`**: Location/category text styling

### Content Classes
- **`.hoo-cardtitle`**: Title styling with proper hierarchy
- **`.hoo-cardfooter`**: Footer container with metadata layout
- **`.hoo-avatar`**: Author avatar styling
- **`.hoo-cardmeta`**: Metadata text container

## Styling

### Container Styling

### Link Behavior

### Layout Properties
- **Display**: `inline-flex` with column direction
- **Width**: `auto` for container adaptation
- **Border**: 1px solid neutral-200 (#e1e1e1)
- **Elevation**: Box shadow level 4 for visual hierarchy
- **Flex Direction**: Column layout for vertical content stacking

## Use Cases

### Document Management
- **SharePoint Libraries**: Document and file collections
- **File Repositories**: Organizational file storage browsing
- **Content Management**: CMS article and page previews
- **Media Libraries**: Image and video content organization

### Business Applications
- **Project Portfolios**: Work samples and case study displays
- **Team Resources**: Shared document and tool collections
- **Knowledge Bases**: Help articles and documentation
- **Report Dashboards**: Business report and analytics previews

### E-commerce
- **Product Catalogs**: Product information and specification sheets
- **Digital Downloads**: Software, templates, and digital products
- **Resource Centers**: Manuals, guides, and support documents
- **Marketing Materials**: Brochures, presentations, and assets

## Accessibility

### Semantic Structure
- **Article Element**: Uses `<article>` for semantic content container
- **Heading Hierarchy**: Proper heading structure with `<h3>` for titles
- **Link Structure**: Maintains proper link semantics for navigation
- **Alt Text**: Images include descriptive alternative text

### Keyboard Navigation
- **Full Card Focus**: Entire card is focusable and activatable
- **Tab Order**: Logical tab order through card elements
- **Enter Activation**: Enter key activates card navigation
- **Focus Indicators**: Clear visual focus states for keyboard users

### Screen Reader Support
- **Content Structure**: Logical reading order for card information
- **Link Context**: Meaningful link text and destination context
- **Image Descriptions**: Descriptive alt text for visual content
- **Metadata Labels**: Clear labeling for author and date information

### Visual Accessibility
- **Color Contrast**: Sufficient contrast ratios for all text elements
- **Focus Management**: Clear focus indicators with proper contrast
- **Text Scaling**: Responsive to user font size preferences
- **High Contrast**: Compatible with high contrast display modes

## Variants

### Document Card Click
Enhanced version with additional click handling and interaction features.

### Document Card HTML
Variant supporting rich HTML content display within card structure.

### Document Card Shimmer
Loading state variant with shimmer animation effects for async content loading.

## Best Practices

### Content Guidelines
- **Clear Titles**: Use descriptive, scannable document names
- **Relevant Images**: Include meaningful previews or thumbnails
- **Contextual Location**: Provide helpful source or category information
- **Current Metadata**: Display accurate author and modification information

### Layout Considerations
- **Grid Integration**: Design for consistent grid-based layouts
- **Container Adaptation**: Allow cards to adapt to various container sizes
- **Spacing Consistency**: Maintain uniform spacing in card collections
- **Visual Hierarchy**: Ensure consistent visual weight across cards

### Performance
- **Image Optimization**: Use appropriately sized thumbnails and previews
- **Loading States**: Implement shimmer or skeleton loading patterns
- **Lazy Loading**: Consider deferred loading for large card collections
- **Event Handling**: Use efficient event delegation for card interactions

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Flexbox**: Requires CSS Flexbox support for layout
- **CSS Box Shadow**: Uses box-shadow for elevation effects
- **HTML5 Semantic Elements**: Uses modern HTML5 article element
- **CSS Border**: Standard border properties for visual separation

## SCSS Import