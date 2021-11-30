import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOCardLocation, {
  IHOOCardLocationProps
} from './HOOCardLocation';

export default {
  title: 'Molecules/HOOCardLocation',
  component: HOOCardLocation,
} as Meta;

const Template: Story<IHOOCardLocationProps> = (args) => <HOOCardLocation {...args} />;

export const Basic = Template.bind({});
Basic.args = { location: "Location Value" } as IHOOCardLocationProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { location: "Location Value", rootElementAttributes: rea } as IHOOCardLocationProps;