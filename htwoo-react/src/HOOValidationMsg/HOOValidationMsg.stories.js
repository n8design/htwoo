import HOOValidationMsg from "./HOOValidationMsg";

const Template = (args) => <HOOValidationMsg {...args} />;

export default {
  title: "Components/Inputs/HOOValidationMsg",
  component: HOOValidationMsg,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    validationMsg: "My text input validation message",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    validationMsg: "My text input validation message",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
