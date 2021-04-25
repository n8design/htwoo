# Use hTWOo in your no framework web part

This article describes the requirements to enable hTWOo in your custom web part. Since it is based on CSS custom properties or in other words CSS variables.

## Modify the manifest to enable theme variants

Edit your web part manifest and add the following code.

```json
{ 
  //...
  "requiresCustomScript": false,
  "supportedHosts": ["SharePointWebPart"],
  "supportsThemeVariants": true,
  // ...
}
```

The property `supportThemeVariants` make sure that you can use any of the hTWOo components in colored SharePoint section.

## Implement the Theme JSON to CSS variable conversion

### Add references to SPFx ThemeProvider

To use different SharePoint themes add the following references to your web part code.

```typescript
import {
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme,
  ISemanticColors
} from '@microsoft/sp-component-base';
```

### Init an retrieve the Theme

To retrieve the current theme color slots add the following code in your web part base class.


```typescript
  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  protected onInit(): Promise<void> {
    // Consume the new ThemeProvider service
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);

    // If it exists, get the theme variant
    this._themeVariant = this._themeProvider.tryGetTheme();

    // Assign theme slots
    if (this._themeVariant) {

      // output all theme theme variants
      console.log("LOG Theme variant:::", this._themeVariant);
      
      // transfer semanticColors into CSS variables
      this.setCSSVariables(this._themeVariant.semanticColors);

      // transfer fonts into CSS variables
      this.setCSSVariables(this._themeVariant.fonts);

      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant.palette);
      
      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant["effects"]);

    } else {

      // Fallback to core theme state options applicable for Single Canvas Apps and Microsoft Teams
      this.setCSSVariables(window.["__themeState__"].theme)

    }

    // Register a handler to be notified if the theme variant changes
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);

    return super.onInit();
  }

  // Handle all theme changes
  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._themeVariant = args.theme;
  }

  /// Converts JSON Theme Slots it CSS variables
  private setCSSVariables(theming: any) {

    // request all key defined in theming
    let themingKeys = Object.keys(theming);
    // if we have the key
    if (themingKeys !== null) {
      // loop over it
      themingKeys.forEach(key => {
        // add CSS variable to style property of the web part
        this.domElement.style.setProperty(`--${key}`, theming[key])

      });

    }

  }
```

This code will convert all theme available color to CSS variables.

## Use hTWOo CSS

SharePoint frameworks use a tool named [CSS Modules](https://github.com/css-modules/css-modules) to give the web part styles a unique naming convention. To avoid bleeding out the hTWOo style to the rest of the page only one container class is needed.

Using the CSS Modules own definition all external style can be include in a fake pseudo class named `:global`.

Go to the web part and remove all it#s existing code and add a reference to hTWOo instead.This reduce the complete style sheet to the following code.

```scss
.hTwOoSample {

}
```

The `hTWOoSample` will still get replaces with a custom string like this.

```css
.hTWOoSample_b629d693{
  /* this where the content goes */
}
```

Now import the required components from hTWOo UI Framework.

```css
```