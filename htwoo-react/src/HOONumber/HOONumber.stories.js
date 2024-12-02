import HOONumber from "./HOONumber";

const Template = (args) => <HOONumber {...args} />;

export default {
  title: "Components/Inputs/HOONumber",
  component: HOONumber,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    value: 0,
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",

  args: {
    value: 0,
    disabled: true,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    value: 0,

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
