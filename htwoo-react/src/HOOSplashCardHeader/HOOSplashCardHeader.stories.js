import HOOSplashCardHeader from "./HOOSplashCardHeader";

const Template = (args) => <HOOSplashCardHeader {...args} />;

export default {
  title: "Components/Cards/Splash Card/Elements/HOOSplashCardHeader",
  component: HOOSplashCardHeader,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
    imageAlt: "Kitten",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
    imageAlt: "Kitten",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
