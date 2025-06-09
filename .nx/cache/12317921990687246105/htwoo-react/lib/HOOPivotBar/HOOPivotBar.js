import * as React from "react";
import HOOPivotButton from "../HOOPivotButton";
import HOOIconOverflow from "../HOOIconOverflow";
import { OverflowResizer } from "../common/OverflowObserver";
import { getRandomString } from "../common/Common";
export default class HOOPivotBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOPivotBar";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-pivotbar";
        this._toggleOverflow = (overflow) => {
            this.setState({ showOverflow: overflow });
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOPivotBar";
        this.state = { showOverflow: false };
        this._overflowResizer = new OverflowResizer(`HOOPivotBarOR_${getRandomString(10)}`);
        this._overflowResizer.OverflowChangedEvent = this._toggleOverflow;
        this._overflowContainer = React.createRef();
    }
    componentDidMount() {
        try {
            if (this.props.hasOverflow && this._overflowResizer != null && this._overflowContainer.current != null) {
                this._overflowResizer.ObserveElement = this._overflowContainer.current;
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`);
        }
    }
    _renderPivotItems() {
        let retVal = null;
        const pivotButtonAttributes = { ...this.props.pivotButtonAttributes, role: "menuitem" };
        try {
            if (this.props.pivotItems) {
                retVal = this.props.pivotItems.map((pi, index) => {
                    const isSelected = (pi.key === this.props.selectedKey);
                    return (React.createElement(HOOPivotButton, { key: pi.key, label: pi.text, isActive: isSelected, onClick: (ev) => { this.props.onClick(ev, pi.key); }, rootElementAttributes: pivotButtonAttributes }));
                });
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (_renderPivotItems) - ${err}`);
        }
        return retVal;
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            if (this.props.hasOverflow) {
                className += " has-overflow";
            }
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, role: "menubar" },
                !this.props.hasOverflow &&
                    this._renderPivotItems(),
                this.props.hasOverflow &&
                    React.createElement("div", { ref: this._overflowContainer, className: `${this.props.hasOverflow ? "hoo-overflow" : ""}` },
                        this._renderPivotItems(),
                        React.createElement(HOOIconOverflow, { overflow: this.state.showOverflow, rootElementAttributes: { role: "menuitem" } },
                            React.createElement("menu", { className: "hoo-buttonflyout" })))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOPivotBar.js.map
