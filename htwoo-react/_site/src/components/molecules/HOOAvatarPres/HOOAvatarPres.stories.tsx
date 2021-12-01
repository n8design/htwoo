import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOAvatarPres, {
  IHOOAvatarPresProps
} from './HOOAvatarPres';
import { HOOAvatarSize } from '../../atoms/HOOAvatar/HOOAvatar';
import { HOOPresenceStatus } from '../../atoms/HOOPresence/HOOPresence';

export default {
  title: 'Atoms/HOOAvatarPres',
  component: HOOAvatarPres,
} as Meta;

const Template: Story<IHOOAvatarPresProps> = (args) => <HOOAvatarPres {...args} />;

export const Standard32 = Template.bind({});
Standard32.args = { size: HOOAvatarSize.Px32, imageSource: "https://placekitten.com/32/32", imageAlt: "Placeholder Image", onClick: () => { }, status: HOOPresenceStatus.Online } as IHOOAvatarPresProps;
