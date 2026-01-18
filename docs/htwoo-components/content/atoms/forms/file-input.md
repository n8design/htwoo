---
title: "File Input"
description: "HTWOO UI provides a file input component for uploading files in forms."
type: "components"
layout: "single"
patternId: "atoms-forms-file-input"
category: "atoms"
subcategory: "forms"
seoTitle: "Atoms - Forms File Input"
seoDescription: "Forms File Input Atoms"
weight: 50
hasVariants: false
markup: |
  
---

# File Input

HTWOO UI provides a file input component for uploading files in forms.

## Overview

The file input component allows users to select and upload files from their device. It supports both single and multiple file selection and can be configured to accept specific file types.

## Basic File Input

Standard file input for selecting a single file.

```html
<div class="hoo-file-upload">
  <label for="file-input">Choose a file</label>
  <input type="file" id="file-input" name="file-input">
</div>
```

## Multiple File Input

File input configured to accept multiple files.

```html
<div class="hoo-file-upload">
  <label for="multi-file-input">Choose files</label>
  <input type="file" id="multi-file-input" name="multi-file-input" multiple>
</div>
```

## File Type Restriction

File input limited to specific file types.

```html
<div class="hoo-file-upload">
  <label for="image-file-input">Select an image</label>
  <input type="file" id="image-file-input" name="image-file-input" accept="image/*">
</div>
```

## Features

- Consistent styling with other form elements
- Support for single or multiple file selection
- File type filtering via accept attribute
- Custom upload button styling
- File name display after selection
- Support for disabled state
- Proper focus states for keyboard navigation

## JavaScript Integration

Enhanced file input functionality with drag-and-drop support:

### FileUploadHandler Class

### Key JavaScript Features

- **Drag and Drop**: Visual feedback and file drop handling
- **File List Display**: Shows selected files with names
- **Multiple File Support**: Handles multiple file selection
- **Visual States**: Drag-over styling and selection feedback

### Manual Setup

## SCSS

## Accessibility

- Built on the native file input for compatibility with assistive technologies
- Maintains keyboard accessibility
- Provides clear focus states
- Uses proper label association
- Includes visual feedback for file selection

## Best Practices

- Clearly indicate file size limitations
- Specify accepted file types when applicable
- Consider providing feedback during upload process
- Include clear error messaging for upload failures or invalid file types
- For complex upload needs, consider using a more advanced file upload component with progress indicators and preview capabilities