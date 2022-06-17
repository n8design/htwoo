import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOSelect, {
  IHOOSelectOption
} from './HOOSelect';

export default {
  title: 'Atoms/Input/HOOSelect',
  component: HOOSelect,
} as ComponentMeta<typeof HOOSelect>;

const options: IHOOSelectOption[] = [
  { key: "Apple", text: "Apple" },
  { key: "Lime", text: "Lime" },
  { key: "Banana", text: "Banana" },
  { key: "Orange", text: "Orange" },
];

const Template: ComponentStory<typeof HOOSelect> = (args) => <HOOSelect {...args} />;

export const Standard = Template.bind({});
Standard.args = { options: options, id: "TestSelect", value: "", containsTypeAhead: false, onChange: (fieldValue: string, fieldName: string) => { alert(`FieldValue: ${fieldValue} & FieldName: ${fieldName}`) } };