import * as React from "react";
import HOOIcon from "../HOOIcon";
import HOOButton, { HOOButtonType } from "../HOOButton";
export class HOODialogHeaderState {
    constructor() { }
}
export default class HOODialogHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODialogHeader";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-dlgheader";
        this.LOG_SOURCE = props.dataComponent || "💦HOODialogHeader";
        this.state = new HOODialogHeaderState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const iconProp = (this.props.closeIconName) ? { iconName: this.props.closeIconName } : { iconSVG: this.props.closeIconSVG };
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                !this.props.children &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "hoo-dlgheader-title" },
                            React.createElement("h2", null, this.props.title)),
                        React.createElement("div", { className: "hoo-dlgheader-closer" },
                            React.createElement(HOOButton, { type: HOOButtonType.Icon, onClick: this.props.closeOnClick, disabled: this.props.closeDisabled },
                                React.createElement(HOOIcon, { ...iconProp })))),
                this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODialogHeader.js.map
