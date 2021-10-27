import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOCheckboxProps extends IHOOStandardProps {
    label?: string;
    disabled?: boolean;
    rootElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
    labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}
export interface IHOOCheckboxState {
}
export declare class HOOCheckboxState implements IHOOCheckboxState {
    constructor();
}
export default class HOOCheckbox extends React.Component<IHOOCheckboxProps, IHOOCheckboxState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOCheckboxProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOCheckboxProps>, nextState: Readonly<IHOOCheckboxState>): boolean;
    render(): React.ReactElement<IHOOCheckboxProps>;
}
