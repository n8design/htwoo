import HOOOptionList, { HOOOptionListType } from "./HOOOptionList.tsx";

const options = [
  { key: 1, text: "Apple" },
  { key: 2, text: "Banana" },
  { key: 3, text: "Cherry" },
  { key: 4, text: "Date" },
  { key: 5, text: "Elderberry" },
  { key: 6, text: "Fig" },
  { key: 7, text: "Grape" },
  { key: 8, text: "Honeydew" },
  { key: 9, text: "Iced Melon" },
  { key: 10, text: "Jackfruit" },
];

const Template = (args) => <HOOOptionList {...args} />;

export default {
  title: "Components/Inputs/HOOOptionList",
  component: HOOOptionList,
};

export const CheckboxList = {
  render: Template.bind({}),
  name: "Checkbox List",

  args: {
    type: HOOOptionListType.Checkbox,
    options: options,
    value: [1],
  },
};

export const MultiColumnCheckboxList = {
  render: Template.bind({}),
  name: "Multi-column Checkbox List",

  args: {
    type: HOOOptionListType.Checkbox,
    options: options,
    value: [1],
    colsDesk: 2,
    colsMobile: 1,
  },
};

export const RadioButtonList = {
  render: Template.bind({}),
  name: "Radio Button List",

  args: {
    type: HOOOptionListType.RadioButton,
    options: options,
    value: 1,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    type: HOOOptionListType.Checkbox,
    options: options,
    value: [1],

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
