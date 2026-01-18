---
title: Input Components
order: 5
---

# Inputs

Inputs in the HTWOO UI library provide a comprehensive set of form controls that allow users to enter data, make selections, and interact with your application. The library includes various types of inputs designed for different use cases and data types.

## Input Types

* **Text Inputs** - Standard text fields and their variants (email, password, URL, etc.)
* **Numeric Inputs** - For numerical data entry
* **Selection Controls** - Checkboxes, radio buttons, toggles, and drop-downs
* **Date & Time Inputs** - Date pickers, time pickers, and their variants
* **File Inputs** - For file uploads
* **Search Inputs** - Specialized text inputs for search functionality
* **Textarea** - For multi-line text entry

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/input

**SCSS Partial Location**\
`/src/styles/01-atoms/input/_index.scss`

## Usage

Input components are typically used within forms and should be accompanied by appropriate labels and validation. HTWOO provides styling for various states including default, focus, hover, disabled, readonly, and invalid.

## States

HTWOO inputs support the following states:
* **Default** - The normal state of an input
* **Focus** - When the input has focus
* **Hover** - When the mouse is over the input
* **Disabled** - When the input is disabled
* **Readonly** - When the input is read-only
* **Invalid** - When the input contains invalid data

## Labels and Description

For accessibility and usability, inputs should be paired with:
* **Labels** - Clear text labels that describe the input's purpose
* **Description** - Additional text that provides context or instructions
* **Validation Messages** - Text that appears when validation fails

## Accessibility

When implementing inputs, follow these accessibility guidelines:

* Always associate inputs with labels using the `for` attribute or by nesting inputs within label tags
* Use `aria-describedby` to connect inputs with their description or error messages
* Ensure proper focus indication for keyboard navigation
* Group related inputs with fieldset and legend
* Use appropriate ARIA attributes for custom inputs
* Ensure color is not the only indicator of state or validation
* Provide clear error messages for invalid inputs

## Form Layout

HTWOO inputs are designed to work within various form layouts, including:
* Stacked (vertical) layouts
* Horizontal layouts
* Grid-based layouts
* Responsive layouts that adapt to different screen sizes

## Input Components

Each input component is documented separately with specific usage examples and implementation details:

* Text Input and variants (email, password, URL, etc.)
* Checkbox
* Radio Button
* Toggle Switch
* Select/Dropdown
* Date/Time Pickers
* File Upload
* Search Box
* Textarea
