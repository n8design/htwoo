---
title: "Avatar /w presence - 16px"
description: "The 16px Avatar with Presence is the smallest size variant, ideal for compact UI elements like dense lists, tight navigation menus, or data tables where space is limited."
type: "components"
layout: "single"
patternId: "molecules-avatar-with-presence-avatar-presence-16"
category: "molecules"
subcategory: "avatar-with-presence"
seoTitle: "Molecules - Avatar With Presence Avatar Presence 16"
seoDescription: "Avatar With Presence Avatar Presence 16 Molecules"
weight: 999
markup: |
  &lt;div class=&quot;hoo-avatar-pres&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot;   loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-presence is-&quot; title=&quot;Fluent UI / Fluent Design by hTWOo UI Framework&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
---

## Overview

The 16px Avatar with Presence is the smallest size variant, ideal for compact UI elements like dense lists, tight navigation menus, or data tables where space is limited.

## Usage

This extra-small size is useful in:
- Dense data tables
- Compact chat interfaces
- Notification badges
- Mini user lists
- Inline mentions in content

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-16` class
   - Sets dimensions to 16px × 16px
   - Inherits core avatar styling

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Defines the `.hoo-presence` class
   - Status color variations for online, away, dnd, invisible, and oof states
   - Consistent 16px indicator with 2px border

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-16` class
   - Positions the presence indicator
   - Handles transform rotation for proper indicator placement

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***