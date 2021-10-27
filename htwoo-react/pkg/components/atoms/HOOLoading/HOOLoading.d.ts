import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOLoadingProps extends IHOOStandardProps {
    value: number;
    minValue: number;
    maxValue: number;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOLoadingState {
}
export declare class HOOLoadingState implements IHOOLoadingState {
    constructor();
}
export default class HOOLoading extends React.Component<IHOOLoadingProps, IHOOLoadingState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOLoadingProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOLoadingProps>, nextState: Readonly<IHOOLoadingState>): boolean;
    render(): React.ReactElement<IHOOLoadingProps>;
}
