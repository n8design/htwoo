---
title: "Loading Components"
description: "Loading components in the HTWOO UI library provide visual indicators that content is being loaded or an operation is in progress. These components help improve user experience by providing feedback du"
type: "components"
layout: "single"
patternId: "atoms-loading-loading"
category: "atoms"
subcategory: "loading"
seoTitle: "Atoms - Loading Loading"
seoDescription: "Loading Loading Atoms"
weight: 10
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-progress&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;20&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
      &lt;div class=&quot;hoo-progress-indicator&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;
---

# Loading Components

Loading components in the HTWOO UI library provide visual indicators that content is being loaded or an operation is in progress. These components help improve user experience by providing feedback during wait times.

## Loading Types

* **Progress Bar** - Linear indicator showing progress or indeterminate loading state
* **Spinner** - Circular loading animation for general loading states
* **Shimmer** - Content placeholder animations for loading specific UI elements

## SCSS Imports

**Main Component**

**SCSS Partial Location**

## Usage

Loading indicators should be used when:
* Content or data is being fetched from a server
* A process is running that takes time to complete
* The system needs to provide visual feedback during wait states
* The UI needs to indicate that it's not frozen during long operations

### Component Selection Guide

* **Progress Bar**: Use for operations with a known duration or progress percentage
* **Spinner**: Use for indeterminate wait times when you don't know how long the process will take
* **Shimmer**: Use as content placeholders to show layout before content loads (skeleton screens)

## Best Practices

* Use appropriate loading component based on context and available space
* Provide text alternatives for screen readers
* Consider using timeouts to show loading indicators only for longer operations (>300ms)
* For known-duration operations, prefer progress bars with accurate progress indicators
* For unknown-duration operations, use indeterminate indicators like spinners
* Shimmer components should match the layout of the content they're replacing

## CSS Classes

* `.hoo-progress` - Base class for progress bar container
* `.hoo-progress-indicator` - The animated progress indicator element
* `.hoo-spinner` - Base spinner class with various size modifiers (xsmall, small, large)
* `.hoo-ph-squared` - Shimmer placeholder for squared/rectangular content
* `.hoo-ph-circle` - Shimmer placeholder for circular content
* `.hoo-ph-row` - Shimmer placeholder for text row content

### Theming Classes
* `.hoo-ph-primary` - Primary theme coloring for shimmer
* `.hoo-ph-neutral` - Neutral theme coloring for shimmer
* `.hoo-ph-fancy` - Fancy gradient theme for shimmer

## Accessibility

When implementing loading indicators, follow these accessibility guidelines:

* Use appropriate ARIA attributes:
  * `role="progressbar"` for progress bars
  * `role="status"` for spinners
  * `aria-busy="true"` for regions that are loading
* Include text that explains what's loading or processing (e.g., "Loading content...")
* Ensure loading indicators have sufficient color contrast
* Consider adding approximate time estimates for longer operations when possible
* Use `aria-live` regions to announce when loading is complete
* For spinners, include `aria-label="Loading"` or similar descriptive text