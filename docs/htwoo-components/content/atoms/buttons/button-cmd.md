---
title: "Command Button"
description: "Command buttons provide a specialized style for application commands, often used in toolbars and command bars. When no dropdown items are specified, the button renders without a chevron down and witho"
type: "components"
layout: "single"
patternId: "atoms-buttons-button-cmd"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Cmd"
seoDescription: "Buttons Button Cmd Atoms"
weight: 70
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-buttoncmd&quot;  aria-haspopup=&quot;true&quot;  &gt;
      &lt;button class=&quot;hoo-buttoncmd&quot; aria-haspopup=&quot;true&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-plus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-plus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;New Item&lt;/span&gt;&lt;span class=&quot;hoo-button-icon hoo-buttonchevron&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
  &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
      &lt;/use&gt;
  &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
      &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
---

Command buttons provide a specialized style for application commands, often used in toolbars and command bars. When no dropdown items are specified, the button renders without a chevron down and without any flyout menu.

## Supported States:

* Default - Normal button state
* Hover - Mouse over state
* Active - Pressed state
* Focus - Focused through keyboard navigation
* Disabled - Non-interactive state

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/buttons

**SCSS Partial Location**\
`/src/styles/01-atoms/buttons/_buttons.scss`

### CSS Classes

**Base Classes**
- `.hoo-button` - Base button styling (used for Command buttons)
- `.hoo-cmd` - Specific modifier for command buttons

**States**
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:focus` - Focus state
- `:disabled` - Disabled state
- `[aria-disabled="true"]` - ARIA disabled state

### Usage Examples

**Basic Command Button**
```html
<button class="hoo-button hoo-cmd">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="hoo-button-label">Command Action</span>
</button>
```

**Command Button with Icon Only**
```html
<button class="hoo-button hoo-cmd" title="Command Action">
  <i class="hoo-icon" aria-hidden="true">icon_name</i>
  <span class="sr-only">Command Action</span>
</button>
```

### Accessibility

Command buttons, especially icon-only variants, should include text alternatives like tooltips (`title` attribute) and visually hidden text (`.sr-only`) for screen readers.

***