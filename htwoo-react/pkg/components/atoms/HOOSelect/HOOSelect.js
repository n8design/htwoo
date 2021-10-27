var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { Logger } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import findIndex from "lodash-es/findIndex";
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
var HOOSelectState = (function () {
    function HOOSelectState(currentValue, optionsLength, selectStatus, open) {
        if (currentValue === void 0) { currentValue = null; }
        if (optionsLength === void 0) { optionsLength = 0; }
        if (selectStatus === void 0) { selectStatus = HOOSelectStatus.Initial; }
        if (open === void 0) { open = false; }
        this.currentValue = currentValue;
        this.optionsLength = optionsLength;
        this.selectStatus = selectStatus;
        this.open = open;
    }
    return HOOSelectState;
}());
export { HOOSelectState };
var HOOSelect = (function (_super) {
    __extends(HOOSelect, _super);
    function HOOSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOSelect";
        _this._componentClass = "hoo-select";
        _this._optionElements = [];
        _this._valueChanged = false;
        _this._onChange = function (newValue, fieldName) {
            try {
                _this.setState({ currentValue: newValue }, function () {
                    _this.props.onChange(newValue, fieldName);
                });
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (_onChange) - " + err, 3);
            }
        };
        _this._toggleDropdown = function () {
            try {
                var focus_1 = document.activeElement;
                var selectStatus = _this.state.selectStatus;
                var open_1 = _this.state.open;
                switch (_this.state.selectStatus) {
                    case HOOSelectStatus.Initial:
                        open_1 = !open_1;
                        selectStatus = HOOSelectStatus.Open;
                        break;
                    case HOOSelectStatus.Open:
                        if ((focus_1 == _this._inputElement.current) || (focus_1.tagName == "BUTTON")) {
                            open_1 = false;
                            selectStatus = HOOSelectStatus.Initial;
                        }
                        else if (focus_1.tagName == "LI") {
                            _this.props.onChange(focus_1.dataset.value, _this.props.id);
                            open_1 = false;
                            selectStatus = HOOSelectStatus.Closed;
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        break;
                    case HOOSelectStatus.Filtered:
                        if (focus_1.tagName == "LI") {
                            _this.props.onChange(focus_1.dataset.value, _this.props.id);
                            open_1 = false;
                            selectStatus = HOOSelectStatus.Closed;
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        break;
                    case HOOSelectStatus.Closed:
                        open_1 = true;
                        selectStatus = HOOSelectStatus.Open;
                        break;
                }
                _this.setState({ open: open_1, selectStatus: selectStatus });
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (_toggleDropdown) - " + err, 3);
            }
        };
        _this._keyUp = function (event) {
            var focus = document.activeElement;
            var key = event.key;
            var selectStatus = _this.state.selectStatus;
            var open = _this.state.open;
            try {
                switch (key) {
                    case 'Enter':
                        if (_this.state.selectStatus === HOOSelectStatus.Initial) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Open && focus.tagName === 'LI') {
                            _this.props.onChange(focus.dataset.value, _this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Open && focus === _this._inputElement.current) {
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Filtered && focus.tagName === 'LI') {
                            _this.props.onChange(focus.dataset.value, _this.props.id);
                            open = false;
                            selectStatus = HOOSelectStatus.Closed;
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Input);
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Filtered && focus === _this._inputElement.current) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                        }
                        else {
                            open = true;
                            selectStatus = HOOSelectStatus.Filtered;
                        }
                        break;
                    case 'Escape':
                        if (_this.state.selectStatus === HOOSelectStatus.Open || _this.state.selectStatus === HOOSelectStatus.Filtered) {
                            open = false;
                            selectStatus = HOOSelectStatus.Initial;
                        }
                        break;
                    case 'ArrowDown':
                        if (_this.state.selectStatus === HOOSelectStatus.Initial || _this.state.selectStatus === HOOSelectStatus.Closed) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                            _this._moveFocus(_this._inputElement.current, HOOSelectFocus.Forward);
                        }
                        else {
                            open = true;
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Forward);
                        }
                        break;
                    case 'ArrowUp':
                        if (_this.state.selectStatus === HOOSelectStatus.Initial || _this.state.selectStatus === HOOSelectStatus.Closed) {
                            open = true;
                            selectStatus = HOOSelectStatus.Open;
                            _this._moveFocus(_this._inputElement.current, HOOSelectFocus.Back);
                        }
                        else {
                            _this._moveFocus(document.activeElement, HOOSelectFocus.Back);
                        }
                        break;
                    default:
                        if (_this.state.selectStatus === HOOSelectStatus.Initial) {
                            open = true;
                            selectStatus = HOOSelectStatus.Filtered;
                            _this._doFilter();
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Open) {
                            selectStatus = HOOSelectStatus.Filtered;
                            _this._doFilter();
                        }
                        else if (_this.state.selectStatus === HOOSelectStatus.Closed) {
                            selectStatus = HOOSelectStatus.Filtered;
                            _this._doFilter();
                        }
                        else {
                            _this._doFilter();
                        }
                        break;
                }
                _this.setState({ open: open, selectStatus: selectStatus });
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (_keyUp) - " + err, 3);
            }
        };
        _this._doFilter = function () {
            try {
                var optionsLength = _this.state.optionsLength;
                var selectStatus = _this.state.selectStatus;
                var terms_1 = (_this.state.currentValue === _this.props.value) ? "" : _this.state.currentValue;
                var aFilteredOptions = _this._optionElements.filter(function (option) {
                    if (_this.props.containsTypeAhead) {
                        return (option.innerText.toLowerCase().indexOf(terms_1.toLowerCase()) > -1);
                    }
                    else {
                        if (option.innerText.toLowerCase().substring(0, terms_1.length) == (terms_1.toLowerCase())) {
                            return true;
                        }
                    }
                });
                _this._optionElements.forEach(function (option) { return option.style.display = "none"; });
                aFilteredOptions.forEach(function (option) {
                    option.style.display = "";
                });
                if (aFilteredOptions.length < _this._optionElements.length) {
                    selectStatus = HOOSelectStatus.Filtered;
                }
                optionsLength = aFilteredOptions.length;
                _this.setState({ selectStatus: selectStatus, optionsLength: optionsLength });
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (_doFilter) - " + err, 3);
            }
        };
        _this._moveFocus = function (fromHere, toThere) {
            try {
                var aCurrentOptions = _this._optionElements.filter(function (option) {
                    if (option.style.display === '') {
                        return true;
                    }
                });
                if (aCurrentOptions.length === 0) {
                    return;
                }
                if (toThere === HOOSelectFocus.Input) {
                    _this._inputElement.current.focus();
                }
                switch (fromHere) {
                    case _this._inputElement.current:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 1].focus();
                        }
                        break;
                    case _this._optionElements[0]:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[1].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            _this._inputElement.current.focus();
                        }
                        break;
                    case _this._optionElements[_this._optionElements.length - 1]:
                        if (toThere === HOOSelectFocus.Forward) {
                            aCurrentOptions[0].focus();
                        }
                        else if (toThere === HOOSelectFocus.Back) {
                            aCurrentOptions[aCurrentOptions.length - 2].focus();
                        }
                        break;
                    default:
                        var currentItem_1 = document.activeElement;
                        var whichOne = findIndex(aCurrentOptions, function (o) { return o == currentItem_1; });
                        if (toThere === HOOSelectFocus.Forward) {
                            var nextOne = aCurrentOptions[whichOne + 1];
                            nextOne.focus();
                        }
                        else if (toThere === HOOSelectFocus.Back && whichOne > 0) {
                            var previousOne = aCurrentOptions[whichOne - 1];
                            previousOne.focus();
                        }
                        else {
                            _this._inputElement.current.focus();
                        }
                        break;
                }
            }
            catch (err) {
                Logger.write(_this.LOG_SOURCE + " (_moveFocus) - " + err, 3);
            }
        };
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOSelect";
        _this.state = new HOOSelectState();
        return _this;
    }
    HOOSelect.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        if (this.props.value != nextProps.value) {
            this._valueChanged = true;
        }
        return true;
    };
    HOOSelect.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this._valueChanged) {
            this._valueChanged = false;
            this.setState({ currentValue: this.props.value, selectStatus: HOOSelectStatus.Initial }, function () {
                _this._doFilter();
            });
        }
    };
    HOOSelect.prototype.render = function () {
        var _this = this;
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            var optionLengthMessageString = this.state.optionsLength + " options available. Arrow down to browse or start typing to filter.";
            if (this.props.optionsLengthMessage) {
                var indexLengthPlaceholder = this.props.optionsLengthMessage.indexOf("{0}") || -1;
                optionLengthMessageString = (indexLengthPlaceholder > -1) ? this.props.optionsLengthMessage.replace("{0}", this.state.optionsLength.toString()) : this.state.optionsLength + " " + this.props.optionsLengthMessage;
            }
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className, role: "combobox", "aria-haspopup": "listbox", "aria-owns": this.props.id + "-list", onClick: this._toggleDropdown, onKeyUp: this._keyUp }),
                React.createElement("div", { id: this.props.id + "-status", className: "hidden-visually", "aria-live": "polite" }, optionLengthMessageString),
                React.createElement("input", { ref: this._inputElement, className: "hoo-select-text", type: "text", id: this.props.id + "-input", value: this.state.currentValue, "aria-autocomplete": "both", autoComplete: "off", "aria-controls": this.props.id + "-list", onChange: function (e) { _this.setState({ currentValue: e.currentTarget.value }); } }),
                React.createElement(HOOButton, { type: HOOButtonType.Icon },
                    React.createElement(HOOIcon, { iconName: "hoo-icon-arrow-down" })),
                React.createElement("ul", { role: "listbox", className: "hoo-select-dropdown " + ((this.state.open) ? "" : "hidden-all") }, this.props.options.map(function (o, index) {
                    return (React.createElement("li", { ref: function (element) { return _this._optionElements[index] = element; }, key: o.key, className: "hoo-option", role: "option", "data-value": o.key, tabIndex: -1, onClick: function () { _this._onChange(o.key, _this.props.id); } }, o.text));
                }))));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOSelect;
}(React.Component));
export default HOOSelect;

//# sourceMappingURL=HOOSelect.js.map
