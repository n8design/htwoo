---
title: Table Components
order: 1
---

# Table Components

Table components in HTWOO provide structured data display with various styling and functionality options. These components help organize and present tabular data in an accessible and visually consistent manner.

## Table Types

* **Default Table** - Standard table with consistent styling and spacing
* **Compact Table** - A more condensed table with reduced cell padding
* **Sticky Table** - Table with sticky headers, footers, and/or columns that remain visible during scrolling
* **Collapsible Table** - Interactive table with expandable and collapsible sections
* **Compact Table with Column Groups** - Combines compact styling with column alignment options

## Common Features

- Semantic HTML structure with `<thead>`, `<tbody>`, and `<tfoot>` elements
- Consistent cell padding and spacing
- Row and cell hover states
- Text alignment options (left, center, right)
- Vertical alignment options (top, middle, bottom)
- Support for responsive behavior

## SCSS Imports

**Main Component**

**SCSS Partial Location**

## CSS Classes

### Base Classes
* `.hoo-table` - Base class for all table styles
* `.hoo-table-iconcell` - Special cell styling for icon containers
* `.hoo-table-subheader` - Styling for subheaders in collapsible tables

### Modifier Classes
* `.compact` - Applies compact styling with reduced cell padding
* `.is-collapsible` - Enables collapsible functionality
* `.is-sticky` - Base class for sticky positioning

### Position Modifiers
* `.top` - Sticky positioning at the top
* `.bottom` - Sticky positioning at the bottom
* `.left` - Sticky positioning at the left
* `.right` - Sticky positioning at the right

### Alignment Classes
* `.align-left` - Left text alignment
* `.align-center` - Center text alignment
* `.align-right` - Right text alignment
* `.valign-top` - Top vertical alignment
* `.valign-middle` - Middle vertical alignment
* `.valign-bottom` - Bottom vertical alignment

### Visibility Classes
* `.no-phone` - Hides content on small screens
* `.is-hidden` - Hides collapsed content
* `.is-visible` - Shows expanded content

## Usage Guidelines

- Use appropriate table structure with `<thead>`, `<tbody>`, and `<tfoot>` elements
- Include column headers in `<th>` elements with scope attributes
- For large datasets, consider using the sticky variant for better usability
- For complex data that can be logically grouped, use collapsible tables
- Ensure proper alignment of numerical data (typically right-aligned)
- Use compact tables when space is limited

## Accessibility

Tables should follow these accessibility guidelines:

* Use proper table markup with semantic elements
* Include appropriate `scope` attributes on header cells
* For collapsible tables, use `aria-expanded` and related attributes
* Ensure sufficient color contrast
* Provide appropriate table captions or accessible descriptions
* Avoid overly complex tables that may be difficult to navigate with screen readers
