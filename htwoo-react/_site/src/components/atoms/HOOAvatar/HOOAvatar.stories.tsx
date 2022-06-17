import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOAvatar, {
  IHOOAvatarProps, HOOAvatarSize
} from './HOOAvatar';

export default {
  title: 'Atoms/HOOAvatar',
  component: HOOAvatar,
} as Meta;

const Template: Story<IHOOAvatarProps> = (args) => <HOOAvatar {...args} />;

export const Standard32 = Template.bind({});
Standard32.args = { size: HOOAvatarSize.Px32, imageSource: "https://placekitten.com/32/32", imageAlt: "Placeholder Image", onClick: () => { } }
