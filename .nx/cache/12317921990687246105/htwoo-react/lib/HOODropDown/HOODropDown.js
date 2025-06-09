import * as React from "react";
import { getRandomString } from "../common/Common";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import HOOIcon from "../HOOIcon/HOOIcon";
export var DDState;
(function (DDState) {
    DDState[DDState["Initial"] = 0] = "Initial";
    DDState[DDState["Open"] = 1] = "Open";
    DDState[DDState["Filtered"] = 2] = "Filtered";
    DDState[DDState["Closed"] = 3] = "Closed";
})(DDState || (DDState = {}));
export var Focus;
(function (Focus) {
    Focus[Focus["Input"] = 0] = "Input";
    Focus[Focus["Forward"] = 1] = "Forward";
    Focus[Focus["Back"] = 2] = "Back";
})(Focus || (Focus = {}));
export default class HOODropDown extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOODropDown";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-select";
        this._ulClass = "hoo-select-dropdown";
        this._dropdownId = "hoo-dropdown-";
        this._optionElements = [];
        this._valueChanged = false;
        this._onChange = (newValue) => {
            try {
                this.props.onChange((/^-?\d+$/.test(newValue)) ? parseInt(newValue) : newValue);
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
            }
        };
        this._getDisplayValue = () => {
            let retVal = this.state.currentValue || "";
            try {
                if (this.state.grouped) {
                    this.props.options.some((g) => {
                        g.groupItems.some((item) => {
                            if (item.key === this.state.currentValue) {
                                retVal = item.text;
                                return true;
                            }
                            return false;
                        });
                        return (retVal.length > 0);
                    });
                }
                else {
                    this.props.options.some((item) => {
                        if (item.key === this.state.currentValue) {
                            retVal = item.text;
                            return true;
                        }
                        return false;
                    });
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_getDisplayValue) - ${err}`);
            }
            return retVal;
        };
        this._onChangeInput = (e) => {
            try {
                let ddState = this.state.ddState;
                let open = this.state.open;
                if (this.state.ddState === DDState.Initial) {
                    open = true;
                    ddState = DDState.Filtered;
                }
                else if (this.state.ddState === DDState.Open) {
                    ddState = DDState.Filtered;
                }
                else if (this.state.ddState === DDState.Closed) {
                    ddState = DDState.Filtered;
                }
                this.setState({ currentValue: e.currentTarget.value, ddState, open }, () => {
                    this._doFilter();
                });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_onChangeInput) - ${err}`);
            }
        };
        this._toggleDropdown = () => {
            try {
                if (this.props.disabled) {
                    return;
                }
                const focus = document.activeElement;
                let ddState = this.state.ddState;
                let open = this.state.open;
                switch (this.state.ddState) {
                    case DDState.Initial:
                        open = !open;
                        ddState = DDState.Open;
                        break;
                    case DDState.Open:
                        if ((focus == this._inputElement.current) || (focus.tagName == "BUTTON")) {
                            open = false;
                            ddState = DDState.Initial;
                        }
                        else if (focus.tagName == "LI") {
                            if (this.props.value != focus.dataset.value) {
                                this._onChange(focus.dataset.value);
                            }
                            open = false;
                            ddState = DDState.Closed;
                            this._moveFocus(document.activeElement, Focus.Input);
                        }
                        break;
                    case DDState.Filtered:
                        if (focus.tagName == "LI") {
                            if (this.props.value != focus.dataset.value) {
                                this._onChange(focus.dataset.value);
                            }
                            open = false;
                            ddState = DDState.Closed;
                            this._moveFocus(document.activeElement, Focus.Input);
                        }
                        else if (focus.tagName == "BUTTON") {
                            open = !open;
                            ddState = (open) ? DDState.Filtered : DDState.Closed;
                        }
                        break;
                    case DDState.Closed:
                        open = true;
                        ddState = DDState.Open;
                        break;
                }
                this.setState({ open, ddState });
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
            let currentValue = this.state.currentValue;
            let ddState = this.state.ddState;
            let open = this.state.open;
            try {
                switch (key) {
                    case 'Enter':
                        if (this.state.ddState === DDState.Initial) {
                            open = true;
                            ddState = DDState.Open;
                        }
                        else if (this.state.ddState === DDState.Open && focus.tagName === 'LI') {
                            currentValue = focus.dataset.value;
                            if (this.props.value != focus.dataset.value) {
                                this._onChange(focus.dataset.value);
                            }
                            open = false;
                            ddState = DDState.Closed;
                            this._moveFocus(document.activeElement, Focus.Input);
                        }
                        else if (this.state.ddState === DDState.Open && focus === this._inputElement.current) {
                            open = false;
                            ddState = DDState.Closed;
                        }
                        else if (this.state.ddState === DDState.Filtered && focus.tagName === 'LI') {
                            currentValue = focus.dataset.value;
                            if (this.props.value != focus.dataset.value) {
                                this._onChange(focus.dataset.value);
                            }
                            open = false;
                            ddState = DDState.Closed;
                            this._moveFocus(document.activeElement, Focus.Input);
                        }
                        else if (this.state.ddState === DDState.Filtered && focus === this._inputElement.current) {
                            open = true;
                            ddState = DDState.Open;
                        }
                        else {
                            open = true;
                            ddState = DDState.Filtered;
                        }
                        break;
                    case 'Escape':
                        if (this.state.ddState === DDState.Open || this.state.ddState === DDState.Filtered) {
                            open = false;
                            ddState = DDState.Initial;
                        }
                        break;
                    case 'ArrowDown':
                        if (this.state.ddState === DDState.Initial || this.state.ddState === DDState.Closed) {
                            open = true;
                            ddState = DDState.Open;
                            this._moveFocus(this._inputElement.current, Focus.Forward);
                        }
                        else {
                            open = true;
                            this._moveFocus(document.activeElement, Focus.Forward);
                        }
                        break;
                    case 'ArrowUp':
                        if (this.state.ddState === DDState.Initial || this.state.ddState === DDState.Closed) {
                            open = true;
                            ddState = DDState.Open;
                            this._moveFocus(this._inputElement.current, Focus.Back);
                        }
                        else {
                            this._moveFocus(document.activeElement, Focus.Back);
                        }
                        break;
                    default:
                        if (this.state.ddState === DDState.Initial) {
                            open = true;
                            ddState = DDState.Filtered;
                            this._doFilter();
                        }
                        else if (this.state.ddState === DDState.Open) {
                            ddState = DDState.Filtered;
                            this._doFilter();
                        }
                        else if (this.state.ddState === DDState.Closed) {
                            ddState = DDState.Filtered;
                            open = true;
                            this._doFilter();
                        }
                        else {
                            open = true;
                            this._doFilter();
                        }
                        break;
                }
                this.setState({ open, ddState, currentValue });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_keyUp) - ${err}`);
            }
        };
        this._doFilter = () => {
            try {
                if (this.props.containsTypeAhead == null) {
                    return;
                }
                let optionsLength = this.state.optionsLength;
                let ddState = this.state.ddState;
                const terms = (this.state.currentValue === this.props.value) ? "" : this.state.currentValue;
                const aFilteredOptions = this._optionElements.filter((option) => {
                    if (this.props.containsTypeAhead === true) {
                        return (option?.innerText?.toLowerCase().indexOf(terms.toLowerCase()) > -1);
                    }
                    else if (this.props.containsTypeAhead === false) {
                        if (option?.innerText?.toLowerCase().substring(0, terms.length) == (terms.toLowerCase())) {
                            return true;
                        }
                    }
                });
                this._optionElements.forEach(option => { if (option?.style) {
                    option.style.display = "none";
                } });
                aFilteredOptions.forEach((option) => { if (option?.style) {
                    option.style.display = "";
                } });
                if (aFilteredOptions.length < this._optionElements.length) {
                    ddState = DDState.Filtered;
                }
                optionsLength = aFilteredOptions.length;
                this.setState({ ddState, optionsLength });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_doFilter) - ${err}`);
            }
        };
        this._moveFocus = (fromHere, toThere) => {
            try {
                const aCurrentOptions = this._optionElements.filter((option) => {
                    if (option?.style?.display === '') {
                        return true;
                    }
                });
                if (aCurrentOptions.length === 0) {
                    return;
                }
                if (toThere === Focus.Input) {
                    this._inputElement.current.focus();
                }
                switch (fromHere) {
                    case this._inputElement.current:
                        if (toThere === Focus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === Focus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 1].focus();
                        }
                        break;
                    case this._optionElements[0]:
                        if (toThere === Focus.Forward) {
                            aCurrentOptions[1].focus();
                        }
                        else if (toThere === Focus.Back) {
                            this._inputElement.current.focus();
                        }
                        break;
                    case this._optionElements[this._optionElements.length - 1]:
                        if (toThere === Focus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === Focus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 2].focus();
                        }
                        break;
                    default:
                        const currentItem = document.activeElement;
                        const whichOne = aCurrentOptions.findIndex((o) => { return o == currentItem; });
                        if (toThere === Focus.Forward) {
                            const nextOne = aCurrentOptions[whichOne + 1];
                            nextOne?.focus();
                        }
                        else if (toThere === Focus.Back && whichOne > 0) {
                            const previousOne = aCurrentOptions[whichOne - 1];
                            previousOne?.focus();
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
        this.LOG_SOURCE = props.dataComponent || "💦HOODropDown";
        this._dropdownId = props.forId || `${this._dropdownId}${getRandomString(10)}`;
        const grouped = props.options[0]?.hasOwnProperty("groupName") ? true : false;
        this.state = { currentValue: props.value, optionsLength: props.options.length, ddState: DDState.Initial, open: false, grouped };
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
            this.setState({ currentValue: this.props.value, ddState: DDState.Initial }, () => {
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
            const ulClassName = (this.props.ulElementAttributes?.className) ? `${this._ulClass} ${(this.state.open) ? "" : "hidden-all"} ${this.props.ulElementAttributes?.className}` : `${this._ulClass} ${(this.state.open) ? "" : "hidden-all"}`;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-select-text ${this.props.inputElementAttributes?.className}` : "hoo-select-text";
            const currentDisplay = this._getDisplayValue();
            const expanded = (this.state.ddState === DDState.Open || this.state.ddState === DDState.Filtered);
            const noOptionText = this.props.noOptionsText || ["No options", "No options match input"];
            return (React.createElement("div", { ...this._rootProps, ...this.props.rootElementAttributes, id: `${this._dropdownId}-list`, role: "combobox", "aria-haspopup": "listbox", "aria-owns": `${this._dropdownId}-list`, "aria-expanded": expanded, onClick: this._toggleDropdown, onKeyUp: this._keyUp, className: className },
                React.createElement("div", { id: `${this._dropdownId}-status`, className: "hidden-visually", "aria-live": "polite" },
                    this.props.options.length,
                    " options available. Arrow down to browse or start typing to filter."),
                React.createElement("input", { ref: this._inputElement, ...this.props.inputElementAttributes, id: `${this._dropdownId}-input`, type: "text", placeholder: this.props.placeholder || null, disabled: this.props.disabled || false, value: currentDisplay, className: inputClassName, "aria-autocomplete": "both", autoComplete: "off", "aria-controls": `${this._dropdownId}-list`, onChange: this._onChangeInput, readOnly: this.props.containsTypeAhead == null ? true : false }),
                React.createElement(HOOButton, { type: HOOButtonType.Icon, disabled: this.props.disabled || false },
                    React.createElement(HOOIcon, { iconName: "hoo-icon-arrow-down" })),
                React.createElement("ul", { role: "listbox", ...this.props.ulElementAttributes, className: ulClassName },
                    this.props.options && this.props.options.map((g) => {
                        if (this.state.grouped) {
                            return (React.createElement("li", { className: "hoo-optgroup", key: g.groupName },
                                g.groupName.length > 0 &&
                                    React.createElement("div", { className: "hoo-optgroup-name" }, g.groupName),
                                React.createElement("ul", { className: "hoo-optgroup-items" }, g.groupItems && g.groupItems.map((i, index) => {
                                    return (React.createElement("li", { ref: element => this._optionElements[index] = element, key: i.key, "data-value": i.key, className: `hoo-option ${i.disabled ? "is-disabled" : ""}`, "aria-disabled": i.disabled || false, tabIndex: -1 }, i.text));
                                }))));
                        }
                        else {
                            return (React.createElement("li", { ref: element => this._optionElements.push(element), key: g.key, "data-value": g.key, className: `hoo-option ${g.disabled ? "is-disabled" : ""}`, "aria-disabled": g.disabled || false, tabIndex: -1 }, g.text));
                        }
                    }),
                    this.state.optionsLength < 1 &&
                        React.createElement("li", { key: -1, "data-value": -1, className: "hoo-option is-disabled", "aria-disabled": true, tabIndex: -1 }, (this.props.options == null) ? noOptionText[0] : noOptionText[1]))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOODropDown.js.map
