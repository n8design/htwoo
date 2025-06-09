import * as React from "react";
export class HOODialogContentState {
    constructor() { }
}
export default class HOODialogContent extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODialogContent";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-dlgcontent";
        this.LOG_SOURCE = props.dataComponent || "💦HOODialogContent";
        this.state = new HOODialogContentState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODialogContent.js.map
