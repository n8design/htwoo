import * as React from "react";
export class HOOCardImageState {
    constructor() { }
}
export default class HOOCardImage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCardImage";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-card";
        this.LOG_SOURCE = props.dataComponent || "💦HOOCardImage";
        this._componentClass += (props.imageSource) ? "image" : "html";
        this.state = new HOOCardImageState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("figure", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                this.props.imageSource &&
                    React.createElement("img", { src: this.props.imageSource, width: this.props.width || 320, height: this.props.height || 180, alt: this.props.imageAlt }),
                this.props.imageSource && this.props.caption &&
                    React.createElement("figcaption", null, this.props.caption),
                !this.props.imageSource &&
                    this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCardImage.js.map
