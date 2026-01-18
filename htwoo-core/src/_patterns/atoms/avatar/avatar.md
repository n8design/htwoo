---
title: Avatar
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


