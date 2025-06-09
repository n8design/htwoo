import * as React from "react";
import HOOIcon from "../HOOIcon";
export class HOOVideoState {
    constructor() { }
}
export default class HOOVideo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOVideo";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-video";
        this.LOG_SOURCE = props.dataComponent || "💦HOOVideo";
        this.state = new HOOVideoState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("details", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className },
                React.createElement("summary", { className: "hoo-thumbnail" },
                    React.createElement("div", { className: "hoo-thumbnail-overlay" },
                        React.createElement(HOOIcon, { iconName: this.props.overlayIcon || "hoo-play" }),
                        React.createElement("div", { className: "hoo-video-duration" }, this.props.overlayTime)),
                    React.createElement("figure", { className: "hoo-thumbnail-figure" },
                        React.createElement("img", { src: this.props.thumbnailImageUrl, alt: this.props.thumbnailImageAlt, className: "hoo-thumbnail-img" }),
                        React.createElement("figcaption", { className: "hoo-thumbnail-cap" }, this.props.thumbnailImageAlt))),
                React.createElement("div", { className: "hoo-video-player" }, this.props.children)));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOVideo.js.map
