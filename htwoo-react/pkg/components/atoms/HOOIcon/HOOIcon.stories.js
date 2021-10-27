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
import HOOIcon from './HOOIcon';
export default {
    title: 'Atoms/HOOIcon',
    component: HOOIcon,
};
var Template = function (args) { return React.createElement(HOOIcon, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = { iconName: 'icon-close' };

//# sourceMappingURL=HOOIcon.stories.js.map
