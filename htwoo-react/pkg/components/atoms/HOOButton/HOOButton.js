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
import isEqual from 'lodash-es/isEqual';
export var HOOButtonType;
(function (HOOButtonType) {
    HOOButtonType[HOOButtonType["Icon"] = 0] = "Icon";
    HOOButtonType[HOOButtonType["Primary"] = 1] = "Primary";
    HOOButtonType[HOOButtonType["Standard"] = 2] = "Standard";
    HOOButtonType[HOOButtonType["HyperlinkPrimary"] = 3] = "HyperlinkPrimary";
    HOOButtonType[HOOButtonType["HyperlinkStandard"] = 4] = "HyperlinkStandard";
    HOOButtonType[HOOButtonType["CompoundPrimary"] = 5] = "CompoundPrimary";
    HOOButtonType[HOOButtonType["CompoundStandard"] = 6] = "CompoundStandard";
})(HOOButtonType || (HOOButtonType = {}));
var HOOButtonState = (function () {
    function HOOButtonState() {
    }
    return HOOButtonState;
}());
export { HOOButtonState };
var HOOButton = (function (_super) {
    __extends(HOOButton, _super);
    function HOOButton(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOButton";
        _this._componentClass = "hoo-button";
        _this._hyperlinkType = false;
        _this._compoundType = false;
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOButton";
        switch (props.type) {
            case HOOButtonType.Icon:
                _this._componentClass = _this._componentClass + "icon";
                break;
            case HOOButtonType.Primary:
                _this._componentClass = _this._componentClass + "-primary";
                break;
            case HOOButtonType.HyperlinkPrimary:
                _this._componentClass = _this._componentClass + "-primary";
                _this._hyperlinkType = true;
                break;
            case HOOButtonType.HyperlinkStandard:
                _this._hyperlinkType = true;
                break;
            case HOOButtonType.CompoundPrimary:
                _this._componentClass = _this._componentClass + "comp-primary";
                _this._compoundType = true;
                break;
            case HOOButtonType.CompoundStandard:
                _this._componentClass = _this._componentClass + "comp-standard";
                _this._compoundType = true;
                break;
        }
        _this.state = new HOOButtonState();
        return _this;
    }
    HOOButton.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOButton.prototype.render = function () {
        var _a, _b;
        var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
        try {
            return (React.createElement(React.Fragment, null,
                this._hyperlinkType &&
                    React.createElement("a", __assign({ href: this.props.href, role: "button", "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                        this.props.label &&
                            React.createElement("div", { className: "hoo-button-label" }, this.props.label),
                        !this.props.label &&
                            this.props.children),
                !this._hyperlinkType &&
                    React.createElement("button", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className, disabled: this.props.disabled, "aria-label": this.props.label, "aria-disabled": this.props.disabled, onClick: this.props.onClick }),
                        this.props.label &&
                            React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "hoo-button" + (this._compoundType ? "comp" : "") + "-label" }, this.props.label),
                                this._compoundType &&
                                    React.createElement("div", { className: "hoo-button" + (this._compoundType ? "comp" : "") + "-desc" }, this.props.description)),
                        !this.props.label &&
                            this.props.children)));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3);
        }
    };
    return HOOButton;
}(React.Component));
export default HOOButton;

//# sourceMappingURL=HOOButton.js.map
