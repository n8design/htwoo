import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOToggleProps extends IHOOStandardProps {
    labelOn?: string;
    labelOff?: string;
    disabled?: boolean;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
    inputElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
    labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}
export interface IHOOToggleState {
}
export declare class HOOToggleState implements IHOOToggleState {
    constructor();
}
export default class HOOToggle extends React.Component<IHOOToggleProps, IHOOToggleState> {
    private LOG_SOURCE;
    private _componentClass;
    private _inputClass;
    private _labelClass;
    constructor(props: IHOOToggleProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOToggleProps>, nextState: Readonly<IHOOToggleState>): boolean;
    render(): React.ReactElement<IHOOToggleProps>;
}
