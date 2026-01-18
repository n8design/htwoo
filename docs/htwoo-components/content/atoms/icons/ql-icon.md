---
title: "Quick Links Icons"
description: "Quick Link Icons provide image-based icons optimized for use within quick link components. These components typically display a visual representation alongside link text."
type: "components"
layout: "single"
patternId: "atoms-icons-ql-icon"
category: "atoms"
subcategory: "icons"
seoTitle: "Atoms - Icons Ql Icon"
seoDescription: "Icons Ql Icon Atoms"
weight: 10
markup: |
  &lt;figure class=&quot;hoo-ql-media&quot;&gt;
      &lt;img src=&quot;../../images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
  &lt;/figure&gt;
  
---

Quick Link Icons provide image-based icons optimized for use within quick link components. These components typically display a visual representation alongside link text.

## Description

Quick Link Icons use the `<figure>` element with an `<img>` tag to display raster-based images. They're designed to work seamlessly within quick link components while maintaining proper aspect ratios.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/icons

**SCSS Partial Location**\
`/src/styles/01-atoms/icons/_index.scss`

### CSS Classes

**Base Classes**
- `.hoo-ql-media` - Container for the icon or image
- `.hoo-ql-img` - The image element with 1:1 aspect ratio

**Styling**
- Default 1:1 aspect ratio (square)
- Object-fit: cover to maintain proportions
- Responsive sizing based on parent container

### Usage Examples

**Basic Quick Link Icon**
```html
<figure class="hoo-ql-media">
    <img src="path/to/icon.png" class="hoo-ql-img" alt="Icon description" loading="lazy">
</figure>
```

**Within a Quick Link Component**
```html
<div class="hoo-quicklink">
    <figure class="hoo-ql-media">
        <img src="path/to/icon.png" class="hoo-ql-img" alt="" loading="lazy">
    </figure>
    <div class="hoo-quicklink-content">
        <h3 class="hoo-quicklink-title">Link Title</h3>
        <p class="hoo-quicklink-text">Link description text</p>
    </div>
</div>
```

### Accessibility

- Always provide descriptive `alt` attributes when the image conveys meaning
- Use empty `alt=""` for decorative images
- Use the `loading="lazy"` attribute for performance optimization