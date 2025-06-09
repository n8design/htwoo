import * as React from "react";
export class HOOPersonaState {
    constructor() { }
}
export default class HOOPersona extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOPersona";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-persona-";
        this._showData = true;
        this.LOG_SOURCE = props.dataComponent || "💦HOOPersona";
        this.state = new HOOPersonaState();
        this._componentClass += props.avatarSize;
        if (!props.personaName && !props.personaFunction && !props.personaStatusText && !props.personaAvailable) {
            this._showData = false;
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                this.props.children,
                this._showData &&
                    React.createElement("div", { className: "hoo-persona-data" },
                        React.createElement("div", { className: "hoo-persona-name" }, this.props.personaName),
                        React.createElement("div", { className: "hoo-persona-function" },
                            React.createElement("span", null, this.props.personaFunction)),
                        React.createElement("div", { className: "hoo-persona-statustext" },
                            React.createElement("span", null, this.props.personaStatusText)),
                        React.createElement("div", { className: "hoo-persona-available" },
                            React.createElement("span", null, this.props.personaAvailable)))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOPersona.js.map
