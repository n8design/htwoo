---
title: Standard Icon
order: 3
---

Standard icons in HTWOO UI are SVG-based icons used throughout the interface for consistent visual representation. These icons are highly flexible, can be styled with CSS, and scale without loss of quality.

## Description

Standard icons use SVG sprites for optimal performance and consistent styling. They inherit their color from the parent element and can be sized through CSS.

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/icons

**SCSS Partial Location**\
`/src/styles/01-atoms/icons/_index.scss`

### CSS Classes

**Base Classes**
- `.hoo-icon` - Container for the icon
- `.hoo-icon-svg` - The SVG icon element

**Customization**
- Color is inherited through `currentColor`
- Default size is 1rem with 4px padding

### Usage Examples

**Basic Icon**
```html
<span class="hoo-icon">
    <svg class="hoo-icon-svg document" aria-hidden="true">
        <title>Document</title>
        <use xlink:href="../../images/icons.svg#document"></use>
    </svg>
</span>
```

**Colored Icon (inherits color from parent)**
```html
<span class="hoo-icon" style="color: #0078d4;">
    <svg class="hoo-icon-svg star" aria-hidden="true">
        <title>Star</title>
        <use xlink:href="../../images/icons.svg#star"></use>
    </svg>
</span>
```

### Accessibility

- Use `aria-hidden="true"` for decorative icons
- Include `<title>` tags for icons that convey meaning
- For icon-only buttons, include additional screen reader text

### Available Icons

For a full documentation of all icons available in hTWOo please check out the [Icon Tool](?p=design-tokens-icon-overview) under Design Tokens.