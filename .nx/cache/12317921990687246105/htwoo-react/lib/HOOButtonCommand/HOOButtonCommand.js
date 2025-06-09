import * as React from "react";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
import HOOIcon from "../HOOIcon/HOOIcon";
export var HOOButtonCommandType;
(function (HOOButtonCommandType) {
    HOOButtonCommandType[HOOButtonCommandType["Standard"] = 0] = "Standard";
    HOOButtonCommandType[HOOButtonCommandType["Hyperlink"] = 1] = "Hyperlink";
})(HOOButtonCommandType || (HOOButtonCommandType = {}));
export default class HOOButtonCommand extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOButtonCommand";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttoncmd";
        this._flyoutItemClicked = (event, item) => {
            try {
                event.stopPropagation();
                this.setState({ showFlyout: false });
                if (typeof this.props.flyoutMenuItemClicked == "function") {
                    this.props.flyoutMenuItemClicked(event, item);
                }
            }
            catch (err) {
                console.error(this.LOG_SOURCE, "(_flyoutItemClicked)", err);
            }
        };
        this._onClick = (ev) => {
            try {
                if (this.props.flyoutMenuItems && this.props.flyoutMenuItems.length > 0) {
                    this.setState({ showFlyout: !this.state.showFlyout });
                }
                else {
                    this.props.onClick(ev);
                }
            }
            catch (err) {
                console.error(this.LOG_SOURCE, "(_onClick)", err);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOButtonCommand";
        this.state = { showFlyout: false };
    }
    renderButton(leftIcon, rightIcon) {
        try {
            return (React.createElement("button", { className: "hoo-buttoncmd", "aria-haspopup": "true", title: this.props.label || leftIcon || "Command Button" },
                this.props.children == null &&
                    React.createElement("span", { className: "hoo-button-icon", "aria-hidden": "true" },
                        React.createElement(HOOIcon, { iconName: leftIcon, title: leftIcon })),
                (this.props.label || this.props.children) &&
                    React.createElement("span", { className: "hoo-button-label" }, this.props.label || this.props.children),
                this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0 &&
                    React.createElement("span", { className: "hoo-button-icon hoo-buttonchevron" },
                        React.createElement(HOOIcon, { iconName: rightIcon }))));
        }
        catch (err) {
            console.error(this.LOG_SOURCE, "(renderButton)", err);
        }
    }
    renderHyperlink(leftIcon, rightIcon) {
        try {
            return (React.createElement("a", { href: this.props.href, className: "hoo-buttoncmd", "aria-haspopup": "true" },
                this.props.children == null &&
                    React.createElement("span", { className: "hoo-button-icon", "aria-hidden": "true" },
                        React.createElement(HOOIcon, { iconName: leftIcon, title: leftIcon })),
                (this.props.label || this.props.children) &&
                    React.createElement("span", { className: "hoo-button-label" }, this.props.label || this.props.children),
                this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0 &&
                    React.createElement("span", { className: "hoo-button-icon hoo-buttonchevron" },
                        React.createElement(HOOIcon, { iconName: rightIcon }))));
        }
        catch (err) {
            console.error(this.LOG_SOURCE, "(renderHyperlink)", err);
        }
    }
    render() {
        try {
            const type = (this.props.type == null) ? HOOButtonCommandType.Standard : this.props.type;
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            if (this.state.showFlyout) {
                className += " show-flyout";
            }
            const leftIcon = `${this.props.leftIconName || "hoo-icon-plus"}`;
            const rightIcon = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
            const ariaHaspopup = (this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0) ? { "aria-haspopup": true } : null;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, ...ariaHaspopup, className: className, onClick: this._onClick },
                type === HOOButtonCommandType.Standard &&
                    this.renderButton(leftIcon, rightIcon),
                type === HOOButtonCommandType.Hyperlink &&
                    this.renderHyperlink(leftIcon, rightIcon),
                this.props.flyoutMenuItems && this.props.flyoutMenuItems.length > 0 &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutMenuItems, contextItemClicked: this._flyoutItemClicked })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOButtonCommand.js.map
