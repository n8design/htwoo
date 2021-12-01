import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODialogHeader, {
  IHOODialogHeaderProps
} from './HOODialogHeader';

export default {
  title: 'Atoms/HOODialogHeader',
  component: HOODialogHeader,
} as Meta;

const Template: Story<IHOODialogHeaderProps> = (args) => <HOODialogHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = { title: "Title Value", closeDisabled: false, closeOnClick: () => { alert("Clicked"); }, closeIconName: "hoo-icon-close" } as IHOODialogHeaderProps;

export const IconSVG = Template.bind({});
IconSVG.args = { title: "Title Value", closeDisabled: false, closeOnClick: () => { alert("Clicked"); }, closeIconSVG: "" } as IHOODialogHeaderProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { title: "Title Value", rootElementAttributes: rea } as IHOODialogHeaderProps;