import HOOPresence, { HOOPresenceStatus } from "./HOOPresence";

const Template = (args) => <HOOPresence {...args} />;

export default {
  title: "Components/Personas/HOOPresence",
  component: HOOPresence,
};

export const Online = {
  render: Template.bind({}),
  name: "Online",

  args: {
    status: HOOPresenceStatus.Online,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    status: HOOPresenceStatus.Online,

    rootElementAttributes: {
      style: {
        backgroundColor: "purple",
      },
    },
  },
};
