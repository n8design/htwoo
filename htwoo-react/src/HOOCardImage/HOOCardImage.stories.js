import HOOCardImage from "./HOOCardImage";

const Template = (args) => <HOOCardImage {...args} />;

export default {
  title: "Components/Cards/Document Card/Elements/HOOCardImage",
  component: HOOCardImage,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: {
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
    imageAlt: "Kitten",
    width: 320,
    height: 180,
  },
};

export const ImageCaption = {
  render: Template.bind({}),
  name: "Image Caption",

  args: {
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
    caption: "Cute Kitten Image",
    imageAlt: "Kitten",
    width: 320,
    height: 180,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    imageSource:
      "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
    imageAlt: "Kitten",
    width: 320,
    height: 180,

    rootElementAttributes: {
      style: {
        border: "10px solid pink",
      },
    },
  },
};
