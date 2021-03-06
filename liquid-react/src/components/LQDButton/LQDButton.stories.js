import React from 'react';

import LQDButton, {
  ILQDButtonProps
} from './LQDButton';

export default {
  title: 'Atoms/LQDButton',
  component: LQDButton,
};

const Template = (args) => < LQDButton {
  ...args
}
/>;

export const Primary = Template.bind({});

const rea = {
  onClick: () => {
    alert("Clicked");
  }
}
Primary.args = {
  label: 'Button',
  rootElementAttributes: rea
};