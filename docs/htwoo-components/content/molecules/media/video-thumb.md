---
title: "Video Thumbnail"
description: "The Video Thumbnail component displays an image representation of video content with optional caption."
type: "components"
layout: "single"
patternId: "molecules-media-video-thumb"
category: "molecules"
subcategory: "media"
seoTitle: "Molecules - Media Video Thumb"
seoDescription: "Media Video Thumb Molecules"
weight: 50
hasVariants: false
markup: |
  
---

# Video Thumbnail

The Video Thumbnail component displays an image representation of video content with optional caption.

## Overview

Video thumbnails provide a static preview of video content, allowing users to see what a video contains before playing it. They are typically used in video galleries, lists, or anywhere video content is presented in a browsable format.

## Features

- Semantic HTML structure using `<figure>` and `<figcaption>`
- Responsive image sizing with overflow handling
- Optional caption support for video description
- Compatible with Video Overlay component
- Consistent styling with other media components
- Properly labeled images for accessibility
- Border radius for modern appearance

## Usage

Video thumbnails are commonly used:

- As clickable previews to launch video players
- In video galleries or collections
- On content cards featuring video
- In search results for video content
- As preview images in media-rich content

### With Video Overlay

Thumbnails are often paired with the Video Overlay component to indicate playability:

```html
<div class="hoo-thumbnail">
  <figure class="hoo-thumbnail-figure">
    <img src="path/to/thumbnail.jpg" alt="Video description" class="hoo-thumbnail-img">
    <figcaption class="hoo-thumbnail-cap">Video description</figcaption>
    <div class="hoo-thumbnail-overlay">
      <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
      <div class="hoo-video-duration">1:42</div>
    </div>
  </figure>
</div>
```

## CSS Properties

- `.hoo-thumbnail` - Main container with border radius and overflow handling
- `.hoo-thumbnail-figure` - Figure element containing the image with position relative
- `.hoo-thumbnail-img` - The actual thumbnail image
- `.hoo-thumbnail-cap` - Caption with proper positioning and styling

## Best Practices

- Use high-quality, representative thumbnail images
- Include descriptive alt text for accessibility
- Keep caption text concise yet descriptive
- Optimize thumbnail images for fast loading
- Consider using the Video Overlay component to indicate playability
- Maintain consistent aspect ratios across thumbnails (16:9 recommended)

## SCSS

## Accessibility

- Include descriptive alt text that explains the video content
- Ensure the caption provides meaningful context
- Maintain proper color contrast for caption text
- Use semantic HTML elements (`<figure>`, `<figcaption>`)
- Include duration information for better user context
- Ensure any interactive elements are keyboard accessible