import HOORadioButton from "./HOORadioButton";

const Template = (args) => <HOORadioButton {...args} />;

export default {
  title: "Components/Inputs/HOORadioButton",
  component: HOORadioButton,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    label: "My RadioButton",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    label: "My RadioButton",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
