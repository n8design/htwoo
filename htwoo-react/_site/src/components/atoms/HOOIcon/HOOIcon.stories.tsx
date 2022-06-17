import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOIcon, {
  IHOOIconProps
} from './HOOIcon';

export default {
  title: 'Atoms/HOOIcon',
  component: HOOIcon,
} as Meta;

//TODO: await symset.initSymbols();
const Template: Story<IHOOIconProps> = (args) => <HOOIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = { iconName: 'hoo-icon-close' };