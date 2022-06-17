import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HOODialogIFrame, {
  IHOODialogIFrameProps,
  HOOIFrameRatio
} from './HOODialogIFrame';
import HOODialogContent from '../HOODialogContent/HOODialogContent';


export default {
  title: 'Molecules/Dialog/HOODialogIFrame',
  component: HOODialogIFrame,
} as ComponentMeta<typeof HOODialogIFrame>;

const Template: ComponentStory<typeof HOODialogIFrame> = (args: IHOODialogIFrameProps) => <HOODialogContent>
  <HOODialogIFrame {...args} />
</HOODialogContent>;

export const Basic = Template.bind({});
Basic.args = { src: "https://lab.n8d.studio/htwoo/" } as IHOODialogIFrameProps;

export const ThreeByFourRatio = Template.bind({});
ThreeByFourRatio.args = { src: "https://lab.n8d.studio/htwoo/", ratio: HOOIFrameRatio['3by4'] } as IHOODialogIFrameProps;

export const SquareRatio = Template.bind({});
SquareRatio.args = { src: "https://lab.n8d.studio/htwoo/", ratio: HOOIFrameRatio.squared } as IHOODialogIFrameProps;

export const SixteenByNineRatio = Template.bind({});
SixteenByNineRatio.args = { src: "https://lab.n8d.studio/htwoo/", ratio: HOOIFrameRatio['16by9'] } as IHOODialogIFrameProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLDivElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea, src: "https://lab.n8d.studio/htwoo/" } as IHOODialogIFrameProps;