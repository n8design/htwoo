---
title: "Progress Bar"
description: "A linear indicator that shows the progress or loading state of an operation."
type: "components"
layout: "single"
patternId: "atoms-loading-progress-bar"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Progress Bar"
seoDescription: "Loading Progress Bar Atoms"
weight: 20
hasVariants: false
markup: |
  
---

# Progress Bar

A linear indicator that shows the progress or loading state of an operation.

## Overview

The progress bar is a horizontal visual indicator that shows the percentage completion of an operation. It can be used both for determinate progress (when the completion percentage is known) and indeterminate loading states (when the duration is unknown).

## Usage

Progress bars should be used when:
* An operation's completion percentage can be determined
* Users need to understand how much of a process is complete
* Showing step-by-step progress through multi-stage operations
* Indicating loading status for longer operations

## States

* **Determinate** - When progress percentage is known (set width percentage on indicator element)
* **Indeterminate** - When progress percentage is unknown (uses animation)

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-progress` - Base container class
* `.hoo-progress-indicator` - The animated progress bar element

## Animation

The progress indicator uses a horizontal animation that moves from left to right. For indeterminate progress, the animation runs continuously. For determinate progress, you should set a specific width percentage on the `.hoo-progress-indicator` element.

## Accessibility

* Include `role="progressbar"` to indicate the component's purpose
* Use `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes for determinate progress
* Add descriptive text near the progress bar to explain what's happening
* Consider using `aria-label` or `aria-labelledby` for additional context
* For determinate progress, update `aria-valuenow` as the progress changes