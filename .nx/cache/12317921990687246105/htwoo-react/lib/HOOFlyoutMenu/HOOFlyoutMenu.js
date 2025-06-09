import * as React from "react";
import HOOAction, { HOOActionType } from "../HOOAction/HOOAction";
export class HOOFlyoutMenuState {
    constructor() { }
}
export default class HOOFlyoutMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOFlyoutMenu";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttonflyout";
        this.LOG_SOURCE = props.dataComponent || "💦HOOFlyoutMenu";
        this.state = new HOOFlyoutMenuState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("menu", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.contextItems && this.props.contextItems.map((ci, index) => {
                return (React.createElement("li", { key: ci.label || index, className: "hoo-buttonflyout-item" },
                    React.createElement(HOOAction, { label: ci.label, iconName: ci.iconName, type: HOOActionType.Action, onClick: (event) => { this.props.contextItemClicked(event, ci); } })));
            })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOFlyoutMenu.js.map
