import * as React from "react";
export var HOONotifyType;
(function (HOONotifyType) {
    HOONotifyType[HOONotifyType["Success"] = 0] = "Success";
    HOONotifyType[HOONotifyType["Error"] = 1] = "Error";
})(HOONotifyType || (HOONotifyType = {}));
export class HOONotifyLabelState {
    constructor() { }
}
export default class HOONotifyLabel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOONotifyLabel";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo";
        this.LOG_SOURCE = props.dataComponent || "💦HOONotifyLabel";
        switch (this.props.type) {
            case HOONotifyType.Success:
                this._componentClass = `${this._componentClass}-success`;
                break;
            case HOONotifyType.Error:
                this._componentClass = `${this._componentClass}-error`;
                break;
        }
        this.state = new HOONotifyLabelState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("span", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.message));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOONotifyLabel.js.map
