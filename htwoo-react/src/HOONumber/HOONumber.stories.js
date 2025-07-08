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

export const Prefix = {
  render: Template.bind({}),
  name: "Prefix",

  args: {
    value: "2.00",
    inputPrefix: "$",
  },
};

export const Suffix = {
  render: Template.bind({}),
  name: "Suffix",

  args: {
    value: "200",
    inputSuffix: "lbs",
  },
};

export const PrefixSuffix = {
  render: Template.bind({}),
  name: "Prefix/Suffix",

  args: {
    value: "2.00",
    inputPrefix: "$",
    inputSuffix: "per pound",
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
