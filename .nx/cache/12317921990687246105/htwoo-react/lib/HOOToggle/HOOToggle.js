import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOOToggleState {
    constructor() { }
}
export default class HOOToggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOToggle";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-toggle";
        this._inputClass = "hoo-toggle-cb";
        this._labelClass = "hoo-toggle-label";
        this._toggleId = "hoo-toggle-";
        this.LOG_SOURCE = props.dataComponent || "💦HOOToggle";
        this._toggleId = props.forId || `${this._toggleId}${getRandomString(10)}`;
        this.state = new HOOToggleState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            let inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
            const labelClassName = (this.props.labelElementAttributes?.className) ? `${this._labelClass} ${this.props.labelElementAttributes?.className}` : this._labelClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: rootClassName },
                React.createElement("input", { id: this._toggleId, ...this.props.inputElementAttributes, type: "checkbox", checked: this.props.checked, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, onChange: this.props.onChange, className: inputClassName }),
                !this.props.children &&
                    React.createElement("label", { ...this.props.labelElementAttributes, className: labelClassName, htmlFor: this._toggleId },
                        React.createElement("span", { className: "hoo-toggle-slider" }),
                        React.createElement("span", { className: "hoo-toggle-checked" }, this.props.labelOn || "On"),
                        React.createElement("span", { className: "hoo-toggle-unchecked" }, this.props.labelOff || "Off")),
                (this.props.children) &&
                    this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOToggle.js.map
