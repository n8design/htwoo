---
title: "Persona"
description: "The persona component displays comprehensive user information including avatar, presence status, and user details. It combines the avatar-with-presence molecule with additional user metadata to create"
type: "components"
layout: "single"
patternId: "molecules-persona-persona"
category: "molecules"
subcategory: "persona"
seoTitle: "Molecules - Persona Persona"
seoDescription: "Persona Persona Molecules"
weight: 10
markup: |
  &lt;div class=&quot;hoo-persona-24&quot;&gt;
      &lt;div class=&quot;hoo-avatar-pres-24&quot;&gt;
          &lt;div class=&quot;hoo-avatar-24&quot;&gt;
              &lt;img src=&quot;../../images//mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;24&quot; width=&quot;24&quot; loading=&quot;lazy&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;hoo-presence is-dnd&quot; title=&quot;Online&quot;&gt;&lt;/div&gt;&lt;/div&gt;
      &lt;div class=&quot;hoo-persona-data&quot;&gt;
          &lt;div class=&quot;hoo-persona-name&quot;&gt;Jane Doeminica&lt;/div&gt;
          &lt;div class=&quot;hoo-persona-function&quot;&gt;&lt;span&gt;Lead Fluent Designer&lt;/span&gt;&lt;/div&gt;
          &lt;div class=&quot;hoo-persona-statustext&quot;&gt;&lt;span&gt;In a meeting&lt;/span&gt;&lt;/div&gt;
          &lt;div class=&quot;hoo-persona-available&quot;&gt;&lt;span&gt;Call me yesterday&lt;/span&gt;&lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
---

# Persona

The persona component displays comprehensive user information including avatar, presence status, and user details. It combines the avatar-with-presence molecule with additional user metadata to create a complete user representation.

## Overview

The persona component is a flexible user representation element that scales from minimal 24px displays to comprehensive 96px layouts. It intelligently shows or hides information based on the selected size variant.

## Features

- **Avatar Integration**: Uses avatar-with-presence molecule for consistent user representation
- **Presence Indicators**: Shows real-time user status (online, away, busy, do not disturb, offline)
- **User Details**: Displays name, job function, status text, and availability information
- **Size Adaptability**: Content visibility adapts based on component size
- **Text Overflow**: Handles long text with ellipsis for clean presentation

## Size Variants and Content Display

### 24px Persona
- Avatar: 24px
- Content: Name only
- Use case: Compact lists, mentions

### 32px Persona
- Avatar: 32px
- Content: Name only
- Use case: Small user lists, tags

### 40px Persona
- Avatar: 40px
- Content: Name and function
- Use case: Team members, collaborators

### 48px Persona
- Avatar: 48px
- Content: Name, function, and status text
- Use case: User cards, profiles

### 72px Persona
- Avatar: 72px
- Content: Name, function, status text, and availability
- Use case: Detailed user information

### 96px Persona
- Avatar: 96px
- Content: Full user details including all metadata
- Use case: User profiles, contact cards

## CSS Classes

- `.hoo-persona`: Base persona container
- `.hoo-persona-24`: 24px variant
- `.hoo-persona-32`: 32px variant
- `.hoo-persona-40`: 40px variant
- `.hoo-persona-48`: 48px variant
- `.hoo-persona-72`: 72px variant
- `.hoo-persona-96`: 96px variant
- `.hoo-persona-data`: Container for user information
- `.hoo-persona-name`: User's display name
- `.hoo-persona-function`: User's job title or role
- `.hoo-persona-statustext`: Current status message
- `.hoo-persona-available`: Availability information

## Styling

The component uses flexbox layout with the avatar positioned to the left and user information to the right. Text content is truncated with ellipsis when it exceeds the available space.

## Accessibility

- Avatar images should include meaningful alt text
- Presence status is communicated through color and iconography
- Text content maintains sufficient contrast ratios
- Component supports keyboard navigation when interactive

## SCSS Import