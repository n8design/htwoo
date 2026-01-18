---
title: "Success Label"
description: "Success messages provide positive feedback to users when their input passes validation or when a form has been successfully submitted. This component uses a distinct success color to indicate that no "
type: "components"
layout: "single"
patternId: "atoms-validation-success"
category: "atoms"
subcategory: "validation"
seoTitle: "Atoms - Validation Success"
seoDescription: "Validation Success Atoms"
weight: 999
hasVariants: false
markup: |
  &lt;span class=&quot;hoo-success&quot; id=&quot;&quot;&gt;Valid options added&lt;/span&gt;
---

## Overview
Success messages provide positive feedback to users when their input passes validation or when a form has been successfully submitted. This component uses a distinct success color to indicate that no further action is needed.

## Usage
Success messages should be appropriately associated with their corresponding form elements or contexts. The `errorRelationID` can be used to link the message to a specific form element.

Example:
```html
<div>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" aria-describedby="email-success" class="hoo-input">
  <span class="hoo-success" id="email-success">Email is valid</span>
</div>
```

## CSS Classes

- `.hoo-success`: The main class for success message styling

## SCSS Variables and Properties

- Color: Uses the `$successText` color variable
- Font size: 12px (converted to rem)

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/form

## Accessibility

- Success messages should be associated with form controls using `aria-describedby` where appropriate
- Messages should be clear, concise, and provide confirmation of success
- The success message should be visible both visually and to screen readers