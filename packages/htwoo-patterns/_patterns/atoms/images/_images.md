---
title: Image Components
order: 7
---

# Images

Images in the HTWOO UI library provide flexible, responsive image components with support for different aspect ratios to maintain consistent layouts across the interface. Images are used in various components like cards, avatars, and media elements.

## Image Types

* **Default Image** - Base image component with lazy loading
* **1:1 Aspect Ratio** - Perfect square images (used for avatars, profile pictures)
* **16:9 Aspect Ratio** - Widescreen format (used for video thumbnails, card images)
* **16:10 Aspect Ratio** - Alternative widescreen format (used for Teams splash cards)

## Usage

Basic image implementation:

```html
<img src="path/to/image.jpg" alt="Description of image" loading="lazy">
```

Different aspect ratios are typically handled by the parent container (like cards, avatars, or media components) rather than the image itself.

## Accessibility

When using images, consider the following accessibility guidelines:

* Always provide descriptive `alt` text for informative images
* Use empty `alt=""` for decorative images
* Use the `loading="lazy"` attribute for performance optimization
* Ensure sufficient contrast between text and image backgrounds when text overlays images
* Consider users with reduced motion preferences
