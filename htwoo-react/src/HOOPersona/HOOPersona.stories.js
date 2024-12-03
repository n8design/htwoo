import HOOPersona from "./HOOPersona";
import HOOAvatarPres from "../HOOAvatarPres";
import { HOOAvatarSize } from "../HOOAvatar";
import { HOOPresenceStatus } from "../HOOPresence";

const Template = (args) => (
  <HOOPersona {...args.root}>
    <HOOAvatarPres
      imageSource={args.imageUrl}
      imageAlt="Placeholder Image"
      status={HOOPresenceStatus.Online}
    />
  </HOOPersona>
);

export default {
  title: "Components/Personas/HOOPersona",
  component: HOOPersona,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    root: {
      avatarSize: HOOAvatarSize.Px32,
      personaName: "Jane Doeminica",
      personaFunction: "Lead Fluent Designer",
      personaStatusText: "In a meeting",
      personaAvailable: "Call me yesterday",
    },

    imageUrl:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
  },
};

export const Larger = {
  render: Template.bind({}),
  name: "Larger",

  args: {
    root: {
      avatarSize: HOOAvatarSize.Px48,
      personaName: "Jane Doeminica",
      personaFunction: "Lead Fluent Designer",
      personaStatusText: "In a meeting",
      personaAvailable: "Call me yesterday",
    },

    imageUrl:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
  },
};

export const FullSize = {
  render: Template.bind({}),
  name: "Full Size",

  args: {
    root: {
      avatarSize: HOOAvatarSize.Px96,
      personaName: "Jane Doeminica",
      personaFunction: "Lead Fluent Designer",
      personaStatusText: "In a meeting",
      personaAvailable: "Call me yesterday",
    },

    imageUrl:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    root: {
      avatarSize: HOOAvatarSize.Px32,
      personaName: "Jane Doeminica",
      personaFunction: "Lead Fluent Designer",
      personaStatusText: "In a meeting",
      personaAvailable: "Call me yesterday",

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    },

    imageUrl:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",
  },
};
