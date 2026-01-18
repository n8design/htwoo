---
title: "Avatar /w presence - 24px"
description: "The 24px Avatar with Presence is a small size variant that provides slightly more visibility than the 16px version while still being compact enough for space-constrained interfaces."
type: "components"
layout: "single"
patternId: "molecules-avatar-with-presence-avatar-presence-24"
category: "molecules"
subcategory: "avatar-with-presence"
seoTitle: "Molecules - Avatar With Presence Avatar Presence 24"
seoDescription: "Avatar With Presence Avatar Presence 24 Molecules"
weight: 999
markup: |
  &lt;div class=&quot;hoo-avatar-pres&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot;   loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-presence is-&quot; title=&quot;Fluent UI / Fluent Design by hTWOo UI Framework&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
---

## Overview

The 24px Avatar with Presence is a small size variant that provides slightly more visibility than the 16px version while still being compact enough for space-constrained interfaces.

## Usage

This small size works well in:
- Conversation threads
- Comment sections
- Secondary navigation elements
- Compact lists
- Mobile interfaces

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-24` class
   - Sets dimensions to 24px × 24px
   - Applies border-radius for circular appearance

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class with status indicators
   - Maintains 16px size for status indicator
   - Includes border to separate from avatar and background

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-24` class
   - Extends the base `.hoo-avatar-pres` class
   - Positions presence indicator at the bottom-right

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***