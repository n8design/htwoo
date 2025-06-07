import HOOLoading from "./HOOLoading";

const Template = (args) => <HOOLoading {...args} />;

export default {
  title: "Components/Loading/HOOLoading",
  component: HOOLoading,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    minValue: 0,
    maxValue: 100,
    value: 20,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    minValue: 0,
    maxValue: 100,
    value: 20,

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
