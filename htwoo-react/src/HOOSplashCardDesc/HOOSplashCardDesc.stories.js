import HOOSplashCardDesc from "./HOOSplashCardDesc";

const Template = (args) => <HOOSplashCardDesc {...args} />;

export default {
  title: "Components/Cards/Splash Card/Elements/HOOSplashCardDesc",
  component: HOOSplashCardDesc,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    description: "Splash Card Description",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    description: "Splash Card Description",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
