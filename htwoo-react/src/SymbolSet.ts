import { Logger, LogLevel } from "@pnp/logging";


export interface ISymbolSet {
  Icon: (iconName: string) => string;
}

export class SymbolSet implements ISymbolSet {
  private LOG_SOURCE: string = "🔶SymbolSet";

  private _symbolSetDictionary: { [name: string]: string } = {};

  constructor() {
  }

  /**
   * (Optional) symbolSet: text representation of a set of icons.
   */
  public async initSymbols(symbolSetFile?: string): Promise<void> {
    try {
      let symbolSet: string = null;
      //Load Default if symbolSetPath is not included
      if (!symbolSetFile) {
        symbolSetFile = require("./images/icons.svg");
        const result = await fetch(symbolSetFile);
        symbolSet = await result.text();
      } else {
        const result = await fetch(symbolSetFile);
        symbolSet = await result.text();
      }

      if (symbolSet !== null) {
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
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (initSymbols) - ${err}`, LogLevel.Error);
    }
  }

  public Icon(iconName: string): string {
    return this._symbolSetDictionary[iconName];
  }
}

export const symset = new SymbolSet();