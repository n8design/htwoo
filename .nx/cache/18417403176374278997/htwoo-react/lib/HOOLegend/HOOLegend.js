import * as React from "react";
export class HOOLegendState {
    constructor() { }
}
export default class HOOLegend extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOLegend";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-legend";
        this.LOG_SOURCE = props.dataComponent || "💦HOOLegend";
        this.state = new HOOLegendState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("legend", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.legendText));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOLegend.js.map
