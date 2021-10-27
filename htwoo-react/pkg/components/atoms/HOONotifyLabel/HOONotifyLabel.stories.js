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
import HOONotifyLabel, { HOONotifyType } from './HOONotifyLabel';
export default {
    title: 'Atoms/HOONotifyLabel',
    component: HOONotifyLabel,
};
var Template = function (args) { return React.createElement(HOONotifyLabel, __assign({}, args)); };
export var Success = Template.bind({});
Success.args = { type: HOONotifyType.Success, message: "Successful message" };
export var Error = Template.bind({});
Error.args = { type: HOONotifyType.Error, message: "Error message" };

//# sourceMappingURL=HOONotifyLabel.stories.js.map
