import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOORadioButton, {
  IHOORadioButtonProps
} from './HOORadioButton';

export default {
  title: 'Atoms/HOORadioButton',
  component: HOORadioButton,
} as Meta;

const Template: Story<IHOORadioButtonProps> = (args) => <HOORadioButton {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "My RadioButton" };

export const Disabled = Template.bind({});
Disabled.args = { label: "My RadioButton Disabled", disabled: true };