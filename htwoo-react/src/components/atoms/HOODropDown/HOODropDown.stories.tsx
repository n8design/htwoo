import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOODropDown, {
  IHOODropDownGroup,
  IHOODropDownItem
} from './HOODropDown';

export default {
  title: 'Atoms/Input/HOODropDown',
  component: HOODropDown,
} as ComponentMeta<typeof HOODropDown>;

const Template: ComponentStory<typeof HOODropDown> = (args) => <HOODropDown {...args} />;
const groupItems: IHOODropDownItem[] = [{ key: "apple", text: "Apple", disabled: false }, { key: "orange", text: "Orange", disabled: false }];
const options: IHOODropDownGroup[] = [{ groupName: "", groupItems: groupItems }];

export const Standard = Template.bind({});
Standard.args = {
  value: "apple",
  options: options,
  containsTypeAhead: false,
  onChange: (fieldValue) => { console.log(`Dropdown value: ${fieldValue}`) }
};