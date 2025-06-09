import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOORadioButtonState {
    constructor() { }
}
export default class HOORadioButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOORadioButton";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-radio";
        this._radioId = "hoo-radio-";
        this.LOG_SOURCE = props.dataComponent || "💦HOORadioButton";
        this._radioId = props.forId || `${this._radioId}${getRandomString(10)}`;
        this.state = new HOORadioButtonState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement(React.Fragment, null,
                React.createElement("input", { ...this._rootProps, id: this._radioId, ...this.props.rootElementAttributes, type: "radio", checked: this.props.checked, value: this.props.value, className: className, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, onChange: this.props.onChange }),
                React.createElement("label", { htmlFor: this._radioId, ...this.props.labelElementAttributes },
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
//# sourceMappingURL=HOORadioButton.js.map
