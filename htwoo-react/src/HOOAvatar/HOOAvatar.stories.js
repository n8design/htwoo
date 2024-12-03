import HOOAvatar, { HOOAvatarSize } from "./HOOAvatar";

const Template = (args) => <HOOAvatar {...args} />;

export default {
  title: "Components/Personas/HOOAvatar",
  component: HOOAvatar,
};

export const Small = {
  render: Template.bind({}),
  name: "Small",

  args: {
    size: HOOAvatarSize.Px16,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
  },
};

export const Medium = {
  render: Template.bind({}),
  name: "Medium",

  args: {
    size: HOOAvatarSize.Px32,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
  },
};

export const Large = {
  render: Template.bind({}),
  name: "Large",

  args: {
    size: HOOAvatarSize.Px64,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
  },
};

export const Max = {
  render: Template.bind({}),
  name: "Max",

  args: {
    size: HOOAvatarSize.Px96,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    size: HOOAvatarSize.Px32,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
