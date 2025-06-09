import * as React from "react";
import HOOAvatar from "../HOOAvatar";
export class HOOCardFooterState {
    constructor() { }
}
export default class HOOCardFooter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCardFooter";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-cardfooter";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCardFooter";
        this.state = new HOOCardFooterState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                !this.props.children &&
                    React.createElement(React.Fragment, null,
                        React.createElement(HOOAvatar, { imageSource: this.props.avatarImage, imageAlt: this.props.avatarImageAlt, size: this.props.avatarImageSize, rootElementAttributes: this.props.avatarAttributes }),
                        React.createElement("div", { className: "hoo-cardfooter-data" },
                            React.createElement("div", { className: "hoo-cardfooter-name" }, this.props.name),
                            React.createElement("div", { className: "hoo-cardfooter-modified" }, this.props.modified))),
                this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCardFooter.js.map
