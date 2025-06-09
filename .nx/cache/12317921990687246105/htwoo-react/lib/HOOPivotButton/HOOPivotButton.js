import * as React from "react";
export class HOOPivotButtonState {
    constructor() { }
}
export default class HOOPivotButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOPivotButton";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-button-pivot";
        this.LOG_SOURCE = props.dataComponent || "💦HOOPivotButton";
        this.state = new HOOPivotButtonState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey.toString();
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            if (this.props.isActive) {
                className += " is-active";
            }
            return (React.createElement("button", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                React.createElement("span", { className: "hoo-pivot-inner", title: this.props.label }, this.props.label)));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOPivotButton.js.map
