---
title: "Card Title"
description: "A typography component that provides consistent title display within card layouts. Features multi-line text support with intelligent truncation and optimized spacing for maintaining uniform card heigh"
type: "components"
layout: "single"
patternId: "molecules-cards-elements-card-title"
category: "molecules"
subcategory: "cards-elements"
seoTitle: "Molecules - Cards Elements Card Title"
seoDescription: "Cards Elements Card Title Molecules"
weight: 20
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-cardtitle&quot;&gt;
  &lt;/div&gt;
---

# Card Title

A typography component that provides consistent title display within card layouts. Features multi-line text support with intelligent truncation and optimized spacing for maintaining uniform card heights across grid layouts.

## Overview

The Card Title component serves as the primary heading element within card components, offering reliable text display with overflow handling and consistent visual hierarchy. It balances readable typography with layout constraints, ensuring cards maintain uniform heights while accommodating varying title lengths.

## Features

- **Consistent Typography**: Semi-bold font weight for clear hierarchy
- **Multi-line Support**: Maximum 2 lines with automatic truncation
- **Overflow Handling**: Ellipsis truncation for longer titles
- **Fixed Height**: 38px height maintains uniform card layouts
- **Responsive Text**: Adapts to different container widths
- **Optimized Spacing**: Consistent padding for visual alignment
- **Semantic HTML**: Proper heading hierarchy with flexible levels

## Structure

The component consists of:
1. **Title Container**: `.hoo-card-title` - Main title wrapper
2. **Heading Element**: `h3` (or configurable level) - Semantic title element
3. **Text Content**: Title text with overflow management
4. **Spacing System**: Consistent padding and margins

## Data Structure

```json
{
    "card-title": {
        "title": "Project Management Best Practices",
        "level": "h3"
    }
}
```

### With Link

```json
{
    "card-title": {
        "title": "Annual Report 2024",
        "href": "/reports/annual-2024",
        "level": "h3"
    }
}
```

## CSS Classes

- `.hoo-card-title`: Main title container
- `.hoo-card-title h3`: Default heading styling
- `.hoo-card-title a`: Link styling within titles
- `.title-truncated`: Applied when text exceeds container

## Styling

### Typography
- **Font Size**: 14px for optimal readability
- **Font Weight**: 600 (semi-bold) for visual emphasis
- **Line Height**: 19px (approximately 1.36)
- **Color**: Primary text color (#323130)

### Layout
- **Height**: 38px fixed height for consistent card alignment
- **Padding**: 12px horizontal, 8px bottom
- **Max Lines**: 2 lines maximum with text clamping
- **Overflow**: Ellipsis truncation for overflow text

### Text Clamping

## Use Cases

### Document Cards
```handlebars
<div class="document-card">
    {{> molecules-card-title card-title=document-info}}
    <div class="card-content">{{ document-preview }}</div>
</div>
```

### Product Cards
```handlebars
<div class="product-card">
    {{> molecules-card-title card-title=product-name}}
    <div class="product-image">{{ product-image }}</div>
    <div class="product-price">{{ price }}</div>
</div>
```

### News Article Cards
```handlebars
<article class="news-card">
    {{> molecules-card-title card-title=article-headline}}
    <div class="article-excerpt">{{ excerpt }}</div>
    <div class="article-meta">{{ publication-date }}</div>
</article>
```

### Team Member Cards
```handlebars
<div class="team-card">
    <div class="member-photo">{{ photo }}</div>
    {{> molecules-card-title card-title=member-name}}
    <div class="member-role">{{ role }}</div>
</div>
```

## Content Guidelines

### Title Writing
- **Descriptive Content**: Use clear, specific titles that describe the content
- **Scannable Text**: Front-load important keywords for quick scanning
- **Appropriate Length**: Aim for titles that fit within 2 lines comfortably
- **Active Voice**: Use active voice when possible for clarity

### Hierarchy Guidelines
- **Consistent Levels**: Use appropriate heading levels (h3, h4) consistently
- **Logical Structure**: Maintain proper heading hierarchy within pages
- **SEO Considerations**: Use descriptive titles for better searchability
- **Accessibility**: Ensure titles provide context for screen readers

## Accessibility

- **Semantic HTML**: Uses proper heading elements for structure
- **Screen Reader Support**: Clear title announcements with proper hierarchy
- **Keyboard Navigation**: Focusable when titles contain links
- **Color Contrast**: Sufficient contrast ratios for all text
- **Focus Indicators**: Clear focus states for interactive titles

## Responsive Behavior

### Mobile Optimization
- **Touch Targets**: Adequate spacing for mobile interaction
- **Text Scaling**: Responds to system text size settings
- **Layout Adaptation**: Maintains proportions across screen sizes
- **Performance**: Optimized rendering on mobile devices

### Container Queries

## Performance

- **Lightweight CSS**: Minimal styles with efficient text clamping
- **Text Rendering**: Optimized for fast text layout
- **Memory Efficient**: No JavaScript required for basic functionality
- **Layout Stability**: Fixed height prevents content jumping

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Text Clamping**: Excellent support for webkit-line-clamp
- **Fallback**: Graceful degradation to text-overflow: ellipsis
- **Legacy Support**: Alternative truncation methods for older browsers

## SCSS Import

## Customization Options

### Typography Variants
- Different font weights (normal, medium, bold)
- Alternative font sizes for different card types
- Custom line heights for specific layouts

### Layout Variations
- Single-line titles for compact cards
- Extended multi-line support (3+ lines)
- Custom padding and margin configurations

## Integration Examples

### Grid Layout
```handlebars
<div class="card-grid">
    {{#each items}}
    <div class="grid-card">
        {{> molecules-card-title card-title=this.title}}
        <div class="card-body">{{ this.content }}</div>
    </div>
    {{/each}}
</div>
```

### List View
```handlebars
<div class="card-list">
    {{#each items}}
    <div class="list-card">
        {{> molecules-card-title card-title=this.title}}
        <div class="card-metadata">{{ this.meta }}</div>
    </div>
    {{/each}}
</div>
```

The Card Title uses the `.hoo-cardtitle` class with the following key properties:

- Font size of 14px
- Fixed height container
- Uses `-webkit-line-clamp: 2` to limit text to two lines
- Text overflow handling for longer titles
- Proper box-sizing to maintain consistent dimensions

## Usage

Use the Card Title component to display document names, article titles, or other primary headings within cards. The component should contain concise, descriptive text that clearly identifies the card content.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/cards

***