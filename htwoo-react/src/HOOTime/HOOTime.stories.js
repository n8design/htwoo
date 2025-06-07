import HOOTime from "./HOOTime";

const Template = (args) => <HOOTime {...args} />;

export default {
  title: "Components/Inputs/HOOTime",
  component: HOOTime,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    value: new Date().toISOString().split("T")[1],
  },
};

export const MinMaxValues = {
  render: Template.bind({}),
  name: "Min/Max Values",

  args: {
    value: new Date().toISOString().split("T")[1],
    minValue: "00:00:00",
    maxValue: "23:59:59",
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",

  args: {
    value: new Date().toISOString().split("T")[1],
    disabled: true,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    value: new Date().toISOString().split("T")[1],

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
