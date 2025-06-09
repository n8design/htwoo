import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOONumberState {
    constructor() { }
}
export default class HOONumber extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOONumber";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-group";
        this._inputClass = "hoo-input-text";
        this._numberInputId = "hoo-number-";
        this.LOG_SOURCE = props.dataComponent || "💦HOONumber";
        this._numberInputId = props.forId || `${this._numberInputId}${getRandomString(10)}`;
        this.state = new HOONumberState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: rootClassName },
                React.createElement("input", { type: "number", id: this._numberInputId, ...this.props.inputElementAttributes, value: this.props.value, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, className: inputClassName, onChange: this.props.onChange })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOONumber.js.map
