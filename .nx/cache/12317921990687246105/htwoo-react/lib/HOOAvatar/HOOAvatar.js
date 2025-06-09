import * as React from "react";
export var HOOAvatarSize;
(function (HOOAvatarSize) {
    HOOAvatarSize["Px16"] = "16";
    HOOAvatarSize["Px24"] = "24";
    HOOAvatarSize["Px32"] = "32";
    HOOAvatarSize["Px40"] = "40";
    HOOAvatarSize["Px48"] = "48";
    HOOAvatarSize["Px64"] = "64";
    HOOAvatarSize["Px72"] = "72";
    HOOAvatarSize["Px96"] = "96";
})(HOOAvatarSize || (HOOAvatarSize = {}));
export class HOOAvatarState {
    constructor() { }
}
export default class HOOAvatar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOAvatar";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-avatar";
        this.LOG_SOURCE = props.dataComponent || "💦HOOAvatar";
        this.state = new HOOAvatarState();
        if (props.size != null) {
            this._componentClass += ` ${this._componentClass}-${props.size}`;
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}`;
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, onClick: this.props.onClick },
                React.createElement("img", { src: this.props.imageSource, alt: this.props.imageAlt, className: "hoo-avatar-img", height: this.props.size, width: this.props.size, loading: "lazy" }),
                this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOAvatar.js.map
