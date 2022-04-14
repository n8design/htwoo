import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOBreadcrumb, {
  IHOOBreadcrumbProps, IHOOBreadcrumbItem, HOOBreadcrumbType
} from './HOOBreadcrumb';

export default {
  title: 'Molecules/HOOBreadcrumb',
  component: HOOBreadcrumb,
} as Meta;

const buttonOptions: IHOOBreadcrumbItem[] = [{ key: 1, text: "Value 1" }, { key: 2, text: "Value 2" }, { key: 3, text: "Value 3" }];
const hyperlinkOptions: IHOOBreadcrumbItem[] = [{ key: 1, text: "Value 1", href: "#" }, { key: 2, text: "Value 2", href: "#" }, { key: 3, text: "Value 3", href: "#" }];

const Template: Story<IHOOBreadcrumbProps> = (args: IHOOBreadcrumbProps) => <HOOBreadcrumb {...args} />;

export const BreadcrumbButtons = Template.bind({});
BreadcrumbButtons.args = { type: HOOBreadcrumbType.Button, breadcrumbItems: buttonOptions, onBreadcrumbClick: () => { alert("Clicked"); } };

export const BreadcrumbButtonsSeperated = Template.bind({});
BreadcrumbButtonsSeperated.args = { type: HOOBreadcrumbType.Button, breadcrumbItems: buttonOptions, seperatorIconName: "hoo-icon-arrow-right", onBreadcrumbClick: () => { alert("Clicked"); } };

export const BreadcrumbHyperlinkSeperated = Template.bind({});
BreadcrumbHyperlinkSeperated.args = { type: HOOBreadcrumbType.Hyperlink, breadcrumbItems: hyperlinkOptions, seperatorIconName: "hoo-icon-arrow-right" };

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLElement> = { style: { backgroundColor: "red" } };
Extend.args = { type: HOOBreadcrumbType.Button, breadcrumbItems: buttonOptions, seperatorIconName: "hoo-icon-arrow-right", onBreadcrumbClick: () => { alert("Clicked"); }, rootElementAttributes: rea };
