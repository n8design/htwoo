---
title: YouTube Video Player
order: 20
---

# YouTube Video Player

The YouTube Video Player component provides an embedded player for YouTube videos within HTWOO UI.

## Overview

The YouTube Video Player allows integration of YouTube content directly into your application with consistent styling and responsive behavior. It leverages YouTube's iframe embed API for reliable playback while maintaining the look and feel of your HTWOO UI application.

## Features

- Embedded YouTube player with consistent styling
- Responsive sizing that maintains 16:9 aspect ratio
- Automatic width adaptation based on container size
- Lazy loading for performance optimization
- Support for all YouTube player parameters
- Optional autoplay functionality
- Picture-in-picture support
- Fullscreen viewing capability

## CSS Classes

- `.hoo-video` - The main container for the video component
- `.hoo-video-player` - The container that maintains aspect ratio and styling for the iframe

## YouTube Parameters

The YouTube embed URL supports various parameters that can be added to the src URL:

- `autoplay=1` - Automatically starts playback (requires muted for most browsers)
- `mute=1` - Starts with audio muted
- `loop=1` - Continuously loops the video playback
- `start=30` - Starts the video at a specific time (in seconds)
- `controls=0` - Hides player controls
- `rel=0` - Prevents related videos from other channels
- `color=white` - Changes the color of the YouTube player controls
- `modestbranding=1` - Hides the YouTube logo in the control bar

## Integration with Thumbnails

The YouTube Video Player can be paired with the Video Thumbnail component for a play-on-click experience:

```html
<div class="hoo-video">
  <!-- Thumbnail that disappears when video opens -->
  <div class="hoo-thumbnail">
    <figure class="hoo-thumbnail-figure">
      <img src="path/to/thumbnail.jpg" alt="Video description">
      <div class="hoo-thumbnail-overlay">
        <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
        <div class="hoo-video-duration">3:42</div>
      </div>
    </figure>
  </div>
  
  <!-- YouTube player that appears when activated -->
  <div class="hoo-video-player">
    <iframe 
      src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" 
      title="YouTube video player" 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen 
      loading="lazy">
    </iframe>
  </div>
</div>
```

## Usage Guidelines

- Replace `VIDEO_ID` with the actual YouTube video ID (the part after `v=` in YouTube URLs)
- Provide a descriptive title for accessibility
- Consider starting point and playback options based on context
- Set appropriate autoplay and mute parameters based on user experience requirements
- Be mindful of autoplay restrictions in modern browsers (usually requires muted video)
- Use the `.hoo-video` container to maintain consistent styling with other media components

## SCSS

## Accessibility

- Include a meaningful title attribute for the iframe
- Consider providing a transcript when possible
- Ensure the iframe maintains proper tab order
- Leverage YouTube's caption capabilities for video content
- Be cautious with autoplay functionality as it can be disruptive
- Provide clear play controls when using with thumbnail overlays
