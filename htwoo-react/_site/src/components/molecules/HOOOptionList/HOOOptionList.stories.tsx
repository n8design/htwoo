import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOOptionList, {
  IHOOOptionListProps, HOOOptionListType, IHOOListOption
} from './HOOOptionList';

export default {
  title: 'Molecules/HOOOptionList',
  component: HOOOptionList,
} as Meta;

const options: IHOOListOption[] = [{ key: 1, text: "Value 1" }, { key: 2, text: "Value 2" }, { key: 3, text: "Value 3" }];

const Template: Story<IHOOOptionListProps> = (args: IHOOOptionListProps) => <HOOOptionList {...args} />;


export const CheckboxList = Template.bind({});
CheckboxList.args = { type: HOOOptionListType.Checkbox, options: options, value: [1] };

export const RadioButtonList = Template.bind({});
RadioButtonList.args = { type: HOOOptionListType.RadioButton, options: options, value: 1 };