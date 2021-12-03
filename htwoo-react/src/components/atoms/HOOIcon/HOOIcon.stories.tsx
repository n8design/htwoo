import React from 'react';
import { Meta, Story } from '@storybook/react';
import { symset } from '../../../SymbolSet';

import HOOIcon, {
  IHOOIconProps
} from './HOOIcon';

export default {
  title: 'Atoms/HOOIcon',
  component: HOOIcon,
} as Meta;

symset.initSymbols();

const Template: Story<IHOOIconProps> = (args) => <HOOIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = { iconName: 'hoo-icon-close' };