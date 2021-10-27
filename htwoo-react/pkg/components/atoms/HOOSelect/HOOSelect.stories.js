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
import HOOSelect from './HOOSelect';
export default {
    title: 'Atoms/HOOSelect',
    component: HOOSelect,
};
var options = [
    { key: "Apple", text: "Apple" },
    { key: "Lime", text: "Lime" },
    { key: "Banana", text: "Banana" },
    { key: "Orange", text: "Orange" },
];
var Template = function (args) { return React.createElement(HOOSelect, __assign({}, args)); };
export var Standard = Template.bind({});
Standard.args = { options: options, id: "TestSelect", value: "", containsTypeAhead: false, onChange: function (fieldValue, fieldName) { alert("FieldValue: " + fieldValue + " & FieldName: " + fieldName); } };

//# sourceMappingURL=HOOSelect.stories.js.map
