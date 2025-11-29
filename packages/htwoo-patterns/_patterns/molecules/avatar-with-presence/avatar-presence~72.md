---
title: Avatar /w presence - 72px
---

## Overview

The 72px Avatar with Presence is an extra-large size variant that provides enhanced detail and prominence, making it suitable for featured user interface elements.

## Usage

This extra-large size works well in:
- Featured profile sections
- Large hero sections
- Video conferencing interfaces
- User detail pages
- Speaker or presenter highlights

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-72` class
   - Sets dimensions to 72px × 72px
   - Applies circular shape with proper scaling

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class
   - Maintains consistent 16px indicator size
   - Uses border to separate from background

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-72` class
   - Extends the base presence container
   - Positions the presence indicator at the bottom-right

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***