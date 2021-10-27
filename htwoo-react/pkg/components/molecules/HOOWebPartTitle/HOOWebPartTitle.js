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
var HOOWebPartTitleState = (function () {
    function HOOWebPartTitleState() {
    }
    return HOOWebPartTitleState;
}());
export { HOOWebPartTitleState };
var HOOWebPartTitle = (function (_super) {
    __extends(HOOWebPartTitle, _super);
    function HOOWebPartTitle(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOWebPartTitle";
        _this._componentClass = "hoo-webpart-header";
        _this.saveTitle = function (event) {
            event.preventDefault();
            var title = event.target.innerText;
            _this.props.updateTitle(title);
        };
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOWebPartTitle";
        _this.state = new HOOWebPartTitleState();
        return _this;
    }
    HOOWebPartTitle.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOWebPartTitle.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement("h3", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                React.createElement("div", { role: "textbox", placeholder: this.props.placeholder || "", "aria-placeholder": this.props.placeholder || "", contentEditable: this.props.editMode, suppressContentEditableWarning: true, onBlur: this.saveTitle }, this.props.title || this.props.children)));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3);
            return null;
        }
    };
    return HOOWebPartTitle;
}(React.Component));
export default HOOWebPartTitle;

//# sourceMappingURL=HOOWebPartTitle.js.map
