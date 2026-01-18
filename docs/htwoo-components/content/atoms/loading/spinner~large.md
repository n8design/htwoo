---
title: "Large Spinner"
description: "A larger variant of the circular loading indicator for high-visibility loading states."
type: "components"
layout: "single"
patternId: "atoms-loading-spinner-large"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Spinner Large"
seoDescription: "Loading Spinner Large Atoms"
weight: 31
markup: |
  &lt;div class=&quot;hoo-spinner large&quot;&gt;&lt;/div&gt;
---

# Large Spinner

A larger variant of the circular loading indicator for high-visibility loading states.

## Overview

The large spinner is an enlarged version of the standard spinner component, designed for scenarios where loading states need more prominence or visibility on the page.

## Usage

Large spinners should be used when:
* The loading operation is the primary focus of the viewport
* More visibility is needed for the loading state
* Loading affects a large portion of the UI
* The spinner needs to be seen from a distance or at a glance

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-spinner` - Base spinner class
* `.large` - Modifier class for the large size variant

## Dimensions

The large spinner has a width and height of 1.75rem (28px), making it approximately 40% larger than the standard spinner.

## Accessibility

* Include `role="status"` to indicate a status message to screen readers
* Add a descriptive `aria-label` to explain what is loading
* Consider using `aria-live="polite"` for dynamic updates
* For spinners that block interaction, use `aria-busy="true"` on the container