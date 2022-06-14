import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOOShimmer, {
  IHOOShimmerProps, HOOShimmerTheme, HOOShimmerShape
} from './HOOShimmer';

export default {
  title: 'Atoms/Loading/HOOShimmer',
  component: HOOShimmer,
} as ComponentMeta<typeof HOOShimmer>;

const Template: ComponentStory<typeof HOOShimmer> = (args: IHOOShimmerProps) => <HOOShimmer shape={HOOShimmerShape.Container} theme={HOOShimmerTheme.Neutral}><HOOShimmer {...args} /></HOOShimmer>;
const MultiTemplate: ComponentStory<typeof HOOShimmer> = (args: IHOOShimmerProps) => <HOOShimmer shape={HOOShimmerShape.Container} theme={HOOShimmerTheme.Neutral}><HOOShimmer {...args[0]} /><HOOShimmer {...args[1]} /></HOOShimmer>;

export const Circle = Template.bind({});
Circle.args = { shape: HOOShimmerShape.Circle, theme: HOOShimmerTheme.Neutral } as IHOOShimmerProps;

export const Row = Template.bind({});
Row.args = { shape: HOOShimmerShape.Row, theme: HOOShimmerTheme.Neutral } as IHOOShimmerProps;

export const Square = Template.bind({});
Square.args = { shape: HOOShimmerShape.Square, theme: HOOShimmerTheme.Neutral } as IHOOShimmerProps;

export const Image16x9 = Template.bind({});
Image16x9.args = { shape: HOOShimmerShape['Image16:9'], theme: HOOShimmerTheme.Neutral, imageWidth: 360, imageHeight: 280 } as IHOOShimmerProps;

export const Multiple = MultiTemplate.bind({});
Multiple.args = [];
Multiple.args.push({ shape: HOOShimmerShape.Square, theme: HOOShimmerTheme.Neutral } as IHOOShimmerProps);
Multiple.args.push({ shape: HOOShimmerShape.Circle, theme: HOOShimmerTheme.Neutral } as IHOOShimmerProps);

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { shape: HOOShimmerShape.Square, theme: HOOShimmerTheme.Neutral, rootElementAttributes: rea } as IHOOShimmerProps;