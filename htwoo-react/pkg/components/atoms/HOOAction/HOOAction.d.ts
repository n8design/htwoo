import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
export declare enum HOOActionType {
    "Action" = 0,
    "Command" = 1,
    "Context" = 2
}
export interface IHOOActionProps extends IHOOStandardProps {
    type?: HOOActionType;
    label?: string;
    iconName?: string;
    flyoutContextItems?: IHOOFlyoutMenuItem[];
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOActionState {
}
export declare class HOOActionState implements IHOOActionState {
    constructor();
}
export default class HOOAction extends React.Component<IHOOActionProps, IHOOActionState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOActionProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOActionProps>, nextState: Readonly<IHOOActionState>): boolean;
    render(): React.ReactElement<IHOOActionProps>;
}
