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
import HOOWebPartTitle from './HOOWebPartTitle';
export default {
    title: 'Atoms/HOOWebPartTitle',
    component: HOOWebPartTitle,
    argTypes: {
        rootElementAttributes: {
            control: {
                type: 'object',
            },
        },
        updateTitle: { action: 'title updated' }
    }
};
var Template = function (args) { return React.createElement(HOOWebPartTitle, __assign({}, args)); };
export var Standard = Template.bind({});
var titleValue1 = null;
Standard.args = { title: titleValue1, placeholder: "Web Part Title", editMode: true, updateTitle: function (title) { titleValue1 = title; } };
export var Extend = Template.bind({});
var titleValue2 = null;
var rea = {
    className: "myClass"
};
Extend.args = { rootElementAttributes: rea, title: titleValue2, placeholder: "Web Part Title", editMode: true, updateTitle: function (title) { titleValue2 = title; } };

//# sourceMappingURL=HOOWebPartTitle.stories.js.map
