import HOONotifyLabel, { HOONotifyType } from "./HOONotifyLabel";

const Template = (args) => <HOONotifyLabel {...args} />;

export default {
  title: "Components/Validation/HOONotifyLabel",
  component: HOONotifyLabel,
};

export const Success = {
  render: Template.bind({}),
  name: "Success",

  args: {
    type: HOONotifyType.Success,
    message: "Successful message",
  },
};

export const Error = {
  render: Template.bind({}),
  name: "Error",

  args: {
    type: HOONotifyType.Error,
    message: "Error message",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    type: HOONotifyType.Error,
    message: "Error message",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
