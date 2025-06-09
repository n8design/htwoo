import * as React from "react";
export class HOOAccordionGroupState {
    constructor() { }
}
export default class HOOAccordionGroup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOAccordionGroup";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-accordion-group";
        this.LOG_SOURCE = props.dataComponent || "💦HOOAccordionGroup";
        this.state = new HOOAccordionGroupState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("section", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOAccordionGroup.js.map
