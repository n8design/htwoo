---
title: "Card Footer"
description: "The Card Footer component displays metadata and attribution information at the bottom of a card. It typically includes an avatar image along with author name and modification date details."
type: "components"
layout: "single"
patternId: "molecules-cards-elements-card-footer"
category: "molecules"
subcategory: "cards-elements"
seoTitle: "Molecules - Cards Elements Card Footer"
seoDescription: "Cards Elements Card Footer Molecules"
weight: 20
markup: |
  &lt;footer class=&quot;hoo-cardfooter&quot;&gt;
      &lt;div class=&quot;hoo-avatar&quot;&gt;
          &lt;img src=&quot;../../images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-cardfooter-data&quot;&gt;
          &lt;div class=&quot;hoo-cardfooter-name&quot;&gt;Man on the moon&lt;/div&gt;
          &lt;div class=&quot;hoo-cardfooter-modified&quot;&gt;Created a seconds ago&lt;/div&gt;
      &lt;/div&gt;
  &lt;/footer&gt;
  
---

## Overview

The Card Footer component displays metadata and attribution information at the bottom of a card. It typically includes an avatar image along with author name and modification date details.

## Features

- Flexible layout with row orientation
- Consistent 12px padding around content
- 8px gap between elements
- Avatar integration with 32px size
- Two-line metadata display
- Semantic footer element

## Usage

Use the Card Footer component to provide context about the card content, such as:

- Content author or creator
- Last modified date or time
- File size or content type
- View count or engagement metrics
- Content status information

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/cards

***