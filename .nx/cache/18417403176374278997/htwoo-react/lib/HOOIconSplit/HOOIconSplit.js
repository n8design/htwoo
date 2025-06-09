import * as React from "react";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../SymbolSet";
import HOOIcon from "../HOOIcon/HOOIcon";
export default class HOOIconSplit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOIconSplit";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttonicon-split";
        this._buttonClicked = () => {
            if (this.props.flyoutContextItems) {
                this.setState({ showFlyout: !this.state.showFlyout });
            }
        };
        this._flyoutItemClicked = (event, item) => {
            this.setState({ showFlyout: false });
            if (typeof this.props.flyoutContextItemsClicked == "function") {
                this.props.flyoutContextItemsClicked(event, item);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOIconSplit";
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
            const leftIconSVG = symset.Icon(this.props.leftIconName, this.props.leftIconTitle || "");
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, "aria-haspopup": "true", className: className },
                React.createElement("button", { className: this._componentClass, "aria-haspopup": "true" },
                    React.createElement(HOOIcon, { iconSVG: leftIconSVG })),
                React.createElement("button", { className: "hoo-buttonicon-split hoo-buttonicon-flyout", onClick: this._buttonClicked, "aria-pressed": this.state.showFlyout, disabled: buttonDisabled, "aria-disabled": buttonDisabled },
                    React.createElement(HOOIcon, { iconSVG: iconSVG, rootElementAttributes: { className: "hoo-buttonchevron" } })),
                this.props.flyoutContextItems &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutContextItems, contextItemClicked: this._flyoutItemClicked })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOIconSplit.js.map
