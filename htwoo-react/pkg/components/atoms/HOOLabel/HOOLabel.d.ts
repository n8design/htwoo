import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOLabelProps extends IHOOStandardProps {
    label: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOLabelState {
}
export declare class HOOLabelState implements IHOOLabelState {
    constructor();
}
export default class HOOLabel extends React.Component<IHOOLabelProps, IHOOLabelState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOLabelProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOLabelProps>, nextState: Readonly<IHOOLabelState>): boolean;
    render(): React.ReactElement<IHOOLabelProps>;
}
