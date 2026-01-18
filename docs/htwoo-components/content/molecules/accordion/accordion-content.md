---
title: "Accordion Content"
description: "The collapsible content area within accordion items that houses the detailed information revealed when users expand an accordion section. Provides flexible content layout with optimized spacing and ty"
type: "components"
layout: "single"
patternId: "molecules-accordion-accordion-content"
category: "molecules"
subcategory: "accordion"
seoTitle: "Molecules - Accordion Accordion Content"
seoDescription: "Accordion Accordion Content Molecules"
weight: 30
markup: |
  &lt;div class=&quot;hoo-accordion-content&quot;&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique delectus facilis, quae aspernatur ipsam eveniet commodi assumenda ipsa iure dolorem quidem enim illum perferendis amet nam suscipit unde dicta reiciendis eligendi ratione dignissimos? Aperiam hic vel quis ex consequuntur, possimus magnam rerum in officiis fugit non inventore voluptas earum minima iure! Et, eaque repellendus cumque optio nam odit. Voluptatibus nulla facere atque iusto veniam, explicabo voluptatum maxime praesentium quasi corrupti quia? Unde tempore officia esse deserunt praesentium ipsum accusantium hic expedita aliquid harum nobis doloribus necessitatibus cum facilis, temporibus laudantium rem quo tempora eius maiores ab veritatis. Unde, ex!
  &lt;/div&gt;
  
---

# Accordion Content

The collapsible content area within accordion items that houses the detailed information revealed when users expand an accordion section. Provides flexible content layout with optimized spacing and typography for enhanced readability.

## Overview

The Accordion Content component serves as the container for all expandable content within accordion items. It features carefully designed spacing, typography, and layout options to ensure content remains readable and well-organized when revealed. The component supports rich content including text, media, forms, and nested components while maintaining visual consistency.

## Features

- **Flexible Content Support**: Accommodates any HTML content type
- **Optimized Typography**: Enhanced readability with appropriate line spacing
- **Consistent Spacing**: Aligned margins and padding for visual harmony
- **Responsive Layout**: Adapts to different screen sizes and content lengths
- **Rich Media Support**: Handles images, videos, and interactive elements
- **Semantic Structure**: Maintains proper content hierarchy
- **Animation Ready**: Smooth reveal animations with height transitions

## Structure

The component consists of:
1. **Content Container**: `.accordion-content` - Main content wrapper
2. **Content Area**: Inner content with optimized spacing
3. **Typography Elements**: Headings, paragraphs, and lists with proper styling
4. **Media Containers**: Optimized display for images and embedded content

## Data Structure

```json
{
    "accordion-content": {
        "content": "<p>This is the main content that appears when the accordion is expanded.</p>"
    }
}
```

### Structured Content

```json
{
    "accordion-content": {
        "description": "Detailed information about this topic.",
        "features": [
            "Feature one description",
            "Feature two description", 
            "Feature three description"
        ],
        "image": {
            "src": "/images/example.jpg",
            "alt": "Descriptive image"
        }
    }
}
```

## CSS Classes

- `.accordion-content`: Main content container
- `.content-form`: Form-specific styling within content
- `.form-group`: Form field grouping
- `.content-list`: Enhanced list styling
- `.content-media`: Media element containers

## Styling

### Layout and Spacing
- **Padding**: 16px top, 20px left/right, 24px bottom
- **Margin**: Content aligned with header text
- **Max Width**: Responsive width with optimal reading length
- **Line Height**: 1.5 for enhanced readability

### Typography
- **Paragraph Spacing**: 16px margin between paragraphs
- **Heading Margins**: Appropriate spacing for content hierarchy
- **List Styling**: Enhanced bullet points and numbering
- **Font Size**: 14px base with responsive scaling

### Content Elements
- **Images**: Responsive images with proper spacing
- **Tables**: Enhanced table styling for data presentation
- **Code Blocks**: Monospace font with background highlighting
- **Blockquotes**: Styled quotations with left border

## Animation

### Expand Animation

### Content Fade-In

## Use Cases

### FAQ Content
```handlebars
{{#accordion-content}}
<div class="accordion-content">
    <p>{{ answer }}</p>
    {{#if related-links}}
    <h5>Related Information</h5>
    <ul>
        {{#each related-links}}
        <li><a href="{{ url }}">{{ title }}</a></li>
        {{/each}}
    </ul>
    {{/if}}
</div>
{{/accordion-content}}
```

### Product Specifications
```handlebars
{{#accordion-content}}
<div class="accordion-content">
    <table class="spec-table">
        <thead>
            <tr><th>Specification</th><th>Value</th></tr>
        </thead>
        <tbody>
            {{#each specifications}}
            <tr><td>{{ name }}</td><td>{{ value }}</td></tr>
            {{/each}}
        </tbody>
    </table>
</div>
{{/accordion-content}}
```

### Settings Panel
```handlebars
{{#accordion-content}}
<div class="accordion-content">
    <div class="settings-group">
        {{#each settings}}
        <div class="setting-item">
            <label>{{ label }}</label>
            <input type="{{ type }}" value="{{ value }}" />
        </div>
        {{/each}}
    </div>
</div>
{{/accordion-content}}
```

### Help Documentation
```handlebars
{{#accordion-content}}
<div class="accordion-content">
    <p>{{ introduction }}</p>
    <h4>Step-by-Step Instructions</h4>
    <ol>
        {{#each steps}}
        <li>{{ this }}</li>
        {{/each}}
    </ol>
    {{#if screenshot}}
    <img src="{{ screenshot }}" alt="Step illustration" />
    {{/if}}
</div>
{{/accordion-content}}
```

## Content Guidelines

### Text Content
- **Clear Hierarchy**: Use appropriate heading levels (h4, h5, h6)
- **Scannable Format**: Break up long text with subheadings and lists
- **Concise Language**: Write clearly and avoid unnecessary complexity
- **Actionable Information**: Include specific, helpful details

### Media Integration
- **Responsive Images**: Use appropriate image sizes and alt text
- **Video Embedding**: Ensure videos are accessible and responsive
- **File Downloads**: Clearly label downloadable resources
- **Interactive Elements**: Test all interactive components within content

## Accessibility

- **Semantic HTML**: Proper heading hierarchy within content
- **Alt Text**: Descriptive alt text for all images
- **Focus Management**: Logical tab order for interactive elements
- **Color Contrast**: Sufficient contrast for all text elements
- **Screen Reader Support**: Clear content structure for assistive technology

## Performance

- **Lazy Loading**: Consider lazy loading for images and media
- **Content Optimization**: Optimize large content for faster loading
- **Animation Performance**: Use CSS transforms for smooth animations
- **Memory Efficiency**: Clean up any dynamic content appropriately

## Browser Support

- **Modern Browsers**: Full support across all contemporary browsers
- **Content Rendering**: Consistent content display and formatting
- **Animation Support**: Smooth transitions in supported browsers
- **Graceful Degradation**: Content remains accessible without animations

## SCSS Files

**Styles:**
- `lib/sass/molecules/accordion.scss`

## Best Practices

### Content Organization
- **Logical Structure**: Organize content in a logical, scannable way
- **Progressive Disclosure**: Present information in order of importance
- **Visual Hierarchy**: Use headings and formatting to guide readers
- **Consistent Formatting**: Maintain consistent styling across content

### Performance Optimization
- **Image Optimization**: Compress images for web delivery
- **Content Length**: Balance detail with usability
- **Loading States**: Consider loading indicators for dynamic content
- **Responsive Design**: Test content across different screen sizes

## Accessibility

- Content is only visible when the accordion is expanded
- Native HTML `<details>` element handles showing/hiding for assistive technologies
- Content is properly associated with its header
- Content indentation creates visual hierarchy

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/menu/accordion

***