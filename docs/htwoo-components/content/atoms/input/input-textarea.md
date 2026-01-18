---
title: "Textarea Input"
description: "A multi-line text input field for longer text entries."
type: "components"
layout: "single"
patternId: "atoms-input-input-textarea"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Textarea"
seoDescription: "Input Input Textarea Atoms"
weight: 13
hasVariants: false
markup: |
  &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;toggle-33&quot;   &gt;
  &lt;/textarea&gt;
---

# Textarea Input

A multi-line text input field for longer text entries.

## Overview

The textarea input provides a resizable, multi-line field for users to enter larger amounts of text, such as comments, descriptions, or other content that wouldn't fit in a standard text input.

## Usage

Textarea inputs should be used when:
* The expected input is longer than a single line
* Users need to enter paragraphs or formatted text
* The content needs to be visible all at once (not truncated)
* The amount of text can vary significantly

## Attributes

* `rows` - Specifies the visible number of lines
* `cols` - Specifies the visible width
* `maxlength` - Limits the maximum number of characters
* `placeholder` - Provides hint text when the field is empty
* `readonly` - Makes the textarea non-editable but still selectable
* `disabled` - Makes the textarea completely non-interactive

## States

* **Default** - Normal state
* **Focus** - When the textarea has keyboard focus
* **Disabled** - When the textarea cannot be interacted with
* **Readonly** - When the textarea is read-only
* **Invalid** - When the content doesn't meet validation requirements

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-textarea` - Base textarea class
* `.hoo-textarea:disabled` - Style applied to disabled textareas
* `.hoo-textarea:invalid` - Style applied when validation fails
* `.hoo-textarea:focus` - Style applied when the textarea has focus
* `.hoo-textarea[readonly]` - Style applied to readonly textareas

## Accessibility

* Always associate with a `<label>` element using matching `for` and `id` attributes
* Use `aria-describedby` to link the textarea to helper text or validation messages:
  ```html
  <textarea id="comment" aria-describedby="comment-help"></textarea>
  <div id="comment-help">Maximum 500 characters</div>
  ```
* Add `aria-required="true"` for required textareas in addition to the `required` attribute
* When disabled, include both the `disabled` attribute and `aria-disabled="true"`
* Use appropriate contrast for placeholder text (minimum 4.5:1 ratio)
* If implementing a character counter, associate it using `aria-describedby`:
  ```html
  <textarea id="description" aria-describedby="char-count"></textarea>
  <div id="char-count">0/200 characters</div>
  ```
* For validation errors, use `aria-invalid="true"` and link to error messages with `aria-describedby`
* Consider setting an appropriate `aria-label` if the visual label is not sufficient

## Customization

The textarea component can be customized in several ways:

* **Height** - Use the `rows` attribute to control the initial height
* **Width** - Use the `cols` attribute or CSS width property to control the width
* **Resizing behavior** - Control resizing with CSS:
  
* **Maximum length** - Use the `maxlength` attribute to limit input length
* **Placeholder text** - Use the `placeholder` attribute for hint text
* **Spellchecking** - Control spell checking with the `spellcheck` attribute:
  ```html
  <textarea spellcheck="true" class="hoo-textarea"></textarea>
  ```

### Example with Custom Attributes

```html
<textarea 
  class="hoo-textarea" 
  id="custom-textarea" 
  rows="6" 
  maxlength="500" 
  placeholder="Enter your feedback (max 500 characters)"
  spellcheck="true"
  style="resize: vertical; min-height: 100px;">
</textarea>
```