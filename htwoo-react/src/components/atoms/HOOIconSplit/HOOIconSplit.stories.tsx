import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOIconSplit, {
  IHOOIconSplitProps
} from './HOOIconSplit';
import { IHOOFlyoutMenuItem } from '../../../HOOFlyoutMenu';

export default {
  title: 'Atoms/Buttons/HOOIconSplit',
  component: HOOIconSplit,
} as ComponentMeta<typeof HOOIconSplit>;


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

const Template: ComponentStory<typeof HOOIconSplit> = (args) => <HOOIconSplit {...args} />;

const flyoutMenuItems: IHOOFlyoutMenuItem[] = [{ iconName: 'Plus', label: 'First Element' }, { iconName: 'Plus', label: 'Second Element' }];
export const Icon = Template.bind({});
Icon.args = { flyoutContextItems: flyoutMenuItems, leftIconName: "hoo-icon-smile", flyoutContextItemsClicked: _menuItemClicked } as IHOOIconSplitProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { leftIconName: "hoo-icon-smile", flyoutContextItems: flyoutMenuItems, flyoutContextItemsClicked: _menuItemClicked, rootElementAttributes: rea } as IHOOIconSplitProps;