import * as React from "react";
export var HOODialogType;
(function (HOODialogType) {
    HOODialogType[HOODialogType["Standard"] = 0] = "Standard";
    HOODialogType[HOODialogType["StandardError"] = 1] = "StandardError";
    HOODialogType[HOODialogType["StandardSuccess"] = 2] = "StandardSuccess";
    HOODialogType[HOODialogType["StandardWarning"] = 3] = "StandardWarning";
    HOODialogType[HOODialogType["SidebarLeft"] = 4] = "SidebarLeft";
    HOODialogType[HOODialogType["SidebarRight"] = 5] = "SidebarRight";
    HOODialogType[HOODialogType["Topbar"] = 6] = "Topbar";
    HOODialogType[HOODialogType["Bottombar"] = 7] = "Bottombar";
    HOODialogType[HOODialogType["Fullscreen"] = 8] = "Fullscreen";
    HOODialogType[HOODialogType["Center"] = 9] = "Center";
})(HOODialogType || (HOODialogType = {}));
export class HOODialogState {
    constructor(rea = undefined, styleblock = {}) {
        this.rea = rea;
        this.styleblock = styleblock;
    }
}
export default class HOODialog extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODialog";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-dlg";
        this._modal = false;
        this._updateShow = false;
        this._updateStyle = false;
        this._backdropClick = (event) => {
            try {
                if (this._dialogElement != null && this._dialogElement.current != null) {
                    const rect = this._dialogElement.current.getBoundingClientRect();
                    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
                    if (!isInDialog && event.target === this._dialogElement.current) {
                        this.props.changeVisibility();
                    }
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_backdropClick) - ${err}`);
            }
        };
        this._handleKeyDown = (event) => {
            try {
                if (event.key === "Escape") {
                    this.props.changeVisibility();
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_handleKeyDown) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOODialog";
        switch (props.type) {
            case HOODialogType.Standard:
                this._componentClass = `${this._componentClass} statusbar`;
                break;
            case HOODialogType.StandardError:
                this._componentClass = `${this._componentClass} statusbar error`;
                break;
            case HOODialogType.StandardSuccess:
                this._componentClass = `${this._componentClass} statusbar success`;
                break;
            case HOODialogType.StandardWarning:
                this._componentClass = `${this._componentClass} statusbar warning`;
                break;
            case HOODialogType.SidebarLeft:
                this._componentClass = `${this._componentClass} sidebar left`;
                this._modal = true;
                break;
            case HOODialogType.SidebarRight:
                this._componentClass = `${this._componentClass} sidebar right`;
                this._modal = true;
                break;
            case HOODialogType.Topbar:
                this._componentClass = `${this._componentClass} topbar`;
                this._modal = true;
                break;
            case HOODialogType.Bottombar:
                this._componentClass = `${this._componentClass} bottombar`;
                this._modal = true;
                break;
            case HOODialogType.Fullscreen:
                this._componentClass = `${this._componentClass} fullscreen`;
                this._modal = true;
                break;
            case HOODialogType.Center:
                this._componentClass = `${this._componentClass}`;
                this._modal = true;
                break;
        }
        let styleblock = undefined;
        if (this.props.rootElementAttributes?.style) {
            styleblock = { ...this.props.rootElementAttributes?.style };
        }
        if ((this.props.width !== undefined) || (this.props.height !== undefined)) {
            styleblock = styleblock || {};
            if (this.props.width !== undefined) {
                styleblock["--hoo-dlg-width"] = this.props.width;
            }
            if (this.props.height !== undefined) {
                styleblock["--hoo-dlg-height"] = this.props.height;
            }
        }
        let rea = undefined;
        if (this.props.rootElementAttributes) {
            rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
            delete rea.style;
        }
        this.state = new HOODialogState(rea, styleblock);
        this._dialogElement = React.createRef();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.visible != this.props.visible) {
            this._updateShow = true;
        }
        if (nextProps.width != this.props.width) {
            this._updateStyle = true;
        }
        if (nextProps.height != this.props.height) {
            this._updateStyle = true;
        }
        if (nextProps.rootElementAttributes != this.props.rootElementAttributes) {
            this._updateStyle = true;
        }
        return true;
    }
    componentDidMount() {
        try {
            if (this.props.visible && this._dialogElement != null && this._dialogElement.current != null) {
                if (this._modal) {
                    this._dialogElement.current.showModal();
                }
                else if (!this._modal) {
                    this._dialogElement.current.show();
                }
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        try {
            if (this._updateShow) {
                this._updateShow = false;
                if (this._dialogElement != null && this._dialogElement.current != null) {
                    if (this.props.visible && this._modal) {
                        this._dialogElement.current.showModal();
                    }
                    else if (this.props.visible && !this._modal) {
                        this._dialogElement.current.show();
                    }
                    else {
                        this._dialogElement.current.close();
                    }
                }
            }
            if (this._updateStyle) {
                this._updateStyle = false;
                let styleblock = undefined;
                if (this.props.rootElementAttributes?.style) {
                    styleblock = { ...this.props.rootElementAttributes?.style };
                }
                if ((this.props.width !== undefined) || (this.props.height !== undefined)) {
                    styleblock = styleblock || {};
                    if (this.props.width !== undefined) {
                        styleblock["--hoo-dlg-width"] = this.props.width;
                    }
                    if (this.props.height !== undefined) {
                        styleblock["--hoo-dlg-height"] = this.props.height;
                    }
                }
                let rea = undefined;
                if (this.props.rootElementAttributes) {
                    rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
                    delete rea.style;
                }
                this.setState({ rea, styleblock });
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (componentDidUpdate) - ${err}`);
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const events = {};
            events.onKeyDown = this._handleKeyDown;
            if (this._modal) {
                events.onClick = this._backdropClick;
            }
            return (React.createElement("dialog", { ref: this._dialogElement, ...this._rootProps, ...this.state.rea, className: className, style: this.state.styleblock, ...events }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODialog.js.map
