import * as React from "react";
export class HOOWebPartTitleState {
    constructor() { }
}
export default class HOOWebPartTitle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOWebPartTitle";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-webpart-header";
        this.saveTitle = (event) => {
            event.preventDefault();
            let title = event.target.innerText;
            this.props.updateTitle(title);
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOWebPartTitle";
        this.state = new HOOWebPartTitleState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("h3", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                React.createElement("div", { role: "textbox", "aria-label": this.props.placeholder || "Web Part Title", placeholder: this.props.placeholder || "", "aria-placeholder": this.props.placeholder || "", title: this.props.title, contentEditable: this.props.editMode, suppressContentEditableWarning: true, onBlur: this.saveTitle }, this.props.title || this.props.children)));
        }
        catch (err) {
            console.error(`${err} - ${this.LOG_SOURCE} (render)`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOWebPartTitle.js.map
