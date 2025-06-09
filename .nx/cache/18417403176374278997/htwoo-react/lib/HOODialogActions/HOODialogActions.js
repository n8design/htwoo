import * as React from "react";
export class HOODialogActionsState {
    constructor() { }
}
export default class HOODialogActions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODialogActions";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-dlg-actions";
        this.LOG_SOURCE = props.dataComponent || "💦HOODialogActions";
        this.state = new HOODialogActionsState();
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
//# sourceMappingURL=HOODialogActions.js.map
