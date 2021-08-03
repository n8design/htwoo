import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOButton, {
  IHOOButtonProps
} from './HOOButton';

export default {
  title: 'Atoms/HOOButton',
  component: HOOButton,
} as Meta;

const Template: Story<IHOOButtonProps> = (args) => <HOOButton {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: 'Button', onClick: () => { alert("Clicked"); } };

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { label: 'Button', onClick: () => { alert("Clicked"); }, rootElementAttributes: rea };