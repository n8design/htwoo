import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOWebPartTitle, { IHOOWebPartTitleProps } from './HOOWebPartTitle';

export default {
  title: 'Molecules/WebPart/HOOWebPartTitle',
  component: HOOWebPartTitle,
  argTypes: {
    rootElementAttributes: {
      control: {
        type: 'object',
      },
    },
    updateTitle: { action: 'title updated' }
  }
} as ComponentMeta<typeof HOOWebPartTitle>;

const Template: ComponentStory<typeof HOOWebPartTitle> = (args: IHOOWebPartTitleProps) => <HOOWebPartTitle {...args} />;

export const Standard = Template.bind({});

let titleValue1: string = null;
Standard.args = { title: titleValue1, placeholder: "Web Part Title", editMode: true, updateTitle: (title: string) => { titleValue1 = title; } }

export const Extend = Template.bind({});

let titleValue2: string = null;
const rea: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "myClass"
}
Extend.args = { rootElementAttributes: rea, title: titleValue2, placeholder: "Web Part Title", editMode: true, updateTitle: (title: string) => { titleValue2 = title; } }
