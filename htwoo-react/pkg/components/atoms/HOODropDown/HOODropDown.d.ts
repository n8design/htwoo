import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOODropDownItem {
    key: string | number;
    text: string;
    disabled: boolean;
}
export interface IHOODropDownGroup {
    groupName: string;
    groupItems: IHOODropDownItem[];
}
export interface IHOODropDownProps extends IHOOStandardProps {
    options: IHOODropDownGroup[];
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOODropDownState {
}
export declare class HOODropDownState implements IHOODropDownState {
    constructor();
}
export default class HOODropDown extends React.Component<IHOODropDownProps, IHOODropDownState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOODropDownProps);
    shouldComponentUpdate(nextProps: Readonly<IHOODropDownProps>, nextState: Readonly<IHOODropDownState>): boolean;
    render(): React.ReactElement<IHOODropDownProps>;
}
