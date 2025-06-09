import * as React from "react";
export var HOOTagType;
(function (HOOTagType) {
    HOOTagType["Button"] = "button";
    HOOTagType["Link"] = "link";
    HOOTagType["Static"] = "static";
})(HOOTagType || (HOOTagType = {}));
export var HOOTagStyle;
(function (HOOTagStyle) {
    HOOTagStyle["Primary"] = "primary";
    HOOTagStyle["Standard"] = "standard";
})(HOOTagStyle || (HOOTagStyle = {}));
export class HOOTagState {
    constructor() { }
}
export default class HOOTag extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTag";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-mtag";
        this.LOG_SOURCE = props.dataComponent || "💦HOOTag";
        this.state = new HOOTagState();
        this._componentClass += (props.tagStyle === HOOTagStyle.Primary) ? "-primary" : "";
    }
    render() {
        try {
            let retVal = null;
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            switch (this.props.tagType) {
                case HOOTagType.Button:
                    retVal = React.createElement("button", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                        React.createElement("span", { className: "hoo-mtag-lbl" }, this.props.text));
                    break;
                case HOOTagType.Link:
                    retVal = React.createElement("a", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, href: this.props.linkUrl, target: this.props.linkTarget || "_self" },
                        React.createElement("span", { className: "hoo-mtag-lbl" }, this.props.text));
                    break;
                default:
                    retVal = React.createElement("span", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                        React.createElement("span", { className: "hoo-mtag-lbl" }, this.props.text));
            }
            return retVal;
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTag.js.map
