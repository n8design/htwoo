---
title: Card Components
order: 1
---

# Card Components

Cards in HTWOO provide a flexible container for displaying related content and actions in a single unit. They are used to group and organize information in a visually appealing and consistent manner.

## Card Types

The HTWOO library includes two main types of cards:

* **Document Card** - Standard card for displaying document or content information
* **Teams Splash Card** - Feature card with a more prominent visual presentation

## Card Components

Cards are composed of several modular elements that can be combined as needed:

* **Card Image** - Media content at the top of the card
* **Card Location** - Shows the source or location of the content
* **Card Title** - Primary heading for the card content
* **Card Footer** - Contains metadata, actions, or additional information
* **Card Splash Header** - Special header component for Teams Splash Cards
* **Card Splash Title** - Title component for Teams Splash Cards
* **Card Splash Description** - Descriptive text for Teams Splash Cards
* **Card Splash Footer** - Footer component for Teams Splash Cards

## Features

- Responsive design that adjusts to parent container
- Box shadow elevation for visual hierarchy
- Flexible composition with modular components
- Support for images, text, metadata, and interactive elements
- Linkable cards for navigation
- Standardized spacing and styling

## Card Grid Layout

Cards can be arranged in a responsive grid layout using the `.hoo-cardgrid` class. This grid system automatically adjusts the number of columns based on available space.

## Accessibility

- Cards use semantic HTML (`article`) to represent a self-contained unit
- Linked cards maintain proper color contrast and focus states
- Card content follows a logical structure for screen readers
- Images include appropriate alt text

## SCSS Imports

**Main Components**\
@n8d/htwoo-core/components/cards

**Related Files**\
- `/src/styles/03-organism/cards/_cards.scss` - Document card styles
- `/src/styles/03-organism/cards/_splash-cards.scss` - Teams splash card styles
- `/src/styles/04-templates/_card-grid.scss` - Card grid layout

***
