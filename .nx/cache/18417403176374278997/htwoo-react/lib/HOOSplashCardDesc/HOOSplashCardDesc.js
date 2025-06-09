import * as React from "react";
export class HOOSplashCardDescState {
    constructor() { }
}
export default class HOOSplashCardDesc extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSplashCardDesc";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-splashcard-desc";
        this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardDesc";
        this.state = new HOOSplashCardDescState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("p", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                this.props.description &&
                    this.props.description,
                !this.props.description &&
                    this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSplashCardDesc.js.map
