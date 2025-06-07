import HOOTagList from "./HOOTagList";
import { HOOTagType, HOOTagStyle } from "../HOOTag";

const DefaultParams = {
  tags: [
    {
      text: "Tag A",
      linkUrl: "https://google.com",
      linkTarget: "_blank",
      onClick: () => {
        alert("Clicked Tag A");
      },
    },
    {
      text: "Tag B",
      linkUrl: "https://google.com",
      linkTarget: "_blank",
      onClick: () => {
        alert("Clicked Tag B");
      },
    },
    {
      text: "Tag C",
      linkUrl: "https://google.com",
      linkTarget: "_blank",
      onClick: () => {
        alert("Clicked Tag C");
      },
    },
  ],
};

const Template = (args) => <HOOTagList {...args} />;

export default {
  title: "Components/Meta/HOOTagList",
  component: HOOTagList,
};

export const PrimaryButton = {
  render: Template.bind({}),
  name: "Primary: Button",

  args: (function () {
    return {
      tagType: HOOTagType.Button,
      tagStyle: HOOTagStyle.Primary,
      tags: DefaultParams.tags,
    };
  })(),
};

export const PrimaryLink = {
  render: Template.bind({}),
  name: "Primary: Link",

  args: (function () {
    return {
      tagType: HOOTagType.Link,
      tagStyle: HOOTagStyle.Primary,
      tags: DefaultParams.tags,
    };
  })(),
};

export const StaticStandard = {
  render: Template.bind({}),
  name: "Static: Standard",

  args: (function () {
    return {
      tagType: HOOTagType.Static,
      tagStyle: HOOTagStyle.Standard,
      tags: DefaultParams.tags,
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    return {
      tagType: HOOTagType.Button,
      tagStyle: HOOTagStyle.Primary,
      tags: DefaultParams.tags,

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
