import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOOptionList, {
  IHOOOptionListProps, HOOOptionListType, IHOOListOption
} from './HOOOptionList';

export default {
  title: 'Molecules/Forms/HOOOptionList',
  component: HOOOptionList,
} as ComponentMeta<typeof HOOOptionList>;

const options: IHOOListOption[] = [{ key: 1, text: "Value 1" }, { key: 2, text: "Value 2" }, { key: 3, text: "Value 3" }];

const Template: ComponentStory<typeof HOOOptionList> = (args: IHOOOptionListProps) => <HOOOptionList {...args} />;

export const CheckboxList = Template.bind({});
CheckboxList.args = { type: HOOOptionListType.Checkbox, options: options, value: [1] };

export const RadioButtonList = Template.bind({});
RadioButtonList.args = { type: HOOOptionListType.RadioButton, options: options, value: 1 };