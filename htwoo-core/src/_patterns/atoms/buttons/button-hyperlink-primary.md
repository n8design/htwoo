---
title: Hyperlink Primary
order: 65
---

Primary hyperlink buttons combine the prominent styling of primary buttons with the functionality of hyperlinks (`<a>` tags), allowing navigation to other pages while highlighting the link as a primary call-to-action.

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
- `a.hoo-button-primary` - Primary hyperlink button styling

**States**
- `a.hoo-button-primary:hover` - Hover state
- `a.hoo-button-primary:active` - Active/pressed state
- `a.hoo-button-primary:focus` - Focus state

### Usage Examples

**Primary Hyperlink Button**
```html
<a href="https://example.com" class="hoo-button-primary">
  <span class="hoo-button-label">Sign Up Now</span>
</a>
```

**Primary Hyperlink Button with Icon**
```html
<a href="https://example.com" class="hoo-button-primary">
  <i class="hoo-icon" aria-hidden="true">arrow_right</i>
  <span class="hoo-button-label">Get Started</span>
</a>
```

### Accessibility

When using primary hyperlink buttons, ensure that:
- The link has a clear, descriptive text
- The destination is clear to the user
- Focus indicators remain visible for keyboard navigation
- Color contrast remains sufficient in all states

***
