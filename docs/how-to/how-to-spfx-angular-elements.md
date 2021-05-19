---
layout: page
title: Use hTWOo in your Angular Elements web part
nav-title: SPFx with Angular Elements
description: Learn how to use hTWOo in an Angular Elements based based SPFx web part
group: how-to
---

First of all create SPFx web part with Angular elements using PnP Generator. For more information refer to [this](https://pnp.github.io/generator-spfx/) link.

After creation of project move to the angular folder and then install hTWOo library.

## Install hTWOo UI in the Angular Elements projects

To add hTWOo to your project install the following package:

```shell
npm install --save-dev @n8d/htwoo-core
```

Now you are ready to add it to your web part.

## Modify the manifest to enable theme variants In SPFx

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

To use different SharePoint themes add the following references to your web part code where the components gets loaded.

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
      this.setCSSVariables(window["__themeState__"].theme)

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

## Use hTWOo CSS in Angular Elements

SharePoint frameworks use a tool named [CSS Modules](https://github.com/css-modules/css-modules) to give the web part styles a unique naming convention. To avoid bleeding out the hTWOo style to the rest of the page only one container class is needed.

Move to the `src/style.scss` inside `angular project folder`. And add following reference of CSS.

First import the base elements from hTWOo core.

```css
/* You can add global styles to this file, and also import other style files */
@import 'node_modules/@n8d/htwoo-core/lib/components/base';

@import 'node_modules/@n8d/htwoo-core/lib/sass/style';

@import 'node_modules/@n8d/htwoo-core/lib/components/avatar';

// Various types of buttons
@import 'node_modules/@n8d/htwoo-core/lib/components/button';

// Various types of cards
@import 'node_modules/@n8d/htwoo-core/lib/components/cards';

// Various types of dialogs
@import 'node_modules/@n8d/htwoo-core/lib/components/dialogs';

// Various types of forms
@import 'node_modules/@n8d/htwoo-core/lib/components/forms';

// Various types of icons controls
 @import 'node_modules/@n8d/htwoo-core/lib/components/icon';

// Various types of menus controls
@import 'node_modules/@n8d/htwoo-core/lib/components/menus';

// Various types of tables
@import 'node_modules/@n8d/htwoo-core/lib/components/table';

// Various types of typography
@import 'node_modules/@n8d/htwoo-core/lib/components/typography';

// Various types of web part utilities
@import 'node_modules/@n8d/htwoo-core/lib/components/webparts';

```

Just include what you are actually using.

## Use a controls in angular project html file

Move to the `src/app/{webpartname-web-part}/{webpartname-web-part.componenent.html}` inside Angular project folder. And add the controls from hTWOo library as below.

```html
    <h1>
    {{description}}
    </h1>
    <hr>

    <h3>Button</h3>
    <button class="hoo-button-primary">
    <div class="hoo-button-label">Primary</div>
    </button>
    <hr>

    <h3>Forms</h3>
    <div class="hoo-radiobutton-group">
    <div>
        <input type="checkbox" name="chbg1" id="chbg1" value="" class="hoo-checkbox"><label for="chbg1">Apple</label>
    </div>
    <div>
        <input type="checkbox" name="chbg2" id="chbg2" value="" class="hoo-checkbox"><label for="chbg2">Avocado</label>
    </div>
    <div>
        <input type="checkbox" name="chbg3" id="chbg3" value="" class="hoo-checkbox"><label for="chbg3">Banana</label>
    </div>
    </div>
    <hr>

    <h3>Grid</h3>
    <div class="hoo-grid">
    <div class="demo-item">Demo Item</div>
    <div class="demo-item2">Demo Item</div>
    </div>
    <hr>
```

A complete reference of all components can be found in the [style guide](https://lab.n8d.studio/htwoo/htwoo-core/?p=all).

## H2O and theming

The way hTWOo handles theming and theme slots also allow you to change the theme without any extra effort and coding.

If you change the background to inverted for example, the colors will get automatically adjusted once the page has been saved.

![Themed controls][controls-theming]

## Download this getting started

You will find all sample in the [hTWOo Sample](https://github.com/n8design/htwoo-samples).

## Further resources

* [Supporting section backgrounds](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/supporting-section-backgrounds)
* [Develop SPFx web parts for different section designs using CSS](https://n8d.at/develop-spfx-web-parts-for-different-section-designs-using-css/)
* [How to make CSS Variables work in every web part context](https://n8d.at/how-to-make-css-variables-work-in-every-web-part-context/)
  

[controls-theming]: ./how-to-spfx-angular-elements-theme.png "Theming"
