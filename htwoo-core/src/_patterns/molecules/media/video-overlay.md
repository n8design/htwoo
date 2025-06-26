---
title: Video Overlay
---

# Video Overlay

The Video Overlay component provides a play button and duration indicator overlay for video thumbnails.

## Overview

The Video Overlay is used to indicate that a thumbnail is clickable to play video content. It displays a play icon in the center of the thumbnail and a duration indicator in the bottom left corner.

## Features

- Centered play button icon
- Duration display in the bottom left corner
- Semi-transparent background overlay
- Responsive design that works with any thumbnail size

## Usage

The Video Overlay is typically used in conjunction with a Video Thumbnail component:

```html
<div class="hoo-thumbnail">
  <figure class="hoo-thumbnail-figure">
    <img src="path/to/image.jpg" alt="Video description">
    <div class="hoo-thumbnail-overlay">
      <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
      <div class="hoo-video-duration">1:42</div>
    </div>
  </figure>
</div>
```

## SCSS

## Accessibility Considerations

- Ensure the thumbnail image has descriptive alt text
- The overlay should clearly indicate that the content is video
- Duration information helps users determine time commitment before clicking
- Maintain sufficient color contrast for the duration text
