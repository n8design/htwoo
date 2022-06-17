import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSplashCardTitle, {
  IHOOSplashCardTitleProps
} from './HOOSplashCardTitle';

export default {
  title: 'Molecules/Card-Elements/HOOSplashCardTitle',
  component: HOOSplashCardTitle,
} as ComponentMeta<typeof HOOSplashCardTitle>;

const Template: ComponentStory<typeof HOOSplashCardTitle> = (args) => <HOOSplashCardTitle {...args} />;

export const Basic = Template.bind({});
Basic.args = { title: "Splash Card Title" } as IHOOSplashCardTitleProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLHeadingElement> = { style: { backgroundColor: "red" } };
Extend.args = { title: "Splash Card Title", rootElementAttributes: rea } as IHOOSplashCardTitleProps;