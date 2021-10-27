import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOODialogHeaderProps extends IHOOStandardProps {
    title: string;
    closeDisabled: boolean;
    closeOnClick: React.MouseEventHandler<HTMLButtonElement>;
    closeIconName?: string;
    closeIconSVG?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOODialogHeaderState {
}
export declare class HOODialogHeaderState implements IHOODialogHeaderState {
    constructor();
}
export default class HOODialogHeader extends React.Component<IHOODialogHeaderProps, IHOODialogHeaderState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOODialogHeaderProps);
    shouldComponentUpdate(nextProps: Readonly<IHOODialogHeaderProps>, nextState: Readonly<IHOODialogHeaderState>): boolean;
    render(): React.ReactElement<IHOODialogHeaderProps>;
}
