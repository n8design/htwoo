import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOButton, {
  IHOOButtonProps,
  HOOButtonType
} from './HOOButton';

export default {
  title: 'Atoms/HOOButton',
  component: HOOButton,
} as Meta;

const Template: Story<IHOOButtonProps> = (args) => <HOOButton {...args} />;

export const Standard = Template.bind({});
Standard.args = { type: HOOButtonType.Standard, label: 'Button', onClick: () => { alert("Clicked"); } };

export const Primary = Template.bind({});
Primary.args = { type: HOOButtonType.Primary, label: 'Button', onClick: () => { alert("Clicked"); } };

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOButtonType.Standard, label: 'Button', onClick: () => { alert("Clicked"); }, rootElementAttributes: rea };