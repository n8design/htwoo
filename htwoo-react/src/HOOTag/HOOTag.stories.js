import HOOTag, { HOOTagType, HOOTagStyle } from "./HOOTag";

const Template = (args) => <HOOTag {...args} />;

export default {
  title: "Components/Meta/HOOTag",
  component: HOOTag,
};

export const PrimaryButton = {
  render: Template.bind({}),
  name: "Primary: Button",

  args: {
    tagType: HOOTagType.Button,
    tagStyle: HOOTagStyle.Primary,
    text: "Tag Button",

    onClick: () => {
      alert("Clicked");
    },
  },
};

export const PrimaryLink = {
  render: Template.bind({}),
  name: "Primary: Link",

  args: {
    tagType: HOOTagType.Link,
    tagStyle: HOOTagStyle.Primary,
    text: "Tag Link",
    linkUrl: "https://google.com",
    linkTarget: "_blank",
  },
};

export const StaticStandard = {
  render: Template.bind({}),
  name: "Static: Standard",

  args: {
    tagType: HOOTagType.Static,
    tagStyle: HOOTagStyle.Standard,
    text: "Tag Static",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    tagType: HOOTagType.Static,
    tagStyle: HOOTagStyle.Standard,
    text: "Tag Static Ext",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
