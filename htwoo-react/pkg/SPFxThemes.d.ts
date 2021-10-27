export interface ISPFxThemes {
    initThemeHandler: (domElement: HTMLElement, themeVariant: any) => void;
}
export declare class SPFxThemes implements ISPFxThemes {
    private LOG_SOURCE;
    private _domElement;
    private _themeProvider;
    private _themeVariant;
    constructor();
    initThemeHandler: (domElement: HTMLElement, themeProvider: any) => void;
    private _handleThemeChangedEvent;
    private setCSSVariables;
}
