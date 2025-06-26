---
title: Media Components
order: 1
---

# Media Components

HTWOO UI provides a comprehensive set of media components for displaying video content in various formats and layouts.

## Overview

Media components in HTWOO UI enable the presentation of video content from multiple sources including HTML5 video, YouTube, Vimeo, and streaming services. These components are designed to be responsive, accessible, and consistent with the HTWOO design language.

## Components

### Video Players

HTWOO includes several video player components for different media sources:

- **[HTML5 Video Player](./video-player-html.html)**: Native browser video player for MP4 and other supported formats
- **[YouTube Video Player](./video-player-youtube.html)**: Embedded player for YouTube videos
- **[Vimeo Video Player](./video-player-vimeo.html)**: Embedded player for Vimeo videos
- **[Stream Video Player](./video-player-stream.html)**: Player for streaming video services

### Thumbnails & Overlays

Components for displaying video thumbnails and interactive overlays:

- **[Video Thumbnail](./video-thumb.html)**: Image representation of video content
- **[Video Overlay](./video-overlay.html)**: Interactive overlay with play button and duration

## Features

- Responsive design that adapts to container width using aspect ratio
- Consistent 16:9 aspect ratio maintained across all player types
- Multiple video source support (HTML5, YouTube, Vimeo, streaming services)
- Thumbnail images with play indicators and duration display
- Video duration display on thumbnails
- Custom play button overlays
- Consistent styling across different player types
- Proper loading attributes for performance optimization
- Accessibility considerations for video content consumption

## Component Structure

Media components in HTWOO UI follow a consistent structure:

1. **Container**: `.hoo-video` serves as the main container
2. **Player**: `.hoo-video-player` contains the actual video player
3. **Thumbnails**: `.hoo-thumbnail` and `.hoo-thumbnail-figure` for displaying preview images
4. **Overlay**: `.hoo-thumbnail-overlay` provides interaction indicators
5. **Duration**: `.hoo-video-duration` displays the video length

## Usage Guidelines

- Ensure videos include proper title and description attributes
- Use thumbnails with meaningful alt text
- Consider autoplay settings carefully based on context
- Implement lazy loading for improved performance
- Include durations when presenting video thumbnails
- Provide captions and transcripts when possible for accessibility
- Maintain the 16:9 aspect ratio for consistency across player types
- Use the appropriate player component based on the video source

## SCSS

## Accessibility Considerations

- Include descriptive alt text for thumbnail images
- Provide captions or transcripts for video content
- Ensure controls are keyboard accessible
- Use proper title attributes for embedded content
- Consider autoplay implications for users with vestibular disorders
- Maintain sufficient color contrast for duration indicators and overlay elements
- Ensure video players can be operated via keyboard
- Do not rely solely on color to indicate interactive elements
