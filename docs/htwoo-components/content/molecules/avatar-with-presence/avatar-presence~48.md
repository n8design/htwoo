---
title: "Avatar /w presence - 48px"
description: "The 48px Avatar with Presence is a medium-large size variant that provides enhanced visibility in primary interface components where user identity and status should be prominent."
type: "components"
layout: "single"
patternId: "molecules-avatar-with-presence-avatar-presence-48"
category: "molecules"
subcategory: "avatar-with-presence"
seoTitle: "Molecules - Avatar With Presence Avatar Presence 48"
seoDescription: "Avatar With Presence Avatar Presence 48 Molecules"
weight: 999
markup: |
  &lt;div class=&quot;hoo-avatar-pres&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot;   loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-presence is-&quot; title=&quot;Fluent UI / Fluent Design by hTWOo UI Framework&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
---

## Overview

The 48px Avatar with Presence is a medium-large size variant that provides enhanced visibility in primary interface components where user identity and status should be prominent.

## Usage

This medium-large size is ideal for:
- Main chat interfaces
- User profile sections
- Primary navigation with user status
- Contact cards
- Team directories

## Style Files

The component uses the following SCSS files:

1. **Base Avatar Styles**  
   `/src/styles/01-atoms/avatar/_avatar.scss`
   - Defines the `.hoo-avatar-48` class
   - Sets dimensions to 48px × 48px
   - Extends the base avatar placeholder with circular shape

2. **Presence Indicator**  
   `/src/styles/01-atoms/avatar/_presence.scss`
   - Provides the `.hoo-presence` class with status indicators
   - Maintains 16px indicator size with 2px border
   - Includes all status colors (online, away, dnd, invisible, oof)

3. **Avatar with Presence Container**  
   `/src/styles/02-molecules/avatar-w-presence/_index.scss`  
   - Defines the `.hoo-avatar-pres-48` class
   - Extends the base presence container
   - Uses transform rotation for accurate positioning

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***