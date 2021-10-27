import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export interface IHOOCardImageProps extends IHOOStandardProps {
    imageSource?: string;
    imageAlt?: string;
    width?: number;
    height?: number;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOCardImageState {
}
export declare class HOOCardImageState implements IHOOCardImageState {
    constructor();
}
export default class HOOCardImage extends React.Component<IHOOCardImageProps, IHOOCardImageState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOCardImageProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOCardImageProps>, nextState: Readonly<IHOOCardImageState>): boolean;
    render(): React.ReactElement<IHOOCardImageProps>;
}
