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
import HOOText from './HOOText';
export default {
    title: 'Atoms/HOOText',
    component: HOOText,
};
var Template = function (args) { return React.createElement(HOOText, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = {};
export var Disabled = Template.bind({});
Disabled.args = { disabled: true };
export var PrefixOnly = Template.bind({});
PrefixOnly.args = { inputPrefix: "https://" };
export var SuffixOnly = Template.bind({});
SuffixOnly.args = { inputSuffix: ".com" };
export var WithPreSuffix = Template.bind({});
WithPreSuffix.args = { inputPrefix: "https://", inputSuffix: ".com" };

//# sourceMappingURL=HOOText.stories.js.map
