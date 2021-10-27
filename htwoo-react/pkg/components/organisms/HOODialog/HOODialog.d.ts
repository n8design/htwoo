import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOODialogType {
    "Standard" = 0,
    "StandardError" = 1,
    "StandardSuccess" = 2,
    "StandardWarning" = 3,
    "SidebarLeft" = 4,
    "SidebarRight" = 5
}
export interface IHOODialogProps extends IHOOStandardProps {
    type: HOODialogType;
    visible: boolean;
    height?: string;
    width?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOODialogState {
}
export declare class HOODialogState implements IHOODialogState {
    constructor();
}
export default class HOODialog extends React.Component<IHOODialogProps, IHOODialogState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOODialogProps);
    shouldComponentUpdate(nextProps: Readonly<IHOODialogProps>, nextState: Readonly<IHOODialogState>): boolean;
    render(): React.ReactElement<IHOODialogProps>;
}
