import defaultSymbolSetFile from "./images/hoo-icons.svg";
export class SymbolSet {
    constructor() {
        this.LOG_SOURCE = "💦SymbolSet";
        this.defaultLoaded = false;
        this._symbolSetDictionary = {};
    }
    async initSymbols(symbolSetFile) {
        try {
            if (!this.defaultLoaded && defaultSymbolSetFile != null) {
                const defaultResult = await fetch(defaultSymbolSetFile);
                const defaultSymbolSet = await defaultResult.text();
                const loadedDefault = this.processSymbolSet(defaultSymbolSet);
                this.defaultLoaded = loadedDefault;
            }
            if (symbolSetFile !== undefined && symbolSetFile.length > 0) {
                const result = await fetch(symbolSetFile);
                const symbolSet = await result.text();
                this.processSymbolSet(symbolSet);
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`);
        }
    }
    processSymbolSet(symbolSet) {
        let retVal = false;
        try {
            const parser = new DOMParser();
            const symbols = parser.parseFromString(symbolSet, "image/svg+xml");
            const defs = symbols.getElementsByTagName("symbol");
            for (let i = 0; i < defs.length; i++) {
                const s = defs[i];
                const viewBoxString = `${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;
                s.firstElementChild.removeAttribute("xmlns");
                const svgElement = `<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;
                this._symbolSetDictionary[s.id] = svgElement;
            }
            retVal = true;
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`);
        }
        return retVal;
    }
    Icon(iconName, iconTitle = "") {
        try {
            const iconSVG = this._symbolSetDictionary[iconName]?.replace("%title%", iconTitle);
            return iconSVG || "<svg />";
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (Icon) - ${err}`);
            return null;
        }
    }
    IconBase64(iconName) {
        try {
            const iconSvg = this.Icon(iconName);
            return `data:image/svg+xml;base64,${window.btoa(iconSvg)}`;
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`);
            return null;
        }
    }
    SearchIconDictionary(search) {
        let retVal = [];
        try {
            const keys = Object.keys(this._symbolSetDictionary);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].toLowerCase().includes(search.toLowerCase())) {
                    retVal.push(keys[i]);
                }
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`);
        }
        return retVal;
    }
}
export const symset = new SymbolSet();
//# sourceMappingURL=SymbolSet.js.map
