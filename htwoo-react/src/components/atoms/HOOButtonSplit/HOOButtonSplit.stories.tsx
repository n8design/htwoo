import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOButtonSplit, {
  IHOOButtonSplitProps,
  HOOButtonSplitType
} from './HOOButtonSplit';
import { IHOOFlyoutMenuItem } from '../../../HOOFlyoutMenu';

export default {
  title: 'Atoms/HOOButtonSplit',
  component: HOOButtonSplit,
} as Meta;

const _menuItemClicked = (event, item: IHOOFlyoutMenuItem) => {
  switch (item.label) {
    case "First Element":
      //Do something
      break;
    case "Second Element":
      //Do something else
      break;
  }
}

const Template: Story<IHOOButtonSplitProps> = (args) => <HOOButtonSplit {...args} />;

const flyoutMenuItems: IHOOFlyoutMenuItem[] = [{ iconName: 'Plus', label: 'First Element' }, { iconName: 'Plus', label: 'Second Element' }];

export const Standard = Template.bind({});
Standard.args = { type: HOOButtonSplitType.Standard, flyoutContextItems: flyoutMenuItems, label: 'Button', flyoutContextItemsClicked: _menuItemClicked } as IHOOButtonSplitProps;

export const Primary = Template.bind({});
Primary.args = { type: HOOButtonSplitType.Primary, flyoutContextItems: flyoutMenuItems, label: 'Button', flyoutContextItemsClicked: _menuItemClicked } as IHOOButtonSplitProps;

export const PrimaryFlyout = Template.bind({});
PrimaryFlyout.args = { type: HOOButtonSplitType.Primary, label: 'Button', flyoutContextItems: flyoutMenuItems, flyoutContextItemsClicked: _menuItemClicked } as IHOOButtonSplitProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOButtonSplitType.Standard, flyoutContextItems: flyoutMenuItems, label: 'Button', flyoutContextItemsClicked: _menuItemClicked, rootElementAttributes: rea } as IHOOButtonSplitProps;