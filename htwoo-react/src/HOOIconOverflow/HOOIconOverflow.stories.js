import HOOIconOverflow from "./HOOIconOverflow";
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";

const OverflowTemplate = (args) => (
  <HOOIconOverflow {...args}>
    <HOOFlyoutMenu
      contextItems={[
        { iconName: "hoo-icon-ninjacat", label: "First Element" },
        { iconName: "hoo-icon-ninjacat", label: "Second Element" },
      ]}
      contextItemClicked={(ev, contextItem) => {
        alert(JSON.stringify(contextItem));
      }}
    />
  </HOOIconOverflow>
);

export default {
  title: "Components/Buttons/HOOIconOverflow",
  component: HOOIconOverflow,
};

export const Basic = {
  render: OverflowTemplate.bind({}),
  name: "Basic",

  args: (function () {
    symset.initSymbols();

    return {
      overflow: true,
    };
  })(),
};

export const Extending = {
  render: OverflowTemplate.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      overflow: true,

      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
