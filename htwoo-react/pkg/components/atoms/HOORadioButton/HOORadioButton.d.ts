import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOORadioButtonProps extends IHOOStandardProps {
    label?: string;
    disabled?: boolean;
    rootElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
    labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}
export interface IHOORadioButtonState {
}
export declare class HOORadioButtonState implements IHOORadioButtonState {
    constructor();
}
export default class HOORadioButton extends React.Component<IHOORadioButtonProps, IHOORadioButtonState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOORadioButtonProps);
    shouldComponentUpdate(nextProps: Readonly<IHOORadioButtonProps>, nextState: Readonly<IHOORadioButtonState>): boolean;
    render(): React.ReactElement<IHOORadioButtonProps>;
}
