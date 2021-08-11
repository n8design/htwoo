import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOONotifyLabel, {
  IHOONotifyLabelProps, HOONotifyType
} from './HOONotifyLabel';

export default {
  title: 'Atoms/HOONotifyLabel',
  component: HOONotifyLabel,
} as Meta;

const Template: Story<IHOONotifyLabelProps> = (args) => <HOONotifyLabel {...args} />;

export const Success = Template.bind({});
Success.args = { type: HOONotifyType.Success, message: "Successful message" };

export const Error = Template.bind({});
Error.args = { type: HOONotifyType.Error, message: "Error message" };