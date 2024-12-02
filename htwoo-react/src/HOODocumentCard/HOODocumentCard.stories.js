import HOODocumentCard from "./HOODocumentCard";
import HOOCardImage from "../HOOCardImage";
import HOOCardLocation from "../HOOCardLocation";
import HOOCardTitle from "../HOOCardTitle";
import HOOCardFooter from "../HOOCardFooter";
import { HOOAvatarSize } from "../HOOAvatar";

const Template = (args) => (
  <HOODocumentCard {...args}>
    <HOOCardImage
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      imageAlt="Kitten"
    />
    <HOOCardLocation location="My Location Card" />
    <HOOCardTitle title="My Card Title" />
    <HOOCardFooter
      avatarImage="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      avatarImageAlt="Kitty"
      avatarImageSize={HOOAvatarSize.Px32}
      name="Mr. Bigglesworth"
      modified="December 31, 2021"
    />
  </HOODocumentCard>
);

export default {
  title: "Components/Cards/Document Card/HOODocumentCard",
  component: HOODocumentCard,
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
        backgroundColor: "mintcream",
      },
    },
  },
};
