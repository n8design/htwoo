import * as React from "react";
import HOOCheckbox from "../HOOCheckbox";
import { getRandomString, isEqual } from "../common/Common";
import HOORadioButton from "../HOORadioButton";
export var HOOOptionListType;
(function (HOOOptionListType) {
    HOOOptionListType[HOOOptionListType["Checkbox"] = 0] = "Checkbox";
    HOOOptionListType[HOOOptionListType["RadioButton"] = 1] = "RadioButton";
})(HOOOptionListType || (HOOOptionListType = {}));
export var HOOOptionListDirection;
(function (HOOOptionListDirection) {
    HOOOptionListDirection[HOOOptionListDirection["Vertical"] = 0] = "Vertical";
    HOOOptionListDirection[HOOOptionListDirection["Horizontal"] = 1] = "Horizontal";
})(HOOOptionListDirection || (HOOOptionListDirection = {}));
export class HOOOptionListState {
    constructor(rea = undefined, styleblock = {}) {
        this.rea = rea;
        this.styleblock = styleblock;
    }
}
export default class HOOOptionList extends React.Component {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOOptionList";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-button";
        this._optionListName = "hoo-options-";
        this._optionListId = "hoo-options-";
        this._direction = HOOOptionListDirection.Vertical;
        this._valid = true;
        this._updateStyle = false;
        this._onChange = (event, key) => {
            try {
                const checked = event.target.checked;
                this.props.onChange(key, checked);
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
            }
        };
        this._getOptionTSX = (option) => {
            let retVal = null;
            try {
                let checked = false;
                const elementAttributes = { name: this._optionListName };
                switch (this.props.type) {
                    case HOOOptionListType.Checkbox:
                        checked = this.props.value?.indexOf(option.key) > -1;
                        retVal = React.createElement(HOOCheckbox, { checked: checked, disabled: this.props.disabled || false, label: option.text, onChange: (e) => { this._onChange(e, option.key); }, rootElementAttributes: elementAttributes });
                        break;
                    case HOOOptionListType.RadioButton:
                        checked = this.props.value === option.key;
                        retVal = React.createElement(HOORadioButton, { checked: checked, disabled: this.props.disabled || false, value: option.key, label: option.text, onChange: (e) => { this._onChange(e, option.key); }, rootElementAttributes: elementAttributes });
                        break;
                }
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_getOptionTSX) - ${err}`);
            }
            return retVal;
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOOptionList";
        this._direction = this.props.direction || HOOOptionListDirection.Vertical;
        this._optionListName += getRandomString(10);
        this._optionListId = props.forId || `${this._optionListId}${getRandomString(10)}`;
        this._componentClass = (props.type === HOOOptionListType.Checkbox) ? "hoo-checkbox-group" : "hoo-radiobutton-group";
        this._valid = (props.value === null) || ((props.type === HOOOptionListType.Checkbox) ? Array.isArray(props.value) : !Array.isArray(props.value));
        let styleblock = undefined;
        if (this.props.rootElementAttributes?.style) {
            styleblock = { ...this.props.rootElementAttributes?.style };
        }
        if ((this.props.colsDesk !== undefined) || (this.props.colsMobile !== undefined)) {
            styleblock = styleblock || {};
            if (this.props.colsDesk !== undefined) {
                styleblock["--cols-desk"] = this.props.colsDesk;
            }
            if (this.props.colsMobile !== undefined) {
                styleblock["--cols-mobile"] = this.props.colsMobile;
            }
        }
        let rea = undefined;
        if (this.props.rootElementAttributes) {
            rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
            if (this.props.reactKey) {
                rea["key"] = this.props.reactKey;
            }
            if (this.props.type === HOOOptionListType.RadioButton) {
                rea["tabindex"] = 0;
                rea["role"] = "radiogroup";
            }
            else {
                rea["role"] = "checkbox";
            }
            delete rea.style;
        }
        this.state = new HOOOptionListState();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        if (nextProps.value !== this.props.value) {
            this._valid = (nextProps.value === null) || ((nextProps.type === HOOOptionListType.Checkbox) ? Array.isArray(nextProps.value) : !Array.isArray(nextProps.value));
        }
        if (nextProps.type != this.props.type) {
            this._updateStyle = true;
        }
        if (nextProps.colsDesk != this.props.colsDesk) {
            this._updateStyle = true;
        }
        if (nextProps.colsMobile != this.props.colsMobile) {
            this._updateStyle = true;
        }
        if (nextProps.rootElementAttributes != this.props.rootElementAttributes) {
            this._updateStyle = true;
        }
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        try {
            if (this._updateStyle) {
                this._updateStyle = false;
                let styleblock = undefined;
                if (this.props.rootElementAttributes?.style) {
                    styleblock = { ...this.props.rootElementAttributes?.style };
                }
                if ((this.props.colsDesk !== undefined) || (this.props.colsMobile !== undefined)) {
                    styleblock = styleblock || {};
                    if (this.props.colsDesk !== undefined) {
                        styleblock["--cols-desk"] = this.props.colsDesk;
                    }
                    if (this.props.colsMobile !== undefined) {
                        styleblock["--cols-mobile"] = this.props.colsMobile;
                    }
                }
                let rea = undefined;
                if (this.props.rootElementAttributes) {
                    rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
                    if (this.props.reactKey) {
                        rea["key"] = this.props.reactKey;
                    }
                    if (this.props.type === HOOOptionListType.RadioButton) {
                        rea["tabindex"] = 0;
                        rea["role"] = "radiogroup";
                    }
                    else {
                        rea["role"] = "checkbox";
                    }
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
            let className = `${this._componentClass} ${(this._direction === HOOOptionListDirection.Horizontal ? "is-horizontal" : "")}`;
            className = (this.props.rootElementAttributes?.className) ? `${className} ${this.props.rootElementAttributes?.className}` : className;
            return (React.createElement("menu", { ...this._rootProps, id: this._optionListId, ...this.state.rea, className: className, style: this.state.styleblock },
                this._valid && this.props.options && this.props.options.map((option) => {
                    const tabIndexProp = (this.props.type === HOOOptionListType.RadioButton) ? { tabIndex: 0 } : {};
                    return (React.createElement("li", { key: option.key, ...tabIndexProp }, this._getOptionTSX(option)));
                }),
                !this._valid &&
                    "The type of HOOOptionList does not match the type of value"));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOOptionList.js.map
