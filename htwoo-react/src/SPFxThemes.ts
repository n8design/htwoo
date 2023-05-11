import React from "react";
import { darkModeTheme, highContrastTheme, lightModeTheme } from "./TeamsThemes";
import { IHOOTheme } from "./common/IHOOTheme";


export interface ISPFxThemes {
  domElement: HTMLElement;
  readonly isInverted: boolean;
  readonly inTeams: boolean;
  readonly currentTheme: any;
  initThemeHandler: (domElement: HTMLElement, themeProvider?: any, microsoftTeams?: any, usePageTheme?: boolean) => void;
  setCSSVariables(theme: IHOOTheme, altDomElement?: HTMLElement): void;
}

export class SPFxThemes implements ISPFxThemes {
  private LOG_SOURCE: string = "💦SPFxThemes";

  private _domElement: HTMLElement;
  private _microsoftTeams: any;
  private _themeProvider: any;
  private _themeVariant: any;
  private _isInverted: boolean;
  private _currentTheme: IHOOTheme;

  constructor() {
  }

  /**Returns the currently set DOM Element that CSS Variables will be applied to*/
  public get domElement(): HTMLElement {
    return this._domElement;
  }

  /**Sets the DOM Element that CSS Variables will be applied to*/
  public set domElement(value: HTMLElement) {
    this._domElement = value;
  }

  /**Returns boolean indicating if the solution is running in a SharePoint page section that has a background color */
  public get isInverted(): boolean {
    return this._isInverted;
  }

  /**Returns boolean indiciating if the solution is running in Microsoft Teams */
  public get inTeams(): boolean {
    return (this._microsoftTeams != null);
  }

  /**Returns the currently applied theme */
  public get currentTheme(): IHOOTheme {
    return this._currentTheme;
  }

  /** initThemeHandler
   * Used to set up theme handling for SPFx and SPFx hosted in Microsoft Teams
   * 
   * @param domElement: HTMLElement - Sets the currently defined domElement the CSS Variables will be assigned to.
   * @param themeProvider: any (no type dependency) - Optionally pass in the SPFx theme provider
   * @param microsoftTeams: any (no type dependency) - Optionally pass in the Microsoft Teams context
   * @param usePageTheme: boolean - Optionally use legacy SharePoint theme context
   */
  public initThemeHandler = (domElement: HTMLElement, themeProvider?: any, microsoftTeams?: any, usePageTheme: boolean = false) => {
    try {
      this._domElement = domElement;
      if (themeProvider) {
        this._themeProvider = themeProvider;
      }
      if (microsoftTeams) {
        this._microsoftTeams = microsoftTeams;
      }

      // If it exists, get the theme variant
      this._themeVariant = this._themeProvider?.tryGetTheme();

      if (this._themeVariant && !usePageTheme) {
        this._setThemeVariants();
      } else if (usePageTheme && window["__themeState__"] != null) {
        // Fallback to core theme state options applicable for Single Canvas Apps and Microsoft Teams
        this.setCSSVariables(window["__themeState__"].theme);
      }

      // Register a handler to be notified if the theme variant changes
      this._themeProvider?.themeChangedEvent.add(this, this._handleThemeChangedEvent);

      //Support Microsoft Teams context
      if (this._microsoftTeams) {
        switch (this._microsoftTeams.context.theme) {
          case "dark": {
            this._domElement.classList.add("dark-mode");
            this.setCSSVariables(darkModeTheme);
            break;
          }
          case "contrast": {
            this._domElement.classList.add("contrast-mode");
            this.setCSSVariables(highContrastTheme);
            break;
          }
          default: {
            this.setCSSVariables(lightModeTheme);
            break;
          }
        }
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (initThemeHandler) - ${err}`);
    }
  }

  private _setThemeVariants() {
    try {
      // set isInverted property
      this._isInverted = this._themeVariant.isInverted;

      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant.palette);

      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant["effects"]);
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_setThemeVariants) - ${err}`);
    }
  }

  private _handleThemeChangedEvent(args: any): void {
    this._themeVariant = args.theme;
    this._setThemeVariants();
  }

  /** setCSSVariables
   * Used to manually apply a theme to a DOM Element; Internally used to set CSS Variables
   * 
   * @param theme: IHOOTheme - a custom theme
   * @param altDomElement: HTMLElement - (Optional) Alternate HTMLElement to apply CSS Variables to instead of currently defined `domElement`
   */
  public setCSSVariables(theme: IHOOTheme, altDomElement?: HTMLElement): void {
    if (this._domElement == null && altDomElement == null) { return; }
    try {
      const workingDomElement = altDomElement || this._domElement;
      this._currentTheme = theme;
      // request all key defined in theming
      let themingKeys = Object.keys(theme);
      // if we have the key
      if (themingKeys !== null) {
        // loop over it
        themingKeys.forEach(key => {
          // add CSS variable to style property of the web part
          workingDomElement.style.setProperty(`--${key}`, theme[key]);
        });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (setCSSVariables) - ${err}`);
    }
  }
}

export const spfxThemes = new SPFxThemes();
export const SPFxThemesContext = React.createContext(new SPFxThemes());