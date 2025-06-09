import * as React from "react";
export default class HOOQuickLinkGrid extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOQuickLinkGrid";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-ql-grid";
        this.LOG_SOURCE = props.dataComponent || "💦HOOQuickLinkGrid";
        this.state = {};
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
//# sourceMappingURL=HOOQuickLinkGrid.js.map
