---
title: "Compact Table with Column Groups"
description: "The Compact Table with Column Groups variant combines compact styling with additional options for column alignment and sticky positioning. This variant is ideal for complex data sets that require spec"
type: "components"
layout: "single"
patternId: "atoms-table-table-compact-colgroup"
category: "atoms"
subcategory: "table"
seoTitle: "Atoms - Table Table Compact Colgroup"
seoDescription: "Table Table Compact Colgroup Atoms"
weight: 50
hasVariants: false
markup: |
  
---

## Overview
The Compact Table with Column Groups variant combines compact styling with additional options for column alignment and sticky positioning. This variant is ideal for complex data sets that require specific column alignment and enhanced navigation.

## Features

- Compact spacing for dense data presentation
- Text alignment options (left, center, right)
- Vertical alignment options (top, middle, bottom)
- Compatible with sticky positioning for enhanced navigation
- Support for responsive behavior

## Alignment Classes

- `.align-left`: Left-aligns text content (default)
- `.align-center`: Centers text content
- `.align-right`: Right-aligns text content (ideal for numerical data)
- `.valign-top`: Aligns content to the top of the cell
- `.valign-middle`: Vertically centers content in the cell
- `.valign-bottom`: Aligns content to the bottom of the cell

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/table

## Accessibility

- Ensure proper alignment doesn't negatively impact readability
- Maintain sufficient spacing even in compact mode
- Use appropriate text alignment for different types of data (e.g., right-align numbers)
- Consider responsive behavior on smaller screens