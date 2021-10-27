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
import { symset } from "../../../SymbolSet";
var HOOIconState = (function () {
    function HOOIconState() {
    }
    return HOOIconState;
}());
export { HOOIconState };
var HOOIcon = (function (_super) {
    __extends(HOOIcon, _super);
    function HOOIcon(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOIcon";
        _this.componentClass = "hoo-icon";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOIcon";
        _this.state = new HOOIconState();
        return _this;
    }
    HOOIcon.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOIcon.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this.componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this.componentClass;
            var iconSVG = this.props.iconSVG || symset.Icon(this.props.iconName);
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className, "aria-label": this.props.iconName, dangerouslySetInnerHTML: { __html: iconSVG } })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3);
            return null;
        }
    };
    return HOOIcon;
}(React.Component));
export default HOOIcon;

//# sourceMappingURL=HOOIcon.js.map
