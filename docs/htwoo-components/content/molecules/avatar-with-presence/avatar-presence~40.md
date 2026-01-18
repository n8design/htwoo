---
title: "Avatar /w presence - 40px"
description: "The 40px Avatar with Presence is a medium size variant that provides clear visibility while remaining compact enough for most standard interfaces."
type: "components"
layout: "single"
patternId: "molecules-avatar-with-presence-avatar-presence-40"
category: "molecules"
subcategory: "avatar-with-presence"
seoTitle: "Molecules - Avatar With Presence Avatar Presence 40"
seoDescription: "Avatar With Presence Avatar Presence 40 Molecules"
weight: 999
markup: |
  &lt;div class=&quot;hoo-avatar-pres&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot;   loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-presence is-&quot; title=&quot;Fluent UI / Fluent Design by hTWOo UI Framework&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
---

## Overview

The 40px Avatar with Presence is a medium size variant that provides clear visibility while remaining compact enough for most standard interfaces.

## Usage

This medium size works well in:
- Primary message interfaces
- User cards
- Activity feeds
- Participant listings
- Main navigation elements

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-40` class
   - Sets dimensions to 40px × 40px
   - Inherits core avatar styling with circular shape

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class with status colors
   - Maintains consistent 16px indicator size
   - Uses border to provide visual separation

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-40` class
   - Extends the base `.hoo-avatar-pres` class
   - Handles positioning of the presence indicator

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***