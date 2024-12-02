import HOOVideo from "./HOOVideo";
import { symset } from "../SymbolSet";

const Template = (args) => (
  <HOOVideo {...args}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?si&#x3D;jNRCpQW6ukJ1Zunl&amp;autoplay&#x3D;1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </HOOVideo>
);

export default {
  title: "Components/Video/HOOVideo",
  component: HOOVideo,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: (function () {
    symset.initSymbols();

    return {
      overlayIcon: "icon-play-filled",
      overlayTime: "1:42",
      thumbnailImageUrl:
        "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
      thumbnailImageAlt: "How to make the perfect coffee",
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      overlayIcon: "icon-play-filled",
      overlayTime: "1:42",
      thumbnailImageUrl:
        "https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",
      thumbnailImageAlt: "How to make the perfect coffee",

      rootElementAttributes: {
        style: {
          border: "10px solid pink",
        },
      },
    };
  })(),
};
