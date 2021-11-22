import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOLabel, {
  IHOOLabelProps
} from './HOOLabel';

export default {
  title: 'Atoms/HOOLabel',
  component: HOOLabel,
} as Meta;

const Template: Story<IHOOLabelProps> = (args) => <HOOLabel {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "My Label" };