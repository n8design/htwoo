---
title: "Prefixed & Suffixed Inputs"
description: "HTWOO UI provides input components with prefixes and suffixes for displaying additional context or units with form inputs."
type: "components"
layout: "single"
patternId: "atoms-forms-prefixed-suffixed-inputs"
category: "atoms"
subcategory: "forms"
seoTitle: "Atoms - Forms Prefixed Suffixed Inputs"
seoDescription: "Forms Prefixed Suffixed Inputs Atoms"
weight: 15
hasVariants: false
markup: |
  
---

# Prefixed & Suffixed Inputs

HTWOO UI provides input components with prefixes and suffixes for displaying additional context or units with form inputs.

## Overview

Prefixed and suffixed inputs enhance text fields with additional context, units, or icons that help users understand the expected input format or provide supplementary information. These components maintain the same functionality as standard text inputs while adding visual enhancements.

## Prefixed Input

Input with content (text or icon) displayed before the input field.

```html
<div class="hoo-input-prefixed">
  <span class="hoo-input-prefix">$</span>
  <input class="hoo-input-text" type="text" id="prefixed-input" name="prefixed-input">
</div>
```

## Suffixed Input

Input with content (text or icon) displayed after the input field.

```html
<div class="hoo-input-suffixed">
  <input class="hoo-input-text" type="text" id="suffixed-input" name="suffixed-input">
  <span class="hoo-input-suffix">.com</span>
</div>
```

## Combined Prefix and Suffix

Input with both prefix and suffix elements.

```html
<div class="hoo-input-prefixed hoo-input-suffixed">
  <span class="hoo-input-prefix">$</span>
  <input class="hoo-input-text" type="number" id="combined-input" name="combined-input">
  <span class="hoo-input-suffix">.00</span>
</div>
```

## Common Use Cases

- **Currency**: Prefix with currency symbol ($, €, £)
- **Units**: Suffix with measurement units (kg, cm, %)
- **Domain Names**: Prefix with "www." or suffix with ".com"
- **Authentication**: Prefix with username or domain
- **Input Formatting**: Visual indication of input format
- **Icon Integration**: Adding icons for context (e.g., search, calendar)

## Features

- Visual connection between prefix/suffix and input
- Consistent styling with other form elements
- Support for both text and icon content
- Proper focus states for keyboard navigation
- Support for disabled state
- Responsive design that adapts to content

## SCSS

**Component Import**

## Accessibility

- Focus remains on the input element for keyboard users
- Color contrast meets accessibility standards
- Prefix/suffix text is not read by screen readers as part of the input value
- Labels remain properly associated with input elements