import * as React from "react";
import HOOProgressBar from "../HOOProgressBar";
import HOOProgressStep from "../HOOProgressStep/HOOProgressStep";
export class HOOProgressStepBarState {
    constructor(progressBar = null, progressStep = []) {
        this.progressBar = progressBar;
        this.progressStep = progressStep;
    }
}
export default class HOOProgressStepBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOProgressStepBar";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-progress-stepbar";
        this.LOG_SOURCE = props.dataComponent || "💦HOOProgressStepBar";
        this.state = new HOOProgressStepBarState();
    }
    static getDerivedStateFromProps(props, state) {
        try {
            let progressBar = null;
            let progressStep = [];
            props.children.forEach((e) => {
                if (React.isValidElement(e)) {
                    const element = e;
                    if (element.type === HOOProgressBar) {
                        progressBar = element;
                    }
                    else if (element.type === HOOProgressStep) {
                        progressStep.push(element);
                    }
                }
            });
            return { progressBar, progressStep };
        }
        catch (err) {
            console.error("💦HOOField", "(getDerivedStateFromProps)", err);
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className },
                this.state.progressBar,
                this.state.progressStep));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOProgressStepBar.js.map
