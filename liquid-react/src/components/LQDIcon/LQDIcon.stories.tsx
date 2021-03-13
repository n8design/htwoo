import React from 'react';
import { Meta, Story } from '@storybook/react';

import LQDIcon, {
  ILQDIconProps
} from './LQDIcon';

export default {
  title: 'Atoms/LQDIcon',
  component: LQDIcon,
} as Meta;

const Template: Story<ILQDIconProps> = (args) => <LQDIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = { iconName: 'icon-close' };