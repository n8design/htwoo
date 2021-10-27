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
import HOOLabel from './HOOLabel';
export default {
    title: 'Atoms/HOOLabel',
    component: HOOLabel,
};
var Template = function (args) { return React.createElement(HOOLabel, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { label: "My Label" };

//# sourceMappingURL=HOOLabel.stories.js.map
