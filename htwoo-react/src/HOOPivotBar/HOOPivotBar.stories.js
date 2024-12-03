import { useArgs } from "@storybook/preview-api";
import HOOPivotBar, { HOOPivotBarType } from "./HOOPivotBar";
import HOOLabel from "../HOOLabel";

const options = [
  { key: 1, text: "Menu 1" },
  { key: 2, text: "Menu 2" },
  { key: 3, text: "Menu 3" },
  { key: 4, text: "Menu 4" },
  { key: 5, text: "Menu 5" },
];

const Template = (args) => {
  const [_, updateArgs] = useArgs();

  const handle = (ev, key) => {
    args.selectedKey = key;
    updateArgs({ ...args });
  };

  return <HOOPivotBar {...args} onClick={handle} />;
};

export default {
  title: "Components/Menus/HOOPivotBar",
  component: HOOPivotBar,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    selectedKey: 1,
    pivotItems: options,
    hasOverflow: false,
  },
};

export const Overflow = {
  render: Template.bind({}),
  name: "Overflow",

  args: {
    selectedKey: 1,
    pivotItems: options,
    hasOverflow: true,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    selectedKey: 1,
    pivotItems: options,
    hasOverflow: false,

    rootElementAttributes: {
      style: {
        backgroundColor: "mintcream",
      },
    },
  },
};
