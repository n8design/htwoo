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


export const Primary = Template.bind({});
Primary.args = { type: HOOButtonType.Primary, label: 'Button', onClick: () => { alert("Clicked"); } };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { type: HOOButtonType.Primary, disabled: true, label: 'Button', onClick: () => { alert("Clicked"); } };

export const Standard = Template.bind({});
Standard.args = { type: HOOButtonType.Standard, label: 'Button', onClick: () => { alert("Clicked"); } };

export const Icon = Template.bind({});
Icon.args = { type: HOOButtonType.Icon, iconName: 'hoo-icon-help', onClick: () => { alert("Clicked"); } };

export const HyperlinkPrimary = Template.bind({});
HyperlinkPrimary.args = { type: HOOButtonType.HyperlinkPrimary, label: 'Button', href: "https://google.com" };

export const HyperlinkStandard = Template.bind({});
HyperlinkStandard.args = { type: HOOButtonType.HyperlinkStandard, label: 'Button', href: "https://google.com" };

export const CompoundPrimary = Template.bind({});
CompoundPrimary.args = { type: HOOButtonType.CompoundPrimary, label: 'Button', description: "Compound button description", onClick: () => { alert("Clicked"); } };

export const CompoundStandard = Template.bind({});
CompoundStandard.args = { type: HOOButtonType.CompoundStandard, label: 'Button', description: "Compound button description", onClick: () => { alert("Clicked"); } };

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOButtonType.Standard, label: 'Button', onClick: () => { alert("Clicked"); }, rootElementAttributes: rea };