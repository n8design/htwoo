import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOAction, {
  IHOOActionProps, HOOActionType
} from './HOOAction';

export default {
  title: 'Atoms/HOOAction',
  component: HOOAction,
} as Meta;

const Template: Story<IHOOActionProps> = (args) => <HOOAction {...args} />;

export const Action = Template.bind({});
Action.args = { type: HOOActionType.Action, label: "Action Button", iconName: "hoo-icon-plus" };

export const Command = Template.bind({});
Command.args = { type: HOOActionType.Command, label: "Action Button", iconName: "hoo-icon-plus" };