import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSplashCardFooter, {
  IHOOSplashCardFooterProps
} from './HOOSplashCardFooter';

import HOOButton, { HOOButtonType } from '../../atoms/HOOButton/HOOButton';

export default {
  title: 'Molecules/Card-Elements/HOOSplashCardFooter',
  component: HOOSplashCardFooter,
} as ComponentMeta<typeof HOOSplashCardFooter>;

const Template: ComponentStory<typeof HOOSplashCardFooter> = (args) => <HOOSplashCardFooter {...args}>
  <HOOButton type={HOOButtonType.Primary} label="Create Something" onClick={() => { alert("Clicked"); }} />
  <HOOButton type={HOOButtonType.Standard} label="Call to Action" onClick={() => { alert("Clicked"); }} />
</HOOSplashCardFooter>;

export const Basic = Template.bind({});
Basic.args = {} as IHOOSplashCardFooterProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLHeadingElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea } as IHOOSplashCardFooterProps;