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
import HOOAction, { HOOActionType } from './HOOAction';
export default {
    title: 'Atoms/HOOAction',
    component: HOOAction,
};
var Template = function (args) { return React.createElement(HOOAction, __assign({}, args)); };
export var Action = Template.bind({});
Action.args = { type: HOOActionType.Action, label: "Action Button", iconName: "Plus" };
export var Command = Template.bind({});
Command.args = { type: HOOActionType.Command, label: "Action Button", iconName: "Plus" };

//# sourceMappingURL=HOOAction.stories.js.map
