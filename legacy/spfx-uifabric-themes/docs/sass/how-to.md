# SASS

Go to any of your `.module.scss` files in your project and include the following SASS @import statement 

```css
@import './node_modules/spfx-uifabric-themes/ouif.theme';
```

In your web part you can make use fo all available theme slots on in [SASS Variables](ouif.theme.md).

```scss
.container {
  /* Adds "[theme:primaryBackground, default:#ffffff]"; */
  background-color: $ouif-primaryBackground; 
}
```

The resulting CSS looks similar to:

```css
.container_123abc {
  background-color: "[theme:primaryBackground, default:#ffffff]"; 
}
```

The value gets picked up by the resulting web part during run-time and will be updated with the value defined by the theme.

## Predecessor Version to 0.7.0

The predecessor version supported thw following options to import the theme slots. Whilte the new version and the procedure described above use more than 200 theme slots this uses a less advanced version.

The code is still valid but should be replaced with the version above.

Go to any of your `.module.scss` files in your project and include the following SASS @import statement. 

```scss
// For all tools and utlities
@import './node_modules/spfx-uifabric-themes/office.theme';
```

For use of the color variable excusivly the following import is enough.

```scss
// For color variables only
@import './node_modules/spfx-uifabric-themes/office.theme.vars';
```

After that you can use theme slots like `$ms-themePrimary`.

```scss
@import './node_modules/spfx-uifabric-themes/office.theme';

.container {
  background-color: $ms-themePrimary;
}
// For Error Messages use you can pass: alert, error, info, servere, success
.custErrorMsg{
  padding: 0 1em;
  line-height: 2em;
  @include stateStyle('error');
}

```

This will automatically add the theme slot for the background color.

```css

.container_742604fa {
  background-color: "[theme:themePrimary, default:#0078d7]"
}

.custErrorMsg_742604fa {
  padding: 0 1em;
  line-height: 2em;
  background-color: "[theme:errorBackground, default: #fde7e9]";
  color: "[theme:errorText, default: #333333]"
}
```

## Further reading
For SASS this toolkit support multiple ways to help with development of themed web parts.

- [SASS Variables Reference](ouif.theme.md)
- [State Styles](statestyles.md) - Provide mixin that allow you to apply style for custom notification indicators

!!! info
    Only available with predecessor embed through `office.theme` import but not with `uif.theme`

    - [Typography](typography.md) - Provide SASS mixin for easier font handling