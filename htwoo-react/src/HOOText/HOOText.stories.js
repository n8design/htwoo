import HOOText from "./HOOText";

const Template = (args) => <HOOText {...args} />;

export default {
  title: "Components/Inputs/HOOText",
  component: HOOText,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    value: "Default Value",
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",

  args: {
    value: "Default Value",
    disabled: true,
  },
};

export const Prefix = {
  render: Template.bind({}),
  name: "Prefix",

  args: {
    value: "Default Value",
    inputPrefix: "https://",
  },
};

export const Suffix = {
  render: Template.bind({}),
  name: "Suffix",

  args: {
    value: "Default Value",
    inputSuffix: ".com",
  },
};

export const PrefixSuffix = {
  render: Template.bind({}),
  name: "Prefix/Suffix",

  args: {
    value: "Default Value",
    inputPrefix: "https://",
    inputSuffix: ".com",
  },
};

export const MultilineTextbox = {
  render: Template.bind({}),
  name: "Multiline Textbox",

  args: {
    value: "Default Value",
    multiline: 5,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    value: "Default Value",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
