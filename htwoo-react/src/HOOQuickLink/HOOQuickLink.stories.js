import { symset } from "../SymbolSet";
import HOOQuickLink, {
  HOOQuickLinkType,
  HOOQuickLinkStyle,
  HOOQuickLinkAlignment,
  HOOQuickLinkButtonLines,
  HOOQuickLinkImageSize,
} from "./HOOQuickLink";

const Template = (args) => <HOOQuickLink {...args} />;

export default {
  title: "Components/Quick Link/HOOQuickLink",
  component: HOOQuickLink,
};

export const QuickLinkStandard = {
  render: Template.bind({}),
  name: "Quick Link: Standard",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Link,
      iconName: "hoo-icon-ninjacat",
      title: "My Quick Link Item",
      description: "Details about my quick link item",
    };
  })(),
};

export const QuickLinkCompact = {
  render: Template.bind({}),
  name: "Quick Link: Compact",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Compact,
      iconName: "hoo-icon-ninjacat",
      title: "My Quick Link Item",
      description: "Details about my quick link item",
    };
  })(),
};

export const QuickLinkStandardEditMode = {
  render: Template.bind({}),
  name: "Quick Link: Standard Edit Mode",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Link,
      iconName: "hoo-icon-ninjacat",
      title: "My Quick Link Item",
      description: "Details about my quick link item",
      editMode: true,
    };
  })(),
};

export const QuickLinkButton = {
  render: Template.bind({}),
  name: "Quick Link: Button",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Button,
      style: HOOQuickLinkStyle.Filled,
      alignment: HOOQuickLinkAlignment.Center,
      buttonLines: HOOQuickLinkButtonLines.Normal,
      iconName: "hoo-icon-ninjacat",
      title: "My Quick Link Item",
      description: "Details about my quick link item",
    };
  })(),
};

export const QuickLinkTile = {
  render: Template.bind({}),
  name: "Quick Link: Tile",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Tile,
      imageSize: HOOQuickLinkImageSize.Large,
      iconSrc:
        "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
      title: "My Quick Link Item",
    };
  })(),
};

export const QuickLinkGrid = {
  render: Template.bind({}),
  name: "Quick Link: Grid",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Grid,
      iconSrc:
        "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
      title: "My Quick Link Item",
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOQuickLinkType.Link,
      iconName: "hoo-icon-ninjacat",
      title: "My Quick Link Item",
      description: "Details about my quick link item",

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
