---
title: "Avatar with Presence"
description: "The Avatar with Presence component combines a user avatar with a status indicator to show the user's availability. This is the default 128px size variant."
type: "components"
layout: "single"
patternId: "molecules-avatar-with-presence-avatar-presence"
category: "molecules"
subcategory: "avatar-with-presence"
seoTitle: "Molecules - Avatar With Presence Avatar Presence"
seoDescription: "Avatar With Presence Avatar Presence Molecules"
weight: 999
markup: |
  &lt;div class=&quot;hoo-avatar-pres&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot;   loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-presence is-&quot; title=&quot;Fluent UI / Fluent Design by hTWOo UI Framework&quot;&gt;&lt;/div&gt;&lt;/div&gt;
  
---

## Overview

The Avatar with Presence component combines a user avatar with a status indicator to show the user's availability. This is the default 128px size variant.

## Usage

The Avatar with Presence component should be used in interfaces where it's important to display both a user's image and their current status. Common use cases include:

- User profiles
- Chat and messaging interfaces
- Team member directories
- Comment sections
- Collaboration tools

## Features

- Displays user image in a circular container
- Shows presence/status through a colored indicator
- Status indicator positioned at bottom-right corner
- Default size of 128px (can be customized)
- Clean integration between avatar and status indicator

## Accessibility

- Status indicators include title attributes for screen reader users
- When implementing, ensure avatar images have appropriate alt text
- The combination provides visual cues with supporting text information

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

***