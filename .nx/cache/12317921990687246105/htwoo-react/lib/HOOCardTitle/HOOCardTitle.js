import * as React from "react";
export class HOOCardTitleState {
    constructor() { }
}
export default class HOOCardTitle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCardTitle";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-cardtitle";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCardTitle";
        this.state = new HOOCardTitleState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                this.props.title && this.props.title,
                !this.props.title && this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCardTitle.js.map
