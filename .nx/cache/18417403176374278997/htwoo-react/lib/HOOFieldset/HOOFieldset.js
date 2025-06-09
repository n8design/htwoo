import * as React from "react";
import HOOLegend from "../HOOLegend";
export var HOOFieldsetType;
(function (HOOFieldsetType) {
    HOOFieldsetType[HOOFieldsetType["Standard"] = 0] = "Standard";
    HOOFieldsetType[HOOFieldsetType["NoOutline"] = 1] = "NoOutline";
    HOOFieldsetType[HOOFieldsetType["Raised"] = 2] = "Raised";
})(HOOFieldsetType || (HOOFieldsetType = {}));
export class HOOFieldsetState {
    constructor() { }
}
export default class HOOFieldset extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOFieldset";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-fieldset";
        if (props.type === HOOFieldsetType.NoOutline) {
            this._componentClass += " no-outline";
        }
        else if (props.type === HOOFieldsetType.Raised) {
            this._componentClass += " raised";
        }
        this.LOG_SOURCE = props.dataComponent || "💦HOOFieldset";
        this.state = new HOOFieldsetState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("fieldset", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className },
                this.props.legendText &&
                    React.createElement(HOOLegend, { legendText: this.props.legendText }),
                this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOFieldset.js.map
