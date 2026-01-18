---
title: Default Table
order: 10
---

## Overview
The Default Table provides a standard tabular layout for displaying data with consistent styling, spacing, and hover states. It serves as the base for all other table variants in the HTWOO design system.

## Features

- Standard cell padding optimized for readability
- Hover states for rows and cells
- Border styling for visual separation
- Full-width layout with automatic overflow handling
- Header and footer styling for visual hierarchy

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/table

## Accessibility

- Use proper table markup with semantic `<thead>`, `<tbody>`, and `<tfoot>` elements
- Include appropriate `scope` attributes on header cells (`<th>`)
- Maintain sufficient color contrast for text and borders
- Avoid merging cells unnecessarily, which can complicate screen reader navigation
