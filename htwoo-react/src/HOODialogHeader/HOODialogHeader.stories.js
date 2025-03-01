import HOODialogHeader from "./HOODialogHeader";
import HOOLabel from "../HOOLabel";

const iconSVG =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>animal-cat-filled</title><path d="M9.663 29.333l-0.015-0h-1.92c-2.795 0-5.062-2.267-5.062-5.064 0-1.283 0.487-2.518 1.361-3.456l1.514-1.623c1.019-1.092 1.359-2.654 0.887-4.071-0.2-0.601-0.537-1.146-0.984-1.594l-1.485-1.486c-0.39-0.391-0.39-1.024-0-1.414s1.023-0.391 1.413-0l1.485 1.486c0.667 0.667 1.169 1.48 1.467 2.375 0.704 2.112 0.197 4.44-1.322 6.068l-1.514 1.623c-0.529 0.567-0.824 1.315-0.824 2.091 0 1.692 1.371 3.064 3.063 3.064h0.904c-0.004-0.379-0.001-0.846 0.016-1.377 0.048-1.445 0.209-3.39 0.666-5.35 0.454-1.948 1.22-3.994 2.532-5.569 1.163-1.396 2.74-2.401 4.812-2.646v-5.524c0-2.32 1.879-4.2 4.198-4.2 0.994 0 1.799 0.806 1.799 1.8v0.867h2.181c1.268 0 2.446 0.656 3.115 1.735l0.826 1.333c1.456 2.349-0.113 5.359-2.79 5.585v12.347c0 1.657-1.342 3-2.998 3h-0.999v-3c0-2.761-2.237-5-4.997-5h-1.666c-0.552 0-0.999 0.448-0.999 1s0.447 1 0.999 1h1.666c1.656 0 2.998 1.343 2.998 3v3h-10.328z"></path></svg>';
const Template = (args) => <HOODialogHeader {...args} />;

export default {
  title: "Components/Dialogs/HOODialogHeader",
  component: HOODialogHeader,
};

export const IconName = {
  render: Template.bind({}),
  name: "IconName",

  args: {
    title: "Dialog Header Example - IconName",
    closeIconName: "hoo-icon-close",
  },
};

export const IconSvg = {
  render: Template.bind({}),
  name: "IconSVG",

  args: {
    title: "Dialog Header Example - IconSVG",
    closeIconSVG: iconSVG,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    title: "Dialog Header Example - Extending",
    closeIconName: "hoo-icon-close",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
