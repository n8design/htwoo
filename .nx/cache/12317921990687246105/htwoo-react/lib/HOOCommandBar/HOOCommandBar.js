import * as React from "react";
import HOOIconOverflow from "../HOOIconOverflow";
import { OverflowResizer } from "../common/OverflowObserver";
import { getRandomString } from "../common/Common";
import HOOButtonCommand from "../HOOButtonCommand";
export default class HOOCommandBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOCommandBar";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-cmdbar";
        this._toggleOverflow = (overflow) => {
            this.setState({ showOverflow: overflow });
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOCommandBar";
        this.state = { showOverflow: false };
        this._overflowResizer = new OverflowResizer(`HOOCommandBarOR_${getRandomString(10)}`);
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
    _renderCommandItems() {
        let retVal = null;
        try {
            if (this.props.commandItems) {
                retVal = this.props.commandItems.map((pi, index) => {
                    return (React.createElement(HOOButtonCommand, { key: pi.key, label: pi.text || null, leftIconName: pi.iconName || null, onClick: (ev) => { this.props.onClick(ev, pi.key, null); }, flyoutMenuItems: pi.flyoutMenuItems, flyoutMenuItemClicked: (ev, fmi) => { this.props.onClick(ev, pi.key, fmi); }, rootElementAttributes: this.props.commandButtonAttributes }));
                });
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (_renderCommandItems) - ${err}`);
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
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, className: className, role: "toolbar" },
                !this.props.hasOverflow &&
                    this._renderCommandItems(),
                this.props.hasOverflow &&
                    React.createElement("div", { ref: this._overflowContainer, className: `${this.props.hasOverflow ? "hoo-overflow" : ""}` },
                        this._renderCommandItems(),
                        React.createElement(HOOIconOverflow, { overflow: this.state.showOverflow },
                            React.createElement("menu", { className: "hoo-buttonflyout" })))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOCommandBar.js.map
