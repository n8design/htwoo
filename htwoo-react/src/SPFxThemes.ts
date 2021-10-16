import { Logger, LogLevel } from "@pnp/logging";

export interface ISPFxThemes {
  initThemeHandler: (domElement: HTMLElement, themeVariant: any) => void;
}

export class SPFxThemes implements ISPFxThemes {
  private LOG_SOURCE: string = "🔶SPFxThemes";

  private _domElement: HTMLElement;
  private _themeProvider: any;
  private _themeVariant: any;

  constructor() {
  }

  public initThemeHandler = (domElement: HTMLElement, themeProvider: any) => {
    try {
      this._domElement = domElement;
      this._themeProvider = themeProvider;

      // If it exists, get the theme variant
      this._themeVariant = this._themeProvider.tryGetTheme();

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
        this.setCSSVariables(window["__themeState__"].theme);
      }

      // Register a handler to be notified if the theme variant changes
      this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (initThemeHandler) - ${err}`, LogLevel.Error);
    }
  }

  private _handleThemeChangedEvent(args: any): void {
    this._themeVariant = args.theme;
  }

  private setCSSVariables(theming: any) {
    // request all key defined in theming
    let themingKeys = Object.keys(theming);
    // if we have the key
    if (themingKeys !== null) {
      // loop over it
      themingKeys.forEach(key => {
        // add CSS variable to style property of the web part
        this._domElement.style.setProperty(`--${key}`, theming[key]);
      });
    }
  }
}