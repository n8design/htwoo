import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOODialogContent, {
  IHOODialogContentProps
} from './HOODialogContent';
import HOOLabel from '../../atoms/HOOLabel/HOOLabel';

export default {
  title: 'Atoms/HOODialogContent',
  component: HOODialogContent,
} as Meta;

const Template: Story<IHOODialogContentProps> = (args) => <HOODialogContent {...args} >
  <HOOLabel label="Contents of Dialog" />
</HOODialogContent>;

export const Basic = Template.bind({});
Basic.args = {} as IHOODialogContentProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea } as IHOODialogContentProps;