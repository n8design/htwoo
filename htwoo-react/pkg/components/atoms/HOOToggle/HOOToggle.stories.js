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
import HOOToggle from './HOOToggle';
export default {
    title: 'Atoms/HOOToggle',
    component: HOOToggle,
};
var Template = function (args) { return React.createElement(HOOToggle, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { labelOn: "On", labelOff: "Off" };
export var Disabled = Template.bind({});
Disabled.args = { labelOn: "On", labelOff: "Off", disabled: true };

//# sourceMappingURL=HOOToggle.stories.js.map
