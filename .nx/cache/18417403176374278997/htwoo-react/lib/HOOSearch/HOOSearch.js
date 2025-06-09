import * as React from "react";
import HOOIcon from "../HOOIcon/HOOIcon";
import { getRandomString } from "../common/Common";
export class HOOSearchState {
    constructor() { }
}
export default class HOOSearch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSearch";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-search";
        this._searchId = "hoo-search-";
        this._onKeyUp = (event) => {
            try {
                if ((event.key === "Enter") && (typeof this.props.onSearch === "function")) {
                    this.props.onSearch(this.props.value);
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_onKeyUp) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOSearch";
        this._searchId = props.forId || `${this._searchId}${getRandomString(10)}`;
        this.state = new HOOSearchState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-input-text ${this.props.inputElementAttributes?.className}` : "hoo-input-text";
            return (React.createElement("div", { ...this._rootProps, id: this._searchId, ...this.props.rootElementAttributes, className: className },
                React.createElement(HOOIcon, { iconName: "hoo-icon-search", rootElementAttributes: { className: "icon" } }),
                React.createElement("input", { ...this.props.inputElementAttributes, className: inputClassName, type: "search", value: this.props.value, placeholder: this.props.placeholder, disabled: this.props.disabled, onChange: this.props.onChange, onKeyUp: this._onKeyUp })));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSearch.js.map
