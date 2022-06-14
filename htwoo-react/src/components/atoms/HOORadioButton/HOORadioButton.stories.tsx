import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOORadioButton from './HOORadioButton';

export default {
  title: 'Atoms/Input/HOORadioButton',
  component: HOORadioButton,
} as ComponentMeta<typeof HOORadioButton>;

const Template: ComponentStory<typeof HOORadioButton> = (args) => <HOORadioButton {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "My RadioButton" };

export const Disabled = Template.bind({});
Disabled.args = { label: "My RadioButton Disabled", disabled: true };