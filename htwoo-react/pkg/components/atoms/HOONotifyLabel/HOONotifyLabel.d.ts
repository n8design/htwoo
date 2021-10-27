import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOONotifyType {
    "Success" = 0,
    "Error" = 1
}
export interface IHOONotifyLabelProps extends IHOOStandardProps {
    type: HOONotifyType;
    message: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOONotifyLabelState {
}
export declare class HOONotifyLabelState implements IHOONotifyLabelState {
    constructor();
}
export default class HOONotifyLabel extends React.Component<IHOONotifyLabelProps, IHOONotifyLabelState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOONotifyLabelProps);
    shouldComponentUpdate(nextProps: Readonly<IHOONotifyLabelProps>, nextState: Readonly<IHOONotifyLabelState>): boolean;
    render(): React.ReactElement<IHOONotifyLabelProps>;
}
