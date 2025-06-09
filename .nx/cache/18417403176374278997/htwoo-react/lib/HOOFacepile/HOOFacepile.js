import * as React from "react";
import { getRandomString } from "../common/Common";
import { OverflowResizer } from "../common/OverflowObserver";
import HOOIconOverflow from "../HOOIconOverflow";
export default class HOOFacepile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOFacepile";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-facepile";
        this._toggleOverflow = (overflow) => {
            this.setState({ showOverflow: overflow });
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOFacepile";
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
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, ref: this._overflowContainer, ...this.props.rootElementAttributes, className: className },
                this.props.children,
                this.props.hasOverflow &&
                    React.createElement(HOOIconOverflow, { overflow: this.state.showOverflow },
                        React.createElement("menu", { className: "hoo-buttonflyout" }))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOFacepile.js.map
