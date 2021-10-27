import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOIconProps extends IHOOStandardProps {
    iconName?: string;
    iconSVG?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOIconState {
}
export declare class HOOIconState implements IHOOIconState {
    constructor();
}
export default class HOOIcon extends React.Component<IHOOIconProps, IHOOIconState> {
    private LOG_SOURCE;
    private componentClass;
    constructor(props: IHOOIconProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOIconProps>, nextState: Readonly<IHOOIconState>): boolean;
    render(): React.ReactElement<IHOOIconProps>;
}
