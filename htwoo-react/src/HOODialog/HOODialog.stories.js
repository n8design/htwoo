import { useArgs } from "@storybook/preview-api";
import { symset } from "../SymbolSet";
import HOODialog, { HOODialogType } from "./HOODialog";
import HOODialogHeader from "../HOODialogHeader";
import HOODialogContent from "../HOODialogContent";
import HOODialogActions from "../HOODialogActions";
import HOOLabel from "../HOOLabel";
import HOOButton, { HOOButtonType } from "../HOOButton";
import HOOIcon from "../HOOIcon";

const TemplateMessage = (args) => {
  const [_, updateArgs] = useArgs();
  const onClick = () => {
    const args = JSON.parse(JSON.stringify(_));
    args.visible = !args.visible;
    updateArgs(args);
  };
  symset.initSymbols();
  return (
    <div>
      <HOOButton
        type={HOOButtonType.Primary}
        label={`${args.visible ? "Hide Dialog" : "Show Dialog"}`}
        onClick={onClick}
      />
      <HOODialog changeVisibility={onClick} {...args}>
        <HOOIcon iconName="hoo-icon-smile" />
        <HOODialogContent>
          This is the status message in the dialog box.
        </HOODialogContent>
        <HOODialogActions>
          <HOOButton
            type={HOOButtonType.Icon}
            iconName="hoo-icon-close"
            onClick={onClick}
          />
        </HOODialogActions>
      </HOODialog>
    </div>
  );
};

const TemplateModal = (args) => {
  const [_, updateArgs] = useArgs();
  const onClick = () => {
    const args = JSON.parse(JSON.stringify(_));
    args.visible = !args.visible;
    updateArgs(args);
  };
  symset.initSymbols();
  return (
    <div>
      <HOOButton
        type={HOOButtonType.Primary}
        label={`${args.visible ? "Hide Dialog" : "Show Dialog"}`}
        onClick={onClick}
      />
      <HOODialog changeVisibility={onClick} {...args}>
        <HOODialogHeader
          title="Dialog Header"
          closeIconName="hoo-icon-close"
          closeDisabled={false}
          closeOnClick={onClick}
        />
        <HOODialogContent>
          <HOOLabel label="Content of Dialog" />
        </HOODialogContent>
      </HOODialog>
    </div>
  );
};

export default {
  title: "Components/Dialogs/HOODialog",
  component: HOODialog,
};

export const Standard = {
  render: TemplateMessage.bind({}),
  name: "Standard",

  args: {
    type: HOODialogType.Standard,
    visible: false,
  },
};

export const StandardSuccess = {
  render: TemplateMessage.bind({}),
  name: "Standard - Success",

  args: {
    type: HOODialogType.StandardSuccess,
    visible: false,
  },
};

export const StandardError = {
  render: TemplateMessage.bind({}),
  name: "Standard - Error",

  args: {
    type: HOODialogType.StandardError,
    visible: false,
  },
};

export const SidebarLeft = {
  render: TemplateModal.bind({}),
  name: "Sidebar Left",

  args: {
    type: HOODialogType.SidebarLeft,
    visible: false,
  },
};

export const SidebarRightSpecifyWidth = {
  render: TemplateModal.bind({}),
  name: "Sidebar Right - Specify Width",

  args: {
    type: HOODialogType.SidebarRight,
    visible: false,
    width: "80vw",
  },
};

export const TopbarSpecifyHeight = {
  render: TemplateModal.bind({}),
  name: "Topbar - Specify Height",

  args: {
    type: HOODialogType.Topbar,
    visible: false,
    height: "60vh",
  },
};

export const Fullscreen = {
  render: TemplateModal.bind({}),
  name: "Fullscreen",

  args: {
    type: HOODialogType.Fullscreen,
    visible: false,
  },
};

export const CenterExtending = {
  render: TemplateModal.bind({}),
  name: "Center - Extending",

  args: {
    type: HOODialogType.Center,
    visible: false,
    height: "60vh",
    width: "60vw",

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
