import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOSplashCardFooter, {
  IHOOSplashCardFooterProps
} from './HOOSplashCardFooter';

import HOOButton, { HOOButtonType } from '../../atoms/HOOButton/HOOButton';

export default {
  title: 'Molecules/HOOSplashCardFooter',
  component: HOOSplashCardFooter,
} as Meta;

const Template: Story<IHOOSplashCardFooterProps> = (args) => <HOOSplashCardFooter {...args}>
  <HOOButton type={HOOButtonType.Primary} label="Create Something" onClick={() => { alert("Clicked"); }} />
  <HOOButton type={HOOButtonType.Standard} label="Call to Action" onClick={() => { alert("Clicked"); }} />
</HOOSplashCardFooter>;

export const Basic = Template.bind({});
Basic.args = {} as IHOOSplashCardFooterProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLHeadingElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea } as IHOOSplashCardFooterProps;