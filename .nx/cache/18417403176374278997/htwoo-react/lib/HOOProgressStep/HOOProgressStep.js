import * as React from "react";
export class HOOProgressStepState {
    constructor() { }
}
export default class HOOProgressStep extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOProgressStep";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-progress-step";
        this.LOG_SOURCE = props.dataComponent || "💦HOOProgressStep";
        this.state = new HOOProgressStepState();
    }
    render() {
        try {
            let styleblock = {};
            styleblock["--step-offset"] = `${this.props.offsetPercent}%`;
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className, style: styleblock },
                React.createElement("div", { className: "inner" },
                    React.createElement("div", { className: "hoo-progress-step-indicator" }),
                    React.createElement("div", { className: "hoo-progress-step-label" }, this.props.label))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOProgressStep.js.map
