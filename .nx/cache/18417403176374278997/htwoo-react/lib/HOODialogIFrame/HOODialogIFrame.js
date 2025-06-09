import * as React from "react";
export var HOOIFrameRatio;
(function (HOOIFrameRatio) {
    HOOIFrameRatio["3by4"] = "3by4";
    HOOIFrameRatio["squared"] = "squared";
    HOOIFrameRatio["16by9"] = "16by9";
})(HOOIFrameRatio || (HOOIFrameRatio = {}));
export class HOODialogIFrameState {
    constructor() { }
}
export default class HOODialogIFrame extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODialogIFrame";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-dlg-iframe";
        this.LOG_SOURCE = props.dataComponent || "💦HOODialogIFrame";
        this.state = new HOODialogIFrameState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const ratio = (this.props.ratio) ? `ratio-${this.props.ratio}` : "";
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${ratio} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${ratio}`;
            return (React.createElement("iframe", { ...this._rootProps, title: this.props.src, ...this.props.rootElementAttributes, className: className, ref: this.props.iFrameRef, src: this.props.src }));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODialogIFrame.js.map
