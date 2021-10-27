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
import HOOIcon from "../HOOIcon/HOOIcon";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
export var HOOActionType;
(function (HOOActionType) {
    HOOActionType[HOOActionType["Action"] = 0] = "Action";
    HOOActionType[HOOActionType["Command"] = 1] = "Command";
    HOOActionType[HOOActionType["Context"] = 2] = "Context";
})(HOOActionType || (HOOActionType = {}));
var HOOActionState = (function () {
    function HOOActionState() {
    }
    return HOOActionState;
}());
export { HOOActionState };
var HOOAction = (function (_super) {
    __extends(HOOAction, _super);
    function HOOAction(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOAction";
        _this._componentClass = "hoo-button";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOAction";
        switch (props.type) {
            case HOOActionType.Action:
                _this._componentClass = _this._componentClass + "action";
                break;
            case HOOActionType.Command:
                _this._componentClass = _this._componentClass + "cmd";
                break;
            case HOOActionType.Context:
                _this._componentClass = _this._componentClass + "context";
                break;
        }
        _this.state = new HOOActionState();
        return _this;
    }
    HOOAction.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOAction.prototype.render = function () {
        var _a, _b, _c;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement(React.Fragment, null,
                React.createElement("button", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                    this.props.label &&
                        React.createElement(React.Fragment, null,
                            React.createElement("span", { className: "hoo-button-icon", "aria-hidden": "true" },
                                React.createElement(HOOIcon, { iconName: this.props.iconName })),
                            React.createElement("span", { className: "hoo-button-label" }, this.props.label),
                            this.props.type !== HOOActionType.Action && ((_c = this.props.flyoutContextItems) === null || _c === void 0 ? void 0 : _c.length) > 0 &&
                                React.createElement("span", { className: "hoo-button-icon hoo-buttonchevron" },
                                    React.createElement(HOOIcon, { iconName: "hoo-icon-arrow-down" }))),
                    !this.props.label &&
                        this.props.children),
                this.props.flyoutContextItems &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutContextItems })));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOAction;
}(React.Component));
export default HOOAction;

//# sourceMappingURL=HOOAction.js.map
