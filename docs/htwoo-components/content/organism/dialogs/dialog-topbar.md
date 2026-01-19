---
title: "Topbar Dialog"
description: "The Topbar Dialog component provides a horizontal panel that appears from the top of the screen. It's ideal for notifications, alerts, or global actions that need to be prominently displayed across th"
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-topbar"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Topbar"
seoDescription: "Dialogs Dialog Topbar Organism"
weight: 4
hasVariants: false
markup: |
  
---

# Topbar Dialog

The Topbar Dialog component provides a horizontal panel that appears from the top of the screen. It's ideal for notifications, alerts, or global actions that need to be prominently displayed across the top of the application.

## Overview

Topbar dialogs in HTWOO UI extend the HTML5 `<dialog>` element with special positioning to create a horizontal panel at the top of the viewport. They span the full width of the screen and can have a customizable height.

## Features

- Fixed positioning at the top of the viewport
- Full-width display
- Customizable height via CSS variables
- Support for resizing through user interaction
- Smooth animation transitions
- Optional dialog header with title and close button
- Dialog content area for main information
- Optional backdrop when opened modally

## Usage

The Topbar Dialog can be implemented with the following structure:

```html
<dialog id="myTopbar" class="hoo-dlg topbar">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Topbar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Topbar content goes here</p>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Height

Topbar dialog height can be customized using CSS variables:

```html
<dialog class="hoo-dlg topbar" style="--hoo-dlg-height: 20vh">
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