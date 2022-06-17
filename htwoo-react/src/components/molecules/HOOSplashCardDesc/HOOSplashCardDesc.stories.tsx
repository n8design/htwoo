import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSplashCardDesc, {
  IHOOSplashCardDescProps
} from './HOOSplashCardDesc';

export default {
  title: 'Molecules/Card-Elements/HOOSplashCardDesc',
  component: HOOSplashCardDesc,
} as ComponentMeta<typeof HOOSplashCardDesc>;

const Template: ComponentStory<typeof HOOSplashCardDesc> = (args) => <HOOSplashCardDesc {...args} />;

export const Basic = Template.bind({});
Basic.args = { description: "Splash Card Description" } as IHOOSplashCardDescProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLParagraphElement> = { style: { backgroundColor: "red" } };
Extend.args = { description: "Splash Card Description", rootElementAttributes: rea } as IHOOSplashCardDescProps;