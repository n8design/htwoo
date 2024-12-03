import HOOProgressBar from "./HOOProgressBar";

const Template = (args) => <HOOProgressBar {...args} />;

export default {
  title: "Components/Output/HOOProgressBar",
  component: HOOProgressBar,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    value: "20",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    value: "20",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
