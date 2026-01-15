---
title: Tooltip with Form Element
order: 20
---

## Overview
This example demonstrates a practical implementation of a tooltip associated with a form input. The tooltip appears when the user hovers over or focuses on the password field, providing guidance on password requirements.

## Usage

This pattern is particularly useful for:
- Providing password requirements or validation rules
- Explaining input format requirements
- Offering help text for complex form fields
- Providing contextual guidance without cluttering the form

## Accessibility

This implementation follows accessibility best practices by:
- Using `aria-describedby` to associate the tooltip with its input
- Making the tooltip visible on both hover AND focus states
- Using proper positioning to ensure the tooltip doesn't obscure other form elements
- Using the `role="tooltip"` attribute
