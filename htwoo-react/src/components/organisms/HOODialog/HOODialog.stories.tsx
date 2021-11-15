import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODialog, {
  IHOODialogProps, HOODialogType
} from './HOODialog';

export default {
  title: 'Organisms/HOODialog',
  component: HOODialog,
} as Meta;

const Template: Story<IHOODialogProps> = (args) => <HOODialog {...args} />;

export const Standard = Template.bind({});
Standard.args = { type: HOODialogType.Standard, visible: true, height: "80vh", width: "80vw" };

export const SidebarLeft = Template.bind({});
SidebarLeft.args = { type: HOODialogType.SidebarLeft, visible: true, width: "80vw" };