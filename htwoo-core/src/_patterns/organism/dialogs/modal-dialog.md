---
title: Modal Dialog
order: 2
---

# Modal Dialog

The Modal Dialog component provides a focused overlay interface that interrupts the user's workflow to capture attention or gather input. Modal dialogs display content on top of the main application with a backdrop that blocks interaction with the underlying content.

## Overview

Modal dialogs in HTWOO UI are implemented using the HTML5 `<dialog>` element with the `modal` method for opening. They include a semi-transparent backdrop that blocks interaction with page content underneath and helps focus user attention on the dialog content.

## Features

- Semi-transparent backdrop with blur effect
- Centered positioning by default
- Customizable width and height via CSS variables
- Support for dialog header with title and close button
- Dialog content area for main information
- Optional dialog actions area for buttons
- Animation effects for smooth opening and closing
- Support for contextual variants (error, warning, success)

## Usage

The Modal Dialog can be implemented with the following structure:

```html
<dialog id="myModalDialog" class="hoo-dlg">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Modal Dialog Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Modal dialog content goes here</p>
  </div>
  
  <!-- Dialog actions -->
  <div class="hoo-dlg-actions">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Dimensions

Modal dialog dimensions can be customized using CSS variables:

```html
<dialog class="hoo-dlg" style="--hoo-dlg-width: 50vw; --hoo-dlg-height: auto">
  <!-- Dialog content -->
</dialog>
```

## SCSS Files

**Dialog Styles:**
- `src/styles/03-organism/dialog/_dialog.scss`

## Accessibility

- Uses the native HTML5 `<dialog>` element with `showModal()` method
- Ensures focus is trapped within the dialog when open
- ESC key closes the dialog by default
- Proper focus management with autofocus attribute
- ARIA attributes for screen reader compatibility
