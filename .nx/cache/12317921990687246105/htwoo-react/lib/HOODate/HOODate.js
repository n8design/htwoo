import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOODateState {
    constructor() { }
}
export default class HOODate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODate";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-date";
        this._minValue = new Date();
        this._maxValue = new Date();
        this._dateId = "hoo-date-";
        this.LOG_SOURCE = props.dataComponent || "💦HOODate";
        this._dateId = props.forId || `${this._dateId}${getRandomString(10)}`;
        this.state = new HOODateState();
    }
    render() {
        if (this.props.reactKey) {
            this._rootProps["key"] = this.props.reactKey;
        }
        if (!this.props.maxValue && this._maxValue != new Date()) {
            this._maxValue.setFullYear(this._maxValue.getFullYear() + 10);
        }
        if (!this.props.minValue && this._minValue != new Date()) {
            this._minValue.setFullYear(this._minValue.getFullYear() - 10);
        }
        const maxValue = this.props.maxValue || this._maxValue.toISOString().split('T')[0];
        const minValue = this.props.minValue || this._minValue.toISOString().split('T')[0];
        try {
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("input", { id: this._dateId, ...this._rootProps, ...this.props.rootElementAttributes, type: (this.props.supportTime == null || this.props.supportTime == false) ? "date" : "datetime-local", value: this.props.value, className: className, min: minValue, max: maxValue, disabled: this.props.disabled || false, onChange: this.props.onChange }));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODate.js.map
