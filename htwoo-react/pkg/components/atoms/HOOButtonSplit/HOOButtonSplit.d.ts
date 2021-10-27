import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
export declare enum HOOButtonSplitType {
    "Icon" = 0,
    "Standard" = 1,
    "Primary" = 2
}
export interface IHOOButtonSplitProps extends IHOOStandardProps {
    type: HOOButtonSplitType;
    label?: string;
    rightIconName?: string;
    flyoutContextItems?: IHOOFlyoutMenuItem[];
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOButtonSplitState {
}
export declare class HOOButtonSplitState implements IHOOButtonSplitState {
    constructor();
}
export default class HOOButtonSplit extends React.Component<IHOOButtonSplitProps, IHOOButtonSplitState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOButtonSplitProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOButtonSplitProps>, nextState: Readonly<IHOOButtonSplitState>): boolean;
    render(): React.ReactElement<IHOOButtonSplitProps>;
}
