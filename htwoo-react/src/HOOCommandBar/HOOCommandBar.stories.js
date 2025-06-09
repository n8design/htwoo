import { useArgs } from "storybook/preview-api";
import { symset } from "../SymbolSet";
import HOOCommandBar, { HOOCommandBarType } from "./HOOCommandBar";
import HOOLabel from "../HOOLabel";

const flyoutMenuItems = [
  { iconName: "hoo-icon-plus", label: "First Element" },
  { iconName: "hoo-icon-plus", label: "Second Element" },
];
const options = [
  { key: 1, text: "Menu 1", flyoutMenuItems: flyoutMenuItems },
  { key: 2, text: "Menu 2", flyoutMenuItems: flyoutMenuItems },
  { key: 3, text: "Menu 3", flyoutMenuItems: flyoutMenuItems },
  { key: 4, text: "Menu 4" },
  { key: 5, text: "Menu 5", flyoutMenuItems: [] },
];

const Template = (args) => {
  const [_, updateArgs] = useArgs();

  const handle = (ev, key, flyoutItem) => {
    alert(
      `Selected menu option ${key} -> flyout item: ${JSON.stringify(flyoutItem)}`,
    );
    updateArgs({ ...args });
  };

  return <HOOCommandBar {...args} onClick={handle} />;
};

export default {
  title: "Components/Menus/HOOCommandBar",
  component: HOOCommandBar,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: (function () {
    symset.initSymbols();

    return {
      commandItems: options,
      hasOverflow: false,
    };
  })(),
};

export const Overflow = {
  render: Template.bind({}),
  name: "Overflow",

  args: (function () {
    symset.initSymbols();

    return {
      commandItems: options,
      hasOverflow: true,
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      commandItems: options,
      hasOverflow: true,

      rootElementAttributes: {
        style: {
          backgroundColor: "mintcream",
        },
      },
    };
  })(),
};
