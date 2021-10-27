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
var HOOToggleState = (function () {
    function HOOToggleState() {
    }
    return HOOToggleState;
}());
export { HOOToggleState };
var HOOToggle = (function (_super) {
    __extends(HOOToggle, _super);
    function HOOToggle(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOToggle";
        _this._componentClass = "hoo-toggle";
        _this._inputClass = "hoo-toggle-cb";
        _this._labelClass = "hoo-toggle-label";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOToggle";
        _this.state = new HOOToggleState();
        return _this;
    }
    HOOToggle.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOToggle.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        try {
            var rootClassName = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            var inputClassName = ((_c = this.props.inputElementAttributes) === null || _c === void 0 ? void 0 : _c.className) ? this._inputClass + " " + ((_d = this.props.inputElementAttributes) === null || _d === void 0 ? void 0 : _d.className) : this._inputClass;
            var labelClassName = ((_e = this.props.labelElementAttributes) === null || _e === void 0 ? void 0 : _e.className) ? this._labelClass + " " + ((_f = this.props.labelElementAttributes) === null || _f === void 0 ? void 0 : _f.className) : this._labelClass;
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE, className: rootClassName }, this.props.rootElementAttributes),
                React.createElement("input", { type: "checkbox", value: "", className: inputClassName, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false }),
                React.createElement("label", __assign({}, this.props.labelElementAttributes),
                    this.props.labelOn && this.props.labelOff &&
                        React.createElement("label", { className: labelClassName },
                            React.createElement("span", { className: "hoo-toggle-slider" }),
                            React.createElement("span", { className: "hoo-toggle-checked" }, this.props.labelOn),
                            React.createElement("span", { className: "hoo-toggle-unchecked" }, this.props.labelOff)),
                    (!this.props.labelOn || !this.props.labelOff) &&
                        this.props.children)));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOToggle;
}(React.Component));
export default HOOToggle;

//# sourceMappingURL=HOOToggle.js.map
