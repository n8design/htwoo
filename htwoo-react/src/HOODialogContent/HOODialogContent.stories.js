import HOODialogContent from "./HOODialogContent";
import HOOLabel from "../HOOLabel";

const Template = (args) => (
  <HOODialogContent {...args}>
    <HOOLabel label="Contents of Dialog" />
  </HOODialogContent>
);

export default {
  title: "Components/Dialogs/HOODialogContent",
  component: HOODialogContent,
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
