import { symset } from "../SymbolSet";
import HOODialogActions from "./HOODialogActions";
import HOOButton, { HOOButtonType } from "../HOOButton";

const Template = (args) => {
  const onClick = () => {
    alert("Clicked");
  };
  symset.initSymbols();
  return (
    <HOODialogActions {...args}>
      <HOOButton
        type={HOOButtonType.Icon}
        iconName="hoo-icon-close"
        onClick={onClick}
      />
    </HOODialogActions>
  );
};

export default {
  title: "Components/Dialogs/HOODialogActions",
  component: HOODialogActions,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",
  args: {},
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
