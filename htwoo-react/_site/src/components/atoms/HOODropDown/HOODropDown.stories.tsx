import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODropDown, {
  IHOODropDownGroup,
  IHOODropDownItem,
  IHOODropDownProps
} from './HOODropDown';

export default {
  title: 'Atoms/HOODropDown',
  component: HOODropDown,
} as Meta;

const Template: Story<IHOODropDownProps> = (args) => <HOODropDown {...args} />;
const groupItems: IHOODropDownItem[] = [{ key: "apple", text: "Apple", disabled: false }, { key: "orange", text: "Orange", disabled: false }];
const options: IHOODropDownGroup[] = [{ groupName: "", groupItems: groupItems }];
export const Standard = Template.bind({});
Standard.args = { value: "apple", options: options, containsTypeAhead: false, onChange: (fieldValue) => { console.log(`Dropdown value: ${fieldValue}`) } };