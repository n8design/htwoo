import * as React from "react";
import { symset } from "../SymbolSet";
export var HOOBreadcrumbType;
(function (HOOBreadcrumbType) {
    HOOBreadcrumbType[HOOBreadcrumbType["Hyperlink"] = 0] = "Hyperlink";
    HOOBreadcrumbType[HOOBreadcrumbType["Button"] = 1] = "Button";
})(HOOBreadcrumbType || (HOOBreadcrumbType = {}));
export class HOOBreadcrumbState {
    constructor() { }
}
export default class HOOBreadcrumb extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOBreadcrumb";
        this._rootProps = { "data-component": this.LOG_SOURCE, "aria-label": "Breadcrumb", "tabindex": "0" };
        this._componentClass = "hoo-breadcrumb";
        this.LOG_SOURCE = props.dataComponent || "💦HOOBreadcrumb";
        this.state = new HOOBreadcrumbState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const iconSVG = (this.props.seperatorIconName) ? symset.Icon(this.props.seperatorIconName, this.props.seperatorIconTitle || "") : null;
            return (React.createElement("nav", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                React.createElement("ol", null, this.props.breadcrumbItems && this.props.breadcrumbItems.map((i, idx) => {
                    const last = (idx === this.props.breadcrumbItems.length - 1) ? { "aria-current": "location" } : null;
                    return (React.createElement("li", { key: i.key, className: "hoo-breadcrumb-item" },
                        this.props.type === HOOBreadcrumbType.Hyperlink &&
                            React.createElement("a", { href: i.href, className: "hoo-breadcrumb-link", ...last }, i.text),
                        this.props.type === HOOBreadcrumbType.Button &&
                            React.createElement("button", { className: "hoo-breadcrumb-link", ...last, onClick: (event) => { this.props.onBreadcrumbClick(event, i.key); } }, i.text),
                        iconSVG && !last &&
                            React.createElement("span", { className: "hoo-breadcrumb-separator", dangerouslySetInnerHTML: { __html: iconSVG } })));
                }))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOBreadcrumb.js.map
