import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOOCheckboxState {
    constructor() { }
}
export default class HOOCheckbox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCheckbox";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-checkbox";
        this._checkboxId = "hoo-checkbox-";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCheckbox";
        this._checkboxId = props.forId || `${this._checkboxId}${getRandomString(10)}`;
        this.state = new HOOCheckboxState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement(React.Fragment, null,
                React.createElement("input", { ...this._rootProps, id: this._checkboxId, ...this.props.rootElementAttributes, type: "checkbox", checked: this.props.checked, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, onChange: this.props.onChange, className: className }),
                React.createElement("label", { htmlFor: this._checkboxId, ...this.props.labelElementAttributes },
                    this.props.label &&
                        this.props.label,
                    !this.props.label &&
                        this.props.children)));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCheckbox.js.map
