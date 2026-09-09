import defaultSymbolSetFile from "./images/hoo-icons.svg";

export interface ISymbolSet {
  initSymbols: (symbolSetFile?: string) => Promise<void>;
  Icon: (iconName: string) => string;
  IconBase64: (iconName: string) => string;
  SearchIconDictionary: (search: string) => string[];
}

export class SymbolSet implements ISymbolSet {
  private LOG_SOURCE: string = "💦SymbolSet";

  private defaultLoaded: boolean = false;
  private _defaultLoadPromise?: Promise<void>;
  private _symbolSetDictionary: { [name: string]: string } = {};

  constructor() {
  }

  // shared by all initSymbols() callers so two calls fired back-to-back (unawaited) don't both start the default fetch
  private _ensureDefaultLoaded(): Promise<void> {
    if (this.defaultLoaded) return Promise.resolve();
    if (!this._defaultLoadPromise) {
      this._defaultLoadPromise = (async (): Promise<void> => {
        try {
          if (defaultSymbolSetFile != null) {
            const defaultResult = await fetch(defaultSymbolSetFile);
            const defaultSymbolSet = await defaultResult.text();
            this.defaultLoaded = this.processSymbolSet(defaultSymbolSet);
          }
        } finally {
          // Load didn't succeed (fetch threw, or the SVG failed to parse) - drop the cached
          // promise so a later initSymbols() call retries instead of being stuck forever.
          if (!this.defaultLoaded) {
            this._defaultLoadPromise = undefined;
          }
        }
      })();
    }
    return this._defaultLoadPromise;
  }

  /**
   * Initializes the SymbolSet service which provides icons for several components.
   * Must be called once to initialize the included default icons, but can be called repeatedly to add
   * additional icons to the dictonary.
   * @param (Optional) symbolSetFile: additional svg icons to load into the dictionary.
   */
  public async initSymbols(symbolSetFile?: string): Promise<void> {
    try {
      await this._ensureDefaultLoaded();

      if (symbolSetFile !== undefined && symbolSetFile.length > 0) {
        const result = await fetch(symbolSetFile);
        const symbolSet = await result.text();
        this.processSymbolSet(symbolSet);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`);
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
        s.firstElementChild?.removeAttribute("xmlns");
        const svgElement = `<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;
        this._symbolSetDictionary[s.id] = svgElement;
      }
      retVal = true;
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`);
    }
    return retVal;
  }

  /**
   * Returns the svg string representation of the icon referenced
   * @param iconName: string - The id/key of the icon to retrieve
   * @returns: string - svg string (<svg>...</svg>)
  */
  public Icon(iconName: string, iconTitle: string = ""): string {
    try {
      const iconSVG = this._symbolSetDictionary[iconName]?.replace("%title%", iconTitle);
      return iconSVG || "<svg />";
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (Icon) - ${err}`);
      return "<svg />";
    }
  }

  /**
   * Returns the base64 encoded string representation of the icon referenced
   * @param iconName: string - The id/key of the icon to retrieve
   * @returns: string - base64 encoded string (data:image/svg+xml;base64,....)
  */
  public IconBase64(iconName: string): string {
    try {
      const iconSvg = this.Icon(iconName);
      return `data:image/svg+xml;base64,${window.btoa(iconSvg)}`;
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`);
      return "";
    }
  }

  /**
   * Performs a case insensitive contains search on keys of Icon dictionary
   * @param search: string - The string to search for
   * @returns: string[] - Array of keys that match search parameter
  */
  public SearchIconDictionary(search: string): string[] {
    let retVal: string[] = [];
    try {
      const keys = Object.keys(this._symbolSetDictionary);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].toLowerCase().includes(search.toLowerCase())) {
          retVal.push(keys[i]);
        }
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`);
    }
    return retVal;
  }
}

export const symset = new SymbolSet();