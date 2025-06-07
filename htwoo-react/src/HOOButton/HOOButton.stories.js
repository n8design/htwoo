import HOOButton, { HOOButtonType } from "./HOOButton";
import { symset } from "../SymbolSet";

const Template = (args) => <HOOButton {...args} />;

export default {
  title: "Components/Buttons/HOOButton",
  component: HOOButton,

  argTypes: {
    type: {
      options: [0, 1, 2, 3, 4, 5, 6],

      control: {
        type: "select",

        labels: [
          "Icon",
          "Primary",
          "Standard",
          "HyperlinkPrimary",
          "HyperlinkStandard",
          "CompoundPrimary",
          "CompoundStandard",
        ],
      },
    },
  },
};

export const Primary = {
  render: Template.bind({}),
  name: "Primary",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Primary,
      label: "Button",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const PrimaryLeftIcon = {
  render: Template.bind({}),
  name: "Primary: Left Icon",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Primary,
      label: "Button",
      iconName: "hoo-icon-arrow-left",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const PrimaryRightIcon = {
  render: Template.bind({}),
  name: "Primary: Right Icon",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Primary,
      label: "Button",
      iconRight: "hoo-icon-arrow-right",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const PrimaryDisabled = {
  render: Template.bind({}),
  name: "Primary: Disabled",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Primary,
      disabled: true,
      label: "Button",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Standard,
      label: "Button",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const Icon = {
  render: Template.bind({}),
  name: "Icon",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.Icon,
      iconName: "hoo-icon-close",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const PrimaryHyperlink = {
  render: Template.bind({}),
  name: "Primary: Hyperlink",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.HyperlinkPrimary,
      label: "Button",
      href: "https://google.com",
    };
  })(),
};

export const StandardHyperlink = {
  render: Template.bind({}),
  name: "Standard: Hyperlink",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.HyperlinkStandard,
      label: "Button",
      href: "https://google.com",
    };
  })(),
};

export const PrimaryCompound = {
  render: Template.bind({}),
  name: "Primary: Compound",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.CompoundPrimary,
      label: "Button",
      description: "Compound button description",

      onClick: () => {
        alert("Clicked");
      },
    };
  })(),
};

export const StandardCompound = {
  render: Template.bind({}),
  name: "Standard: Compound",

  args: (function () {
    symset.initSymbols();

    return {
      type: HOOButtonType.CompoundStandard,
      label: "Button",
      description: "Compound button description",

      onClick: () => {
        alert("Clicked");
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
      type: HOOButtonType.Standard,
      label: "Button",

      onClick: () => {
        alert("Clicked");
      },

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
