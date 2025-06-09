import * as React from "react";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../SymbolSet";
import HOOIcon from "../HOOIcon/HOOIcon";
export var HOOButtonSplitType;
(function (HOOButtonSplitType) {
    HOOButtonSplitType[HOOButtonSplitType["Standard"] = 0] = "Standard";
    HOOButtonSplitType[HOOButtonSplitType["Primary"] = 1] = "Primary";
})(HOOButtonSplitType || (HOOButtonSplitType = {}));
export default class HOOButtonSplit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOButtonSplit";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-button";
        this._buttonClicked = () => {
            if (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) {
                this.setState({ showFlyout: !this.state.showFlyout });
            }
        };
        this._flyoutItemClicked = (event, item) => {
            this.setState({ showFlyout: false });
            if (typeof this.props.flyoutContextItemsClicked == "function") {
                this.props.flyoutContextItemsClicked(event, item);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOButtonSplit";
        switch (props.type) {
            case HOOButtonSplitType.Primary:
                this._componentClass = `${this._componentClass}split-primary`;
                break;
            case HOOButtonSplitType.Standard:
                this._componentClass = `${this._componentClass}split`;
                break;
        }
        this.state = { showFlyout: false };
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const buttonDisabled = (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) ? false : true;
            const showFlyoutClass = this.state.showFlyout ? "show-flyout " : "";
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${showFlyoutClass}${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${showFlyoutClass}`;
            const iconName = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
            const iconSVG = symset.Icon(iconName, this.props.rightIconTitle || "");
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, "aria-haspopup": "true", className: className },
                React.createElement("button", { className: "hoo-buttonsplit-standard", "aria-haspopup": "true" },
                    React.createElement("span", { className: "hoo-button-label" }, this.props.label || this.props.children)),
                React.createElement("button", { className: "hoo-buttonsplit-carret", onClick: this._buttonClicked, "aria-pressed": this.state.showFlyout, disabled: buttonDisabled, "aria-disabled": buttonDisabled },
                    React.createElement(HOOIcon, { iconSVG: iconSVG, rootElementAttributes: { className: "hoo-button-label" } })),
                this.props.flyoutContextItems &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutContextItems, contextItemClicked: this._flyoutItemClicked })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOButtonSplit.js.map
