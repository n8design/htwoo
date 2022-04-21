import React from "react";
import { darkModeTheme, highContrastTheme, lightModeTheme } from "./TeamsThemes";

export interface ISPFxThemes {
  isInverted: boolean;
  inTeams: boolean;
  initThemeHandler: (domElement: HTMLElement, themeProvider?: any, microsoftTeams?: any, usePageTheme?: boolean) => void;
}

export class SPFxThemes implements ISPFxThemes {
  private LOG_SOURCE: string = "💦SPFxThemes";

  private _domElement: HTMLElement;
  private _microsoftTeams: any;
  private _themeProvider: any;
  private _themeVariant: any;
  private _isInverted: boolean;

  constructor() {
  }

  public get isInverted(): boolean {
    return this._isInverted;
  }

  public get inTeams(): boolean {
    return (this._microsoftTeams != null);
  }

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
        // set isInverted property
        this._isInverted = this._themeVariant.isInverted;

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

export const spfxThemes = new SPFxThemes();
export const SPFxThemesContext = React.createContext(new SPFxThemes());