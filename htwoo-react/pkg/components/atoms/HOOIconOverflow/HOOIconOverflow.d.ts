import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOIconOverflowProps extends IHOOStandardProps {
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOIconOverflowState {
}
export declare class HOOIconOverflowState implements IHOOIconOverflowState {
    constructor();
}
export default class HOOIconOverflow extends React.Component<IHOOIconOverflowProps, IHOOIconOverflowState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOIconOverflowProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOIconOverflowProps>, nextState: Readonly<IHOOIconOverflowState>): boolean;
    render(): React.ReactElement<IHOOIconOverflowProps>;
}
