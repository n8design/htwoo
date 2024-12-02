import HOOWebPartTitle from "./HOOWebPartTitle";

const Template = (args) => <HOOWebPartTitle {...args} />;

export default {
  title: "Components/WebPart/HOOWebPartTitle",
  component: HOOWebPartTitle,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: (function () {
    let titleValue1 = "My Web Part";

    return {
      title: titleValue1,
      placeholder: "Web Part Title",
      editMode: true,

      updateTitle: (title) => {
        titleValue1 = title;
      },
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    let titleValue2 = null;

    return {
      title: titleValue2,
      placeholder: "Web Part Title",
      editMode: true,

      updateTitle: (title) => {
        titleValue2 = title;
      },

      rootElementAttributes: {
        className: "myClass",
      },
    };
  })(),
};
