import HOOCardLocation from "./HOOCardLocation";

const Template = (args) => <HOOCardLocation {...args} />;

export default {
  title: "Components/Cards/Document Card/Elements/HOOCardLocation",
  component: HOOCardLocation,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    location: "Location Value",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    location: "Location Value",

    rootElementAttributes: {
      style: {
        backgroundColor: "mintcream",
      },
    },
  },
};
