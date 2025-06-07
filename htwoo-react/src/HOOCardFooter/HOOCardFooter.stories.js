import HOOCardFooter from "./HOOCardFooter";
import { HOOAvatarSize } from "../HOOAvatar";

const Template = (args) => <HOOCardFooter {...args} />;

export default {
  title: "Components/Cards/Document Card/Elements/HOOCardFooter",
  component: HOOCardFooter,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    avatarImage:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    avatarImageAlt: "Kitten",
    avatarImageSize: HOOAvatarSize.Px32,
    name: "Kitten King",
    modified: "Dec 1, 2021",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    avatarImage:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    avatarImageAlt: "Kitten",
    avatarImageSize: HOOAvatarSize.Px32,
    name: "Kitten King",
    modified: "Dec 1, 2021",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
