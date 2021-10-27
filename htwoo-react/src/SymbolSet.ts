import { Logger, LogLevel } from "@pnp/logging";


export interface ISymbolSet {
  Icon: (iconName: string) => string;
}

export class SymbolSet implements ISymbolSet {
  private LOG_SOURCE: string = "🔶SymbolSet";

  private defaultLoaded: boolean = false;
  private _symbolSetDictionary: { [name: string]: string } = {};

  constructor() {
  }

  /**
   * (Optional) symbolSet: text representation of a set of icons.
   */
  public async initSymbols(symbolSetFile?: string): Promise<void> {
    try {
      //Load Default if not already processed
      if (!this.defaultLoaded) {
        symbolSetFile = require("./images/icons.svg");
        const result = await fetch(symbolSetFile);
        const defaultSymbolSet = await result.text();
        const loadedDefault = this.processSymbolSet(defaultSymbolSet);
        this.defaultLoaded = loadedDefault;
      }

      if (symbolSetFile !== undefined && symbolSetFile.length > 0) {
        const result = await fetch(symbolSetFile);
        const symbolSet = await result.text();
        this.processSymbolSet(symbolSet);
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (initSymbols) - ${err}`, LogLevel.Error);
    }
  }

  private processSymbolSet(symbolSet: string): boolean {
    let retVal: boolean = false;
    try {
      //Parse SymbolSet
      const parser = new DOMParser();
      const symbols = parser.parseFromString(symbolSet, "image/svg+xml");
      const defs = symbols.getElementsByTagName("symbol");
      for (let i = 0; i < defs.length; i++) {
        const s = defs[i];
        const viewBoxString = `${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;
        const svgElement = `<svg id=${s.id} class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;
        this._symbolSetDictionary[s.id] = svgElement;
      }
      retVal = true;
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`, LogLevel.Error);
    }
    return retVal;
  }

  public Icon(iconName: string): string {
    return this._symbolSetDictionary[iconName];
  }
}

export const symset = new SymbolSet();