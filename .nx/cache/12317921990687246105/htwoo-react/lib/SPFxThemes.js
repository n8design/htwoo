import React from "react";
import { darkModeTheme, highContrastTheme, lightModeTheme } from "./TeamsThemes";
export class SPFxThemes {
    constructor() {
        this.LOG_SOURCE = "💦SPFxThemes";
        this.initThemeHandler = (domElement, themeProvider, microsoftTeams, usePageTheme = false) => {
            try {
                this._domElement = domElement;
                if (themeProvider) {
                    this._themeProvider = themeProvider;
                }
                if (microsoftTeams) {
                    this._microsoftTeams = microsoftTeams;
                }
                this._themeVariant = this._themeProvider?.tryGetTheme();
                if (this._themeVariant && !usePageTheme) {
                    this._setThemeVariants();
                }
                else if (usePageTheme && window["__themeState__"] != null) {
                    this.setCSSVariables(window["__themeState__"].theme);
                }
                this._themeProvider?.themeChangedEvent.add(this, this._handleThemeChangedEvent);
                if (this._microsoftTeams) {
                    const themeName = this._microsoftTeams.context?.theme || this._microsoftTeams.app?.theme;
                    switch (themeName) {
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
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (initThemeHandler) - ${err}`);
            }
        };
    }
    get domElement() {
        return this._domElement;
    }
    set domElement(value) {
        this._domElement = value;
    }
    get isInverted() {
        return this._isInverted;
    }
    get inTeams() {
        return (this._microsoftTeams != null);
    }
    get currentTheme() {
        return this._currentTheme;
    }
    _setThemeVariants() {
        try {
            this._isInverted = this._themeVariant.isInverted;
            this.setCSSVariables(this._themeVariant.palette);
            this.setCSSVariables(this._themeVariant["effects"]);
            this.setCSSVariables(this._themeVariant.semanticColors);
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (_setThemeVariants) - ${err}`);
        }
    }
    _handleThemeChangedEvent(args) {
        this._themeVariant = args.theme;
        this._setThemeVariants();
    }
    setCSSVariables(theme, altDomElement) {
        if (this._domElement == null && altDomElement == null) {
            return;
        }
        try {
            const workingDomElement = altDomElement || this._domElement;
            this._currentTheme = theme;
            let themingKeys = Object.keys(theme);
            if (themingKeys !== null) {
                themingKeys.forEach(key => {
                    workingDomElement.style.setProperty(`--${key}`, theme[key]);
                });
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (setCSSVariables) - ${err}`);
        }
    }
}
export const spfxThemes = new SPFxThemes();
export const SPFxThemesContext = React.createContext(new SPFxThemes());
//# sourceMappingURL=SPFxThemes.js.map
