import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSearch from './HOOSearch';

export default {
  title: 'Atoms/Input/HOOSearch',
  component: HOOSearch,
} as ComponentMeta<typeof HOOSearch>;

const Template: ComponentStory<typeof HOOSearch> = (args) => <HOOSearch {...args} />;

export const Standard = Template.bind({});
Standard.args = { placeholder: "Search here" };