---
title: Dialog Content
order: 20
---

# Dialog Content

The Dialog Content component provides a consistent container for the main content area within dialogs. It manages spacing, overflow, and presentation of information within dialog components.

## Overview

Dialog content in HTWOO UI is designed to handle various types of content, from simple text to complex forms, while maintaining a consistent user experience. It provides appropriate spacing and scroll behavior to ensure content is accessible even when it exceeds the available space.

## Features

- Consistent padding and spacing
- Automatic overflow handling with scrolling
- Maximum height calculation to fit within dialogs
- Proper box sizing for predictable layout
- Clean visual separation from dialog header and actions
- Support for various content types (text, forms, controls)

## Usage

The Dialog Content can be implemented with the following structure:

```html
<div class="hoo-dlgcontent">
  <!-- Any content can go here -->
  <p>Dialog content text</p>
  <form>
    <!-- Form elements -->
  </form>
</div>
```

## SCSS Files

**Styles:**
- `src/styles/02-molecules/dialogs/_dialog-content.scss`

## IFrame Content

For embedding web content, the dialog content component also provides an IFrame container with various aspect ratios:

```html
<div class="hoo-dlg-iframe">
  <iframe src="https://example.com" title="Embedded content"></iframe>
</div>
```

### IFrame Aspect Ratios

The following aspect ratio classes are available:

- Default (16:9): No additional class needed
- 4:3 Ratio: Add `ratio-4by3` class
- 1:1 (Squared) Ratio: Add `ratio-squared` class

## Accessibility

- Proper scrolling for overflow content
- Focus management for form elements
- Sufficient padding for touch targets
- Clean structure for screen readers
