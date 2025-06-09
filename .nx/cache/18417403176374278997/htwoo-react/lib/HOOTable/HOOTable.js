import * as React from "react";
export var HOOTableStyle;
(function (HOOTableStyle) {
    HOOTableStyle[HOOTableStyle["Normal"] = 0] = "Normal";
    HOOTableStyle[HOOTableStyle["Compact"] = 1] = "Compact";
})(HOOTableStyle || (HOOTableStyle = {}));
export default class HOOTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTable";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-table";
        if (props.tableStyle == null) {
            props.tableStyle = HOOTableStyle.Normal;
        }
        this.LOG_SOURCE = props.dataComponent || "💦HOOTable";
        this.state = {};
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            if (this.props.tableStyle === HOOTableStyle.Compact) {
                className += " compact";
            }
            return (React.createElement("table", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTable.js.map
