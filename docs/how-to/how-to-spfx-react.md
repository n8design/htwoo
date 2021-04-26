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

## Use hTWOo CSS

SharePoint frameworks use a tool named [CSS Modules](https://github.com/css-modules/css-modules) to give the web part styles a unique naming convention. To avoid bleeding out the hTWOo style to the rest of the page only one container class is needed.

Using the CSS Modules own definition all external style can be include in a fake pseudo class named `:global`.

Go to the web part and remove all it#s existing code and add a reference to hTWOo instead.This reduce the complete style sheet to the following code.

```scss
.hTWOoReactSpFx {

}
```

The `hTWOoSample` will still get replaces with a custom string like this.

```css
.hTWOoReactSpFx_b629d693{
  /* this where the content goes */
}
```

First import the base elements from hTWOo core.

```css
@import 'node_modules/@n8d/htwoo-core/lib/components/base';

.hTWOoReactSpFx{
  
}

```

From there you can use now all other comments in the main block of your web part using `globals`. The full list of features may look like this.

```scss
  // Imports all base mixin
  @import 'node_modules/@n8d/htwoo-core/lib/components/base';

  .hTWOoReactSpFx {

    :global {
      
      // For Avatar and Person selector components
      @import 'node_modules/@n8d/htwoo-core/lib/components/avatar';

      // Various types of buttons
      @import 'node_modules/@n8d/htwoo-core/lib/components/button';

      // Various types of buttons
      @import 'node_modules/@n8d/htwoo-core/lib/components/cards';

      // Various types of buttons
      @import 'node_modules/@n8d/htwoo-core/lib/components/dialogs';

      // Various types of buttons
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

    }

  }
```

Just include what you are actually using.

## Use a simple button in your web part

To use a simple web part create a new tsx file named `hoobutton-standard.tsx`.


```typescript
import * as React from "react";
import isEqual from "lodash/isEqual";

export interface IButtonProps {
  disabled: boolean;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonState {
}

export class ButtonState implements IButtonState {
  constructor() { }
}

export default class HooButton extends React.Component<IButtonProps, IButtonState> {
  private LOG_SOURCE: string = "🔶Button";

  constructor(props: IButtonProps) {
    super(props);
    this.state = new ButtonState();
  }

  public shouldComponentUpdate(nextProps: IButtonProps, nextState: IButtonState) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IButtonProps> {
    try {
      return (<>);
    } catch (err) {
      console.log(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}
```

In the render method insert the following markup for a hTWOo button.

```typescript

export default class HooButton extends React.Component<IButtonProps, IButtonState> {
  //...
  public render(): React.ReactElement<IButtonProps> {
    try {
      return (
        <button className="hoo-button" disabled={this.props.disabled} aria-disabled={this.props.disabled} onClick={this.props.onClick}>
          <div className="hoo-button-label">{this.props.label}</div>
        </button>
      );
    } catch (err) {
      console.log(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
  //...
}
```

Now you have a basic reusable [hTWOo Standard button](https://lab.n8d.studio/htwoo/htwoo-core/?p=atoms-button-standard) in your solution.

## Add button to the web part.

To add this re-usable button add it now to your web part. The first step is to import the button to the web part component.

```typescript
import HooButton from './hoobutton-standard';
```

Now insert the web part in the main container element.

```typescript
export default class HTwOoReactSpFx extends React.Component<IHTwOoReactSpFxProps, {}> {
  public render(): React.ReactElement<IHTwOoReactSpFxProps> {
    return (
      <div className={ styles.hTWOoReactSpFx }>
        <HooButton label="My first hTWOo React Button" disabled={false} onClick={()=>{}} />
      </div>
    );
  }
}
```

Now the webpart shows the button. The same method also works with the primary button.

A complete reference of all components can be found in the [style guide](https://lab.n8d.studio/htwoo/htwoo-core/?p=all).

## H2O and theming

The way hTWOo handles theming and theme slots also allow you to change the theme without any extra effort and coding.

If you change the background to inverted for example, the colors will get automatically adjusted once the page has been saved.

![Themed button][button-theming]

Or even an overall dark page theme work.

![Dark themed buttons][button-dark-themed]

## Download this getting started

You will find all sample in the [hTWOo Sample](https://github.com/n8design/htwoo-samples).

## Further resources

* [Supporting section backgrounds](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/supporting-section-backgrounds)
* [Develop SPFx web parts for different section designs using CSS](https://n8d.at/develop-spfx-web-parts-for-different-section-designs-using-css/)
* [How to make CSS Variables work in every web part context](https://n8d.at/how-to-make-css-variables-work-in-every-web-part-context/)
  


[button]: ./how-to-spfx-html-button.png "Standard Button"
[button-primary]: ./how-to-spfx-html-button-primary.png "Primary Button"
[button-theming]: ./how-to-spfx-html-theming-1.png "Theming"
[button-dark-themed]: ./how-to-spfx-html-dark-themed-button.png "Theming"
