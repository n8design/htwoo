import * as React from "react";
export class HOOProgressBarState {
    constructor() { }
}
export default class HOOProgressBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOProgressBar";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-progress-bar";
        this.LOG_SOURCE = props.dataComponent || "💦HOOProgressBar";
        this.state = new HOOProgressBarState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("progress", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className, value: this.props.value, max: "100" },
                this.props.value,
                "%"));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOProgressBar.js.map
