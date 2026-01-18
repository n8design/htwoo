---
title: Avatar /w presence - 32px
---

## Overview

The 32px Avatar with Presence is a medium-small size variant that balances visibility and space efficiency, making it suitable for standard interface components.

## Usage

This medium-small size is effective in:
- Standard chat interfaces
- User listings
- Team member displays
- Active participant indicators
- Collaborative interfaces

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-32` class
   - Sets dimensions to 32px × 32px
   - Extends the base avatar placeholder for consistent styling

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides status indicators with different colors
   - Uses 16px presence indicator with 2px border
   - Supports multiple status states (online, away, dnd, etc.)

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-32` class
   - Extends the base presence container
   - Uses transform rotation for proper indicator positioning

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***