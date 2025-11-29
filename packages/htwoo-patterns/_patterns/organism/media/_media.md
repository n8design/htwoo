---
title: Organism Media Components
order: 1  
---

# Organism Media Components

HTWOO UI organism-level media components combine multiple molecular components to create complete, interactive video experiences. These components provide a user-friendly interface where users can preview video content via thumbnails and expand to view the full video player.

## Overview

Organism media components in HTWOO UI use HTML5's `<details>` and `<summary>` elements to create collapsible video players. They compose three molecular-level components:

- **Video Overlay**: Play button with duration display
- **Video Thumbnail**: Preview image with caption
- **Video Player**: The actual video player (HTML5, YouTube, or Vimeo)

This pattern provides a clean, space-efficient way to display video content while giving users control over when to load and play videos.

## Components

### HTML5 Video Component (`organism-video-html`)

**File**: `video-html.hbs`
**Pattern**: `organism-video-html`

Interactive video component for HTML5 video content with native browser controls.

#### Structure
```handlebars
{{#video}}
<details class="hoo-video">
    <summary class="hoo-thumbnail">
        {{> molecules-video-overlay}}
        {{> molecules-video-thumb}}
    </summary>
    {{> molecules-video-player-html}}
</details>
{{/video}}
```

#### Features
- Collapsible interface using HTML5 `<details>` element
- Native HTML5 video player with standard browser controls
- Thumbnail preview with play button overlay
- Duration display on thumbnail
- Automatic video playback when expanded
- Lazy loading support for performance
- Supports multiple video formats (MP4, WebM, etc.)

#### Usage
Best for self-hosted video content where you have full control over the video files and want to use native browser functionality.

### YouTube Video Component (`organism-video-youtube`)

**File**: `video-youtube.hbs`  
**Pattern**: `organism-video-youtube`

Interactive video component for YouTube content using YouTube's privacy-enhanced embed player.

#### Structure
```handlebars
{{#video-yt}}
<details class="hoo-video">
    <summary class="hoo-thumbnail">
        {{> molecules-video-overlay}}
        {{> molecules-video-thumb}}
    </summary>
    {{> molecules-video-player-youtube}}
</details>
{{/video-yt}}
```

#### Features
- YouTube privacy-enhanced embedding (`youtube-nocookie.com`)
- Collapsible interface with thumbnail preview
- Custom thumbnail support
- Automatic autoplay when expanded
- Full YouTube player functionality
- Responsive iframe container
- Support for YouTube's privacy features

#### Usage
Ideal for embedding YouTube videos while maintaining user privacy and providing a consistent interface with other video types.

### Vimeo Video Component (`organism-video-vimeo`)

**File**: `video-vimeo.hbs`
**Pattern**: `organism-video-vimeo`

Interactive video component for Vimeo content using Vimeo's embed player.

#### Structure
```handlebars
{{#video-vimeo}}
<details class="hoo-video">
    <summary class="hoo-thumbnail">
        {{> molecules-video-overlay}}
        {{> molecules-video-thumb}}
    </summary>
    {{> molecules-video-player-vimeo}}
</details>
{{/video-vimeo}}
```

#### Features
- Vimeo player embedding with full functionality
- Collapsible interface with custom thumbnails
- Automatic autoplay when expanded
- Support for Vimeo's privacy and sharing controls
- Responsive iframe container
- Professional video hosting integration

#### Usage
Perfect for professional video content hosted on Vimeo, offering high-quality playback and advanced video features.

## Common Features

All organism-level media components share these characteristics:

### Interactive Disclosure
- Uses HTML5 `<details>` and `<summary>` elements for progressive disclosure
- Thumbnail acts as a clickable summary to reveal the full video player
- Semantic HTML structure for better accessibility

### Composed Architecture
Each component combines three molecular components:
1. **molecules-video-overlay**: Play button and duration display
2. **molecules-video-thumb**: Thumbnail image with figure caption
3. **molecules-video-player-[type]**: Type-specific video player

### Consistent Styling
- All components use the `.hoo-video` container class
- Thumbnail section uses `.hoo-thumbnail` class
- Player section uses `.hoo-video-player` class
- Inherits styling from molecular-level components

### Performance Optimization
- Lazy loading support for video content
- Thumbnail images load immediately for quick preview
- Video players only load when user chooses to expand
- Preload settings optimized for performance

## Accessibility Considerations

- Semantic HTML structure with proper heading hierarchy
- Keyboard accessible disclosure controls
- Alt text support for thumbnail images
- Video caption support through underlying player components
- Focus management for expanded/collapsed states

## Configuration

Each component uses a JSON configuration file (`video-[type].json`) with:
```json
{
    "bodyClass": "medium"
}
```

This configuration applies styling context to the component for proper display sizing.

## Browser Support

- Modern browsers supporting HTML5 `<details>` element
- Fallback graceful degradation for older browsers
- Cross-browser video player compatibility
- Responsive design for mobile and desktop
