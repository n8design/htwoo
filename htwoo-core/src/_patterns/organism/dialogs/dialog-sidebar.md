---
title: Sidebar Dialog
order: 3
---

# Sidebar Dialog

The Sidebar Dialog component provides a panel that slides in from either the left or right side of the screen. It's ideal for displaying supplementary content, forms, or navigation options without navigating away from the current view.

## Overview

Sidebar dialogs in HTWOO UI leverage the HTML5 `<dialog>` element with special positioning to create panels that appear from the side of the screen. They can be positioned on either the left or right side and can take up the full height of the viewport.

## Features

- Left or right side positioning
- Full-height viewport display
- Customizable width via CSS variables
- Support for resizing through user interaction
- Smooth animation transitions
- Optional dialog header with title and close button
- Dialog content area for main information
- Optional backdrop when opened modally

## Usage

The Sidebar Dialog can be implemented with the following structure:

```html
<!-- Right Sidebar -->
<dialog id="mySidebarRight" class="hoo-dlg sidebar right">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Sidebar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Sidebar content goes here</p>
  </div>
</dialog>

<!-- Left Sidebar -->
<dialog id="mySidebarLeft" class="hoo-dlg sidebar left">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Sidebar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Sidebar content goes here</p>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Width

Sidebar dialog width can be customized using CSS variables:

```html
<dialog class="hoo-dlg sidebar right" style="--hoo-dlg-width: 25vw">
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
