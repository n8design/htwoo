---
title: "Card Image"
description: "A responsive image component designed for card layouts that maintains consistent aspect ratios and provides optimal image display across different screen sizes. Features semantic HTML structure with s"
type: "components"
layout: "single"
patternId: "molecules-cards-elements-card-image"
category: "molecules"
subcategory: "cards-elements"
seoTitle: "Molecules - Cards Elements Card Image"
seoDescription: "Cards Elements Card Image Molecules"
weight: 20
markup: |
  &lt;figure class=&quot;hoo-cardimage&quot;&gt;
      &lt;img src=&quot;../../images/card-images/coffee-image.jpg&quot; width=&quot;320&quot; height=&quot;180&quot; alt=&quot;&quot;&gt;
  &lt;/figure&gt;
  
---

# Card Image

A responsive image component designed for card layouts that maintains consistent aspect ratios and provides optimal image display across different screen sizes. Features semantic HTML structure with support for captions and multiple image formats.

## Overview

The Card Image component serves as the visual focal point for card-based layouts, providing consistent image presentation with responsive behavior and accessible markup. It automatically handles image scaling, aspect ratio maintenance, and caption display while ensuring optimal performance across devices.

## Features

- **Consistent Aspect Ratio**: 16:9 ratio for uniform card appearance
- **Responsive Design**: Automatically scales to container width
- **Smart Image Scaling**: Object-fit cover prevents distortion
- **Semantic HTML**: Uses figure/figcaption for proper structure
- **Performance Optimized**: Supports lazy loading and responsive images
- **Accessibility Ready**: Proper alt text and caption support
- **Multiple Formats**: Supports various image types and sizes

## Structure

The component consists of:
1. **Figure Container**: `<figure>` - Semantic image wrapper
2. **Image Element**: `<img>` - Main image with responsive attributes
3. **Caption Area**: `<figcaption>` - Optional image caption
4. **Container Wrapper**: `.hoo-cardimage` - Styling container

## Data Structure

```json
{
    "card-image": {
        "src": "/images/project-thumbnail.jpg",
        "alt": "Project overview screenshot showing dashboard interface",
        "caption": "Dashboard interface overview"
    }
}
```

### Responsive Image

```json
{
    "card-image": {
        "src": "/images/fallback.jpg",
        "srcset": "/images/small.jpg 400w, /images/medium.jpg 800w, /images/large.jpg 1200w",
        "sizes": "(max-width: 400px) 100vw, (max-width: 800px) 50vw, 400px",
        "alt": "Product showcase featuring multiple angles and details",
        "caption": "Product showcase gallery"
    }
}
```

## CSS Classes

- `.hoo-cardimage`: Main container with aspect ratio control
- `.hoo-cardimage figure`: Figure element styling
- `.hoo-cardimage img`: Image-specific responsive styling
- `.hoo-cardimage figcaption`: Caption styling
- `.hoo-cardimage-bg`: Background image variant

## Styling

### Layout and Dimensions
- **Aspect Ratio**: 16:9 (177px height at 315px width)
- **Object Fit**: Cover to prevent image distortion
- **Border Radius**: 4px on top corners for card integration
- **Overflow**: Hidden to contain scaled images

### Image Styling

### Caption Styling
- **Position**: Overlay at bottom of image
- **Background**: Semi-transparent black (rgba(0,0,0,0.7))
- **Typography**: 12px white text with proper contrast
- **Padding**: 8px for readable spacing

## Responsive Behavior

### Breakpoint Adaptations

### Container Queries

## Use Cases

### Document Preview Cards
```handlebars
<div class="document-card">
    {{> molecules-card-image card-image=document-thumbnail}}
    <div class="card-content">
        <h3>{{ document-title }}</h3>
        <p>{{ document-excerpt }}</p>
    </div>
</div>
```

### Product Cards
```handlebars
<div class="product-card">
    {{> molecules-card-image card-image=product-photo}}
    <div class="product-info">
        <h3>{{ product-name }}</h3>
        <p class="price">{{ price }}</p>
    </div>
</div>
```

### News Article Cards
```handlebars
<article class="news-card">
    {{> molecules-card-image card-image=featured-image}}
    <div class="article-content">
        <h2>{{ headline }}</h2>
        <p>{{ summary }}</p>
        <time>{{ publication-date }}</time>
    </div>
</article>
```

### Team Member Cards
```handlebars
<div class="team-card">
    {{> molecules-card-image card-image=member-photo}}
    <div class="member-info">
        <h3>{{ name }}</h3>
        <p>{{ role }}</p>
    </div>
</div>
```

## Image Guidelines

### Image Requirements
- **Resolution**: Minimum 400x225px for sharp display
- **Format**: WebP preferred, with JPEG/PNG fallbacks
- **Optimization**: Compressed for web delivery
- **Aspect Ratio**: 16:9 native ratio recommended

### Content Guidelines
- **Subject Focus**: Center important subjects for cropping
- **Text Overlay**: Avoid text in images when possible
- **Contrast**: Ensure sufficient contrast for accessibility
- **File Size**: Optimize for web performance (< 100KB ideal)

## Accessibility

- **Alt Text**: Descriptive alt text for all images
- **Caption Support**: Proper figcaption association with images
- **Keyboard Navigation**: Focusable when images are interactive
- **Screen Reader Support**: Semantic figure element structure
- **High Contrast**: Images remain visible in high contrast mode

## Performance

### Optimization Strategies
- **Lazy Loading**: Built-in loading="lazy" support
- **Responsive Images**: Multiple image sizes with srcset
- **Format Selection**: Modern format support with fallbacks
- **Compression**: Optimized file sizes for fast loading

### Loading Optimization
```html
<img 
    src="placeholder.jpg" 
    data-src="actual-image.jpg"
    loading="lazy"
    alt="Description"
/>
```

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Aspect Ratio**: Excellent support with CSS aspect-ratio property
- **Object Fit**: Full support across modern browsers
- **Lazy Loading**: Native support in modern browsers

## SCSS Import

## Customization Options

### Aspect Ratio Variants
- Square (1:1) for profile images
- Landscape (4:3) for traditional photography
- Banner (21:9) for wide promotional images

### Visual Variations
- Rounded corners for different card styles
- Border overlays for branded appearances
- Gradient overlays for text readability

## Advanced Features

### Background Image Variant
For when you need more control over image positioning:

### Zoom Effect

- Container with 16:9 aspect ratio
- Box-sizing: border-box for predictable dimensions
- Images display at full width with automatic height
- No margins to ensure flush placement in card
- Border collapse to prevent unwanted spacing

## Usage

Use the Card Image component to display preview images of documents, thumbnails for content, or visual headers for cards. Common image types include:

- Document thumbnails
- Article featured images
- Product photos
- Media previews
- Content illustrations

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/cards

***