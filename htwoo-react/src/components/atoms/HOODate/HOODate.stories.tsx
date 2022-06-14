import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODate, {
  IHOODateProps
} from './HOODate';

export default {
  title: 'Atoms/Input/HOODate',
  component: HOODate,
} as Meta;

const Template: Story<IHOODateProps> = (args) => <HOODate {...args} />;
const _minValue: Date = new Date();
const _maxValue: Date = new Date();

_maxValue.setFullYear(_maxValue.getFullYear() + 1);
_minValue.setFullYear(_minValue.getFullYear() - 1);

export const Standard = Template.bind({});
Standard.args = { value: (new Date()).toLocaleDateString() };

export const MinMaxValues = Template.bind({});
MinMaxValues.args = { value: (new Date()).toLocaleDateString(), minValue: _minValue.toISOString().split('T')[0], maxValue: _maxValue.toISOString().split('T')[0] };

export const Disabled = Template.bind({});
Disabled.args = { value: (new Date()).toLocaleDateString(), disabled: true };