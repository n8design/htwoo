import * as React from "react";
export var HOOPresenceStatus;
(function (HOOPresenceStatus) {
    HOOPresenceStatus["Away"] = "away";
    HOOPresenceStatus["DoNotDisturb"] = "dnd";
    HOOPresenceStatus["Online"] = "online";
    HOOPresenceStatus["Invisible"] = "invisible";
    HOOPresenceStatus["OutOfOffice"] = "off";
})(HOOPresenceStatus || (HOOPresenceStatus = {}));
export class HOOPresenceState {
    constructor() { }
}
export default class HOOPresence extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOPresence";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-presence";
        this.LOG_SOURCE = props.dataComponent || "💦HOOPresence";
        this.state = new HOOPresenceState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} is-${this.props.status}`;
            return (React.createElement("div", { ...this._rootProps, title: this.props.status, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOPresence.js.map
