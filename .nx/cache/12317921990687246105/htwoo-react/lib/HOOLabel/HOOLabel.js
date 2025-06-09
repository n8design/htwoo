import * as React from "react";
export class HOOLabelState {
    constructor() { }
}
export default class HOOLabel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOLabel";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-label";
        this.LOG_SOURCE = props.dataComponent || "💦HOOLabel";
        this.state = new HOOLabelState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const isRequired = (this.props.required) ? "is-required" : "";
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}` : `${this._componentClass} ${isRequired}`;
            return ((this.props.label) ?
                React.createElement("label", { ...this._rootProps, ...this.props.rootElementAttributes, htmlFor: this.props.for, className: className }, this.props.label)
                : React.createElement("label", { ...this._rootProps, ...this.props.rootElementAttributes, htmlFor: this.props.for, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOLabel.js.map
