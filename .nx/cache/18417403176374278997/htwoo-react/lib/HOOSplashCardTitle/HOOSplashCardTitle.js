import * as React from "react";
export class HOOSplashCardTitleState {
    constructor() { }
}
export default class HOOSplashCardTitle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSplashCardTitle";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-splashcard-title";
        this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardTitle";
        this.state = new HOOSplashCardTitleState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("h1", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                this.props.title &&
                    this.props.title,
                !this.props.title &&
                    this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSplashCardTitle.js.map
