import HOOPivotButton from "./HOOPivotButton";

const Template = (args) => <HOOPivotButton {...args} />;

export default {
  title: "Components/Buttons/HOOPivotButton",
  component: HOOPivotButton,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    label: "Pivot Button",
    isActive: true,

    onClick: () => {
      alert("Clicked");
    },
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    label: "Pivot Button",
    isActive: true,

    onClick: () => {
      alert("Clicked");
    },

    rootElementAttributes: {
      style: {
        backgroundColor: "mintcream",
      },
    },
  },
};
