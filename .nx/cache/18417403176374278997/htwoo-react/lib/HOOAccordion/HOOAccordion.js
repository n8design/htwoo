import * as React from "react";
import HOOIcon from "../HOOIcon";
export class HOOAccordionState {
    constructor() { }
}
export default class HOOAccordion extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOAccordion";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-accordion";
        this.LOG_SOURCE = props.dataComponent || "💦HOOAccordion";
        this.state = new HOOAccordionState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("details", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, open: this.props.open, className: className },
                React.createElement("summary", { className: "hoo-accordion-header" },
                    React.createElement("div", { className: "hoo-accordion-summary" },
                        this.props.iconName &&
                            React.createElement(HOOIcon, { iconName: this.props.iconName }),
                        React.createElement("h3", null, this.props.header))),
                React.createElement("div", { className: "hoo-accordion-content" },
                    this.props.content &&
                        this.props.content,
                    !this.props.content &&
                        this.props.children)));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOAccordion.js.map
