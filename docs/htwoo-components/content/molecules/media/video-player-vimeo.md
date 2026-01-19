---
title: "Vimeo Video Player"
description: "The Vimeo Video Player component provides an embedded player for Vimeo videos within HTWOO UI."
type: "components"
layout: "single"
patternId: "molecules-media-video-player-vimeo"
category: "molecules"
subcategory: "media"
seoTitle: "Molecules - Media Video Player Vimeo"
seoDescription: "Media Video Player Vimeo Molecules"
weight: 30
hasVariants: false
markup: |
  
---

# Vimeo Video Player

The Vimeo Video Player component provides an embedded player for Vimeo videos within HTWOO UI.

## Overview

The Vimeo Video Player integrates Vimeo content directly into your application with consistent styling and responsive behavior. It uses Vimeo's iframe embed approach for reliable playback while maintaining the look and feel of your HTWOO UI application.

## Features

- Embedded Vimeo player with consistent styling
- Responsive sizing that maintains 16:9 aspect ratio
- Automatic width adaptation based on container size
- Lazy loading for performance optimization
- Support for all Vimeo player parameters
- Optional autoplay functionality
- Picture-in-picture support
- Fullscreen viewing capability
- High-quality playback options
- Custom color themes through Vimeo parameters

## CSS Classes

- `.hoo-video` - The main container for the video component
- `.hoo-video-player` - The container that maintains aspect ratio and styling for the iframe

## Vimeo Parameters

The Vimeo embed URL supports various parameters that can be added to the src URL:

- `autoplay=1` - Automatically starts playback (requires muted for most browsers)
- `muted=1` - Starts with audio muted
- `loop=1` - Continuously loops the video playback
- `color=00adef` - Customizes player UI color (hex code without #)
- `title=0` - Hides the video title
- `byline=0` - Hides the creator byline
- `portrait=0` - Hides the creator portrait
- `background=1` - Enables background mode (no controls, looped playback)
- `quality=1080p` - Sets the playback quality

## Integration with Thumbnails

The Vimeo Video Player can be paired with the Video Thumbnail component for a play-on-click experience:

```html
<div class="hoo-video">
  <!-- Thumbnail that disappears when video opens -->
  <div class="hoo-thumbnail">
    <figure class="hoo-thumbnail-figure">
      <img src="path/to/thumbnail.jpg" alt="Video description">
      <div class="hoo-thumbnail-overlay">
        <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
        <div class="hoo-video-duration">5:12</div>
      </div>
    </figure>
  </div>
  
  <!-- Vimeo player that appears when activated -->
  <div class="hoo-video-player">
    <iframe 
      src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1" 
      title="Vimeo video player" 
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>
```

## Usage Guidelines

- Replace `VIDEO_ID` with the actual Vimeo video ID (the number in the Vimeo URL)
- Provide a descriptive title for accessibility
- Consider customizing the player appearance to match your theme using the `color` parameter
- Set appropriate autoplay and mute parameters based on user experience requirements
- Be mindful of autoplay restrictions in modern browsers (usually requires muted video)
- Use the `.hoo-video` container to maintain consistent styling with other media components
- Consider hiding the title, byline, and portrait for a cleaner interface when appropriate

## SCSS

## Accessibility

- Include a meaningful title attribute for the iframe
- Consider providing a transcript when possible
- Ensure the iframe maintains proper tab order
- Leverage Vimeo's caption capabilities for video content
- Be cautious with autoplay functionality as it can be disruptive
- Provide clear play controls when using with thumbnail overlays