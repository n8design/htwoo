import HOOCardTitle from "./HOOCardTitle";

const Template = (args) => <HOOCardTitle {...args} />;

export default {
  title: "Components/Cards/Document Card/Elements/HOOCardTitle",
  component: HOOCardTitle,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    title: "Title Value",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    title: "Title Value",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
