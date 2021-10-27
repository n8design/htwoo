import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOOShimmerTheme {
    "None" = 0,
    "Neutral" = 1,
    "Primary" = 2,
    "Fancy" = 3
}
export declare enum HOOShimmerShape {
    "Container" = 0,
    "Circle" = 1,
    "Row" = 2,
    "Square" = 3,
    "Image1:1" = 4,
    "Image16:9" = 5,
    "Image16:10" = 6
}
export interface IHOOShimmerProps extends IHOOStandardProps {
    shape: HOOShimmerShape;
    theme?: HOOShimmerTheme;
    imageWidth?: number;
    imageHeight?: number;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOShimmerState {
}
export declare class HOOShimmerState implements IHOOShimmerState {
    constructor();
}
export default class HOOShimmer extends React.Component<IHOOShimmerProps, IHOOShimmerState> {
    private LOG_SOURCE;
    private _componentClass;
    private _imageShape;
    constructor(props: IHOOShimmerProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOShimmerProps>, nextState: Readonly<IHOOShimmerState>): boolean;
    render(): React.ReactElement<IHOOShimmerProps>;
}
