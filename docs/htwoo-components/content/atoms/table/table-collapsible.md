---
title: "Collapsible Table"
description: "The Collapsible Table variant provides an interactive table with expandable and collapsible sections, allowing users to show or hide groups of related rows. This is particularly useful for organizing "
type: "components"
layout: "single"
patternId: "atoms-table-table-collapsible"
category: "atoms"
subcategory: "table"
seoTitle: "Atoms - Table Table Collapsible"
seoDescription: "Table Table Collapsible Atoms"
weight: 40
hasVariants: false
markup: |
  
---

## Overview
The Collapsible Table variant provides an interactive table with expandable and collapsible sections, allowing users to show or hide groups of related rows. This is particularly useful for organizing complex datasets into logical sections.

## Features

- Interactive section headers that can be expanded and collapsed
- Visual indicators showing the current state (expanded/collapsed)
- Support for nested sections
- Smooth icon rotation animations for state transitions
- Compatible with both standard and compact table styles

## Data Attributes

- `data-sectionHeader`: Identifies a row as a section header (collapsible trigger)
- `data-section`: Associates content rows with their section header

## JavaScript Integration

The collapsible table functionality requires JavaScript for interactive behavior:

### Required JavaScript

### Key JavaScript Features

- **Section Collapse/Expand**: Click handlers for section headers
- **ARIA State Management**: Automatic `aria-expanded` and `aria-hidden` attributes
- **Nested Section Support**: Handles multiple levels of collapsible sections
- **Keyboard Accessibility**: Maintains focus management for keyboard users

### Manual Initialization

## Accessibility

The collapsible table implementation follows these accessibility guidelines:

* Use `aria-expanded` attributes to indicate the current state
* Ensure keyboard navigation works for expanding/collapsing sections
* Provide clear visual indicators of expandable sections
* Follow proper table structure with appropriate ARIA roles

### Reference Documentation

* [W3C WAI Tables](https://www.w3.org/WAI/tutorials/tables/)
* [W3C WAI Multi-Level Tables](https://www.w3.org/WAI/tutorials/tables/multi-level/)

### SCSS Imports