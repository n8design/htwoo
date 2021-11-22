import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOSelect, {
  IHOOSelectProps, IHOOSelectOption
} from './HOOSelect';

export default {
  title: 'Atoms/HOOSelect',
  component: HOOSelect,
} as Meta;

const options: IHOOSelectOption[] = [
  { key: "Apple", text: "Apple" },
  { key: "Lime", text: "Lime" },
  { key: "Banana", text: "Banana" },
  { key: "Orange", text: "Orange" },
];

const Template: Story<IHOOSelectProps> = (args) => <HOOSelect {...args} />;

export const Standard = Template.bind({});
Standard.args = { options: options, id: "TestSelect", value: "", containsTypeAhead: false, onChange: (fieldValue: string, fieldName: string) => { alert(`FieldValue: ${fieldValue} & FieldName: ${fieldName}`) } };