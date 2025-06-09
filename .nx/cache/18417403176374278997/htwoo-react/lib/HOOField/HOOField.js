import * as React from "react";
import HOOLabel from "../HOOLabel";
import HOOInputDesc from "../HOOInputDesc";
import HOOValidationMsg from "../HOOValidationMsg";
export class HOOFieldState {
    constructor(label = null, description = null, validation = null, content = []) {
        this.label = label;
        this.description = description;
        this.validation = validation;
        this.content = content;
    }
}
export default class HOOField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOField";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-field";
        this.LOG_SOURCE = props.dataComponent || "💦HOOField";
        this.state = new HOOFieldState();
    }
    static getDerivedStateFromProps(props, state) {
        try {
            let label = null;
            let description = null;
            let validation = null;
            let content = [];
            props.children.forEach((e) => {
                if (React.isValidElement(e)) {
                    const element = e;
                    if (element.type === HOOLabel) {
                        label = element;
                    }
                    else if (element.type === HOOInputDesc) {
                        description = element;
                    }
                    else if (element.type === HOOValidationMsg) {
                        validation = element;
                    }
                    else {
                        content.push(element);
                    }
                }
            });
            return { label, description, validation, content };
        }
        catch (err) {
            console.error("💦HOOField", "(getDerivedStateFromProps)", err);
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className },
                this.state.label,
                this.state.description,
                this.state.content,
                this.state.validation));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOField.js.map
