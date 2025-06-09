import * as React from "react";
import { getRandomString } from "../common/Common";
export class HOOTimeState {
    constructor() { }
}
export default class HOOTime extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTime";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-time";
        this._minValue = "00:00:00";
        this._maxValue = "23:59:59";
        this._timeId = "hoo-time-";
        this.LOG_SOURCE = props.dataComponent || "💦HOOTime";
        this._timeId = props.forId || `${this._timeId}${getRandomString(10)}`;
        this.state = new HOOTimeState();
    }
    render() {
        if (this.props.reactKey) {
            this._rootProps["key"] = this.props.reactKey;
        }
        const maxValue = this.props.maxValue || this._maxValue;
        const minValue = this.props.minValue || this._minValue;
        try {
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("input", { ...this._rootProps, id: this._timeId, ...this.props.rootElementAttributes, type: "time", value: this.props.value, className: className, min: minValue, max: maxValue, disabled: this.props.disabled || false, onChange: this.props.onChange }));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTime.js.map
