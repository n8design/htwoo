import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOWebPartTitleProps extends IHOOStandardProps {
    rootElementAttributes?: React.HTMLAttributes<HTMLHeadingElement>;
    title?: string;
    placeholder?: string;
    editMode: boolean;
    updateTitle: (title: string) => void;
}
export interface IHOOWebPartTitleState {
}
export declare class HOOWebPartTitleState implements IHOOWebPartTitleState {
    constructor();
}
export default class HOOWebPartTitle extends React.Component<IHOOWebPartTitleProps, IHOOWebPartTitleState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOWebPartTitleProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOWebPartTitleProps>, nextState: Readonly<IHOOWebPartTitleState>): boolean;
    private saveTitle;
    render(): React.ReactElement<IHOOWebPartTitleProps>;
}
