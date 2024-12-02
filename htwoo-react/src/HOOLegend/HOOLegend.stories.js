import HOOLegend from "./HOOLegend";

const Template = (args) => <HOOLegend {...args} />;

export default {
  title: "Components/Inputs/HOOLegend",
  component: HOOLegend,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    legendText: "My Legend",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    legendText: "My Legend",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
