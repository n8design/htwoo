---
title: Elevations
order: 1000
---

Classes can be used directly:

* **hoo-elevation4**  - 4px elevation
* **hoo-elevation8**  - 8px elevation
* **hoo-elevation16** - 16px elevation
* **hoo-elevation64** - 64px elevation

### Custom use

For custom elevations the base style also provides a mixin:

```scss
.my-custom-class{
    @include elevation(32);
}
```

Elevation only takes unit-less values in this case it uses `32px`:

### SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/base

***