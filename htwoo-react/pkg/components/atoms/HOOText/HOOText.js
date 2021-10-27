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
var HOOTextState = (function () {
    function HOOTextState() {
    }
    return HOOTextState;
}());
export { HOOTextState };
var HOOText = (function (_super) {
    __extends(HOOText, _super);
    function HOOText(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOText";
        _this._componentClass = "hoo-input-group";
        _this._inputClass = "hoo-input-text";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOText";
        _this.state = new HOOTextState();
        return _this;
    }
    HOOText.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOText.prototype.render = function () {
        var _a, _b, _c, _d;
        try {
            var rootClassName = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            var inputClassName = ((_c = this.props.inputElementAttributes) === null || _c === void 0 ? void 0 : _c.className) ? this._inputClass + " " + ((_d = this.props.inputElementAttributes) === null || _d === void 0 ? void 0 : _d.className) : this._inputClass;
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: rootClassName }),
                this.props.inputPrefix &&
                    React.createElement("div", { className: "hoo-input-prefix" }, this.props.inputPrefix),
                React.createElement("input", __assign({ className: inputClassName, type: "text", disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, "data-suffix": this.props.inputSuffix, "data-prefix": this.props.inputPrefix }, this.props.inputElementAttributes)),
                this.props.inputSuffix &&
                    React.createElement("div", { className: "hoo-input-suffix" }, this.props.inputSuffix)));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOText;
}(React.Component));
export default HOOText;

//# sourceMappingURL=HOOText.js.map
