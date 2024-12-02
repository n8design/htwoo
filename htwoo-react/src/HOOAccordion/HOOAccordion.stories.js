import { symset } from "../SymbolSet";
import HOOAccordion from "./HOOAccordion";
import HOOLabel from "../HOOLabel";

const Template = (args) => <HOOAccordion {...args} />;
const TemplateChildren = (args) => (
  <HOOAccordion {...args}>
    <HOOLabel label="My Child Content" />
  </HOOAccordion>
);

export default {
  title: "Components/Accordion/HOOAccordion",
  component: HOOAccordion,
};

export const Simple = {
  render: Template.bind({}),
  name: "Simple",

  args: (function () {
    symset.initSymbols();

    return {
      header: "My Accordion",
      iconName: "hoo-icon-arrow-right",
      content: "My Accordion details.",
    };
  })(),
};

export const ContentWChildrenElements = {
  render: TemplateChildren.bind({}),
  name: "Content w/ Children Elements",

  args: (function () {
    symset.initSymbols();

    return {
      header: "My Accordion",
      iconName: "hoo-icon-arrow-right",
    };
  })(),
};

export const NoIcon = {
  render: Template.bind({}),
  name: "No Icon",

  args: (function () {
    symset.initSymbols();

    return {
      header: "My Accordion",
      content: "My Accordion details.",
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      header: "My Accordion",
      iconName: "hoo-icon-arrow-right",
      content: "My Accordion details.",

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
