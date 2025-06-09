import * as React from "react";
export var HOOShimmerTheme;
(function (HOOShimmerTheme) {
    HOOShimmerTheme[HOOShimmerTheme["None"] = 0] = "None";
    HOOShimmerTheme[HOOShimmerTheme["Neutral"] = 1] = "Neutral";
    HOOShimmerTheme[HOOShimmerTheme["Primary"] = 2] = "Primary";
    HOOShimmerTheme[HOOShimmerTheme["Fancy"] = 3] = "Fancy";
})(HOOShimmerTheme || (HOOShimmerTheme = {}));
export var HOOShimmerShape;
(function (HOOShimmerShape) {
    HOOShimmerShape[HOOShimmerShape["Container"] = 0] = "Container";
    HOOShimmerShape[HOOShimmerShape["Circle"] = 1] = "Circle";
    HOOShimmerShape[HOOShimmerShape["Row"] = 2] = "Row";
    HOOShimmerShape[HOOShimmerShape["Square"] = 3] = "Square";
    HOOShimmerShape[HOOShimmerShape["Image1:1"] = 4] = "Image1:1";
    HOOShimmerShape[HOOShimmerShape["Image16:9"] = 5] = "Image16:9";
    HOOShimmerShape[HOOShimmerShape["Image16:10"] = 6] = "Image16:10";
})(HOOShimmerShape || (HOOShimmerShape = {}));
export class HOOShimmerState {
    constructor() { }
}
export default class HOOShimmer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOShimmer";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-ph";
        this._imageShape = false;
        this.LOG_SOURCE = props.dataComponent || "💦HOOShimmer";
        switch (props.shape) {
            case HOOShimmerShape.Row:
                this._componentClass = `${this._componentClass}-row`;
                break;
            case HOOShimmerShape.Circle:
                this._componentClass = `${this._componentClass}-circle`;
                break;
            case HOOShimmerShape.Square:
                this._componentClass = `${this._componentClass}-squared`;
                break;
            case HOOShimmerShape["Image1:1"]:
                this._imageShape = true;
                this._componentClass = `${this._componentClass}-img1x1`;
                break;
            case HOOShimmerShape["Image16:9"]:
                this._imageShape = true;
                this._componentClass = `${this._componentClass}-img16x9`;
                break;
            case HOOShimmerShape["Image16:10"]:
                this._imageShape = true;
                this._componentClass = `${this._componentClass}-img16x10`;
                break;
            case HOOShimmerShape.Container:
                switch (props.theme) {
                    case HOOShimmerTheme.None:
                        this._componentClass = "";
                        break;
                    case HOOShimmerTheme.Neutral:
                        this._componentClass = `${this._componentClass}-neutral`;
                        break;
                    case HOOShimmerTheme.Primary:
                        this._componentClass = `${this._componentClass}-primary`;
                        break;
                    case HOOShimmerTheme.Fancy:
                        this._componentClass = `${this._componentClass}-fancy`;
                        break;
                }
                break;
        }
        this.state = new HOOShimmerState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement(React.Fragment, null,
                !this._imageShape &&
                    React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.children),
                this._imageShape &&
                    React.createElement("img", { ...this._rootProps, alt: this.props.shape.toString(), ...this.props.rootElementAttributes, className: className, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", width: this.props.imageWidth, height: this.props.imageHeight })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOShimmer.js.map
