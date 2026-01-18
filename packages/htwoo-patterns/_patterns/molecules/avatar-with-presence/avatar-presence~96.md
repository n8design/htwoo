---
title: Avatar /w presence - 96px
---

## Overview

The 96px Avatar with Presence is a jumbo size variant that provides maximum visibility and detail, designed for prominent interface elements where the user's identity and status should be emphasized.

## Usage

This jumbo size is ideal for:
- Main profile pages
- Featured speaker displays
- Large hero components
- Primary user accounts
- Spotlight sections

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-96` class
   - Sets dimensions to 96px × 96px
   - Maintains circular appearance with proper scaling

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class
   - Maintains standard 16px indicator size
   - Includes all status color variations

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-96` class
   - Extends the base avatar with presence component
   - Positions the presence indicator using transforms

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***