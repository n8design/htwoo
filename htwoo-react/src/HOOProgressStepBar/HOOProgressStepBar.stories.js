import HOOProgressStepBar from "./HOOProgressStepBar";
import HOOProgressBar from "../HOOProgressBar";
import HOOProgressStep from "../HOOProgressStep";

const Template = (args) => (
  <HOOProgressStepBar {...args}>
    <HOOProgressBar value="25" />
    <HOOProgressStep label="Step 1" offsetPercent="20" />
    <HOOProgressStep label="Step 2" offsetPercent="40" />
    <HOOProgressStep label="Step 3" offsetPercent="60" />
    <HOOProgressStep label="Step 4" offsetPercent="80" />
  </HOOProgressStepBar>
);

export default {
  title: "Components/Output/HOOProgressStepBar",
  component: HOOProgressStepBar,
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
