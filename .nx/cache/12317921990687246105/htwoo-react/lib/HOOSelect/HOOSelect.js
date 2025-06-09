import * as React from "react";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import HOOIcon from "../HOOIcon/HOOIcon";
export var HOOSelectStatus;
(function (HOOSelectStatus) {
    HOOSelectStatus[HOOSelectStatus["Initial"] = 0] = "Initial";
    HOOSelectStatus[HOOSelectStatus["Open"] = 1] = "Open";
    HOOSelectStatus[HOOSelectStatus["Filtered"] = 2] = "Filtered";
    HOOSelectStatus[HOOSelectStatus["Closed"] = 3] = "Closed";
})(HOOSelectStatus || (HOOSelectStatus = {}));
export var HOOSelectFocus;
(function (HOOSelectFocus) {
    HOOSelectFocus[HOOSelectFocus["Input"] = 0] = "Input";
    HOOSelectFocus[HOOSelectFocus["Forward"] = 1] = "Forward";
    HOOSelectFocus[HOOSelectFocus["Back"] = 2] = "Back";
})(HOOSelectFocus || (HOOSelectFocus = {}));
export default class HOOSelect extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOSelect";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-select";
        this._optionElements = [];
        this._valueChanged = false;
        this._getDisplayValue = () => {
            let retVal = "";
            try {
                this.props.options.some((item) => {
                    if (item.key === this.state.currentValue) {
                        retVal = item.text;
                        return true;
                    }
                    return false;
                });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_getDisplayValue) - ${err}`);
            }
            return retVal;
        };
        this._onChange = (newValue, fieldName) => {
            try {
                this.setState({ currentValue: newValue }, () => {
                    this.props.onChange(newValue, fieldName);
                });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
            }
        };
        this._toggleDropdown = () => {
            try {
                if (this.props.disabled) {
                    return;
                }
                const focus = document.activeElement;
                let selectStatus = this.state.selectStatus;
                let open = this.state.open;
                switch (this.state.selectStatus) {
                    case HOOSelectStatus.Initial:
                        open = !open;
                        selectStatus = HOOSelectStatus.Open;
                        break;
                    case HOOSelectStatus.Open:
                        if ((focus == this._inputElement.current) || (focus.tagName == "BUTTON")) {
                            open = false;
                            selectStatus = HOOSelectStatus.Initial;
                        }
                        else if (focus.tagName == "LI") {
                            this.props.onChange(focus.dataset.value, this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        break;
                    case HOOSelectStatus.Filtered:
                        if (focus.tagName == "LI") {
                            this.props.onChange(focus.dataset.value, this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        break;
                    case HOOSelectStatus.Closed:
                        open = true;
                        selectStatus = HOOSelectStatus.Open;
                        break;
                }
                this.setState({ open: open, selectStatus: selectStatus });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_toggleDropdown) - ${err}`);
            }
        };
        this._keyUp = (event) => {
            if (this.props.disabled) {
                return;
            }
            const focus = document.activeElement;
            const key = event.key;
            let selectStatus = this.state.selectStatus;
            let open = this.state.open;
            try {
                switch (key) {
                    case 'Enter':
                        if (this.state.selectStatus === HOOSelectStatus.Initial) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Open && focus.tagName === 'LI') {
                            this.props.onChange(focus.dataset.value, this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Open && focus === this._inputElement.current) {
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Filtered && focus.tagName === 'LI') {
                            this.props.onChange(focus.dataset.value, this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Filtered && focus === this._inputElement.current) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                        }
                        else {
                            open = true;
                            selectStatus = HOOSelectStatus.Filtered;
                        }
                        break;
                    case 'Escape':
                        if (this.state.selectStatus === HOOSelectStatus.Open || this.state.selectStatus === HOOSelectStatus.Filtered) {
                            open = false;
                            selectStatus = HOOSelectStatus.Initial;
                        }
                        break;
                    case 'ArrowDown':
                        if (this.state.selectStatus === HOOSelectStatus.Initial || this.state.selectStatus === HOOSelectStatus.Closed) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                            this._moveFocus(this._inputElement.current, HOOSelectFocus.Forward);
                        }
                        else {
                            open = true;
                            this._moveFocus(document.activeElement, HOOSelectFocus.Forward);
                        }
                        break;
                    case 'ArrowUp':
                        if (this.state.selectStatus === HOOSelectStatus.Initial || this.state.selectStatus === HOOSelectStatus.Closed) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                            this._moveFocus(this._inputElement.current, HOOSelectFocus.Back);
                        }
                        else {
                            this._moveFocus(document.activeElement, HOOSelectFocus.Back);
                        }
                        break;
                    default:
                        if (this.state.selectStatus === HOOSelectStatus.Initial) {
                            open = true;
                            selectStatus = HOOSelectStatus.Filtered;
                            this._doFilter();
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Open) {
                            selectStatus = HOOSelectStatus.Filtered;
                            this._doFilter();
                        }
                        else if (this.state.selectStatus === HOOSelectStatus.Closed) {
                            selectStatus = HOOSelectStatus.Filtered;
                            this._doFilter();
                        }
                        else {
                            this._doFilter();
                        }
                        break;
                }
                this.setState({ open: open, selectStatus: selectStatus });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_keyUp) - ${err}`);
            }
        };
        this._doFilter = () => {
            try {
                let optionsLength = this.state.optionsLength;
                let selectStatus = this.state.selectStatus;
                const terms = (this.state.currentValue === this.props.value) ? "" : this.state.currentValue;
                const aFilteredOptions = this._optionElements.filter((option) => {
                    if (this.props.containsTypeAhead) {
                        return (option.innerText.toLowerCase().indexOf(terms.toLowerCase()) > -1);
                    }
                    else {
                        if (option.innerText.toLowerCase().substring(0, terms.length) == (terms.toLowerCase())) {
                            return true;
                        }
                    }
                });
                this._optionElements.forEach(option => option.style.display = "none");
                aFilteredOptions.forEach((option) => {
                    option.style.display = "";
                });
                if (aFilteredOptions.length < this._optionElements.length) {
                    selectStatus = HOOSelectStatus.Filtered;
                }
                optionsLength = aFilteredOptions.length;
                this.setState({ selectStatus: selectStatus, optionsLength: optionsLength });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_doFilter) - ${err}`);
            }
        };
        this._moveFocus = (fromHere, toThere) => {
            try {
                const aCurrentOptions = this._optionElements.filter((option) => {
                    if (option.style.display === '') {
                        return true;
                    }
                });
                if (aCurrentOptions.length === 0) {
                    return;
                }
                if (toThere === HOOSelectFocus.Input) {
                    this._inputElement.current.focus();
                }
                switch (fromHere) {
                    case this._inputElement.current:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 1].focus();
                        }
                        break;
                    case this._optionElements[0]:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[1].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            this._inputElement.current.focus();
                        }
                        break;
                    case this._optionElements[this._optionElements.length - 1]:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 2].focus();
                        }
                        break;
                    default:
                        const currentItem = document.activeElement;
                        const whichOne = aCurrentOptions.findIndex((o) => { return o == currentItem; });
                        if (toThere === HOOSelectFocus.Forward) {
                            const nextOne = aCurrentOptions[whichOne + 1];
                            nextOne.focus();
                        }
                        else if (toThere === HOOSelectFocus.Back && whichOne > 0) {
                            const previousOne = aCurrentOptions[whichOne - 1];
                            previousOne.focus();
                        }
                        else {
                            this._inputElement.current.focus();
                        }
                        break;
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_moveFocus) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOSelect";
        this.state = { currentValue: props.value || undefined, selectStatus: HOOSelectStatus.Initial, open: false, optionsLength: 0 };
        this._inputElement = React.createRef();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.value != nextProps.value) {
            this._valueChanged = true;
        }
        return true;
    }
    componentDidUpdate() {
        if (this._valueChanged) {
            this._valueChanged = false;
            this.setState({ currentValue: this.props.value, selectStatus: HOOSelectStatus.Initial }, () => {
                this._doFilter();
            });
        }
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-select-text ${this.props.inputElementAttributes?.className}` : "hoo-select-text";
            const currentDisplay = this._getDisplayValue();
            const expanded = (this.state.selectStatus === HOOSelectStatus.Open || this.state.selectStatus === HOOSelectStatus.Filtered);
            let optionLengthMessageString = `${this.state.optionsLength} options available. Arrow down to browse or start typing to filter.`;
            if (this.props.optionsLengthMessage) {
                const indexLengthPlaceholder = this.props.optionsLengthMessage.indexOf("{0}") || -1;
                optionLengthMessageString = (indexLengthPlaceholder > -1) ? this.props.optionsLengthMessage.replace("{0}", this.state.optionsLength.toString()) : `${this.state.optionsLength} ${this.props.optionsLengthMessage}`;
            }
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, id: `${this.props.id}-list`, className: className, role: "combobox", "aria-haspopup": "listbox", "aria-owns": `${this.props.id}-list`, "aria-expanded": expanded, onClick: this._toggleDropdown, onKeyUp: this._keyUp },
                React.createElement("div", { id: `${this.props.id}-status`, className: "hidden-visually", "aria-live": "polite" }, optionLengthMessageString),
                React.createElement("input", { ref: this._inputElement, ...this.props.inputElementAttributes, id: `${this.props.id}-input`, type: "text", className: inputClassName, value: currentDisplay, disabled: this.props.disabled || false, "aria-autocomplete": "both", autoComplete: "off", "aria-controls": `${this.props.id}-list`, onChange: (e) => { this.setState({ currentValue: e.currentTarget.value }); } }),
                React.createElement(HOOButton, { type: HOOButtonType.Icon, disabled: this.props.disabled || false },
                    React.createElement(HOOIcon, { iconName: "hoo-icon-arrow-down" })),
                React.createElement("ul", { role: "listbox", className: `hoo-select-dropdown ${(this.state.open) ? "" : "hidden-all"}` }, this.props.options.map((o, index) => {
                    return (React.createElement("li", { ref: element => this._optionElements[index] = element, key: o.key, className: "hoo-option", role: "option", "data-value": o.key, tabIndex: -1, onClick: () => { this._onChange(o.key, this.props.id); } }, o.text));
                }))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOSelect.js.map
