---
title: Accordion Components
order: 1
---

# Accordion Components

Accordions in HTWOO provide collapsible content panels that help manage space in the UI by showing and hiding content. They're implemented using the native HTML `<details>` and `<summary>` elements for better semantics and accessibility.

## Components

The HTWOO accordion system consists of several components:

* **Accordion Item** - The main container for a single collapsible section
* **Accordion Header** - The clickable title bar with an icon that controls the expansion state
* **Accordion Content** - The collapsible content area
* **Accordion Group** - A container for multiple accordion items

## Components

The HTWOO accordion system consists of several components:

* **Accordion Item** - The main container for a single collapsible section
* **Accordion Header** - The clickable title bar with an icon that controls the expansion state
* **Accordion Content** - The collapsible content area
* **Accordion Group** - A container for multiple accordion items

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/menu/accordion

**SCSS Partial Location**\
/src/sass/02-molecules/menu/_accordion.scss

## Features

- Uses native `<details>`/`<summary>` elements for semantics and accessibility
- Smooth icon rotation animation to indicate state
- Customizable content area
- Proper heading structure with `<h3>` elements
- Margin and padding optimized for readability and hierarchy

## Accessibility

Accordions implemented with `<details>` and `<summary>` elements have built-in accessibility benefits:

- Native keyboard support (Enter or Space to toggle)
- Proper ARIA states managed by the browser
- Focus management for keyboard users
- Screen reader announcements of expanded/collapsed state

For additional accessibility:

- The accordion group uses `role="accordion"` to identify its purpose
- Each heading should be contextually relevant to its content
- Focus states are appropriately styled

## Usage Best Practices

- Use accordions to organize related content into manageable sections
- Keep headers concise and descriptive
- Avoid nesting accordions too deeply
- Consider whether users need to compare information across sections (in which case, accordions might not be ideal)
- Use consistent icons for state indication
