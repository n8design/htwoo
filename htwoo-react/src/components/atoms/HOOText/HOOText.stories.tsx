import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOText, {
  IHOOTextProps
} from './HOOText';

export default {
  title: 'Atoms/Input/HOOText',
  component: HOOText,
} as ComponentMeta<typeof HOOText>;

const Template: ComponentStory<typeof HOOText> = (args: IHOOTextProps) => <HOOText {...args} />;

export const Standard = Template.bind({});
Standard.args = { value: "Default Value" };

export const Disabled = Template.bind({});
Disabled.args = { value: "Default Value", disabled: true };

export const PrefixOnly = Template.bind({});
PrefixOnly.args = { value: "Default Value", inputPrefix: "https://" };

export const SuffixOnly = Template.bind({});
SuffixOnly.args = { value: "Default Value", inputSuffix: ".com" };

export const WithPreSuffix = Template.bind({});
WithPreSuffix.args = { value: "Default Value", inputPrefix: "https://", inputSuffix: ".com" };

export const Multiline = Template.bind({});
Multiline.args = { value: "Default Value", multiline: 5 };