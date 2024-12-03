import HOOSplashCardFooter from "./HOOSplashCardFooter";
import HOOButton, { HOOButtonType } from "../HOOButton";

const Template = (args) => (
  <HOOSplashCardFooter {...args}>
    <HOOButton
      type={HOOButtonType.Primary}
      label="Create Something"
      onClick={() => {
        alert("Clicked");
      }}
    />
    <HOOButton
      type={HOOButtonType.Standard}
      label="Call to Action"
      onClick={() => {
        alert("Clicked");
      }}
    />
  </HOOSplashCardFooter>
);

export default {
  title: "Components/Cards/Splash Card/Elements/HOOSplashCardFooter",
  component: HOOSplashCardFooter,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",
  args: {},
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
