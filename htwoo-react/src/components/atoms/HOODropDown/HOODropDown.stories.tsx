import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODropDown, {
  IHOODropDownProps
} from './HOODropDown';

export default {
  title: 'Atoms/HOODropDown',
  component: HOODropDown,
} as Meta;

const Template: Story<IHOODropDownProps> = (args) => <HOODropDown {...args} />;

export const Standard = Template.bind({});
Standard.args = {};