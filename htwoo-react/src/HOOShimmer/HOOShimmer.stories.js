import HOOShimmer, {
  IHOOShimmerProps,
  HOOShimmerTheme,
  HOOShimmerShape,
} from "./HOOShimmer";

const Template = (args) => (
  <HOOShimmer shape={HOOShimmerShape.Container} theme={HOOShimmerTheme.Neutral}>
    <HOOShimmer {...args} />
  </HOOShimmer>
);
const MultiTemplate = (args) => (
  <HOOShimmer shape={HOOShimmerShape.Container} theme={HOOShimmerTheme.Neutral}>
    <HOOShimmer {...args.shimmer1} />
    <HOOShimmer {...args.shimmer2} />
  </HOOShimmer>
);

export default {
  title: "Components/Loading/HOOShimmer",
  component: HOOShimmer,
};

export const Circle = {
  render: Template.bind({}),
  name: "Circle",

  args: {
    shape: HOOShimmerShape.Circle,
    theme: HOOShimmerTheme.Neutral,
  },
};

export const Row = {
  render: Template.bind({}),
  name: "Row",

  args: {
    shape: HOOShimmerShape.Row,
    theme: HOOShimmerTheme.Neutral,
  },
};

export const Square = {
  render: Template.bind({}),
  name: "Square",

  args: {
    shape: HOOShimmerShape.Square,
    theme: HOOShimmerTheme.Neutral,
  },
};

export const Image16X9 = {
  render: Template.bind({}),
  name: "Image 16x9",

  args: {
    shape: HOOShimmerShape["Image16:9"],
    theme: HOOShimmerTheme.Neutral,
    imageWidth: 360,
    imageHeight: 280,
  },
};

export const MultipleShapes = {
  render: MultiTemplate.bind({}),
  name: "Multiple Shapes",

  args: {
    shimmer1: {
      shape: HOOShimmerShape.Square,
      theme: HOOShimmerTheme.Neutral,
    },

    shimmer2: {
      shape: HOOShimmerShape.Circle,
      theme: HOOShimmerTheme.Neutral,
    },
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    shape: HOOShimmerShape.Square,
    theme: HOOShimmerTheme.Neutral,

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
