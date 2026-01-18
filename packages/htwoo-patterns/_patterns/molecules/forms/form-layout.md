---
title: Form Layout Components
order: 70
---

# Form Layout Components

HTWOO UI provides layout components for organizing form elements into logical structures.

## Overview

Form layout components help organize form elements into cohesive groups and sections. These components improve the user experience by creating visual hierarchy, grouping related fields, and providing a consistent structure for form interaction.

## Field Component

The field component is a container for individual form elements and their associated labels and messaging.

```html
<div class="hoo-field">
  <label for="username">Username</label>
  <input class="hoo-input-text" type="text" id="username" name="username">
  <div class="hoo-input-description">Choose a username between 3-15 characters.</div>
</div>
```

The field component helps maintain consistent spacing and alignment between form elements, ensuring visual consistency and improved readability.

## Fieldset Component

The fieldset component groups related form controls together with an optional legend.

### Basic Fieldset

```html
<fieldset class="hoo-fieldset">
  <legend>Contact Information</legend>
  
  <div class="hoo-field">
    <label for="fullname">Full Name</label>
    <input class="hoo-input-text" type="text" id="fullname" name="fullname">
  </div>
  
  <div class="hoo-field">
    <label for="email">Email Address</label>
    <input class="hoo-input-text" type="email" id="email" name="email">
  </div>
</fieldset>
```

### Fieldset Variants

#### No Outline

Fieldset without a visible border, useful for visual grouping without additional styling.

```html
<fieldset class="hoo-fieldset no-outline">
  <legend>Preferences</legend>
  <!-- Fields here -->
</fieldset>
```

#### Raised

Fieldset with elevation styling for emphasis.

```html
<fieldset class="hoo-fieldset raised">
  <legend>Account Details</legend>
  <!-- Fields here -->
</fieldset>
```

#### No Legend

Fieldset without a visible legend, useful for implicit grouping.

```html
<fieldset class="hoo-fieldset">
  <!-- Fields here -->
</fieldset>
```

## Control Groups

Components for grouping related selection controls (checkboxes/radio buttons).

### Checkbox Group

```html
<div class="hoo-checkbox-group">
  <legend>Select preferred options</legend>
  <!-- Individual checkboxes here -->
</div>
```

### Radio Button Group

```html
<div class="hoo-radiobutton-group">
  <legend>Choose one option</legend>
  <!-- Individual radio buttons here -->
</div>
```

## Layout Variants

Both checkbox and radio button groups support different layout options:

### Vertical (Default)

Stacked controls one per line.

### Horizontal

Controls arranged in a single row.

```html
<div class="hoo-checkbox-group horizontal">
  <!-- Checkboxes arranged horizontally -->
</div>
```

### Column Grid

Controls arranged in multiple columns.

```html
<div class="hoo-radiobutton-group cols-2">
  <!-- Radio buttons arranged in 2 columns -->
</div>
```

## Features

- Consistent spacing and alignment between form elements
- Logical grouping of related controls
- Proper semantic structure with HTML5 elements
- Flexible layout options for different form designs
- Visual separation of form sections

## Accessibility

- Uses semantic HTML5 elements like `<fieldset>` and `<legend>`
- Groups related controls for improved screen reader navigation
- Maintains proper label associations for all inputs
- Preserves tab sequence for logical keyboard navigation
