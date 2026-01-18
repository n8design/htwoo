---
title: "Invalid Text Input"
description: "A text input that indicates validation errors or invalid input."
type: "components"
layout: "single"
patternId: "atoms-input-input-text-invalid"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Text Invalid"
seoDescription: "Input Input Text Invalid Atoms"
weight: 10.6
hasVariants: false
markup: |
  &lt;p&gt;Invalid style can be assigned using a CSS class:&lt;/p&gt;
  &lt;input class=&quot;hoo-input-text is-invalid&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot;&gt;
  &lt;p&gt;Or just with default pseudo selector `:invalid`&lt;/p&gt;
  &lt;input class=&quot;hoo-input-text&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;&quot; required&gt;
  &lt;p&gt;The empty field is required there for at its current state invalid&lt;br&gt;To avoid showing up as invalid add the &#39;.is-empty&#39; class to the styles&lt;/p&gt;
  &lt;input class=&quot;hoo-input-text is-empty&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;&quot; required&gt;
  &lt;p&gt;Invalid fields can be also defined by using patter&lt;/p&gt;
  &lt;input class=&quot;hoo-input-text&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;ABC&quot; pattern=&quot;[a-z]{4,8}&quot;&gt;
  &lt;p&gt;The previous input only allows lowercase characters and a length of 4-8 characters&lt;/p&gt;
---

# Invalid Text Input

A text input that indicates validation errors or invalid input.

## Overview

Invalid text inputs visually indicate that the entered value does not meet the required criteria or validation rules. This state provides immediate feedback to users about input problems.

## Usage

Invalid text inputs should be used when:
* The entered value does not meet validation requirements
* Form submission has been attempted with errors
* Real-time validation feedback is appropriate

## Visual Characteristics

Invalid inputs are visually distinct from valid inputs:
* Red border or highlight (ensuring sufficient color contrast)
* Often accompanied by an error message or icon
* May include additional validation message text

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-input-text` - Base text input class
* `.hoo-input--invalid` - Class for invalid state styling
* `.hoo-validation-message` - Class for the error message

## Accessibility

* Always include `aria-invalid="true"` for invalid inputs
* Connect error messages using `aria-describedby`
* Ensure error messages are clear and actionable
* Don't rely on color alone to indicate errors
* Consider when to trigger validation (on blur, on submit, etc.)