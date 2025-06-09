import * as React from "react";
import { symset } from "../SymbolSet";
import HOOIcon from "../HOOIcon/HOOIcon";
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
export default class HOOButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOButton";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-button";
        this._hyperlinkType = false;
        this._compoundType = false;
        this.LOG_SOURCE = props.dataComponent || "💦HOOButton";
        switch (props.type) {
            case HOOButtonType.Icon:
                this._componentClass = `${this._componentClass}icon`;
                break;
            case HOOButtonType.Primary:
                this._componentClass = `${this._componentClass}-primary`;
                break;
            case HOOButtonType.HyperlinkPrimary:
                this._componentClass = `${this._componentClass}-primary`;
                this._hyperlinkType = true;
                break;
            case HOOButtonType.HyperlinkStandard:
                this._hyperlinkType = true;
                break;
            case HOOButtonType.CompoundPrimary:
                this._componentClass = `${this._componentClass}comp-primary`;
                this._compoundType = true;
                break;
            case HOOButtonType.CompoundStandard:
                this._componentClass = `${this._componentClass}comp`;
                this._compoundType = true;
                break;
        }
        this.state = {};
    }
    render() {
        if (this.props.reactKey) {
            this._rootProps["key"] = this.props.reactKey;
        }
        if (this.props.iconTitle) {
            this._rootProps["title"] = this.props.iconTitle;
        }
        const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${(this.props.iconRight ? "is-reversed" : "")} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${(this.props.iconRight ? "is-reversed" : "")}`;
        const iconSVG = (this.props.iconName) ? symset.Icon(this.props.iconName, this.props.iconTitle || "") : ((this.props.iconRight) ? symset.Icon(this.props.iconRight, this.props.iconRightTitle) : null);
        const iconName = this.props.iconName || this.props.iconRight || null;
        try {
            return (React.createElement(React.Fragment, null,
                this._hyperlinkType &&
                    React.createElement("a", { ...this._rootProps, ...this.props.rootElementAttributes, href: this.props.href, role: "button", className: className },
                        this.props.label &&
                            React.createElement("span", { className: "hoo-button-label" }, this.props.label),
                        !this.props.label &&
                            this.props.children),
                !this._hyperlinkType &&
                    React.createElement("button", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, onClick: this.props.onClick },
                        this.props.label &&
                            React.createElement(React.Fragment, null,
                                iconSVG &&
                                    React.createElement(HOOIcon, { iconSVG: iconSVG }),
                                React.createElement("span", { className: `hoo-button${this._compoundType ? "comp" : ""}-label` }, this.props.label),
                                this._compoundType &&
                                    React.createElement("span", { className: `hoo-button${this._compoundType ? "comp" : ""}-desc` }, this.props.description)),
                        (this.props.type === HOOButtonType.Icon && iconSVG) &&
                            React.createElement(HOOIcon, { iconSVG: iconSVG }),
                        (!this.props.label || (this.props.type === HOOButtonType.Icon && !this.props.iconName)) &&
                            this.props.children)));
        }
        catch (err) {
            console.error(`${err} - ${this.LOG_SOURCE} (render)`);
        }
    }
}
//# sourceMappingURL=HOOButton.js.map
