import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOONumber, {
  IHOONumberProps
} from './HOONumber';

export default {
  title: 'Atoms/HOONumber',
  component: HOONumber,
} as Meta;

const Template: Story<IHOONumberProps> = (args) => <HOONumber {...args} />;

export const Standard = Template.bind({});
Standard.args = { value: 0 };

export const Disabled = Template.bind({});
Disabled.args = { value: 0, disabled: true };
