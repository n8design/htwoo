import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOOTextState {
    constructor() { }
}
export default class HOOText extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOText";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-group";
        this._inputClass = "hoo-input-text";
        this._textId = "hoo-text-";
        this.LOG_SOURCE = props.dataComponent || "💦HOOText";
        this._textId = props.forId || `${this._textId}${getRandomString(10)}`;
        this.state = new HOOTextState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
            return (React.createElement(React.Fragment, null,
                !this.props.multiline &&
                    React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: rootClassName },
                        this.props.inputPrefix &&
                            React.createElement("div", { className: "hoo-input-prefix" }, this.props.inputPrefix),
                        React.createElement("input", { id: this._textId, ...this.props.inputElementAttributes, type: this.props.inputType || "text", value: this.props.value, disabled: this.props.disabled || false, "aria-disabled": this.props.disabled || false, "data-suffix": this.props.inputSuffix || null, "data-prefix": this.props.inputPrefix || null, className: inputClassName, onChange: this.props.onChange }),
                        this.props.inputSuffix &&
                            React.createElement("div", { className: "hoo-input-suffix" }, this.props.inputSuffix)),
                this.props.multiline &&
                    React.createElement("textarea", { ...this._rootProps, ...this.props.inputElementAttributes, className: inputClassName, rows: this.props.multiline, value: this.props.value, onChange: this.props.onChange })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOText.js.map
