---
title: "Command Button with Link"
description: "Command buttons with links combine the styling of command buttons with the functionality of hyperlinks, allowing navigation to other pages while maintaining the command button appearance. This variant"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-cmd-link"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Cmd Link"
seoDescription: "Buttons Button Cmd Link Atoms"
weight: 75
markup: |
  &lt;div class=&quot;hoo-buttoncmd&quot;  aria-haspopup=&quot;true&quot;  &gt;
      &lt;a href=&quot;#&quot; class=&quot;hoo-buttoncmd&quot; aria-haspopup=&quot;true&quot;&gt;
          &lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt; &lt;span class=&quot;hoo-icon&quot;&gt;
      &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
          
          &lt;use xlink:href=&quot;../../images/icons.svg#icon-plus&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
  &lt;/span&gt; &lt;/span&gt;
          &lt;span class=&quot;hoo-button-label&quot;&gt; New Item &lt;/span&gt;
          &lt;span class=&quot;hoo-button-icon hoo-buttonchevron&quot;&gt; &lt;span class=&quot;hoo-icon&quot;&gt;
      &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
          
          &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
  &lt;/span&gt; &lt;/span&gt;
      &lt;/a&gt;
      &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
          &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
              &lt;button class=&quot;hoo-buttonaction&quot;&gt;
                  &lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt; &lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                      
                      &lt;use xlink:href=&quot;../../images/icons.svg#icon-ninjacat&quot;&gt;&lt;/use&gt;
                  &lt;/svg&gt;
              &lt;/span&gt; &lt;/span&gt;
                  &lt;span class=&quot;hoo-button-label&quot;&gt; Email message &lt;/span&gt;
              &lt;/button&gt;
          &lt;/li&gt;
          &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
              &lt;button class=&quot;hoo-buttonaction&quot;&gt;
                  &lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt; &lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
                      
                      &lt;use xlink:href=&quot;../../images/icons.svg#icon-minus&quot;&gt;&lt;/use&gt;
                  &lt;/svg&gt;
              &lt;/span&gt; &lt;/span&gt;
                  &lt;span class=&quot;hoo-button-label&quot;&gt; Calendar Event &lt;/span&gt;
              &lt;/button&gt;
          &lt;/li&gt;
      &lt;/menu&gt;&lt;/div&gt;
  
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