---
title: Form Elements
order: 1
---

# Form Elements

HTWOO UI provides a comprehensive set of form controls and input elements designed for consistent user interaction, accessibility, and themability across applications.

## Overview

Form elements in HTWOO UI include various input types, selection controls, validation states, and layout options to create intuitive and accessible forms. These elements follow modern web standards while adhering to the visual design language.

## Form Input Types

HTWOO supports the following input types:

- **Text Inputs**: Standard text fields, email, URL, password, phone
- **Number Inputs**: Numeric input with increment/decrement controls
- **Date and Time**: Date pickers, time pickers, datetime-local, month, week
- **Selection Controls**: Checkboxes, radio buttons, toggle switches
- **Multi-line Inputs**: Textarea for longer text content
- **File Inputs**: File upload controls
- **Select Dropdowns**: Single and multiple selection dropdowns
- **Search**: Dedicated search input with clear functionality
- **Color**: Color picker input

## Features

- Consistent styling across all input types
- Proper focus states for keyboard navigation
- Support for disabled, readonly, and required states
- Input validation with error messaging
- Support for prefixes and suffixes
- Clear labeling for improved accessibility
- Responsive design that works across device sizes
- Theme color integration

## Usage Guidelines

- Always use labels with form elements
- Provide clear validation messages for invalid inputs
- Group related form elements using fieldsets
- Use appropriate input types for the data being collected
- Consider form layout for optimal user experience
- Include proper ARIA attributes for accessibility

## Form Layout

Forms can be structured using:

- **Field**: Container for individual form elements with labels
- **Fieldset**: Grouping for related form controls
- **Form Groups**: Organizational containers for form sections
- **Grid Layouts**: Responsive column layouts for forms

## Accessibility

- All form elements are keyboard accessible
- Proper labeling with for/id relationships
- Error states are communicated to screen readers
- Focus states are clearly visible
- ARIA attributes supplement HTML semantics

## SCSS Files

**Form Component Styles:**
- `lib/sass/01-atoms/input/`

This includes all input-related styles including:

- Base input styles
- Select dropdowns
- Checkboxes and radio buttons
- Toggle switches
- File inputs
- Validation styling