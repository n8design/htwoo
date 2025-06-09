import * as React from "react";
export class HOOValidationMsgState {
    constructor() { }
}
export default class HOOValidationMsg extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOValidationMsg";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-validation";
        this.LOG_SOURCE = props.dataComponent || "💦HOOValidationMsg";
        this.state = new HOOValidationMsgState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("output", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.validationMsg));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOValidationMsg.js.map
