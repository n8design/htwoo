---
title: "HTML5 Video Player"
description: "The HTML5 Video Player component provides a native browser-based player for MP4 and other supported video formats."
type: "components"
layout: "single"
patternId: "molecules-media-video-player-html"
category: "molecules"
subcategory: "media"
seoTitle: "Molecules - Media Video Player Html"
seoDescription: "Media Video Player Html Molecules"
weight: 10
markup: |
  &lt;div class=&quot;hoo-video-player&quot;&gt;
      &lt;video controls autoplay class=&quot;hoo-video-player&quot; loading=&quot;lazy&quot; preload=&quot;meta&quot;&gt;
          &lt;source src=&quot;../../images/videos/chemex.mp4&quot; type=&quot;video/mp4&quot;&gt;
      &lt;/video&gt;
  &lt;/div&gt;
  
---

# HTML5 Video Player

The HTML5 Video Player component provides a native browser-based player for MP4 and other supported video formats.

## Overview

The HTML5 Video Player uses the browser's built-in capabilities to play video content directly without requiring third-party plugins or services. It's ideal for self-hosted videos and offers the best performance and control over the playback experience.

## Features

- Native browser controls for playback
- Support for multiple video formats via `<source>` elements
- Lazy loading support for performance
- Metadata preloading option
- Optional autoplay functionality
- Consistent 16:9 aspect ratio maintained by default
- Responsive sizing that adapts to container width
- Consistent styling with other video players

## Supported Formats

The HTML5 Video Player supports various formats depending on the browser:

- MP4 (H.264) - Widely supported across browsers
- WebM - Supported in Chrome, Firefox, and Opera
- Ogg - Supported in Firefox, Chrome, and Opera

## HTML5 Video Attributes

- `controls` - Displays the native browser video controls
- `autoplay` - Automatically starts playback when ready
- `loading="lazy"` - Defers loading until the player is near the viewport
- `preload="meta"` - Only preloads video metadata, not the entire file
- `muted` - Starts video with audio muted (often required for autoplay)
- `loop` - Continuously loops the video playback
- `poster` - Specifies an image to show while the video is downloading

## CSS Classes

- `.hoo-video` - The main container for the video component
- `.hoo-video-player` - The container that maintains aspect ratio and styling

## Usage Guidelines

- Include multiple source formats for maximum compatibility
- Provide fallback content for browsers that don't support video
- Consider using the `poster` attribute for a preview image
- Avoid autoplay with sound for accessibility reasons unless the video is muted
- Use the `.hoo-video` container to maintain consistent styling with other media components

## Integration with Thumbnails

The HTML5 Video Player can be paired with the Video Thumbnail component for a play-on-click experience:

```html
<div class="hoo-video">
  <!-- Thumbnail that disappears when video opens -->
  <div class="hoo-thumbnail">
    <figure class="hoo-thumbnail-figure">
      <img src="path/to/thumbnail.jpg" alt="Video description">
      <div class="hoo-thumbnail-overlay">
        <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
        <div class="hoo-video-duration">1:42</div>
      </div>
    </figure>
  </div>
  
  <!-- Video player that appears when activated -->
  <div class="hoo-video-player">
    <video controls class="hoo-video-player" loading="lazy" preload="meta">
      <source src="path/to/video.mp4" type="video/mp4">
    </video>
  </div>
</div>
```

## SCSS

## Accessibility

- Include captions via the `<track>` element
- Ensure controls are keyboard accessible
- Avoid autoplay with sound, as it may be disruptive
- Provide a transcript when appropriate
- Use the `<video>` element for proper semantic meaning
- Include descriptive alt text on any poster or thumbnail images