import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOTextProps extends IHOOStandardProps {
    invalid?: boolean;
    disabled?: boolean;
    inputPrefix?: string;
    inputSuffix?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
    inputElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
}
export interface IHOOTextState {
}
export declare class HOOTextState implements IHOOTextState {
    constructor();
}
export default class HOOText extends React.Component<IHOOTextProps, IHOOTextState> {
    private LOG_SOURCE;
    private _componentClass;
    private _inputClass;
    constructor(props: IHOOTextProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOTextProps>, nextState: Readonly<IHOOTextState>): boolean;
    render(): React.ReactElement<IHOOTextProps>;
}
