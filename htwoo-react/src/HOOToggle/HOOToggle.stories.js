import HOOToggle from "./HOOToggle";

const Template = (args) => <HOOToggle {...args} />;

export default {
  title: "Components/Inputs/HOOToggle",
  component: HOOToggle,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    labelOn: "On",
    labelOff: "Off",
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",

  args: {
    labelOn: "On",
    labelOff: "Off",
    disabled: true,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    labelOn: "On",
    labelOff: "Off",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
