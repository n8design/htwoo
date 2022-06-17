import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOCardImage, {
  IHOOCardImageProps
} from './HOOCardImage';

export default {
  title: 'Atoms/HOOCardImage',
  component: HOOCardImage,
} as Meta;

const Template: Story<IHOOCardImageProps> = (args) => <HOOCardImage {...args} />;

export const Basic = Template.bind({});
Basic.args = { imageSource: "https://placekitten.com/320/180", imageAlt: "Kitten", width: 320, height: 180 } as IHOOCardImageProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { imageSource: "https://placekitten.com/320/180", imageAlt: "Kitten", width: 320, height: 180, rootElementAttributes: rea } as IHOOCardImageProps;