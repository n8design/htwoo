---
title: "File Input"
description: "An input component that allows users to upload files from their device."
type: "components"
layout: "single"
patternId: "atoms-input-input-file"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input File"
seoDescription: "Input Input File Atoms"
weight: 17
markup: |
  &lt;section class=&quot;hoo-input-file&quot;&gt;
      &lt;label class=&quot;hoo-infile-label&quot; name=&quot;file-upload&quot; tabIndex=&quot;-1&quot; for=&quot;file-upload-82&quot; draggable=&quot;true&quot;&gt;
          &lt;div class=&quot;hoo-infile-icon&quot;&gt;
              &lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-arrow-upload-filled&quot; aria-hidden=&quot;true&quot;&gt;
                      &lt;title&gt;Upload&lt;/title&gt;
                      &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-upload-filled&quot;&gt;&lt;/use&gt;
                  &lt;/svg&gt;
              &lt;/span&gt;        &lt;/div&gt;
          &lt;div&gt;
              Click or drag and drop files here to upload filed
              &lt;p class=&quot;hoo-infile-description&quot;&gt;Max file size: 10MB, Types: jpg, png, pdf
              &lt;/p&gt;
          &lt;/div&gt;
      &lt;/label&gt;
      &lt;input type=&quot;file&quot; id=&quot;file-upload-82&quot; name=&quot;&quot; class=&quot;hoo-infile-context&quot; multiple aria-describedby=&quot;file-upload-82-content&quot; /&gt;
      &lt;output class=&quot;hoo-infile-output&quot; id=&quot;NaN-content&quot; aria-live=&quot;polite&quot; title=&quot;Current selection&quot;&gt;&lt;/output&gt;
  &lt;/section&gt;
  
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