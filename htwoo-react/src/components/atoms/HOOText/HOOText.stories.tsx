import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOText, {
  IHOOTextProps
} from './HOOText';

export default {
  title: 'Atoms/HOOText',
  component: HOOText,
} as Meta;

const Template: Story<IHOOTextProps> = (args) => <HOOText {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const PrefixOnly = Template.bind({});
PrefixOnly.args = { inputPrefix: "https://" };

export const SuffixOnly = Template.bind({});
SuffixOnly.args = { inputSuffix: ".com" };

export const WithPreSuffix = Template.bind({});
WithPreSuffix.args = { inputPrefix: "https://", inputSuffix: ".com" };