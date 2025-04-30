import HOOAccordionGroup from "./HOOAccordionGroup";
import HOOAccordion from "../HOOAccordion";
import HOOLabel from "../HOOLabel";
import { symset } from "../SymbolSet";

const Template = (args) => (
  <HOOAccordionGroup {...args}>
    <HOOAccordion
      header="My Simple Accordion"
      iconName="hoo-icon-arrow-right"
      content="My Accordion details."
      open={true}
    />
    <HOOAccordion
      header="Accordion with Children"
      iconName="hoo-icon-arrow-right"
    >
      <HOOLabel label="My Child Content" />
    </HOOAccordion>
    <HOOAccordion header="Accordion No Icon" content="My Accordion details." />
    <HOOAccordion
      header="Accordion Extended"
      content="My Accordion details."
      rootElementAttributes={{ style: { backgroundColor: "lemonchiffon" } }}
    />
  </HOOAccordionGroup>
);

export default {
  title: "Components/Accordion/HOOAccordionGroup",
  component: HOOAccordionGroup,
};

export const Simple = {
  render: Template.bind({}),
  name: "Simple",

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
      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
