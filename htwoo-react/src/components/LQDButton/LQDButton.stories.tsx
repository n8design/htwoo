import React from 'react';
import { Meta, Story } from '@storybook/react';

import LQDButton, {
  ILQDButtonProps
} from './LQDButton';

export default {
  title: 'Atoms/LQDButton',
  component: LQDButton,
} as Meta;

const Template: Story<ILQDButtonProps> = (args) => <LQDButton {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: 'Button', onClick: () => { alert("Clicked"); } };

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { label: 'Button', onClick: () => { alert("Clicked"); }, rootElementAttributes: rea };