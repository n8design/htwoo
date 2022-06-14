import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOTime, {
  IHOOTimeProps
} from './HOOTime';

export default {
  title: 'Atoms/Input/HOOTime',
  component: HOOTime,
} as ComponentMeta<typeof HOOTime>;

const Template: ComponentStory<typeof HOOTime> = (args: IHOOTimeProps) => <HOOTime {...args} />;

export const Standard = Template.bind({});
Standard.args = { value: (new Date()).toLocaleDateString() };

export const MinMaxValues = Template.bind({});
MinMaxValues.args = { value: (new Date()).toLocaleDateString(), minValue: "00:00:00", maxValue: "23:59:59" };

export const Disabled = Template.bind({});
Disabled.args = { value: (new Date()).toLocaleDateString(), disabled: true };