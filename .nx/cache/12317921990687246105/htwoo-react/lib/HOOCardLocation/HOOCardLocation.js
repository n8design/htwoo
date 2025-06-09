import * as React from "react";
export class HOOCardLocationState {
    constructor() { }
}
export default class HOOCardLocation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCardLocation";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-cardlocation";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCardLocation";
        this.state = new HOOCardLocationState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                this.props.location && this.props.location,
                !this.props.location && this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCardLocation.js.map
