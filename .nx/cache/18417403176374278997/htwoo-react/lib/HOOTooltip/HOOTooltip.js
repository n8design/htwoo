import * as React from "react";
export var HOOTipPosition;
(function (HOOTipPosition) {
    HOOTipPosition["TopLeft"] = "top-left";
    HOOTipPosition["TopCenter"] = "top-center";
    HOOTipPosition["TopRight"] = "top-right";
    HOOTipPosition["RightTop"] = "right-top";
    HOOTipPosition["RightCenter"] = "right-center";
    HOOTipPosition["RightBottom"] = "right-bottom";
    HOOTipPosition["BottomLeft"] = "bottom-left";
    HOOTipPosition["BottomCenter"] = "bottom-center";
    HOOTipPosition["BottomRight"] = "bottom-right";
    HOOTipPosition["LeftTop"] = "left-top";
    HOOTipPosition["LeftCenter"] = "left-center";
    HOOTipPosition["LeftBottom"] = "left-bottom";
})(HOOTipPosition || (HOOTipPosition = {}));
export class HOOTooltipState {
    constructor() { }
}
export default class HOOTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTooltip";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-tooltip";
        this.LOG_SOURCE = props.dataComponent || "💦HOOTooltip";
        this.state = new HOOTooltipState();
        this._componentClass += this.props.position;
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const styleBlock = { "will-change": "transform" };
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, style: styleBlock, role: "tooltip" },
                React.createElement("div", { className: "hoo-tooltip-content" }, this.props.text || this.props.children)));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTooltip.js.map
