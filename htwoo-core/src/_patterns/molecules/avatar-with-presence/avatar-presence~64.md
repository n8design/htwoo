---
title: Avatar /w presence - 64px
---

## Overview

The 64px Avatar with Presence is a standard/large size variant that provides excellent visibility and detail. This is the default size for the base avatar component.

## Usage

This large size is suitable for:
- Featured user profiles
- Primary user interface elements
- Video chat interfaces
- Contact details pages
- Header user information

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-64` class (default size)
   - Sets dimensions to 64px × 64px
   - Serves as the base size for the avatar component

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class
   - Maintains 16px status indicator size
   - Includes color variations for different status states

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-64` class
   - Uses positioning and transforms for indicator placement
   - Extends the base avatar with presence component

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***