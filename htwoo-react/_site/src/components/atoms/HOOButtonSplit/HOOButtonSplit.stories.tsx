import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOButtonSplit, {
  IHOOButtonSplitProps,
  HOOButtonSplitType
} from './HOOButtonSplit';
import { IHOOFlyoutMenuItem } from '../../../HOOFlyoutMenu';

export default {
  title: 'Atoms/HOOButtonSplit',
  component: HOOButtonSplit,
} as Meta;

const Template: Story<IHOOButtonSplitProps> = (args) => <HOOButtonSplit {...args} />;

export const Standard = Template.bind({});
Standard.args = { type: HOOButtonSplitType.Standard, label: 'Button', onClick: () => { alert("Clicked"); } } as IHOOButtonSplitProps;

export const Primary = Template.bind({});
Primary.args = { type: HOOButtonSplitType.Primary, label: 'Button', onClick: () => { alert("Clicked"); } } as IHOOButtonSplitProps;

export const Icon = Template.bind({});
Icon.args = { type: HOOButtonSplitType.Icon, label: 'Button', rightIconName: "hoo-icon-close", onClick: () => { alert("Clicked"); } } as IHOOButtonSplitProps;

const flyoutMenuItems: IHOOFlyoutMenuItem[] = [{ iconName: 'Plus', label: 'First Element' }, { iconName: 'Plus', label: 'Second Element' }];
export const PrimaryFlyout = Template.bind({});
PrimaryFlyout.args = { type: HOOButtonSplitType.Primary, label: 'Button', flyoutContextItems: flyoutMenuItems, onClick: () => { alert("Clicked"); } } as IHOOButtonSplitProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOButtonSplitType.Standard, label: 'Button', onClick: () => { alert("Clicked"); }, rootElementAttributes: rea } as IHOOButtonSplitProps;