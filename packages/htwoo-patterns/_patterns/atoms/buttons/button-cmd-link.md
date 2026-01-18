---
title: Command Button with Link
order: 75
---

Command buttons with links combine the styling of command buttons with the functionality of hyperlinks, allowing navigation to other pages while maintaining the command button appearance. This variant is particularly useful in navigation bars and toolbars.

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
- `a.hoo-button` - Base hyperlink button styling
- `.hoo-cmd` - Command button modifier

**States**
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:focus` - Focus state

### Usage Examples

**Basic Command Link Button**
```html
<a href="https://example.com" class="hoo-button hoo-cmd">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Command Link</span>
</a>
```

**Command Link Button with Icon Only**
```html
<a href="https://example.com" class="hoo-button hoo-cmd" title="Command Link">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="sr-only">Command Link</span>
</a>
```

### Accessibility

Command link buttons should:
- Include descriptive text (visible or via `.sr-only` for icon-only variants)
- Use `title` attributes for tooltips on icon-only variants
- Maintain visible focus indicators for keyboard navigation
- Clearly indicate the destination of the link

***