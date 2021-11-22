import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOIconOverflow, {
  IHOOIconOverflowProps
} from './HOOIconOverflow';

export default {
  title: 'Atoms/HOOIconOverflow',
  component: HOOIconOverflow,
} as Meta;

const Template: Story<IHOOIconOverflowProps> = (args) => <HOOIconOverflow {...args} />;

export const Basic = Template.bind({});
Basic.args = { onClick: () => { alert("Clicked"); } } as IHOOIconOverflowProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { onClick: () => { alert("Clicked"); }, rootElementAttributes: rea } as IHOOIconOverflowProps;