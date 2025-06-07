import { symset } from "../SymbolSet";
import HOOButtonSplit, {
  IHOOButtonSplitProps,
  HOOButtonSplitType,
} from "./HOOButtonSplit";

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

const Template = (args) => <HOOButtonSplit {...args} />;

export default {
  title: "Components/Buttons/HOOButtonSplit",
  component: HOOButtonSplit,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: (function () {
    symset.initSymbols();
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["type"] = HOOButtonSplitType.Standard;
    return mergedArgs;
  })(),
};

export const Primary = {
  render: Template.bind({}),
  name: "Primary",

  args: (function () {
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["type"] = HOOButtonSplitType.Primary;
    return mergedArgs;
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    const mergedArgs = JSON.parse(JSON.stringify(DefaultParams));
    mergedArgs["type"] = HOOButtonSplitType.Primary;

    mergedArgs["rootElementAttributes"] = {
      style: {
        backgroundColor: "pink",
      },
    };

    return mergedArgs;
  })(),
};
