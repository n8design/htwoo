import HOOFieldset, { HOOFieldsetType } from "./HOOFieldset";
import HOOField from "../HOOField";
import HOOLabel from "../HOOLabel";
import HOOInputDesc from "../HOOInputDesc";
import HOOText from "../HOOText";
import HOOValidationMsg from "../HOOValidationMsg";

const Template = (args) => (
  <HOOFieldset {...args}>
    <HOOField>
      <HOOLabel label="My Field A" />
      <HOOInputDesc description="My field A description" />
      <HOOText value="Temp" />
      <HOOValidationMsg validationMsg="My Validation Message" />
    </HOOField>
    <HOOField>
      <HOOLabel label="My Field B" />
      <HOOInputDesc description="My field B description" />
      <HOOText value="Temp" />
      <HOOValidationMsg validationMsg="My Validation Message" />
    </HOOField>
  </HOOFieldset>
);

export default {
  title: "Components/Inputs/HOOFieldset",
  component: HOOFieldset,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    legendText: "My Legend",
  },
};

export const NoOutline = {
  render: Template.bind({}),
  name: "NoOutline",

  args: {
    legendText: "My Legend",
    type: HOOFieldsetType.NoOutline,
  },
};

export const Raised = {
  render: Template.bind({}),
  name: "Raised",

  args: {
    legendText: "My Legend",
    type: HOOFieldsetType.Raised,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    legendText: "My Legend",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
