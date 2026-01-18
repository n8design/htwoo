---
title: "Status Dialogs"
description: "Status Dialog components provide contextual notifications and feedback to users. They are specialized dialog variants that communicate different states such as information, success, warning, or error "
type: "components"
layout: "single"
patternId: "organism-dialogs-status-dialogs"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Status Dialogs"
seoDescription: "Dialogs Status Dialogs Organism"
weight: 6
hasVariants: false
markup: |
  
---

# Status Dialogs

Status Dialog components provide contextual notifications and feedback to users. They are specialized dialog variants that communicate different states such as information, success, warning, or error conditions.

## Overview

Status dialogs in HTWOO UI extend the basic dialog component with specific styling and icons to convey different types of messages. They are designed to be immediately recognizable by color, icon, and positioning.

## Features

- Four contextual states: info (default), success, warning, and error
- Distinctive color coding for each state
- Matching icons to reinforce the message type
- Compact, focused design for clear communication
- Flexible positioning options
- Optional backdrop when opened modally

## Status Types

### Info Status Dialog

The default status dialog for general information and neutral messages.

- Blue color scheme
- Information icon
- Used for general updates, notices, and non-critical information

### Success Status Dialog

Indicates successful completion of an operation or positive feedback.

- Green color scheme
- Checkmark or success icon
- Used for confirming successful actions, completions, or positive outcomes

### Warning Status Dialog

Alerts users to potential issues that may require attention.

- Yellow/orange color scheme
- Warning icon
- Used for cautionary messages, non-critical issues, or preventative notifications

### Error Status Dialog

Communicates errors, failures, or critical issues that need immediate attention.

- Red color scheme
- Error icon
- Used for critical errors, failures, or issues that prevent task completion

## Usage

The Status Dialog can be implemented with the following structure:

```html
<!-- Info Dialog (default) -->
<dialog class="hoo-dlg statusbar">
  <svg class="hoo-icon"><!-- Info icon --></svg>
  <div class="hoo-dlg-content">This is an informational message.</div>
  <div class="hoo-dlg-actions">
    <button autofocus>Close</button>
  </div>
</dialog>

<!-- Success Dialog -->
<dialog class="hoo-dlg statusbar success">
  <svg class="hoo-icon"><!-- Success icon --></svg>
  <div class="hoo-dlg-content">Operation completed successfully.</div>
  <div class="hoo-dlg-actions">
    <button autofocus>Close</button>
  </div>
</dialog>

<!-- Warning Dialog -->
<dialog class="hoo-dlg statusbar warning">
  <svg class="hoo-icon"><!-- Warning icon --></svg>
  <div class="hoo-dlg-content">Please review before proceeding.</div>
  <div class="hoo-dlg-actions">
    <button autofocus>Close</button>
  </div>
</dialog>

<!-- Error Dialog -->
<dialog class="hoo-dlg statusbar error">
  <svg class="hoo-icon"><!-- Error icon --></svg>
  <div class="hoo-dlg-content">An error occurred during the operation.</div>
  <div class="hoo-dlg-actions">
    <button autofocus>Close</button>
  </div>
</dialog>
```

## SCSS

## SCSS Files

**Dialog Styles:**
- `lib/sass/03-organism/dialog/`

## Accessibility

- Color is not the only means of conveying status (icons are included)
- Sufficient color contrast for readability
- Proper focus management for interactive elements
- ARIA attributes for screen reader compatibility
- Clear and concise messaging