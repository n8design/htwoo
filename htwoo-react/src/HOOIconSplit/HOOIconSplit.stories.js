import { symset } from "../SymbolSet";
import HOOIconSplit from "./HOOIconSplit";

const DefaultParams = {
  label: "Button",
  flyoutContextItems: [
    { iconName: "hoo-icon-plus", label: "First Element" },
    { iconName: "hoo-icon-plus", label: "Second Element" },
  ],
  flyoutContextItemsClicked: (event, item) => {
    console.alert(item.label);
  },
};

const Template = (args) => <HOOIconSplit {...args} />;

export default {
  title: "Components/Buttons/HOOIconSplit",
  component: HOOIconSplit,
};

export const Icon = {
  render: Template.bind({}),
  name: "Icon",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["leftIconName"] = "hoo-icon-smile";
    return mergedArgs;
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["leftIconName"] = "hoo-icon-smile";

    mergedArgs["rootElementAttributes"] = {
      style: {
        backgroundColor: "pink",
      },
    };

    return mergedArgs;
  })(),
};
