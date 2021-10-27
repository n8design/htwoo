import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOOSelectStatus {
    "Initial" = 0,
    "Open" = 1,
    "Filtered" = 2,
    "Closed" = 3
}
export declare enum HOOSelectFocus {
    "Input" = 0,
    "Forward" = 1,
    "Back" = 2
}
export interface IHOOSelectOption {
    key: string | number;
    text: string;
}
export interface IHOOSelectProps extends IHOOStandardProps {
    options: IHOOSelectOption[];
    id: string;
    value: string | number;
    containsTypeAhead: boolean;
    onChange: (fieldValue: string, fieldName: string) => void;
    optionsLengthMessage?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOSelectState {
    currentValue: string | number;
    selectStatus: HOOSelectStatus;
    open: boolean;
    optionsLength: number;
}
export declare class HOOSelectState implements IHOOSelectState {
    currentValue: string | number;
    optionsLength: number;
    selectStatus: HOOSelectStatus;
    open: boolean;
    constructor(currentValue?: string | number, optionsLength?: number, selectStatus?: HOOSelectStatus, open?: boolean);
}
export default class HOOSelect extends React.Component<IHOOSelectProps, IHOOSelectState> {
    private LOG_SOURCE;
    private _componentClass;
    private _optionElements;
    private _inputElement;
    private _valueChanged;
    constructor(props: IHOOSelectProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOSelectProps>, nextState: Readonly<IHOOSelectState>): boolean;
    componentDidUpdate(): void;
    private _onChange;
    private _toggleDropdown;
    private _keyUp;
    private _doFilter;
    private _moveFocus;
    render(): React.ReactElement<IHOOSelectProps>;
}
