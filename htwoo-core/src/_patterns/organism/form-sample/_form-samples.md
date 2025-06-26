---
title: Form Samples
order: 1
---

# Form Samples

HTWOO UI provides complete form examples and multi-step form flows to demonstrate best practices for form implementation and organization.

## Overview

Form samples in HTWOO UI showcase how individual form components can be combined into complete, functional forms. These examples demonstrate proper form organization, validation, and user flow patterns for common scenarios.

## Multi-Step Form Flow

HTWOO includes a multi-step form flow pattern that breaks complex forms into manageable sections across multiple screens:

### Step 1: Initial Information

The first step in a multi-step form typically collects basic information to start a process.

```html
<section class="facility-form">
  <!-- Step 1 form content -->
  <fieldset class="hoo-fieldset">
    <legend>Basic Information</legend>
    <!-- Form fields for step 1 -->
  </fieldset>
  
  <div class="form-navigation">
    <!-- Next step button -->
    <button type="button" class="hoo-button-primary">Next</button>
  </div>
</section>
```

### Step 2: Additional Details

The second step collects more specific information building on the initial data.

```html
<section class="facility-form">
  <!-- Step 2 form content -->
  <fieldset class="hoo-fieldset">
    <legend>Additional Details</legend>
    <!-- Form fields for step 2 -->
  </fieldset>
  
  <div class="form-navigation">
    <!-- Navigation buttons -->
    <button type="button" class="hoo-button-standard">Back</button>
    <button type="button" class="hoo-button-primary">Next</button>
  </div>
</section>
```

### Step 3: Confirmation

The final step typically includes a review and confirmation of all entered information.

```html
<section class="facility-form">
  <!-- Step 3 form content -->
  <fieldset class="hoo-fieldset">
    <legend>Review Information</legend>
    <!-- Summary of entered data -->
  </fieldset>
  
  <div class="form-navigation">
    <!-- Navigation buttons -->
    <button type="button" class="hoo-button-standard">Back</button>
    <button type="submit" class="hoo-button-primary">Submit</button>
  </div>
</section>
```

## Form Overview Pattern

The form overview pattern displays all form sections on a single page, either in editable or display-only mode.

### Edit Mode

```html
<section class="facility-form-overview">
  <!-- All form sections displayed at once -->
  <fieldset class="hoo-fieldset">
    <legend>Basic Information</legend>
    <!-- Form fields for basic info -->
  </fieldset>
  
  <fieldset class="hoo-fieldset">
    <legend>Additional Details</legend>
    <!-- Form fields for additional details -->
  </fieldset>
  
  <fieldset class="hoo-fieldset">
    <legend>Final Information</legend>
    <!-- Form fields for final details -->
  </fieldset>
  
  <div class="form-actions">
    <button type="button" class="hoo-button-standard">Cancel</button>
    <button type="submit" class="hoo-button-primary">Save</button>
  </div>
</section>
```

### Display Mode

```html
<section class="facility-form-overview display-only">
  <!-- All form sections displayed in read-only mode -->
  <!-- Similar structure to edit mode but with read-only fields -->
</section>
```

## Form Organization Best Practices

HTWOO form samples demonstrate these best practices:

- **Logical Grouping**: Related fields are grouped in fieldsets with descriptive legends
- **Progressive Disclosure**: Complex forms are broken into steps to reduce cognitive load
- **Clear Navigation**: Consistent navigation controls for moving between form sections
- **Validation Feedback**: Immediate feedback on input errors
- **Responsive Layout**: Forms adapt to different screen sizes
- **Action Buttons**: Consistently positioned and styled action buttons
- **Visual Hierarchy**: Important fields and sections are visually emphasized

## Accessibility

- Semantic HTML structure with proper form elements
- Logical tab order for keyboard navigation
- Clear error messages and validation
- Step indicators for multi-step forms
- Proper label associations for all inputs
- Fieldsets and legends for organizing related fields
