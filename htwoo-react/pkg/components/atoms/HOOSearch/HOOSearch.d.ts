import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOSearchProps extends IHOOStandardProps {
    placeholder: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOSearchState {
}
export declare class HOOSearchState implements IHOOSearchState {
    constructor();
}
export default class HOOSearch extends React.Component<IHOOSearchProps, IHOOSearchState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOSearchProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOSearchProps>, nextState: Readonly<IHOOSearchState>): boolean;
    render(): React.ReactElement<IHOOSearchProps>;
}
