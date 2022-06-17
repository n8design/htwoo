import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOIconOverflow, {
  IHOOIconOverflowProps
} from './HOOIconOverflow';

export default {
  title: 'Atoms/Buttons/HOOIconOverflow',
  component: HOOIconOverflow,
} as ComponentMeta<typeof HOOIconOverflow>;

const Template: ComponentStory<typeof HOOIconOverflow> = (args) => <HOOIconOverflow {...args} />;

export const Basic = Template.bind({});
Basic.args = { onClick: () => { alert("Clicked"); } } as IHOOIconOverflowProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { onClick: () => { alert("Clicked"); }, rootElementAttributes: rea } as IHOOIconOverflowProps;