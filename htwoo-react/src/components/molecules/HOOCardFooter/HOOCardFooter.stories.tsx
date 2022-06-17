import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOCardFooter, {
  IHOOCardFooterProps
} from './HOOCardFooter';
import { HOOAvatarSize } from '../../atoms/HOOAvatar/HOOAvatar';

export default {
  title: 'Molecules/Card-Elements/HOOCardFooter',
  component: HOOCardFooter,
} as ComponentMeta<typeof HOOCardFooter>;

const Template: ComponentStory<typeof HOOCardFooter> = (args: IHOOCardFooterProps) => <HOOCardFooter {...args} />;

export const Basic = Template.bind({});
Basic.args = { avatarImage: "https://placekitten.com/32/32", avatarImageAlt: "Kitten", avatarImageSize: HOOAvatarSize.Px32, name: "Kitten King", modified: "Dec 1, 2021" } as IHOOCardFooterProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { avatarImage: "https://placekitten.com/32/32", avatarImageAlt: "Kitten", avatarImageSize: HOOAvatarSize.Px32, name: "Kitten King", modified: "Dec 1, 2021", rootElementAttributes: rea } as IHOOCardFooterProps;