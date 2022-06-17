import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOToggle, {
  IHOOToggleProps
} from './HOOToggle';

export default {
  title: 'Atoms/Input/HOOToggle',
  component: HOOToggle,
} as ComponentMeta<typeof HOOToggle>;

const Template: ComponentStory<typeof HOOToggle> = (args: IHOOToggleProps) => <HOOToggle {...args} />;

export const Standard = Template.bind({});
Standard.args = { labelOn: "On", labelOff: "Off" };

export const Disabled = Template.bind({});
Disabled.args = { labelOn: "On", labelOff: "Off", disabled: true };