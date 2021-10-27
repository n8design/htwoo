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
import React from 'react';
import HOORadioButton from './HOORadioButton';
export default {
    title: 'Atoms/HOORadioButton',
    component: HOORadioButton,
};
var Template = function (args) { return React.createElement(HOORadioButton, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { label: "My RadioButton" };
export var Disabled = Template.bind({});
Disabled.args = { label: "My RadioButton Disabled", disabled: true };

//# sourceMappingURL=HOORadioButton.stories.js.map
