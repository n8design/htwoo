import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOCardTitle, {
  IHOOCardTitleProps
} from './HOOCardTitle';

export default {
  title: 'Molecules/Card-Elements/HOOCardTitle',
  component: HOOCardTitle,
} as ComponentMeta<typeof HOOCardTitle>;

const Template: ComponentStory<typeof HOOCardTitle> = (args: IHOOCardTitleProps) => <HOOCardTitle {...args} />;

export const Basic = Template.bind({});
Basic.args = { title: "Title Value" } as IHOOCardTitleProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { title: "Title Value", rootElementAttributes: rea } as IHOOCardTitleProps;