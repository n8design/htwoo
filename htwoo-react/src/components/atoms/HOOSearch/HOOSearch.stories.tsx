import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOSearch, {
  IHOOSearchProps
} from './HOOSearch';

export default {
  title: 'Atoms/HOOSearch',
  component: HOOSearch,
} as Meta;

const Template: Story<IHOOSearchProps> = (args) => <HOOSearch {...args} />;

export const Standard = Template.bind({});
Standard.args = { placeholder: "Search here" };