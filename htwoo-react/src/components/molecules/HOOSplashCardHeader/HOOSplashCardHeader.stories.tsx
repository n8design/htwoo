import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSplashCardHeader, {
  IHOOSplashCardHeaderProps
} from './HOOSplashCardHeader';

export default {
  title: 'Molecules/Card-Elements/HOOSplashCardHeader',
  component: HOOSplashCardHeader,
} as ComponentMeta<typeof HOOSplashCardHeader>;

const Template: ComponentStory<typeof HOOSplashCardHeader> = (args) => <HOOSplashCardHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = { imageSource: "https://placekitten.com/320/180", imageAlt: "Kitten" } as IHOOSplashCardHeaderProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLElement> = { style: { backgroundColor: "red" } };
Extend.args = { imageSource: "https://placekitten.com/320/180", imageAlt: "Kitten", rootElementAttributes: rea } as IHOOSplashCardHeaderProps;