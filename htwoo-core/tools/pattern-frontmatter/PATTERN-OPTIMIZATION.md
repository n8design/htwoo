# Pattern Data Optimization Guide

This document outlines the optimization approach for pattern data in the HTWOO-Core project.

## Table of Contents

1. [Introduction](#introduction)
2. [Avatar & Presence Patterns](#avatar--presence-patterns)
3. [Card & Grid Patterns](#card--grid-patterns)
4. [Input Patterns](#input-patterns)
5. [Best Practices](#best-practices)

## Introduction

The HTWOO-Core pattern library has been optimized to reduce duplication and improve maintainability by:

- Centralizing common data in global data files
- Creating reusable data categories
- Adding helper functions for dynamic data generation
- Implementing reference-based data structures

## Avatar & Presence Patterns

### Global Avatar Data Structure

The avatar data is now centralized in `htwoo-avatar.json` with these key improvements:

- **Mugshot Patterns**: All avatar images are organized by type (astronaut, dog, female, male)
- **Avatar Sizes**: Standard sizes are defined once in the global data
- **Presence States**: All presence states are defined centrally

### Avatar Helpers

New helpers have been added in `helpers/hbs/avatar.js`:

- `avatarWithSize`: Creates an avatar with a specific size
- `avatarWithImage`: Creates an avatar with a specific image type and index
- `generateFacepile`: Dynamically generates a facepile from global data
- `generateAvatarShowcase`: Creates a showcase of all available avatar sizes
- `avatarWithPresence`: Adds presence state to an avatar

### Usage Examples

**Basic avatar:**
```json
{
    "type": "female",
    "index": 2,
    "size": 64
}
```

**Facepile:**
```json
{
    "size": 24,
    "count": 12
}
```

## Card & Grid Patterns

### Global Card Data Structure

Card data is centralized in `htwoo-card.json` with:

- **Card Images**: Organized by type (default, splash)
- **Card Templates**: Reusable card templates by type
- **Splash Card Variants**: Predefined variations for splash cards

### Card Helpers

New helpers in `helpers/hbs/card.js`:

- `cardFromTemplate`: Creates a card from a template with optional overrides
- `cardImage`: Gets a card image by type and index
- `splashCardWithImage`: Creates a splash card with a specific image and overrides
- `generateCardGrid`: Dynamically generates a grid of cards

### Usage Examples

**Card grid:**
```json
{
    "template": "default",
    "count": 9
}
```

**Single card with template:**
```handlebars
{{#cardFromTemplate "article" this}}
    {{> organism-document-card card=this}}
{{/cardFromTemplate}}
```

## Input Patterns

### Global Input Data Structure

Input data is centralized in `htwoo-input.json` with:

- **Option Categories**: Reusable sets of options (fruits, vegetables, etc.)
- **Input States**: Predefined states for inputs (readonly, disabled)

### Input Helpers

New helpers in `helpers/hbs/reference.js`:

- `reference`: Supports referencing data from other parts of the global context
- `expandData`: Processes reference strings in data
- `selectOptions`: Dynamic option generation for select elements
- `optionCategory`: Gets options from a specific category

### Usage Examples

**Select with options from category:**
```json
{
    "dropdown": {
        "select-options": {
            "ddToggleClass": "hidden-all",
            "useOptionsFrom": "fruit-icons",
            "disableFirst": true
        }
    }
}
```

## Best Practices

1. **Reference Global Data**: Always use references to global data instead of duplicating
2. **Use Helper Functions**: Leverage helpers for dynamic data generation
3. **Keep Pattern Files Minimal**: Override only what's necessary in pattern JSON files
4. **Categorize Data**: Organize related data into logical categories
5. **Document Data Structures**: Add comments to explain data organization

By following these optimization techniques, the HTWOO-Core pattern library becomes more maintainable, consistent, and easier to extend.
