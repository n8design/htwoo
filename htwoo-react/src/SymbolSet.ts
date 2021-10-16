import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";

export interface ISymbolSet {
  Icon: (iconName: string) => string;
}

export class SymbolSet implements ISymbolSet {
  private LOG_SOURCE: string = "🔶SymbolSet";

  private _symbolSetDictionary: { [name: string]: any } = {};

  constructor() {
  }

  public async initSymbols(symbolSet?: string): Promise<void> {
    try {
      //Load Default if symbolSetPath is not included
      if (!symbolSet) {
        const symbolSetFile = require("../src/images/icons.svg");
        const result = await fetch(symbolSetFile);
        symbolSet = await result.text();
      }

      //Parse SymbolSet
      const parser = new DOMParser();
      const symbols = parser.parseFromString(symbolSet, "image/svg+xml");
      const defs = symbols.getElementsByTagName("symbol");
      for (let i = 0; i < defs.length; i++) {
        const s = defs[i];
        s.classList.add("hoo-icon-svg");
        const symbolElement = parser.parseFromString(s.outerHTML, 'text/html');
        this._symbolSetDictionary[s.id] = symbolElement.body;
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (initSymbols) - ${err}`, LogLevel.Error);
    }
  }

  public Icon(iconName: string): any {
    return this._symbolSetDictionary[iconName];
  }
}

export const symset = new SymbolSet();