import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOFlyoutMenu, {
  IHOOFlyoutMenuProps, IHOOFlyoutMenuItem
} from './HOOFlyoutMenu';

export default {
  title: 'Atoms/HOOFlyoutMenu',
  component: HOOFlyoutMenu,
} as Meta;

const flyoutMenuItems: IHOOFlyoutMenuItem[] = [{ iconName: 'Plus', label: 'First Element' }, { iconName: 'Plus', label: 'Second Element' }];
const Template: Story<IHOOFlyoutMenuProps> = (args) => <HOOFlyoutMenu {...args} />;

export const Standard = Template.bind({});
Standard.args = { contextItems: flyoutMenuItems };
