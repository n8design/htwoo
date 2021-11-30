import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOPivotBar, {
  IHOOPivotBarProps, IHOOPivotItem
} from './HOOPivotBar';

export default {
  title: 'Molecules/HOOPivotBar',
  component: HOOPivotBar,
} as Meta;

const options: IHOOPivotItem[] = [{ key: 1, text: "Menu 1" }, { key: 2, text: "Menu 2" }, { key: 3, text: "Menu 3" }];

const Template: Story<IHOOPivotBarProps> = (args: IHOOPivotBarProps) => <HOOPivotBar {...args} />;


export const Standard = Template.bind({});
Standard.args = { selectedKey: 1, pivotItems: options, onClick: () => { alert("Clicked"); } };

export const Extend = Template.bind({});
const pea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { selectedKey: 1, pivotItems: options, onClick: () => { alert("Clicked"); }, pivotButtonAttributes: pea };