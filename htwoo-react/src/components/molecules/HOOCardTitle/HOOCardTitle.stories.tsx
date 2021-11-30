import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOCardTitle, {
  IHOOCardTitleProps
} from './HOOCardTitle';

export default {
  title: 'Molecules/HOOCardTitle',
  component: HOOCardTitle,
} as Meta;

const Template: Story<IHOOCardTitleProps> = (args) => <HOOCardTitle {...args} />;

export const Basic = Template.bind({});
Basic.args = { title: "Title Value" } as IHOOCardTitleProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { title: "Title Value", rootElementAttributes: rea } as IHOOCardTitleProps;