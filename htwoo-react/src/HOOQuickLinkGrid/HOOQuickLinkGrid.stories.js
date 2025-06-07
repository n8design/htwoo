import { symset } from "../SymbolSet";
import HOOQuickLinkGrid from "./HOOQuickLinkGrid";
import HOOQuickLink, { HOOQuickLinkType } from "../HOOQuickLink";

const Template = (args) => (
  <HOOQuickLinkGrid {...args}>
    <HOOQuickLink
      type={HOOQuickLinkType.Link}
      iconName="hoo-icon-ninjacat"
      title="Quick Link Item 1"
      description="Details about my quick link item"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Link}
      iconName="hoo-icon-ninjacat"
      title="Quick Link Item 2"
      description="Details about my quick link item"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Link}
      iconName="hoo-icon-ninjacat"
      title="Quick Link Item 3"
      description="Details about my quick link item"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Link}
      iconName="hoo-icon-ninjacat"
      title="Quick Link Item 4"
      description="Details about my quick link item"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Link}
      iconName="hoo-icon-ninjacat"
      title="Quick Link Item 5"
      description="Details about my quick link item"
      columnSpan="auto / span 4"
      rootElementAttributes={{ style: { backgroundColor: "lemonchiffon" } }}
    />
  </HOOQuickLinkGrid>
);

const Template2 = (args) => (
  <HOOQuickLinkGrid {...args}>
    <HOOQuickLink
      type={HOOQuickLinkType.Grid}
      iconSrc="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      title="Quick Link Item 1"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Grid}
      iconSrc="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      title="Quick Link Item 2"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Grid}
      iconSrc="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      title="Quick Link Item 3"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Grid}
      iconSrc="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      title="Quick Link Item 4"
      columnSpan="auto / span 4"
    />
    <HOOQuickLink
      type={HOOQuickLinkType.Grid}
      iconSrc="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg"
      title="Quick Link Item 5"
      columnSpan="auto / span 4"
      rootElementAttributes={{ style: { backgroundColor: "lemonchiffon" } }}
    />
  </HOOQuickLinkGrid>
);

export default {
  title: "Components/Quick Link/HOOQuickLinkGrid",
  component: HOOQuickLinkGrid,
};

export const QuickLinkGridLinks = {
  render: Template.bind({}),
  name: "Quick Link Grid - Links",

  args: (function () {
    symset.initSymbols();
    return {};
  })(),
};

export const QuickLinkGridGrid = {
  render: Template2.bind({}),
  name: "Quick Link Grid - Grid",

  args: (function () {
    symset.initSymbols();
    return {};
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      columnSpan: "auto / span 4",

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
