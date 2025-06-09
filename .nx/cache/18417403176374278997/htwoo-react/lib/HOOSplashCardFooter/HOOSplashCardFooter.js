import * as React from "react";
export class HOOSplashCardFooterState {
    constructor() { }
}
export default class HOOSplashCardFooter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSplashCardFooter";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-splashcard-footer";
        this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardFooter";
        this.state = new HOOSplashCardFooterState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("footer", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSplashCardFooter.js.map
