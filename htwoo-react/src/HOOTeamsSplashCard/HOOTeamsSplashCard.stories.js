import HOOTeamsSplashCard from "./HOOTeamsSplashCard";
import HOOSplashCardHeader from "../HOOSplashCardHeader";
import HOOSplashCardTitle from "../HOOSplashCardTitle";
import HOOSplashCardDesc from "../HOOSplashCardDesc";
import HOOSplashCardFooter from "../HOOSplashCardFooter";
import HOOButton, { HOOButtonType } from "../HOOButton";

const Template = (args) => (
  <HOOTeamsSplashCard {...args}>
    <HOOSplashCardHeader
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      imageAlt="Kitten"
    />
    <HOOSplashCardTitle title="My Teams Splash Card" />
    <HOOSplashCardDesc description="My Teams Splash Card Description" />
    <HOOSplashCardFooter>
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
  </HOOTeamsSplashCard>
);

export default {
  title: "Components/Cards/Splash Card/HOOTeamsSplashCard",
  component: HOOTeamsSplashCard,
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
