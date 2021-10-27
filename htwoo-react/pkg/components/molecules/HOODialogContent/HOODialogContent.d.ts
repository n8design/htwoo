import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOODialogContentProps extends IHOOStandardProps {
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOODialogContentState {
}
export declare class HOODialogContentState implements IHOODialogContentState {
    constructor();
}
export default class HOODialogContent extends React.Component<IHOODialogContentProps, IHOODialogContentState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOODialogContentProps);
    shouldComponentUpdate(nextProps: Readonly<IHOODialogContentProps>, nextState: Readonly<IHOODialogContentState>): boolean;
    render(): React.ReactElement<IHOODialogContentProps>;
}
