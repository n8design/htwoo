---
title: Liquid UI Grid System
order: 5
---
### Use Grid System with CSS classes

`lwd-grid` - defines the base CSS Grid on any container

### Use Grid System with SCSS

Through a mixing you can turn any container into a grid system.

```css
.demo-item{
	@include gridSpan(4);
}
```

### Placing elements on the grid

The placement of elements can be accomplished with the following SASS mixin.

```scss
.demo-item2{
	@include gridSpan(6, 7, 2);
}
```

The SASS mixing has the following input:

@include gridSpan([grid span], [Starting column], [Starting row]);