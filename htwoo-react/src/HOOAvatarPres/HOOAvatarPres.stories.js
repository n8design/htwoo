import HOOAvatarPres from "./HOOAvatarPres";
import { HOOAvatarSize } from "../HOOAvatar";
import { HOOPresenceStatus } from "../HOOPresence";

const Template = (args) => <HOOAvatarPres {...args} />;

export default {
  title: "Components/Personas/HOOAvatarPres",
  component: HOOAvatarPres,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    size: HOOAvatarSize.Px32,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
    status: HOOPresenceStatus.Online,
  },
};

export const Larger = {
  render: Template.bind({}),
  name: "Larger",

  args: {
    size: HOOAvatarSize.Px64,
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
    imageAlt: "Placeholder Image",
    onClick: () => {},
    status: HOOPresenceStatus.Online,
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
    status: HOOPresenceStatus.Online,

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
