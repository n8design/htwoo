import * as React from "react";
import HOOAvatar from "../HOOAvatar";
import HOOPresence from "../HOOPresence";
export class HOOAvatarPresState {
    constructor() { }
}
export default class HOOAvatarPres extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOAvatarPres";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-avatar-pres";
        this.LOG_SOURCE = props.dataComponent || "💦HOOAvatarPres";
        this.state = new HOOAvatarPresState();
        if (props.size != null) {
            this._componentClass += `-${props.size}`;
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}`;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                React.createElement(HOOAvatar, { size: this.props.size, imageSource: this.props.imageSource, imageAlt: this.props.imageAlt, rootElementAttributes: this.props.avatarAttributes }),
                React.createElement(HOOPresence, { status: this.props.status, rootElementAttributes: this.props.presenceAttributes })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOAvatarPres.js.map
