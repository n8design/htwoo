import * as React from "react";
export class HOODocumentCardState {
    constructor() { }
}
export default class HOODocumentCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODocumentCard";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-doccard";
        this.LOG_SOURCE = props.dataComponent || "💦HOODocumentCard";
        this.state = new HOODocumentCardState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("article", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODocumentCard.js.map
