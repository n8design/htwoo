---
title: Progress Step Bar
---

## Overview
The Progress Step Bar component combines a standard progress bar with step indicators, creating a visual representation of progress through a multi-step process. This component is ideal for wizards, onboarding flows, and any multi-stage user journey.

## Usage
Use the Progress Step Bar when you need to provide users with a clear visual representation of their progress through a multi-step process, where each step is distinctly labeled.

Example:
```html
<div class="hoo-progress-stepbar">
    <progress class="hoo-progress-bar" value="50" max="100">
        50%
    </progress>
    <div class="hoo-progress-step" style="--step-offset: 0%;">
        <div class="inner">
            <div class="hoo-progress-step-indicator"></div>
            <div class="hoo-progress-step-label">Start</div>
        </div>
    </div>
    <div class="hoo-progress-step" style="--step-offset: 50%;">
        <div class="inner">
            <div class="hoo-progress-step-indicator"></div>
            <div class="hoo-progress-step-label">In Progress</div>
        </div>
    </div>
    <div class="hoo-progress-step" style="--step-offset: 100%;">
        <div class="inner">
            <div class="hoo-progress-step-indicator"></div>
            <div class="hoo-progress-step-label">Complete</div>
        </div>
    </div>
</div>
```

## CSS Classes

- `.hoo-progress-stepbar`: The main container that holds the progress bar and step indicators
- `.hoo-progress-bar`: The actual progress bar element
- `.hoo-progress-step`: Individual step indicators (see Progress Step component)

## Customization

The Progress Step Bar can be customized by:
- Setting the `value` and `max` attributes of the progress bar
- Positioning steps using the `--step-offset` CSS variable
- Adjusting the height of step indicators using the `--indicator-offset` CSS variable

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/atoms/output/progress-bar

## Accessibility

- The progress bar should use the native `<progress>` element for proper screen reader support
- Each step should have a descriptive label
- Ensure sufficient color contrast between the progress bar, steps, and background
- The current step should be clearly indicated both visually and to screen readers
