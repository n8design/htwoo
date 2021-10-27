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
import HOOFlyoutMenu from './HOOFlyoutMenu';
export default {
    title: 'Atoms/HOOFlyoutMenu',
    component: HOOFlyoutMenu,
};
var flyoutMenuItems = [{ iconName: 'Plus', label: 'First Element' }, { iconName: 'Plus', label: 'Second Element' }];
var Template = function (args) { return React.createElement(HOOFlyoutMenu, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { contextItems: flyoutMenuItems };

//# sourceMappingURL=HOOFlyoutMenu.stories.js.map
