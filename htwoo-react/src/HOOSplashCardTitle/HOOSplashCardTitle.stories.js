import HOOSplashCardTitle from "./HOOSplashCardTitle";

const Template = (args) => <HOOSplashCardTitle {...args} />;

export default {
  title: "Components/Cards/Splash Card/Elements/HOOSplashCardTitle",
  component: HOOSplashCardTitle,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    title: "Splash Card Title",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    title: "Splash Card Title",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
