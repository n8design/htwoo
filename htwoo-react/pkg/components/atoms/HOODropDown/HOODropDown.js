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
var HOODropDownState = (function () {
    function HOODropDownState() {
    }
    return HOODropDownState;
}());
export { HOODropDownState };
var HOODropDown = (function (_super) {
    __extends(HOODropDown, _super);
    function HOODropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOODropDown";
        _this._componentClass = "hoo-select-dropdown ";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOODropDown";
        _this.state = new HOODropDownState();
        return _this;
    }
    HOODropDown.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOODropDown.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement("ul", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }), this.props.options && this.props.options.map(function (g) {
                return (React.createElement("li", { className: "hoo-optgroup" },
                    g.groupName.length > 0 &&
                        React.createElement("div", { className: "hoo-optgroup-name" }, g.groupName),
                    React.createElement("ul", { className: "hoo-optgroup-items" }, g.groupItems && g.groupItems.map(function (i) {
                        return (React.createElement("li", { "data-value": i.key, className: "hoo-option " + (i.disabled ? "is-disabled" : ""), "aria-disabled": i.disabled }, i.text));
                    }))));
            })));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOODropDown;
}(React.Component));
export default HOODropDown;

//# sourceMappingURL=HOODropDown.js.map
