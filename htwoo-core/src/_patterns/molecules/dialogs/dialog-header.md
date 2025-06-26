---
title: Dialog Header
order: 10
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
