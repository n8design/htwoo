---
order: 6
---

# Icons

Icons in the HTWOO UI library provide a comprehensive set of visual symbols that can be used to enhance the user interface, represent actions, indicate states, and improve overall user experience.

## Icon Types

* **Standard Icons** - Basic SVG icons for general use
* **Quick Link Icons** - Icon images for quick link components
* **SVG Quick Link Icons** - SVG icons specifically formatted for quick links

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/icons

**SCSS Partial Location**\
`/src/styles/01-atoms/icons/_index.scss`

## Installation

To install all icons to your project:

```sh
npm i @n8d/htwoo-icons
```

## Available Icons

For a full documentation of all icons available in hTWOo please check out the [Icon Tool](?p=design-tokens-icon-overview) under Design Tokens.

## Accessibility

When using icons, consider the following accessibility guidelines:

* Use `aria-hidden="true"` for decorative icons
* Provide text alternatives for icons that convey meaning
* Include `<title>` tags in SVG icons to provide tooltips and screen reader text
* For icon-only buttons or links, use visually hidden text (e.g., `.sr-only` class) for screen readers
