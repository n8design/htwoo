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
import isEqual from 'lodash/isEqual';
var LQDButtonState = (function () {
    function LQDButtonState() {
    }
    return LQDButtonState;
}());
export { LQDButtonState };
var LQDButton = (function (_super) {
    __extends(LQDButton, _super);
    function LQDButton(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "LQDButton";
        _this.renderButton = function () {
            var element = null;
            try {
                var className = (_this.props.rootElementAttributes.className) ? "lqd-button " + _this.props.rootElementAttributes.className : "lqd-button";
                element = React.createElement("button", __assign({ "data-component": _this.LOG_SOURCE }, _this.props.rootElementAttributes, { className: className }), _this.props.label || _this.props.children);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (renderButton)", 3);
            }
            return element;
        };
        _this.LOG_SOURCE = props.dataComponent || "LQDButton";
        _this.state = new LQDButtonState();
        return _this;
    }
    LQDButton.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    LQDButton.prototype.render = function () {
        return this.renderButton();
    };
    return LQDButton;
}(React.Component));
export default LQDButton;

//# sourceMappingURL=LQDButton.js.map
