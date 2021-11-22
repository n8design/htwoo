import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOToggle, {
  IHOOToggleProps
} from './HOOToggle';

export default {
  title: 'Atoms/HOOToggle',
  component: HOOToggle,
} as Meta;

const Template: Story<IHOOToggleProps> = (args) => <HOOToggle {...args} />;

export const Standard = Template.bind({});
Standard.args = { labelOn: "On", labelOff: "Off" };

export const Disabled = Template.bind({});
Disabled.args = { labelOn: "On", labelOff: "Off", disabled: true };