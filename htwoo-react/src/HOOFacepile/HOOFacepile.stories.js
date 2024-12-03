import HOOFacepile from "./HOOFacepile";
import HOOAvatarPres from "../HOOAvatarPres";
import { HOOAvatarSize } from "../HOOAvatar";
import { HOOPresenceStatus } from "../HOOPresence";

const Template32 = (args) => (
  <HOOFacepile {...args}>
    <HOOAvatarPres
      size={HOOAvatarSize.Px32}
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      imageAlt={"Placeholder Image"}
      onClick={() => {}}
      status={HOOPresenceStatus.Online}
    />
    <HOOAvatarPres
      size={HOOAvatarSize.Px32}
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      imageAlt={"Placeholder Image"}
      onClick={() => {}}
      status={HOOPresenceStatus.Online}
    />
    <HOOAvatarPres
      size={HOOAvatarSize.Px32}
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      imageAlt={"Placeholder Image"}
      onClick={() => {}}
      status={HOOPresenceStatus.Online}
    />
    <HOOAvatarPres
      size={HOOAvatarSize.Px32}
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      imageAlt={"Placeholder Image"}
      onClick={() => {}}
      status={HOOPresenceStatus.Online}
    />
    <HOOAvatarPres
      size={HOOAvatarSize.Px32}
      imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
      imageAlt={"Placeholder Image"}
      onClick={() => {}}
      status={HOOPresenceStatus.Online}
    />
  </HOOFacepile>
);

export default {
  title: "Components/Personas/HOOFacepile",
  component: HOOFacepile,
};

export const Basic = {
  render: Template32.bind({}),
  name: "Basic",
};

export const Extending = {
  render: Template32.bind({}),
  name: "Extending",

  args: (function () {
    return {
      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
