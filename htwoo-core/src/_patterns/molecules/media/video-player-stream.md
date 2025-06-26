---
title: Stream Video Player
order: 40
---

# Stream Video Player

The Stream Video Player component provides an embedded player for streaming service videos within HTWOO UI.

## Overview

The Stream Video Player integrates content from streaming services directly into your application with consistent styling and responsive behavior. This component is designed for use with various streaming platforms that provide embed capabilities, such as Microsoft Stream, Twitch, Dailymotion, and other streaming services.

## Features

- Embedded streaming player with consistent styling
- Responsive sizing that maintains 16:9 aspect ratio
- Automatic width adaptation based on container size
- Lazy loading for performance optimization
- Support for streaming service-specific parameters
- Optional autoplay functionality when supported
- Fullscreen viewing capability
- Consistent interface with other HTWOO video players
- Compatible with various streaming platforms

## CSS Classes

- `.hoo-video` - The main container for the video component
- `.hoo-video-player` - The container that maintains aspect ratio and styling for the iframe

## Common Streaming Service Examples

### Microsoft Stream

```html
<div class="hoo-video">
  <div class="hoo-video-player">
    <iframe 
      src="https://web.microsoftstream.com/embed/video/VIDEO_ID" 
      title="Microsoft Stream video" 
      frameborder="0"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>
```

### Twitch

```html
<div class="hoo-video">
  <div class="hoo-video-player">
    <iframe 
      src="https://player.twitch.tv/?channel=CHANNEL_NAME&parent=yourdomain.com" 
      title="Twitch stream" 
      frameborder="0"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>
```

## Integration with Thumbnails

The Stream Video Player can be paired with the Video Thumbnail component for a play-on-click experience:

```html
<div class="hoo-video">
  <!-- Thumbnail that disappears when video opens -->
  <div class="hoo-thumbnail">
    <figure class="hoo-thumbnail-figure">
      <img src="path/to/thumbnail.jpg" alt="Stream description">
      <div class="hoo-thumbnail-overlay">
        <span class="hoo-icon-svg"><!-- Play icon SVG --></span>
        <div class="hoo-video-duration">Live</div>
      </div>
    </figure>
  </div>
  
  <!-- Stream player that appears when activated -->
  <div class="hoo-video-player">
    <iframe 
      src="https://streaming-service.com/embed/VIDEO_ID?autoplay=1" 
      title="Streaming video player" 
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>
```

## Usage Guidelines

- Replace the embed URL with the appropriate streaming service URL
- Provide a descriptive title for accessibility
- Follow the streaming service's specific embedding best practices
- Test playback across different devices and browsers
- Be mindful of autoplay restrictions in modern browsers
- Use the `.hoo-video` container to maintain consistent styling with other media components
- Check the streaming service documentation for required parameters (like Twitch's `parent` parameter)

## SCSS

## Accessibility

- Include a meaningful title attribute for the iframe
- Ensure the iframe maintains proper tab order
- Check if the streaming service provides caption capabilities
- Consider providing an alternative for users who can't access the embedded stream
- Be cautious with autoplay functionality as it can be disruptive
- Provide clear play controls when using with thumbnail overlays
