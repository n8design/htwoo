import * as React from "react";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import HOOAction, { HOOActionType } from "../HOOAction";
export default class HOOButtonMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOButtonMenu";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttonmenu";
        this._showMenu = () => {
            try {
                this.setState({ showMenu: !this.state.showMenu });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`);
            }
        };
        this._menuItemClicked = (ev, ci) => {
            try {
                this.props.contextItemClicked(ev, ci);
                this.setState({ showMenu: false });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_menuItemClicked) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOButtonMenu";
        this.state = { showMenu: false };
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const buttonREA = { className: "hoo-buttonicon-flyout", "aria-haspopup": "true" };
            if (this.state.showMenu) {
                className += " show-flyout";
                buttonREA["aria-pressed"] = "true";
            }
            const menuClassName = `hoo-buttonflyout ${(this.props.menuElementAttributes?.className) ? this.props.rootElementAttributes?.className : ""}`;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, "aria-haspopup": "true", className: className },
                React.createElement(HOOButton, { type: HOOButtonType.Icon, iconName: this.props.iconName || "hoo-icon-ellipses", onClick: this._showMenu, rootElementAttributes: buttonREA }),
                React.createElement("menu", { ...this.props.menuElementAttributes, className: menuClassName }, this.props.contextItems && this.props.contextItems.map((ci, index) => {
                    return (React.createElement("li", { key: ci.label || index, className: "hoo-buttonflyout-item" },
                        React.createElement(HOOAction, { label: ci.label, iconName: ci.iconName, type: HOOActionType.Action, onClick: (event) => { this._menuItemClicked(event, ci); } })));
                }))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOButtonMenu.js.map
