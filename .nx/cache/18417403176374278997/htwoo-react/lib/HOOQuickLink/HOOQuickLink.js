import * as React from "react";
import Button, { HOOButtonType } from "../HOOButton";
import HOOIcon from "../HOOIcon";
export var HOOQuickLinkType;
(function (HOOQuickLinkType) {
    HOOQuickLinkType[HOOQuickLinkType["Link"] = 0] = "Link";
    HOOQuickLinkType[HOOQuickLinkType["Compact"] = 1] = "Compact";
    HOOQuickLinkType[HOOQuickLinkType["Grid"] = 2] = "Grid";
    HOOQuickLinkType[HOOQuickLinkType["Button"] = 3] = "Button";
    HOOQuickLinkType[HOOQuickLinkType["Tile"] = 4] = "Tile";
})(HOOQuickLinkType || (HOOQuickLinkType = {}));
export var HOOQuickLinkStyle;
(function (HOOQuickLinkStyle) {
    HOOQuickLinkStyle["Outline"] = "";
    HOOQuickLinkStyle["Filled"] = "filled";
    HOOQuickLinkStyle["None"] = "no-outline";
})(HOOQuickLinkStyle || (HOOQuickLinkStyle = {}));
export var HOOQuickLinkAlignment;
(function (HOOQuickLinkAlignment) {
    HOOQuickLinkAlignment["Left"] = "";
    HOOQuickLinkAlignment["Center"] = "center";
})(HOOQuickLinkAlignment || (HOOQuickLinkAlignment = {}));
export var HOOQuickLinkButtonLines;
(function (HOOQuickLinkButtonLines) {
    HOOQuickLinkButtonLines["Normal"] = "";
    HOOQuickLinkButtonLines["One"] = "one-line";
})(HOOQuickLinkButtonLines || (HOOQuickLinkButtonLines = {}));
export var HOOQuickLinkImageSize;
(function (HOOQuickLinkImageSize) {
    HOOQuickLinkImageSize["Small"] = "";
    HOOQuickLinkImageSize["Medium"] = "img-m";
    HOOQuickLinkImageSize["Large"] = "img-l";
    HOOQuickLinkImageSize["XLarge"] = "img-xl";
    HOOQuickLinkImageSize["Fill"] = "img-fill";
})(HOOQuickLinkImageSize || (HOOQuickLinkImageSize = {}));
export default class HOOQuickLink extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOQuickLink";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-qllink";
        this._linkClass = "hoo-qllist";
        this._getLinkClass = () => {
            let linkClass = this._linkClass;
            try {
                if (this.props.type === HOOQuickLinkType.Compact) {
                    linkClass = "hoo-qlcompact";
                }
                else if (this.props.type === HOOQuickLinkType.Button) {
                    linkClass = "hoo-qlbtn";
                }
                else if (this.props.type === HOOQuickLinkType.Tile) {
                    linkClass = "hoo-qltiles";
                }
                else if (this.props.type === HOOQuickLinkType.Grid) {
                    linkClass = "hoo-qlgrid";
                }
                linkClass += ` ${this.props.style || ""} ${this.props.alignment || ""} ${this.props.buttonLines || ""} ${this.props.imageSize || ""} ${this.props.editMode || ""}`;
                linkClass = linkClass.trim();
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_getLinkClass) - ${err}`);
            }
            return linkClass;
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOQuickLink";
        this.state = {};
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const linkClassValue = this._getLinkClass();
            let rea = this.props.rootElementAttributes;
            if (this.props.columnSpan != null) {
                if (rea == null) {
                    rea = { style: {} };
                }
                rea.style["gridColumn"] = this.props.columnSpan;
            }
            return (React.createElement("a", { "data-component": this.LOG_SOURCE, ...rea, className: className, href: this.props.url || "" },
                React.createElement("article", { className: linkClassValue },
                    this.props.iconSrc && this.props.iconSrc.length > 0 &&
                        React.createElement("figure", { className: "hoo-ql-media" },
                            React.createElement("img", { src: this.props.iconSrc, className: "hoo-ql-img", alt: "", loading: "lazy" })),
                    this.props.iconName && this.props.iconName.length > 0 &&
                        React.createElement("figure", { className: "hoo-ql-media" },
                            React.createElement(HOOIcon, { iconName: this.props.iconName, rootElementAttributes: { className: "hoo-media-svg" } })),
                    React.createElement("div", { className: "hoo-qlinfo" },
                        React.createElement("div", { className: "hoo-qltitle" }, this.props.title),
                        (this.props.type == HOOQuickLinkType.Button || this.props.type == HOOQuickLinkType.Link) && this.props.description &&
                            React.createElement("div", { className: "hoo-qldesc" }, this.props.description)),
                    (this.props.editMode === true) &&
                        React.createElement("menu", { className: "hoo-qlmenu" },
                            React.createElement("li", null,
                                React.createElement(Button, { type: HOOButtonType.Icon, iconName: "hoo-icon-close", onClick: this.props.onClickMenuClose })),
                            (this.props.enableDragDrop === true) &&
                                React.createElement("li", null,
                                    React.createElement(Button, { type: HOOButtonType.Icon, iconName: "hoo-icon-move", rootElementAttributes: this.props.moveElementAttributes }))))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOQuickLink.js.map
