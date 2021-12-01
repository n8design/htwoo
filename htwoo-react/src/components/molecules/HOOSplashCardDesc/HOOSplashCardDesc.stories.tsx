import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOSplashCardDesc, {
  IHOOSplashCardDescProps
} from './HOOSplashCardDesc';

export default {
  title: 'Molecules/HOOSplashCardDesc',
  component: HOOSplashCardDesc,
} as Meta;

const Template: Story<IHOOSplashCardDescProps> = (args) => <HOOSplashCardDesc {...args} />;

export const Basic = Template.bind({});
Basic.args = { description: "Splash Card Description" } as IHOOSplashCardDescProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLParagraphElement> = { style: { backgroundColor: "red" } };
Extend.args = { description: "Splash Card Description", rootElementAttributes: rea } as IHOOSplashCardDescProps;