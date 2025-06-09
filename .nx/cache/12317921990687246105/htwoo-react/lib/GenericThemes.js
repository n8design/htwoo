import React from "react";
export class GenericThemes {
    constructor() {
        this.LOG_SOURCE = "💦GenericThemes";
        this.initThemeHandler = (domElement, defaultTheme) => {
            try {
                this._domElement = domElement;
                this._currentTheme = defaultTheme;
                this.setCSSVariables(defaultTheme);
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
    get currentTheme() {
        return this._currentTheme;
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
export const genericThemes = new GenericThemes();
export const GenericThemesContext = React.createContext(new GenericThemes());
//# sourceMappingURL=GenericThemes.js.map
