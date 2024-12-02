import { useArgs } from "@storybook/client-api";
import { symset } from "../SymbolSet";
import HOOButtonCommand, { HOOButtonCommandType } from "./HOOButtonCommand";
import HOOAvatar, { HOOAvatarSize } from "../HOOAvatar";

const DefaultParams = {
  label: "Button",
  flyoutMenuItems: [
    { iconName: "hoo-icon-plus", label: "First Element" },
    { iconName: "hoo-icon-plus", label: "Second Element" },
  ],
  flyoutMenuItemClicked: (event, item) => {
    console.alert(item.label);
  },
};

const HyperlinkParams = {
  type: HOOButtonCommandType.Hyperlink,
  label: "Hyperlink",
  href: "https://lab.n8d.studio/htwoo",
  flyoutMenuItems: [
    { iconName: "hoo-icon-plus", label: "First Element" },
    { iconName: "hoo-icon-plus", label: "Second Element" },
  ],
  flyoutMenuItemClicked: (event, item) => {
    console.alert(item.label);
  },
};

const IconParams = {
  iconName: "hoo-icon-plus",
  onClick: (event) => {
    console.alert("Clicked");
  },
  flyoutMenuItems: [
    { iconName: "hoo-icon-plus", label: "First Element" },
    { iconName: "hoo-icon-plus", label: "Second Element" },
  ],
  flyoutMenuItemClicked: (event, item) => {
    console.alert(item.label);
  },
};

const CustomParams = {};
const Template = (args) => <HOOButtonCommand {...args} />;

const CustomTemplate = (args) => {
  const [_, updateArgs] = useArgs();

  const handle = (ev) => {
    alert(`Custom event clicked`);
    updateArgs({ ...args });
  };

  return (
    <HOOButtonCommand {...args}>
      <HOOAvatar
        size={HOOAvatarSize.Px32}
        imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"
        imageAlt="Placeholder Image"
        onClick={handle}
      />
    </HOOButtonCommand>
  );
};

export default {
  title: "Components/Buttons/HOOButtonCommand",
  component: HOOButtonCommand,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    return mergedArgs;
  })(),
};

export const StandardNoFlyoutMenu = {
  render: Template.bind({}),
  name: "Standard - No Flyout Menu",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["flyoutMenuItems"] = [];
    delete mergedArgs["flyoutMenuItemClicked"];
    return mergedArgs;
  })(),
};

export const IconCommand = {
  render: Template.bind({}),
  name: "Icon Command",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(IconParams));
    return mergedArgs;
  })(),
};

export const IconCommandNoFlyoutMenu = {
  render: Template.bind({}),
  name: "Icon Command - No Flyout Menu",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(IconParams));
    mergedArgs["flyoutMenuItems"] = [];
    delete mergedArgs["flyoutMenuItemClicked"];
    return mergedArgs;
  })(),
};

export const Hyperlink = {
  render: Template.bind({}),
  name: "Hyperlink",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(HyperlinkParams));
    return mergedArgs;
  })(),
};

export const CustomCommandButton = {
  render: CustomTemplate.bind({}),
  name: "Custom Command Button",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(CustomParams));
    return mergedArgs;
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));

    mergedArgs["rootElementAttributes"] = {
      style: {
        backgroundColor: "pink",
      },
    };

    return mergedArgs;
  })(),
};
