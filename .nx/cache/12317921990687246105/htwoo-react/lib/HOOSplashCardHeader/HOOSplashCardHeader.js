import * as React from "react";
export class HOOSplashCardHeaderState {
    constructor() { }
}
export default class HOOSplashCardHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSplashCardHeader";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-splashcard-header";
        this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardHeader";
        this.state = new HOOSplashCardHeaderState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("header", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, role: "presentation" },
                this.props.imageSource &&
                    React.createElement("img", { src: this.props.imageSource, alt: this.props.imageAlt, className: "hoo-splashcard-img" }),
                !this.props.imageSource &&
                    this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSplashCardHeader.js.map
