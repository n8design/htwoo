import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOONumber from './HOONumber';

export default {
  title: 'Atoms/Input/HOONumber',
  component: HOONumber,
} as ComponentMeta<typeof HOONumber>;

const Template: ComponentStory<typeof HOONumber> = (args) => <HOONumber {...args} />;

export const Standard = Template.bind({});
Standard.args = { value: 0 };

export const Disabled = Template.bind({});
Disabled.args = { value: 0, disabled: true };
