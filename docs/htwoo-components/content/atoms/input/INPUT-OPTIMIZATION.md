---
title: "INPUT-OPTIMIZATION"
description: ""This document describes the approach used to optimize the input components' data structure in the HTWOO-Core project.""
type: "components"
layout: "single"
patternId: "atoms-input-INPUT-OPTIMIZATION"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Optimization"
seoDescription: "Input Input Optimization Atoms"
weight: 999
markup: |
  
---

# Input Component Data Optimization

This document describes the approach used to optimize the input components' data structure in the HTWOO-Core project.

## Key Optimizations

1. **Centralized Option Categories**
   - Created reusable option categories for select components in the global `htwoo-input.json` file
   - Removed duplicate option entries across the codebase
   - Organized options by logical categories (fruits, vegetables, etc.)

2. **Data Reference System**
   - Added a `reference.js` helper to support referencing option sets from central data store
   - Implemented `{{reference}}` notation in JSON data for dynamic data inclusion
   - Created `optionCategory` helper to easily access categorized option data

3. **Select Dropdown Improvements**
   - Added support for accessing option categories via `useOptionsFrom` property
   - Implemented `useGroupedOptions` for grouped select elements
   - Added `disableFirst` parameter to easily mark first option as disabled

4. **Input Showcase Optimizations**
   - Improved showcase template for better handling of various input states
   - Enhanced documentation of the data structure

## Usage Examples

### Using Option Categories
```json
{
    "button": {
        "iconname": "icon-arrow-down"
    },
    "dropdown": {
        "select-options": {
            "ddToggleClass": "hidden-all",
            "useOptionsFrom": "fruit-icons",
            "disableFirst": true
        }
    }
}
```

### Using Grouped Options
```json
{
    "button": {
        "iconname": "icon-arrow-down"
    },
    "dropdown": {
        "select-options": {
            "ddToggleClass": "hidden-all",
            "useGroupedOptions": true
        }
    }
}
```

## Reference Helper

The `reference.js` helper allows for referencing data from other parts of the global data context, preventing duplication and improving maintainability. It provides:

- Path-based references to other data elements
- Concatenation of multiple data sources
- Easy-to-use Handlebars integration

## Best Practices

1. Always refer to global data for shared options instead of duplicating them
2. Use the `optionCategory` helper for rendering select options
3. Extend states using the `inputWithState` and `inputShowcase` helpers
4. Keep pattern JSON files minimal, overriding only what's necessary

## Maintenance Notes

- When adding new option sets, add them to the `option-categories` section in `htwoo-input.json`
- Run PatternLab builds to validate data integrity after changes
