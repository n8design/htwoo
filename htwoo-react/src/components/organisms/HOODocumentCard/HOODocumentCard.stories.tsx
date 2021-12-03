import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODocumentCard, {
  IHOODocumentCardProps
} from './HOODocumentCard';
import HOOCardImage from '../../molecules/HOOCardImage/HOOCardImage';
import HOOCardLocation from '../../molecules/HOOCardLocation/HOOCardLocation';
import HOOCardTitle from '../../molecules/HOOCardTitle/HOOCardTitle';
import HOOCardFooter from '../../molecules/HOOCardFooter/HOOCardFooter';
import { HOOAvatarSize } from '../../atoms/HOOAvatar/HOOAvatar';

export default {
  title: 'Organisms/HOODocumentCard',
  component: HOODocumentCard,
} as Meta;

const Template: Story<IHOODocumentCardProps> = (args) => <HOODocumentCard {...args}>
  <HOOCardImage imageSource="https://placekitten.com/320/180" imageAlt="Kitten" />
  <HOOCardLocation location="My Location Card" />
  <HOOCardTitle title="My Card Title" />
  <HOOCardFooter
    avatarImage="https://placekitten.com/32/32"
    avatarImageAlt="Kitty"
    avatarImageSize={HOOAvatarSize.Px32}
    name="Mr. Bigglesworth"
    modified="December 31, 2021" />
</HOODocumentCard>;

export const Standard = Template.bind({});
Standard.args = {};

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea };