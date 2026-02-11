import HOOSpinner from "./HOOSpinner";

const Template = (args) => <HOOSpinner {...args} />;

export default {
  title: "Components/Loading/HOOSpinner",
  component: HOOSpinner,
};

export const Standard = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    size: ""
  },
};

export const XSmall = {
  render: Template.bind({}),
  name: "XSmall",

  args: {
    size: "xsmall"
  },
};

export const Small = {
  render: Template.bind({}),
  name: "Small",

  args: {
    size: "small"
  },
};

export const Large = {
  render: Template.bind({}),
  name: "Large",

  args: {
    size: "large"
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    size: "",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
