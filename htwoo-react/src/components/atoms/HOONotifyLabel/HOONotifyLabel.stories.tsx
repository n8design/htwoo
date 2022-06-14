import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOONotifyLabel, {
  HOONotifyType
} from './HOONotifyLabel';

export default {
  title: 'Atoms/Validation/HOONotifyLabel',
  component: HOONotifyLabel,
} as ComponentMeta<typeof HOONotifyLabel>;

const Template: ComponentStory<typeof HOONotifyLabel> = (args) => <HOONotifyLabel {...args} />;

export const Success = Template.bind({});
Success.args = { type: HOONotifyType.Success, message: "Successful message" };

export const Error = Template.bind({});
Error.args = { type: HOONotifyType.Error, message: "Error message" };