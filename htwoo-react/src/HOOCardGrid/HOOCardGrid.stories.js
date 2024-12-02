import HOOCardGrid from "./HOOCardGrid";
import HOOCardImage from "../HOOCardImage";
import HOOCardLocation from "../HOOCardLocation";
import HOOCardTitle from "../HOOCardTitle";
import HOOCardFooter from "../HOOCardFooter";
import HOODocumentCard from "../HOODocumentCard";
import { HOOAvatarSize } from "../HOOAvatar";

const Template = (args) => (
  <HOOCardGrid {...args}>
    <HOODocumentCard>
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
    <HOODocumentCard>
      <HOOCardImage
        imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
        imageAlt="Kitten"
      />
      <HOOCardLocation location="My Location Card" />
      <HOOCardTitle title="My Card Title 2" />
      <HOOCardFooter
        avatarImage="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
        avatarImageAlt="Kitty"
        avatarImageSize={HOOAvatarSize.Px32}
        name="Mr. Bigglesworth"
        modified="December 31, 2021"
      />
    </HOODocumentCard>
    <HOODocumentCard>
      <HOOCardImage
        imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
        imageAlt="Kitten"
      />
      <HOOCardLocation location="My Location Card" />
      <HOOCardTitle title="My Card Title 3" />
      <HOOCardFooter
        avatarImage="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
        avatarImageAlt="Kitty"
        avatarImageSize={HOOAvatarSize.Px32}
        name="Mr. Bigglesworth"
        modified="December 31, 2021"
      />
    </HOODocumentCard>
    <HOODocumentCard>
      <HOOCardImage
        imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
        imageAlt="Kitten"
      />
      <HOOCardLocation location="My Location Card" />
      <HOOCardTitle title="My Card Title 4" />
      <HOOCardFooter
        avatarImage="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
        avatarImageAlt="Kitty"
        avatarImageSize={HOOAvatarSize.Px32}
        name="Mr. Bigglesworth"
        modified="December 31, 2021"
      />
    </HOODocumentCard>
    <HOODocumentCard>
      <HOOCardImage
        imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
        imageAlt="Kitten"
      />
      <HOOCardLocation location="My Location Card" />
      <HOOCardTitle title="My Card Title 5" />
      <HOOCardFooter
        avatarImage="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
        avatarImageAlt="Kitty"
        avatarImageSize={HOOAvatarSize.Px32}
        name="Mr. Bigglesworth"
        modified="December 31, 2021"
      />
    </HOODocumentCard>
  </HOOCardGrid>
);

export default {
  title: "Components/Grids/Card Grid/HOOCardGrid",
  component: HOOCardGrid,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    return {
      rootElementAttributes: {
        style: {
          backgroundColor: "mintcream",
        },
      },
    };
  })(),
};
