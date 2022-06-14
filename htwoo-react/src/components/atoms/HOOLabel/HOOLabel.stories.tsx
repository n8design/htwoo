import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOLabel from './HOOLabel';

export default {
  title: 'Atoms/Input/HOOLabel',
  component: HOOLabel,
} as ComponentMeta<typeof HOOLabel>;

const Template: ComponentStory<typeof HOOLabel> = (args) => <HOOLabel {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "My Label" };