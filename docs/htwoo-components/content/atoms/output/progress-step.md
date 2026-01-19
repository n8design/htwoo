---
title: "Progress Step"
description: "Progress Step is an individual step indicator within a stepbar interface. It displays a vertical line connecting to a labeled indicator that marks specific points of progress in a multi-step process."
type: "components"
layout: "single"
patternId: "atoms-output-progress-step"
category: "atoms"
subcategory: "output"
seoTitle: "Atoms - Output Progress Step"
seoDescription: "Output Progress Step Atoms"
weight: 999
hasVariants: false
markup: |
  
---

## Overview
Progress Step is an individual step indicator within a stepbar interface. It displays a vertical line connecting to a labeled indicator that marks specific points of progress in a multi-step process.

## Usage
Progress Steps are typically used within a Progress Stepbar component to indicate various stages of a multi-step process. Each step shows a label and is positioned along a progress bar based on its relative position in the sequence.

Example:
```html
<div class="hoo-progress-stepbar">
  <progress class="hoo-progress-bar" value="50" max="100">50%</progress>
  <div class="hoo-progress-step" style="--step-offset: 25%;">
    <div class="inner">
      <div class="hoo-progress-step-indicator"></div>
      <div class="hoo-progress-step-label">Step 1</div>
    </div>
  </div>
  <div class="hoo-progress-step" style="--step-offset: 50%;">
    <div class="inner">
      <div class="hoo-progress-step-indicator"></div>
      <div class="hoo-progress-step-label">Step 2</div>
    </div>
  </div>
  <div class="hoo-progress-step" style="--step-offset: 75%;">
    <div class="inner">
      <div class="hoo-progress-step-indicator"></div>
      <div class="hoo-progress-step-label">Step 3</div>
    </div>
  </div>
</div>
```

## Customization

The Progress Step component can be customized using the following CSS variables:

- `--indicator-offset`: Controls the height of the vertical indicator line
- `--step-offset`: Controls the horizontal positioning of the step as a percentage of the progress bar width

## CSS Classes

- `.hoo-progress-step`: The main container for the step
- `.hoo-progress-step-indicator`: The vertical line connecting to the progress bar
- `.hoo-progress-step-label`: The label for the step

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/atoms/output/progress-bar

## Accessibility

- Progress steps should have clear, descriptive labels
- The overall progress should be communicated through both visual means and to screen readers
- The relationship between steps should be visually clear