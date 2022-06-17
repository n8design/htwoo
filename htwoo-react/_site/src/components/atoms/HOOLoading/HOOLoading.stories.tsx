import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOLoading, {
  IHOOLoadingProps
} from './HOOLoading';

export default {
  title: 'Atoms/HOOLoading',
  component: HOOLoading,
} as Meta;

const Template: Story<IHOOLoadingProps> = (args) => <HOOLoading {...args} />;

export const Standard = Template.bind({});
Standard.args = { minValue: 0, maxValue: 100, value: 20 };