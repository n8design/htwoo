import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOFlyoutMenuItem {
    iconName: string;
    label: string;
}
export interface IHOOFlyoutMenuProps extends IHOOStandardProps {
    contextItems: IHOOFlyoutMenuItem[];
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOFlyoutMenuState {
}
export declare class HOOFlyoutMenuState implements IHOOFlyoutMenuState {
    constructor();
}
export default class HOOFlyoutMenu extends React.Component<IHOOFlyoutMenuProps, IHOOFlyoutMenuState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOFlyoutMenuProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOFlyoutMenuProps>, nextState: Readonly<IHOOFlyoutMenuState>): boolean;
    render(): React.ReactElement<IHOOFlyoutMenuProps>;
}
