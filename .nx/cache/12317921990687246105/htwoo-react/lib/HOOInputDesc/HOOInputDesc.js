import * as React from "react";
export default class HOOInputDesc extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOHOOInputDesc";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-description";
        this.LOG_SOURCE = props.dataComponent || "💦HOOHOOInputDesc";
        this.state = {};
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("p", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.description));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOInputDesc.js.map
