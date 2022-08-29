import React from "react";
import { darkModeTheme, highContrastTheme, lightModeTheme } from "./TeamsThemes";

export interface IHOOTheme {
  accentButtonBackground: string;
  accentButtonText: string;
  actionLink: string;
  actionLinkHovered: string;
  blockingBackground: string;
  blockingIcon: string;
  bodyBackground: string;
  bodyBackgroundChecked: string;
  bodyBackgroundHovered: string;
  bodyDivider: string;
  bodyFrameBackground: string;
  bodyFrameDivider: string;
  bodyStandoutBackground: string;
  bodySubtext: string;
  bodyText: string;
  bodyTextChecked: string;
  buttonBackground: string;
  buttonBackgroundChecked: string;
  buttonBackgroundCheckedHovered: string;
  buttonBackgroundDisabled: string;
  buttonBackgroundHovered: string;
  buttonBackgroundPressed: string;
  buttonBorder: string;
  buttonBorderDisabled: string;
  buttonText: string;
  buttonTextChecked: string;
  buttonTextCheckedHovered: string;
  buttonTextDisabled: string;
  buttonTextHovered: string;
  buttonTextPressed: string;
  cardShadow: string;
  cardShadowHovered: string;
  cardStandoutBackground: string;
  defaultStateBackground: string;
  disabledBackground: string;
  disabledBodySubtext: string;
  disabledBodyText: string;
  disabledBorder: string;
  disabledSubtext: string;
  disabledText: string;
  errorBackground: string;
  errorIcon: string;
  errorText: string;
  focusBorder: string;
  infoBackground: string;
  infoIcon: string;
  inputBackground: string;
  inputBackgroundChecked: string;
  inputBackgroundCheckedHovered: string;
  inputBorder: string;
  inputBorderHovered: string;
  inputFocusBorderAlt: string;
  inputForegroundChecked: string;
  inputIcon: string;
  inputIconDisabled: string;
  inputIconHovered: string;
  inputPlaceholderBackgroundChecked: string;
  inputPlaceholderText: string;
  inputText: string;
  inputTextHovered: string;
  link: string;
  linkHovered: string;
  listBackground: string;
  listHeaderBackgroundHovered: string;
  listHeaderBackgroundPressed: string;
  listItemBackgroundChecked: string;
  listItemBackgroundCheckedHovered: string;
  listItemBackgroundHovered: string;
  listText: string;
  listTextColor: string;
  menuBackground: string;
  menuDivider: string;
  menuHeader: string;
  menuIcon: string;
  menuItemBackgroundChecked: string;
  menuItemBackgroundHovered: string;
  menuItemBackgroundPressed: string;
  menuItemText: string;
  menuItemTextHovered: string;
  messageLink: string;
  messageLinkHovered: string;
  messageText: string;
  primaryButtonBackground: string;
  primaryButtonBackgroundDisabled: string;
  primaryButtonBackgroundHovered: string;
  primaryButtonBackgroundPressed: string;
  primaryButtonBorder: string;
  primaryButtonText: string;
  primaryButtonTextDisabled: string;
  primaryButtonTextHovered: string;
  primaryButtonTextPressed: string;
  severeWarningBackground: string;
  severeWarningIcon: string;
  smallInputBorder: string;
  successBackground: string;
  successIcon: string;
  successText: string;
  variantBorder: string;
  variantBorderHovered: string;
  warningBackground: string;
  warningHighlight: string;
  warningIcon: string;
  warningText: string;
  accent: string;
  black: string;
  blackTranslucent40: string;
  blue: string;
  blueDark: string;
  blueLight: string;
  blueMid: string;
  green: string;
  greenDark: string;
  greenLight: string;
  magenta: string;
  magentaDark: string;
  magentaLight: string;
  neutralDark: string;
  neutralLight: string;
  neutralLighter: string;
  neutralLighterAlt: string;
  neutralPrimary: string;
  neutralPrimaryAlt: string;
  neutralQuaternary: string;
  neutralQuaternaryAlt: string;
  neutralSecondary: string;
  neutralSecondaryAlt: string;
  neutralTertiary: string;
  neutralTertiaryAlt: string;
  orange: string;
  orangeLight: string;
  orangeLighter: string;
  primaryBackground: string;
  primaryText: string;
  purple: string;
  purpleDark: string;
  purpleLight: string;
  red: string;
  redDark: string;
  teal: string;
  tealDark: string;
  tealLight: string;
  themeDark: string;
  themeDarkAlt: string;
  themeDarker: string;
  themeLight: string;
  themeLighter: string;
  themeLighterAlt: string;
  themePrimary: string;
  themeSecondary: string;
  themeTertiary: string;
  white: string;
  whiteTranslucent40: string;
  yellow: string;
  yellowDark: string;
  yellowLight: string;
}

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

  /**Returns boolean indiciating if the solution is running in a SharePoint page section that has a background color */
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
   * domElement: HTMLElement - Sets the currently defined domElement the CSS Variables will be assigned to.
   * themeProvider: any (no type dependency) - Optionally pass in the SPFx theme provider
   * microsoftTeams: any (no type dependency) - Optionally pass in the Microsoft Teams context
   * usePageTheme: boolean - Optionally use legacy SharePoint theme context
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

      // transfer semanticColors into CSS variables
      this.setCSSVariables(this._themeVariant.semanticColors);

      // transfer fonts into CSS variables
      this.setCSSVariables(this._themeVariant.fonts);

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
   * theme: IHOOTheme - a custom theme
   * altDomElement: HTMLElement - (Optional) Alternate HTMLElement to apply CSS Variables to instead of currently defined `domElement`
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