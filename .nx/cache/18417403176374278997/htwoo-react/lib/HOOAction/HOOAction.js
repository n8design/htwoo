import * as React from "react";
import HOOIcon from "../HOOIcon/HOOIcon";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
export var HOOActionType;
(function (HOOActionType) {
    HOOActionType[HOOActionType["Action"] = 0] = "Action";
})(HOOActionType || (HOOActionType = {}));
export default class HOOAction extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOAction";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-buttonaction";
        this._labelClass = "hoo-button-label";
        this.LOG_SOURCE = props.dataComponent || "💦HOOAction";
        this.state = {};
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const labelClass = (this.props.labelElementAttributes?.className) ? `${this._labelClass} ${this.props.labelElementAttributes?.className}` : this._labelClass;
            return (React.createElement(React.Fragment, null,
                React.createElement("button", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                    this.props.label &&
                        React.createElement(React.Fragment, null,
                            React.createElement("span", { className: "hoo-button-icon", "aria-hidden": "true" },
                                React.createElement(HOOIcon, { iconName: this.props.iconName })),
                            React.createElement("span", { ...this.props.labelElementAttributes, className: labelClass }, this.props.label),
                            this.props.type !== HOOActionType.Action && this.props.flyoutContextItems?.length > 0 &&
                                React.createElement("span", { className: "hoo-button-icon hoo-buttonchevron" },
                                    React.createElement(HOOIcon, { iconName: "hoo-icon-arrow-down" }))),
                    !this.props.label &&
                        this.props.children),
                this.props.flyoutContextItems &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutContextItems, contextItemClicked: this.props.onClick })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOAction.js.map
