import HOOProgressStep from "./HOOProgressStep";

const Template = (args) => <HOOProgressStep {...args} />;

export default {
  title: "Components/Output/HOOProgressStep",
  component: HOOProgressStep,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    label: "Step 1",
    offsetPercent: "25",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    label: "Step 1",
    offsetPercent: "25",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
