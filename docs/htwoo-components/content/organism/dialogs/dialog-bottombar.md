---
title: "Bottombar Dialog"
description: "The Bottombar Dialog component provides a horizontal panel that appears from the bottom of the screen. It's useful for action bars, command panels, or notifications that need to be accessible but not "
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-bottombar"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Bottombar"
seoDescription: "Dialogs Dialog Bottombar Organism"
weight: 5
hasVariants: false
markup: |
  
---

# Bottombar Dialog

The Bottombar Dialog component provides a horizontal panel that appears from the bottom of the screen. It's useful for action bars, command panels, or notifications that need to be accessible but not interfere with the main content view.

## Overview

Bottombar dialogs in HTWOO UI extend the HTML5 `<dialog>` element with special positioning to create a horizontal panel at the bottom of the viewport. They span the full width of the screen and can have a customizable height.

## Features

- Fixed positioning at the bottom of the viewport
- Full-width display
- Customizable height via CSS variables
- Support for resizing through user interaction
- Smooth animation transitions
- Optional dialog header with title and close button
- Dialog content area for main information
- Optional backdrop when opened modally

## Usage

The Bottombar Dialog can be implemented with the following structure:

```html
<dialog id="myBottombar" class="hoo-dlg bottombar">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Bottombar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Bottombar content goes here</p>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Height

Bottombar dialog height can be customized using CSS variables:

```html
<dialog class="hoo-dlg bottombar" style="--hoo-dlg-height: 20vh">
  <!-- Dialog content -->
</dialog>
```

## SCSS Files

**Dialog Styles:**
- `src/styles/03-organism/dialog/_dialog.scss`

## Accessibility

- Uses the native HTML5 `<dialog>` element
- Ensures focus is trapped within the dialog when open
- ESC key closes the dialog by default
- Proper focus management with autofocus attribute
- ARIA attributes for screen reader compatibility