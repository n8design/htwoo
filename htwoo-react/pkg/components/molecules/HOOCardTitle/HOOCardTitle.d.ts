import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOCardTitleProps extends IHOOStandardProps {
    title?: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOCardTitleState {
}
export declare class HOOCardTitleState implements IHOOCardTitleState {
    constructor();
}
export default class HOOCardTitle extends React.Component<IHOOCardTitleProps, IHOOCardTitleState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOCardTitleProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOCardTitleProps>, nextState: Readonly<IHOOCardTitleState>): boolean;
    render(): React.ReactElement<IHOOCardTitleProps>;
}
