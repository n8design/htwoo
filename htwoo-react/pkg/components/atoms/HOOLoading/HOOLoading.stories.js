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
import HOOLoading from './HOOLoading';
export default {
    title: 'Atoms/HOOLoading',
    component: HOOLoading,
};
var Template = function (args) { return React.createElement(HOOLoading, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { minValue: 0, maxValue: 100, value: 20 };

//# sourceMappingURL=HOOLoading.stories.js.map
