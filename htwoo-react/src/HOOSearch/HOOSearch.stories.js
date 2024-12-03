import HOOSearch from "./HOOSearch";

const Template = (args) => <HOOSearch {...args} />;

export default {
  title: "Components/Inputs/HOOSearch",
  component: HOOSearch,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    placeholder: "Search here",
    value: "",

    onChange: () => {
      alert("changed");
    },
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    placeholder: "Search here",
    value: "",

    onChange: () => {
      alert("changed");
    },

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
