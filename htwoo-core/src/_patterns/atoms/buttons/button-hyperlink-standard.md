---
title: Hyperlink Standard
order: 60
---

Standard hyperlink buttons combine the styling of standard buttons with the functionality of hyperlinks (`<a>` tags), allowing navigation to other pages or resources while maintaining button appearance.

## Supported States:

* Default - Normal button state
* Hover - Mouse over state
* Active - Pressed state
* Focus - Focused through keyboard navigation

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/buttons

**SCSS Partial Location**\
`/src/styles/01-atoms/buttons/_buttons.scss`

### CSS Classes

**Base Classes**
- `a.hoo-button` - Standard hyperlink button styling

**States**
- `a.hoo-button:hover` - Hover state
- `a.hoo-button:active` - Active/pressed state
- `a.hoo-button:focus` - Focus state

### Usage Examples

**Standard Hyperlink Button**
```html
<a href="https://example.com" class="hoo-button">
  <span class="hoo-button-label">Visit Website</span>
</a>
```

**Standard Hyperlink Button with Icon**
```html
<a href="https://example.com" class="hoo-button">
  <i class="hoo-icon" aria-hidden="true">link</i>
  <span class="hoo-button-label">Visit Website</span>
</a>
```

### Accessibility

When using hyperlink buttons, ensure that:
- The link has a clear, descriptive text
- The destination is clear to the user
- Focus indicators remain visible for keyboard navigation

***