import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOCardLocationProps extends IHOOStandardProps {
    location?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOCardLocationState {
}
export declare class HOOCardLocationState implements IHOOCardLocationState {
    constructor();
}
export default class HOOCardLocation extends React.Component<IHOOCardLocationProps, IHOOCardLocationState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOCardLocationProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOCardLocationProps>, nextState: Readonly<IHOOCardLocationState>): boolean;
    render(): React.ReactElement<IHOOCardLocationProps>;
}
