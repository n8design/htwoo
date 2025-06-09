import * as React from "react";
export class HOOLoadingState {
    constructor() { }
}
export default class HOOLoading extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOLoading";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-progress";
        this.LOG_SOURCE = props.dataComponent || "💦HOOLoading";
        this.state = new HOOLoadingState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, role: "progressbar", "aria-valuenow": this.props.value, "aria-valuemin": this.props.minValue, "aria-valuemax": this.props.maxValue, title: "Progress", ...this.props.rootElementAttributes, className: className },
                React.createElement("div", { className: "hoo-progress-indicator" })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOLoading.js.map
