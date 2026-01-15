---
title: File Input
order: 17
---

# File Input

An input component that allows users to upload files from their device.

## Overview

File inputs enable users to select and upload files from their device to a web application. The HTWOO file input provides a styled interface for this functionality, improving upon the default browser implementation.

## Usage

File inputs should be used when:
* Users need to upload documents, images, or other files
* File selection from the local device is required
* The application needs to process or store user-provided files

## Attributes

* `accept` - Specifies file types that can be selected (e.g., `.jpg,.png,.pdf`)
* `multiple` - Allows selection of multiple files when present
* `required` - Makes file selection mandatory

## States

* **Default** - Normal state
* **Focus** - When the input has keyboard focus
* **Disabled** - When the input cannot be interacted with
* **File Selected** - When one or more files have been selected

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-file-input` - Container for the file input components
* `.hoo-file-input-field` - The native file input (often visually hidden)
* `.hoo-file-input-label` - The styled button for file selection
* `.hoo-file-input-text` - Text showing the selected filename or status

## Accessibility

* Use descriptive button text for the file selection action
* Ensure keyboard navigation works correctly
* Provide clear feedback when files are selected
* When disabled, include `aria-disabled="true"`
* Consider including file type restrictions in visible text
