import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOAction, {
  IHOOActionProps
} from './HOOAction';

export default {
  title: 'Atoms/HOOAction',
  component: HOOAction,
} as Meta;

const Template: Story<IHOOActionProps> = (args) => <HOOAction {...args} />;

export const Standard = Template.bind({});
Standard.args = { label: "Action Button", iconName: "Plus" };