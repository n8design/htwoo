import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOTeamsSplashCard, {
  IHOOTeamsSplashCardProps
} from './HOOTeamsSplashCard';
import HOOSplashCardHeader from '../../molecules/HOOSplashCardHeader/HOOSplashCardHeader';
import HOOSplashCardTitle from '../../molecules/HOOSplashCardTitle/HOOSplashCardTitle';
import HOOSplashCardDesc from '../../molecules/HOOSplashCardDesc/HOOSplashCardDesc';
import HOOSplashCardFooter from '../../molecules/HOOSplashCardFooter/HOOSplashCardFooter';
import HOOButton, { HOOButtonType } from '../../atoms/HOOButton/HOOButton';
import HOOLabel from '../../atoms/HOOLabel/HOOLabel';


export default {
  title: 'Organisms/HOOTeamsSplashCard',
  component: HOOTeamsSplashCard,
} as Meta;

const Template: Story<IHOOTeamsSplashCardProps> = (args) => <HOOTeamsSplashCard {...args}>
  <HOOSplashCardHeader imageSource="https://placekitten.com/320/180" imageAlt="Kitten" />
  <HOOSplashCardTitle title="My Teams Splash Card" />
  <HOOSplashCardDesc description="My Teams Splash Card Description" />
  <HOOSplashCardFooter>
    <HOOButton type={HOOButtonType.Primary} label="Create Something" onClick={() => { alert("Clicked"); }} />
    <HOOButton type={HOOButtonType.Standard} label="Call to Action" onClick={() => { alert("Clicked"); }} />
  </HOOSplashCardFooter>
</HOOTeamsSplashCard>;

export const Standard = Template.bind({});
Standard.args = {};

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLElement> = { style: { backgroundColor: "red" } };
Extend.args = { rootElementAttributes: rea };