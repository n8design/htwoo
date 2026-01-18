---
title: "Avatar"
description: "This avatar is show with a size of 64px and round borders. If you construct other avatars based on this please pass it a mugshot url and a size parameter."
type: "components"
layout: "single"
patternId: "atoms-avatar-avatar"
category: "atoms"
subcategory: "avatar"
seoTitle: "Atoms - Avatar Avatar"
seoDescription: "Avatar Avatar Atoms"
weight: 999
hasVariants: true
markup: |
  &lt;div class=&quot;hoo-avatar-64&quot;&gt;
      &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;64&quot; width=&quot;64&quot; loading=&quot;lazy&quot;&gt;
  &lt;/div&gt;
variants:
  - id: "atoms-avatar-avatar-16"
    title: "Avatar Sample 16 px"
    variantName: "16"
    markup: |
      &lt;div class=&quot;hoo-avatar-16&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;16&quot; width=&quot;16&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-24"
    title: "Avatar Sample 24 px"
    variantName: "24"
    markup: |
      &lt;div class=&quot;hoo-avatar-24&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;24&quot; width=&quot;24&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-32"
    title: "Avatar Sample 32 px"
    variantName: "32"
    markup: |
      &lt;div class=&quot;hoo-avatar-32&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;32&quot; width=&quot;32&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-40"
    title: "Avatar Sample 40 px"
    variantName: "40"
    markup: |
      &lt;div class=&quot;hoo-avatar-40&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;40&quot; width=&quot;40&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-48"
    title: "Avatar Sample 48 px"
    variantName: "48"
    markup: |
      &lt;div class=&quot;hoo-avatar-48&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;48&quot; width=&quot;48&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-64"
    title: "Avatar Sample 64 px"
    variantName: "64"
    markup: |
      &lt;div class=&quot;hoo-avatar-64&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;64&quot; width=&quot;64&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-72"
    title: "Avatar Sample 72 px"
    variantName: "72"
    markup: |
      &lt;div class=&quot;hoo-avatar-72&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;72&quot; width=&quot;72&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
  - id: "atoms-avatar-avatar-96"
    title: "Avatar Sample 96 px"
    variantName: "96"
    markup: |
      &lt;div class=&quot;hoo-avatar-96&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg&quot; alt=&quot;&quot; class=&quot;hoo-avatar-img&quot; height=&quot;96&quot; width=&quot;96&quot; loading=&quot;lazy&quot;&gt;
      &lt;/div&gt;
---

This avatar is show with a size of 64px and round borders. If you construct other avatars based on this please pass it a mugshot url and a size parameter.

## Supported Sizes:

* 8px - .hoo-avatar-8
* 16px - .hoo-avatar-16
* 24px - .hoo-avatar-24
* 32px - .hoo-avatar-32
* 40px - .hoo-avatar-40
* 48px - .hoo-avatar-48
* 64px - .hoo-avatar-64
* 72px - .hoo-avatar-72
* 96px - .hoo-avatar-96

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/avatar

**SCSS Partial Location**\
`/src/styles/01-atoms/avatar/_avatar.scss`

### CSS Classes

**Element Classes**
- `.hoo-avatar-img` - Image element within avatar

**Size Modifier Classes**
- `.hoo-avatar-8` - 8px avatar
- `.hoo-avatar-16` - 16px avatar
- `.hoo-avatar-24` - 24px avatar  
- `.hoo-avatar-32` - 32px avatar
- `.hoo-avatar-40` - 40px avatar
- `.hoo-avatar-48` - 48px avatar
- `.hoo-avatar-64` - 64px avatar (default showcase size)
- `.hoo-avatar-72` - 72px avatar
- `.hoo-avatar-96` - 96px avatar

**Base Classes**
- `.hoo-avatar` - Base avatar container (inherits parent dimensions)
- `%hoo-avatar` - SCSS placeholder for shared styling

## Changes in v0.2.0:

Class name change for image in avatar molecule to `hoo-avatar-img`