import HOOCheckbox from "./HOOCheckbox.tsx";

const Template = (args) => <HOOCheckbox {...args} />;

export default {
  title: "Components/Inputs/HOOCheckbox",
  component: HOOCheckbox,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: {
    label: "My Checkbox",
  },
};

export const Disbled = {
  render: Template.bind({}),
  name: "Disbled",

  args: {
    label: "My Checkbox Disabled",
    disabled: true,
  },
};
