import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOPivotButtonProps extends IHOOStandardProps {
    label: string;
    isActive: boolean;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOPivotButtonState {
}
export declare class HOOPivotButtonState implements IHOOPivotButtonState {
    constructor();
}
export default class HOOPivotButton extends React.Component<IHOOPivotButtonProps, IHOOPivotButtonState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOPivotButtonProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOPivotButtonProps>, nextState: Readonly<IHOOPivotButtonState>): boolean;
    render(): React.ReactElement<IHOOPivotButtonProps>;
}
