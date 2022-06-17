import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOODialogContent, {
  IHOODialogContentProps
} from './HOODialogContent';
import HOOLabel from '../../atoms/HOOLabel/HOOLabel';

export default {
  title: 'Molecules/Dialog/HOODialogContent',
  component: HOODialogContent,
} as ComponentMeta<typeof HOODialogContent>;

const Template: ComponentStory<typeof HOODialogContent> = (args: IHOODialogContentProps) => <HOODialogContent {...args} >
  <HOOLabel label="Contents of Dialog" />
</HOODialogContent>;

export const Basic = Template.bind({});
Basic.args = {} as IHOODialogContentProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea } as IHOODialogContentProps;