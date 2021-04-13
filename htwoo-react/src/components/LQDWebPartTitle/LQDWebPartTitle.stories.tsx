import React from 'react';

import { Meta, Story } from '@storybook/react';

import LQDWebPartTitle, { ILQDWebPartTitleProps } from './LQDWebPartTitle';

export default {
  title: 'Atoms/LQDWebPartTitle',
  component: LQDWebPartTitle,
  argTypes: {
    rootElementAttributes: {
      control: {
        type: 'object',
      },
    },
    updateTitle: { action: 'title updated' }
  }
} as Meta;

const Template: Story<ILQDWebPartTitleProps> = (args) => <LQDWebPartTitle {...args} />;

export const Standard = Template.bind({});

let titleValue1: string = null;
Standard.args = { title: titleValue1, placeholder: "Web Part Title", editMode: true, updateTitle: (title: string) => { titleValue1 = title; } }

export const Extend = Template.bind({});

let titleValue2: string = null;
const rea: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "myClass"
}
Extend.args = { rootElementAttributes: rea, title: titleValue2, placeholder: "Web Part Title", editMode: true, updateTitle: (title: string) => { titleValue2 = title; } }
