import HOOAction, { HOOActionType } from "./HOOAction";
import { symset } from "../SymbolSet";

const Template = (args) => <HOOAction {...args} />;

export default {
  title: "Components/Buttons/HOOAction",
  component: HOOAction,

  argTypes: {
    type: {
      options: [0, 1, 2],

      control: {
        type: "select",
        labels: ["Action", "Command", "Context"],
      },
    },
  },
};

export const Action = {
  render: Template.bind({}),
  name: "Action",

  args: (function () {
    symset.initSymbols();

    return {
      label: "Action Button",
      iconName: "hoo-icon-plus",

      onClick: () => {
        console.log(`Action Button Clicked`);
      },
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      label: "Action Button",
      iconName: "hoo-icon-plus",

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },

      onClick: () => {
        console.log(`Action Button Clicked`);
      },
    };
  })(),
};
