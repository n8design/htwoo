import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOTime, {
  IHOOTimeProps
} from './HOOTime';

export default {
  title: 'Atoms/HOOTime',
  component: HOOTime,
} as Meta;

const Template: Story<IHOOTimeProps> = (args) => <HOOTime {...args} />;

export const Standard = Template.bind({});
Standard.args = { value: (new Date()).toLocaleDateString() };

export const MinMaxValues = Template.bind({});
MinMaxValues.args = { value: (new Date()).toLocaleDateString(), minValue: "00:00:00", maxValue: "23:59:59" };

export const Disabled = Template.bind({});
Disabled.args = { value: (new Date()).toLocaleDateString(), disabled: true };