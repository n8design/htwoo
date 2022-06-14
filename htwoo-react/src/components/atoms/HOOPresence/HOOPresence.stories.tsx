import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOPresence, {
  IHOOPresenceProps, HOOPresenceStatus
} from './HOOPresence';

export default {
  title: 'Atoms/Avatar/HOOPresence',
  component: HOOPresence,
} as ComponentMeta<typeof HOOPresence>;

const Template: ComponentStory<typeof HOOPresence> = (args) => <HOOPresence {...args} />;

export const Standard32 = Template.bind({});
Standard32.args = { status: HOOPresenceStatus.Online } as IHOOPresenceProps;
