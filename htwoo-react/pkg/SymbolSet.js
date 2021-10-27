var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Logger } from "@pnp/logging";
var SymbolSet = (function () {
    function SymbolSet() {
        this.LOG_SOURCE = "🔶SymbolSet";
        this.defaultLoaded = false;
        this._symbolSetDictionary = {};
    }
    SymbolSet.prototype.initSymbols = function (symbolSetFile) {
        return __awaiter(this, void 0, void 0, function () {
            var result, defaultSymbolSet, loadedDefault, result, symbolSet, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!!this.defaultLoaded) return [3, 3];
                        symbolSetFile = require("./images/icons.svg");
                        return [4, fetch(symbolSetFile)];
                    case 1:
                        result = _a.sent();
                        return [4, result.text()];
                    case 2:
                        defaultSymbolSet = _a.sent();
                        loadedDefault = this.processSymbolSet(defaultSymbolSet);
                        this.defaultLoaded = loadedDefault;
                        _a.label = 3;
                    case 3:
                        if (!(symbolSetFile !== undefined && symbolSetFile.length > 0)) return [3, 6];
                        return [4, fetch(symbolSetFile)];
                    case 4:
                        result = _a.sent();
                        return [4, result.text()];
                    case 5:
                        symbolSet = _a.sent();
                        this.processSymbolSet(symbolSet);
                        _a.label = 6;
                    case 6: return [3, 8];
                    case 7:
                        err_1 = _a.sent();
                        Logger.write(this.LOG_SOURCE + " (initSymbols) - " + err_1, 3);
                        return [3, 8];
                    case 8: return [2];
                }
            });
        });
    };
    SymbolSet.prototype.processSymbolSet = function (symbolSet) {
        var retVal = false;
        try {
            var parser = new DOMParser();
            var symbols = parser.parseFromString(symbolSet, "image/svg+xml");
            var defs = symbols.getElementsByTagName("symbol");
            for (var i = 0; i < defs.length; i++) {
                var s = defs[i];
                var viewBoxString = s.viewBox.baseVal.x + " " + s.viewBox.baseVal.y + " " + s.viewBox.baseVal.width + " " + s.viewBox.baseVal.height;
                var svgElement = "<svg id=" + s.id + " class=\"hoo-icon-svg\" viewBox=\"" + viewBoxString + "\">" + s.innerHTML + "</svg>";
                this._symbolSetDictionary[s.id] = svgElement;
            }
            retVal = true;
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (processSymbolSet) - " + err, 3);
        }
        return retVal;
    };
    SymbolSet.prototype.Icon = function (iconName) {
        return this._symbolSetDictionary[iconName];
    };
    return SymbolSet;
}());
export { SymbolSet };
export var symset = new SymbolSet();

//# sourceMappingURL=SymbolSet.js.map
