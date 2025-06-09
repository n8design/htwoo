import * as React from "react";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
export default class HOOIconOverflow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOIconOverflow";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttonicon-overflow";
        this._showMenu = () => {
            try {
                this.setState({ showMenu: !this.state.showMenu });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOIconOverflow";
        this.state = { showMenu: false };
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            if (this.props.overflow) {
                className += " is-active";
            }
            if (this.state.showMenu) {
                className += " show-flyout";
            }
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, "aria-haspopup": "true", className: className },
                React.createElement(HOOButton, { type: HOOButtonType.Icon, iconName: "hoo-icon-ellipses", onClick: this._showMenu, rootElementAttributes: { className: "hoo-buttonicon-flyout", "aria-haspopup": "true" } }),
                this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOIconOverflow.js.map
