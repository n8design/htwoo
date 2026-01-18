---
title: Quick Links Icons - SVG
order: 15
---

Quick Link SVG Icons provide vector-based icons optimized for use within quick link components. They combine the flexibility of SVG with the proper structure for quick link components.

## Description

Quick Link SVG Icons use the `<figure>` element with an SVG element to display vector-based icons. They're designed specifically for quick link components and inherit their color from the parent element.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/icons

**SCSS Partial Location**\
`/src/styles/01-atoms/icons/_index.scss`

### CSS Classes

**Base Classes**
- `.hoo-ql-media` - Container for the icon
- `.hoo-media-svg` - The SVG element with 1:1 aspect ratio

**Styling**
- Default 1:1 aspect ratio (square)
- Centered content
- Color inherited via `currentColor`
- Transparent background

### Usage Examples

**Basic Quick Link SVG Icon**
```html
<figure class="hoo-ql-media">
    <svg class="hoo-media-svg" aria-hidden="true">
        <title>Icon description</title>
        <use xlink:href="path/to/icons.svg#iconname"></use>
    </svg>
</figure>
```

**Within a Quick Link Component**
```html
<div class="hoo-quicklink">
    <figure class="hoo-ql-media">
        <svg class="hoo-media-svg" aria-hidden="true">
            <title>Document</title>
            <use xlink:href="../../images/icons.svg#document"></use>
        </svg>
    </figure>
    <div class="hoo-quicklink-content">
        <h3 class="hoo-quicklink-title">Link Title</h3>
        <p class="hoo-quicklink-text">Link description text</p>
    </div>
</div>
```

### Accessibility

- Use `aria-hidden="true"` for decorative icons
- Include `<title>` tags for tooltip functionality and screen reader support
- For icons that convey meaning, ensure there's associated text in the quick link component