import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOSplashCardTitle, {
  IHOOSplashCardTitleProps
} from './HOOSplashCardTitle';

export default {
  title: 'Molecules/HOOSplashCardTitle',
  component: HOOSplashCardTitle,
} as Meta;

const Template: Story<IHOOSplashCardTitleProps> = (args) => <HOOSplashCardTitle {...args} />;

export const Basic = Template.bind({});
Basic.args = { title: "Splash Card Title" } as IHOOSplashCardTitleProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLHeadingElement> = { style: { backgroundColor: "red" } };
Extend.args = { title: "Splash Card Title", rootElementAttributes: rea } as IHOOSplashCardTitleProps;