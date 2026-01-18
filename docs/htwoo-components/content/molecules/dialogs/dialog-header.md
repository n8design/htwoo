---
title: "Dialog Header"
description: "The Dialog Header component provides a consistent title and close button area for dialog components. It helps users understand the purpose of the dialog and provides a clear way to dismiss it."
type: "components"
layout: "single"
patternId: "molecules-dialogs-dialog-header"
category: "molecules"
subcategory: "dialogs"
seoTitle: "Molecules - Dialogs Dialog Header"
seoDescription: "Dialogs Dialog Header Molecules"
weight: 10
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-dlgheader&quot;&gt;
      &lt;div class=&quot;hoo-dlgheader-title&quot;&gt;
          &lt;h2&gt;Dialog Header&lt;/h2&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-dlgheader-closer&quot;&gt;
          &lt;button class=&quot;hoo-buttonicon&quot; 
      
      
      &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-close&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-close&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;
      &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
---

# Dialog Header

The Dialog Header component provides a consistent title and close button area for dialog components. It helps users understand the purpose of the dialog and provides a clear way to dismiss it.

## Overview

Dialog headers in HTWOO UI follow a consistent design pattern with a title on the left and optional action buttons (typically a close button) on the right. They establish a clear visual hierarchy and help users navigate dialog interfaces.

## Features

- Flexible layout with title and actions areas
- Consistent padding and spacing
- Support for close button or other action buttons
- Proper heading hierarchy with h2 element
- Configurable title text
- Clean visual separation from dialog content

## Usage

The Dialog Header can be implemented with the following structure:

```html
<div class="hoo-dlgheader">
  <div class="hoo-dlgheader-title">
    <h2>Dialog Title</h2>
  </div>
  <div class="hoo-dlgheader-closer">
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
</div>
```

## SCSS Files

**Styles:**
- `src/styles/02-molecules/dialogs/_dialog-header.scss`

## Accessibility

- Proper heading structure with `<h2>` element
- Aria-label for close button
- Focus management for interactive elements
- Sufficient color contrast for readability