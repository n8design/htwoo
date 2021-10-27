export interface ISymbolSet {
    Icon: (iconName: string) => string;
}
export declare class SymbolSet implements ISymbolSet {
    private LOG_SOURCE;
    private defaultLoaded;
    private _symbolSetDictionary;
    constructor();
    initSymbols(symbolSetFile?: string): Promise<void>;
    private processSymbolSet;
    Icon(iconName: string): string;
}
export declare const symset: SymbolSet;
