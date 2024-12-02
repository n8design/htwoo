import HOODialogIFrame, { HOOIFrameRatio } from "./HOODialogIFrame";
import HOOLabel from "../HOOLabel";

const Template = (args) => <HOODialogIFrame {...args} />;

export default {
  title: "Components/Dialogs/HOODialogIFrame",
  component: HOODialogIFrame,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    src: "https://lab.n8d.studio/htwoo/",
  },
};

export const $34Ratio = {
  render: Template.bind({}),
  name: "3:4 Ratio",

  args: {
    src: "https://lab.n8d.studio/htwoo/",
    ratio: HOOIFrameRatio["3by4"],
  },
};

export const SquareRatio = {
  render: Template.bind({}),
  name: "Square Ratio",

  args: {
    src: "https://lab.n8d.studio/htwoo/",
    ratio: HOOIFrameRatio.squared,
  },
};

export const $169Ratio = {
  render: Template.bind({}),
  name: "16:9 Ratio",

  args: {
    src: "https://lab.n8d.studio/htwoo/",
    ratio: HOOIFrameRatio["16by9"],
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    src: "https://lab.n8d.studio/htwoo/",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
