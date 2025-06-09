import * as React from "react";
import { symset } from "../SymbolSet";
export class HOOIconState {
    constructor() { }
}
export default class HOOIcon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOIcon";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this.componentClass = "hoo-icon";
        this.LOG_SOURCE = props.dataComponent || "💦HOOIcon";
        this.state = new HOOIconState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
            const iconSVG = this.props.iconSVG || symset.Icon(this.props.iconName, this.props.title || "<span/>");
            return (React.createElement(React.Fragment, null,
                React.createElement("span", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, dangerouslySetInnerHTML: { __html: iconSVG } }),
                React.createElement("span", { className: "hidden-visually" }, this.props.iconLabel || this.props.iconName || "Icon")));
        }
        catch (err) {
            console.error(`${err} - ${this.LOG_SOURCE} (render)`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOIcon.js.map
