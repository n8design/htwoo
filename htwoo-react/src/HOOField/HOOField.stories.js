import HOOField from "./HOOField";
import HOOLabel from "../HOOLabel";
import HOOInputDesc from "../HOOInputDesc";
import HOOText from "../HOOText";
import HOOValidationMsg from "../HOOValidationMsg";

const Template = (args) => (
  <HOOField {...args}>
    <HOOLabel label="My Field" />
    <HOOInputDesc description="My field description" />
    <HOOText value="Temp" />
    <HOOValidationMsg validationMsg="My Validation Message" />
  </HOOField>
);

export default {
  title: "Components/Inputs/HOOField",
  component: HOOField,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
