import HOOFlyoutMenu from "./HOOFlyoutMenu";

const Template = (args) => <HOOFlyoutMenu {...args} />;

export default {
  title: "Components/Menus/HOOFlyoutMenu",
  component: HOOFlyoutMenu,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: {
    contextItems: [
      {
        iconName: "hoo-icon-ninjacat",
        label: "First Element",
      },
      {
        iconName: "hoo-icon-ninjacat",
        label: "Second Element",
      },
    ],

    contextItemClicked: (ev, contextItem) => {
      alert(JSON.stringify(contextItem));
    },
  },
};
