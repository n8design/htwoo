---
title: "IFrame Dialog"
description: "The IFrame Dialog component provides a container for displaying external web content within a dialog. It's useful for embedding external websites, documents, or web applications without navigating awa"
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-iframe"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Iframe"
seoDescription: "Dialogs Dialog Iframe Organism"
weight: 10
hasVariants: false
markup: |
  
---

# IFrame Dialog

The IFrame Dialog component provides a container for displaying external web content within a dialog. It's useful for embedding external websites, documents, or web applications without navigating away from the current context.

## Overview

IFrame dialogs in HTWOO UI combine the HTML5 `<dialog>` element with an embedded `<iframe>` to create a window for displaying external content. They can be configured with different aspect ratios and sizes to accommodate various types of content.

## Features

- External content embedding via `<iframe>`
- Default 16:9 aspect ratio (configurable to other ratios)
- Customizable dimensions via CSS variables
- Responsive design that adapts to viewport size
- Optional dialog header with title and close button
- Variants for different aspect ratios (16:9, 4:3, 1:1)
- Optional modal backdrop

## Usage

The IFrame Dialog can be implemented with the following structure:

```html
<dialog id="myIframeDialog" class="hoo-dlg" style="--hoo-dlg-width: 50vw;">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>IFrame Dialog Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- IFrame content -->
  <div class="hoo-dlg-iframe">
    <iframe src="https://example.com" title="Embedded content"></iframe>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Dimensions

IFrame dialog dimensions can be customized using CSS variables:

```html
<dialog class="hoo-dlg" style="--hoo-dlg-width: 75vw; --hoo-dlg-height: auto">
  <!-- Dialog content -->
</dialog>
```

## Aspect Ratio Variants

The IFrame Dialog comes in several aspect ratio variants:

- **Default (16:9)**: Optimal for video content
- **4:3**: Traditional presentation format
- **1:1 (Squared)**: Equal width and height

## SCSS Files

**Dialog Styles:**
- `lib/sass/03-organism/dialog/`

## Accessibility

- Uses the native HTML5 `<dialog>` element
- Proper iframe title attribute for screen readers
- Ensures focus is trapped within the dialog when open
- ESC key closes the dialog by default
- ARIA attributes for screen reader compatibility