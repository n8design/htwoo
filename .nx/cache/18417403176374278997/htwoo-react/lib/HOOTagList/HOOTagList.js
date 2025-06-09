import * as React from "react";
import HOOTag, { HOOTagType } from "../HOOTag";
export class HOOTagListState {
    constructor() { }
}
export default class HOOTagList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTagList";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-meta-list";
        this._getTag = (tag) => {
            try {
                if (this.props.tagType === HOOTagType.Button) {
                    return React.createElement(HOOTag, { text: tag.text, tagType: this.props.tagType, tagStyle: this.props.tagStyle, onClick: tag.onClick });
                }
                else if (this.props.tagType === HOOTagType.Link) {
                    return React.createElement(HOOTag, { text: tag.text, tagType: this.props.tagType, tagStyle: this.props.tagStyle, linkTarget: tag.linkTarget, linkUrl: tag.linkUrl });
                }
                else {
                    return React.createElement(HOOTag, { text: tag.text, tagType: this.props.tagType, tagStyle: this.props.tagStyle });
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_getTag) - ${err}`);
                return null;
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOTagList";
        this.state = new HOOTagListState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { ...this._rootProps, role: "list", ...this.props.rootElementAttributes, className: className }, this.props.tags && this.props.tags.map((tag) => {
                return (React.createElement("li", { key: tag.text }, this._getTag(tag)));
            })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTagList.js.map
