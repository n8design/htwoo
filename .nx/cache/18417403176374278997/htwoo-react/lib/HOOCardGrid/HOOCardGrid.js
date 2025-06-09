import * as React from "react";
export class HOOCardGridState {
    constructor() { }
}
export default class HOOCardGrid extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCardGrid";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-cardgrid";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCardGrid";
        this.state = new HOOCardGridState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCardGrid.js.map
