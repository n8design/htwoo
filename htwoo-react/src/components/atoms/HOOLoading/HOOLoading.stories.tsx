import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOLoading from './HOOLoading';

export default {
  title: 'Atoms/Loading/HOOLoading',
  component: HOOLoading,
} as ComponentMeta<typeof HOOLoading>;

const Template: ComponentStory<typeof HOOLoading> = (args) => <HOOLoading {...args} />;

export const Standard = Template.bind({});
Standard.args = { minValue: 0, maxValue: 100, value: 20 };