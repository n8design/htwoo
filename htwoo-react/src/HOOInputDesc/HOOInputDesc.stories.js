import HOOInputDesc from "./HOOInputDesc";

const Template = (args) => <HOOInputDesc {...args} />;

export default {
  title: "Components/Inputs/HOOInputDesc",
  component: HOOInputDesc,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    description: "My text input description",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    description: "My text input description",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
