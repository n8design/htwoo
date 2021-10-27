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
import HOOButton, { HOOButtonType } from './HOOButton';
export default {
    title: 'Atoms/HOOButton',
    component: HOOButton,
};
var Template = function (args) { return React.createElement(HOOButton, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { type: HOOButtonType.Standard, label: 'Button', onClick: function () { alert("Clicked"); } };
export var Primary = Template.bind({});
Primary.args = { type: HOOButtonType.Primary, label: 'Button', onClick: function () { alert("Clicked"); } };
export var Extend = Template.bind({});
var rea = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOButtonType.Standard, label: 'Button', onClick: function () { alert("Clicked"); }, rootElementAttributes: rea };

//# sourceMappingURL=HOOButton.stories.js.map
