---
title: Search Input
order: 55
---

# Search Input

HTWOO UI provides a specialized search input component for search functionality in forms and interfaces.

## Overview

The search input component is designed specifically for search functionality, featuring a distinct visual appearance with search icon and clear button. It enhances the user experience by making search fields immediately recognizable and easier to use.

## Basic Search Input

```html
<div class="hoo-search">
  <input type="search" id="search-input" class="hoo-search-input" placeholder="Search">
  <button type="button" class="hoo-search-clear" aria-label="Clear search">×</button>
  <button type="submit" class="hoo-search-submit" aria-label="Search">
    <i class="icon-search"></i>
  </button>
</div>
```

## Features

- Distinctive search styling with icon
- Clear button to quickly erase input
- Search action button
- Support for form submission
- Responsive design that adapts to container width
- Proper focus states for keyboard navigation
- Support for disabled state

## SCSS

**Component Import**

## Usage

The search input can be used:

- As a standalone search field
- Within a larger form
- In navigation headers
- In filter interfaces
- As part of search-oriented UIs

## States

- **Default**: Empty search field
- **Active**: With text entered
- **Focus**: When the search has keyboard focus
- **Disabled**: When the search is non-interactive

## Accessibility

- Search icon provides visual cue for function
- Clear button has appropriate aria-label
- Search button has appropriate aria-label
- Maintains proper keyboard focus states
- Supports standard keyboard submission (Enter key)
- Color contrast meets accessibility standards
