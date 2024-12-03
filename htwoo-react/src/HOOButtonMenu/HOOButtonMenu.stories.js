import HOOButtonMenu from "./HOOButtonMenu";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../SymbolSet";

const OverflowTemplate = (args) => <HOOButtonMenu {...args} />;

export default {
  title: "Components/Menus/HOOButtonMenu",
  component: HOOButtonMenu,
};

export const Basic = {
  render: OverflowTemplate.bind({}),
  name: "Basic",

  args: (function () {
    symset.initSymbols();

    const dropdownItems = [
      {
        iconName: "hoo-icon-ninjacat",
        label: "First Element",
      },
      {
        iconName: "hoo-icon-ninjacat",
        label: "Second Element",
      },
    ];

    const options = dropdownItems;

    return {
      contextItems: options,

      contextItemClicked: (event, menuItem) => {
        console.log(`Flyout menu item: ${JSON.stringify(menuItem)}`);
      },
    };
  })(),
};

export const Extending = {
  render: OverflowTemplate.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    const dropdownItems = [
      {
        iconName: "hoo-icon-ninjacat",
        label: "First Element",
      },
      {
        iconName: "hoo-icon-ninjacat",
        label: "Second Element",
      },
    ];

    const options = dropdownItems;

    return {
      contextItems: options,

      contextItemClicked: (event, menuItem) => {
        console.log(`Flyout menu item: ${JSON.stringify(menuItem)}`);
      },

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
