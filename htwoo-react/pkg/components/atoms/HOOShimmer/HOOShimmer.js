var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { Logger } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
export var HOOShimmerTheme;
(function (HOOShimmerTheme) {
    HOOShimmerTheme[HOOShimmerTheme["None"] = 0] = "None";
    HOOShimmerTheme[HOOShimmerTheme["Neutral"] = 1] = "Neutral";
    HOOShimmerTheme[HOOShimmerTheme["Primary"] = 2] = "Primary";
    HOOShimmerTheme[HOOShimmerTheme["Fancy"] = 3] = "Fancy";
})(HOOShimmerTheme || (HOOShimmerTheme = {}));
export var HOOShimmerShape;
(function (HOOShimmerShape) {
    HOOShimmerShape[HOOShimmerShape["Container"] = 0] = "Container";
    HOOShimmerShape[HOOShimmerShape["Circle"] = 1] = "Circle";
    HOOShimmerShape[HOOShimmerShape["Row"] = 2] = "Row";
    HOOShimmerShape[HOOShimmerShape["Square"] = 3] = "Square";
    HOOShimmerShape[HOOShimmerShape["Image1:1"] = 4] = "Image1:1";
    HOOShimmerShape[HOOShimmerShape["Image16:9"] = 5] = "Image16:9";
    HOOShimmerShape[HOOShimmerShape["Image16:10"] = 6] = "Image16:10";
})(HOOShimmerShape || (HOOShimmerShape = {}));
var HOOShimmerState = (function () {
    function HOOShimmerState() {
    }
    return HOOShimmerState;
}());
export { HOOShimmerState };
var HOOShimmer = (function (_super) {
    __extends(HOOShimmer, _super);
    function HOOShimmer(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOShimmer";
        _this._componentClass = "hoo-ph";
        _this._imageShape = false;
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOShimmer";
        switch (props.shape) {
            case HOOShimmerShape.Row:
                _this._componentClass = _this._componentClass + "-row";
                break;
            case HOOShimmerShape.Circle:
                _this._componentClass = _this._componentClass + "-circle";
                break;
            case HOOShimmerShape.Square:
                _this._componentClass = _this._componentClass + "-squared";
                break;
            case HOOShimmerShape["Image1:1"]:
                _this._imageShape = true;
                _this._componentClass = _this._componentClass + "-img1x1";
                break;
            case HOOShimmerShape["Image16:9"]:
                _this._imageShape = true;
                _this._componentClass = _this._componentClass + "-img16x9";
                break;
            case HOOShimmerShape["Image16:10"]:
                _this._imageShape = true;
                _this._componentClass = _this._componentClass + "-img16x10";
                break;
            case HOOShimmerShape.Container:
                switch (props.theme) {
                    case HOOShimmerTheme.None:
                        _this._componentClass = "";
                        break;
                    case HOOShimmerTheme.Neutral:
                        _this._componentClass = _this._componentClass + "-neutral";
                        break;
                    case HOOShimmerTheme.Primary:
                        _this._componentClass = _this._componentClass + "-primary";
                        break;
                    case HOOShimmerTheme.Fancy:
                        _this._componentClass = _this._componentClass + "-fancy";
                        break;
                }
                break;
        }
        _this.state = new HOOShimmerState();
        return _this;
    }
    HOOShimmer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOShimmer.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement(React.Fragment, null,
                this._imageShape &&
                    React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }), this.props.children),
                !this._imageShape &&
                    React.createElement("img", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", width: this.props.imageWidth, height: this.props.imageHeight }))));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOShimmer;
}(React.Component));
export default HOOShimmer;

//# sourceMappingURL=HOOShimmer.js.map
