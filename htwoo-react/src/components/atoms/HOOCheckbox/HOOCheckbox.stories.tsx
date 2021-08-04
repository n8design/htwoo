import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOCheckbox, {
  IHOOCheckboxProps
} from './HOOCheckbox';

export default {
  title: 'Atoms/HOOCheckbox',
  component: HOOCheckbox,
} as Meta;

const Template: Story<IHOOCheckboxProps> = (args) => <HOOCheckbox {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "My Checkbox" };

export const Disabled = Template.bind({});
Disabled.args = { label: "My Checkbox Disabled", disabled: true };