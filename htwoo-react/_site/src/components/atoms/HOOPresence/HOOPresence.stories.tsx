import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOPresence, {
  IHOOPresenceProps, HOOPresenceStatus
} from './HOOPresence';

export default {
  title: 'Atoms/HOOPresence',
  component: HOOPresence,
} as Meta;

const Template: Story<IHOOPresenceProps> = (args) => <HOOPresence {...args} />;

export const Standard32 = Template.bind({});
Standard32.args = { status: HOOPresenceStatus.Online } as IHOOPresenceProps;
