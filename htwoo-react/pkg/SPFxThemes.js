import { Logger } from "@pnp/logging";
var SPFxThemes = (function () {
    function SPFxThemes() {
        var _this = this;
        this.LOG_SOURCE = "🔶SPFxThemes";
        this.initThemeHandler = function (domElement, themeProvider) {
            try {
                _this._domElement = domElement;
                _this._themeProvider = themeProvider;
                _this._themeVariant = _this._themeProvider.tryGetTheme();
                if (_this._themeVariant) {
                    console.log("LOG Theme variant:::", _this._themeVariant);
                    _this.setCSSVariables(_this._themeVariant.semanticColors);
                    _this.setCSSVariables(_this._themeVariant.fonts);
                    _this.setCSSVariables(_this._themeVariant.palette);
                    _this.setCSSVariables(_this._themeVariant["effects"]);
                }
                else {
                    _this.setCSSVariables(window["__themeState__"].theme);
                }
                _this._themeProvider.themeChangedEvent.add(_this, _this._handleThemeChangedEvent);
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (initThemeHandler) - " + err, 3);
            }
        };
    }
    SPFxThemes.prototype._handleThemeChangedEvent = function (args) {
        this._themeVariant = args.theme;
    };
    SPFxThemes.prototype.setCSSVariables = function (theming) {
        var _this = this;
        var themingKeys = Object.keys(theming);
        if (themingKeys !== null) {
            themingKeys.forEach(function (key) {
                _this._domElement.style.setProperty("--" + key, theming[key]);
            });
        }
    };
    return SPFxThemes;
}());
export { SPFxThemes };

//# sourceMappingURL=SPFxThemes.js.map
