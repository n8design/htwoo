import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODialog, {
  IHOODialogProps, HOODialogType
} from './HOODialog';
import HOODialogHeader from '../../molecules/HOODialogHeader/HOODialogHeader';
import HOODialogContent from '../../molecules/HOODialogContent/HOODialogContent';
import HOOLabel from '../../atoms/HOOLabel/HOOLabel';


export default {
  title: 'Organisms/HOODialog',
  component: HOODialog,
} as Meta;

const Template: Story<IHOODialogProps> = (args) => <HOODialog {...args}>
  <HOODialogHeader title="Dialog Header" closeDisabled={true} closeOnClick={() => { alert("Clicked"); }} />
  <HOODialogContent>
    <HOOLabel label="Content of Dialog" />
  </HOODialogContent>
</HOODialog>;

export const Standard = Template.bind({});
Standard.args = { type: HOODialogType.Standard, visible: true, height: "80vh", width: "80vw" };

export const SidebarLeft = Template.bind({});
SidebarLeft.args = { type: HOODialogType.SidebarLeft, visible: true, width: "80vw" };