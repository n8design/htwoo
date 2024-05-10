import React from "react";
import { IHOOTheme } from "./common/IHOOTheme";

export interface IGenericThemes {
  domElement: HTMLElement;
  initThemeHandler: (domElement: HTMLElement, defaultTheme: IHOOTheme) => void;
  setCSSVariables(theme: IHOOTheme, altDomElement?: HTMLElement): void;
}

export class GenericThemes implements IGenericThemes {
  private LOG_SOURCE: string = "💦GenericThemes";

  private _domElement: HTMLElement;
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

  /**Returns the currently applied theme */
  public get currentTheme(): IHOOTheme {
    return this._currentTheme;
  }

  /** initThemeHandler
   * Used to set up theme handling for SPFx and SPFx hosted in Microsoft Teams
   * 
   * @param domElement: HTMLElement - Sets the currently defined domElement the CSS Variables will be assigned to.
   * @param defaultTheme: IHOOTheme - Pass in the default theme
   */
  public initThemeHandler = (domElement: HTMLElement, defaultTheme: IHOOTheme) => {
    try {
      this._domElement = domElement;
      this._currentTheme = defaultTheme;
      this.setCSSVariables(defaultTheme);
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (initThemeHandler) - ${err}`);
    }
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

export const genericThemes = new GenericThemes();
export const GenericThemesContext = React.createContext(new GenericThemes());