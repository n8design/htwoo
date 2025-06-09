import { useArgs } from "storybook/preview-api";
import HOOVerticalNav from "./HOOVerticalNav";
import { symset } from "../SymbolSet";

const childNavItems = [
  { key: 101, text: "Value 1 - 1", href: "https://microsoft.com" },
  {
    key: 102,
    text: "Value 1 - 2",
    onItemClick: (key) => {
      alert(`Key: ${key}`);
    },
  },
  { key: 103, text: "Value 1 - 3", href: "https://boston.com" },
];
const navItems = [
  {
    key: 1,
    text: "Value 1",
    href: "https://google.com",
    childNavItems: childNavItems,
  },
  { key: 2, text: "Value 2" },
  {
    key: 3,
    text: "Value 3",
    onItemClick: (key) => {
      alert(`Key: ${key}`);
    },
  },
];

const Template = (args) => {
  const [_, updateArgs] = useArgs();

  const handle = (ev, key) => {
    args.selectedKey = key;
    updateArgs({ ...args });
  };

  return <HOOVerticalNav selectedKey={101} {...args} />;
  //return <HOOVerticalNav selectedKey={101} {...args} onClick={handle}/>;
};

export default {
  title: "Components/Menus/HOOVerticalNav",
  component: HOOVerticalNav,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: (function () {
    symset.initSymbols();

    return {
      navItems: navItems,
    };
  })(),
};

export const ExpandedOnLoad = {
  render: Template.bind({}),
  name: "Expanded On Load",

  args: (function () {
    symset.initSymbols();

    return {
      navItems: navItems,
      defaultExpandedLevel: 1,
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      navItems: navItems,

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
