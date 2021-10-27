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
export var HOOAvatarSize;
(function (HOOAvatarSize) {
    HOOAvatarSize["Px16"] = "16";
    HOOAvatarSize["Px24"] = "24";
    HOOAvatarSize["Px32"] = "32";
    HOOAvatarSize["Px40"] = "40";
    HOOAvatarSize["Px48"] = "48";
})(HOOAvatarSize || (HOOAvatarSize = {}));
var HOOAvatarState = (function () {
    function HOOAvatarState() {
    }
    return HOOAvatarState;
}());
export { HOOAvatarState };
var HOOAvatar = (function (_super) {
    __extends(HOOAvatar, _super);
    function HOOAvatar(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOAvatar";
        _this._componentClass = "hoo-avatar-";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOAvatar";
        _this.state = new HOOAvatarState();
        return _this;
    }
    HOOAvatar.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOAvatar.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? "" + this._componentClass + this.props.size + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : "" + this._componentClass + this.props.size;
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                React.createElement("img", { src: this.props.imageSource, alt: this.props.imageAlt, className: "hoo-avatar-img", height: this.props.size, width: this.props.size, loading: "lazy" }),
                this.props.children));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOAvatar;
}(React.Component));
export default HOOAvatar;

//# sourceMappingURL=HOOAvatar.js.map
