import HOOLabel from "./HOOLabel";

const Template = (args) => <HOOLabel {...args} />;

export default {
  title: "Components/Inputs/HOOLabel",
  component: HOOLabel,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    label: "My Label",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    label: "My Label",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
