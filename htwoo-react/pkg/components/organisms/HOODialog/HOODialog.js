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
export var HOODialogType;
(function (HOODialogType) {
    HOODialogType[HOODialogType["Standard"] = 0] = "Standard";
    HOODialogType[HOODialogType["StandardError"] = 1] = "StandardError";
    HOODialogType[HOODialogType["StandardSuccess"] = 2] = "StandardSuccess";
    HOODialogType[HOODialogType["StandardWarning"] = 3] = "StandardWarning";
    HOODialogType[HOODialogType["SidebarLeft"] = 4] = "SidebarLeft";
    HOODialogType[HOODialogType["SidebarRight"] = 5] = "SidebarRight";
})(HOODialogType || (HOODialogType = {}));
var HOODialogState = (function () {
    function HOODialogState() {
    }
    return HOODialogState;
}());
export { HOODialogState };
var HOODialog = (function (_super) {
    __extends(HOODialog, _super);
    function HOODialog(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOODialog";
        _this._componentClass = "hoo-mdldialog-outer";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOODialog";
        switch (props.type) {
            case HOODialogType.StandardError:
                _this._componentClass = _this._componentClass + " is-error";
                break;
            case HOODialogType.StandardSuccess:
                _this._componentClass = _this._componentClass + " is-success";
                break;
            case HOODialogType.StandardWarning:
                _this._componentClass = _this._componentClass + " is-warning";
                break;
            case HOODialogType.SidebarLeft:
                _this._componentClass = _this._componentClass + " is-sidebar-left";
                break;
            case HOODialogType.SidebarRight:
                _this._componentClass = _this._componentClass + " is-sidebar-right";
                break;
        }
        _this.state = new HOODialogState();
        return _this;
    }
    HOODialog.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOODialog.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            if (this.props.visible) {
                className += " is-visible";
            }
            var styleBlock = {};
            if (this.props.width !== undefined) {
                styleBlock["--lqdDialogWidth"] = this.props.width;
            }
            if (this.props.height !== undefined) {
                styleBlock["--lqdDialogHeight"] = this.props.height;
            }
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                React.createElement("div", { className: "hoo-mdldialog", style: styleBlock }, this.props.children)));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOODialog;
}(React.Component));
export default HOODialog;

//# sourceMappingURL=HOODialog.js.map
