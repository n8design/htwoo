import HOOBreadcrumb, {
  IHOOBreadcrumbItem,
  HOOBreadcrumbType,
} from "./HOOBreadcrumb";
import { symset } from "../SymbolSet";

const buttonOptions = [
  { key: 1, text: "Value 1" },
  { key: 2, text: "Value 2" },
  { key: 3, text: "Value 3" },
];
const hyperlinkOptions = [
  { key: 1, text: "Value 1", href: "#" },
  { key: 2, text: "Value 2", href: "#" },
  { key: 3, text: "Value 3", href: "#" },
];
const Template = (args) => <HOOBreadcrumb {...args} />;

export default {
  title: "Components/Menus/HOOBreadcrumb",
  component: HOOBreadcrumb,
};

export const Buttons = {
  render: Template.bind({}),
  name: "Buttons",

  args: {
    type: HOOBreadcrumbType.Button,
    breadcrumbItems: buttonOptions,

    onBreadcrumbClick: () => {
      alert("Clicked");
    },
  },
};

export const ButtonsSeperated = {
  render: Template.bind({}),
  name: "Buttons: Seperated",

  args: {
    type: HOOBreadcrumbType.Button,
    breadcrumbItems: buttonOptions,
    seperatorIconName: "hoo-icon-arrow-right",

    onBreadcrumbClick: () => {
      alert("Clicked");
    },
  },
};

export const HyperlinkSeperated = {
  render: Template.bind({}),
  name: "Hyperlink: Seperated",

  args: {
    type: HOOBreadcrumbType.Hyperlink,
    breadcrumbItems: hyperlinkOptions,
    seperatorIconName: "hoo-icon-arrow-right",
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    type: HOOBreadcrumbType.Button,
    breadcrumbItems: buttonOptions,
    seperatorIconName: "hoo-icon-arrow-right",

    onBreadcrumbClick: () => {
      alert("Clicked");
    },

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
