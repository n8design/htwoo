---
title: Dialog Components
order: 99
---

# Dialog Components

Dialog components in HTWOO UI are modular building blocks used to create various types of dialog interfaces. These molecules serve as the foundation for organism-level dialog implementations.

## Overview

The molecule-level dialog components provide the essential parts needed to build complete dialog experiences. They focus on specific functionality such as headers, content areas, and iframe containers that can be combined to create full dialog interfaces.

## Component Types

### Dialog Header

The dialog header component (`hoo-dlgheader`) provides a consistent title and close button area for dialogs. It helps establish the purpose of the dialog and offers clear dismissal options.

### Dialog Content

The dialog content component (`hoo-dlgcontent`) manages the main content area within dialogs, handling spacing, overflow, and presentation of information.

### Dialog IFrame

The dialog iframe component (`hoo-dlg-iframe`) provides a container for embedding external web content within dialogs with support for various aspect ratios.

## Usage

These components are designed to be used within dialog container elements:

```html
<dialog class="hoo-dlg">
  <!-- Header component -->
  <div class="hoo-dlgheader">
    <div class="hoo-dlgheader-title">
      <h2>Dialog Title</h2>
    </div>
    <div class="hoo-dlgheader-closer">
      <button class="hoo-button-icon" aria-label="Close">×</button>
    </div>
  </div>
  
  <!-- Content component -->
  <div class="hoo-dlgcontent">
    <p>Dialog content goes here</p>
  </div>
  
  <!-- Optional actions area -->
  <div class="hoo-dlg-actions">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</dialog>
```

## SCSS Files

**Dialog Component Styles:**
- `lib/sass/02-molecules/dialogs/`
