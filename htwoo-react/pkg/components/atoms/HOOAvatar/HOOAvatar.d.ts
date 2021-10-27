import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOOAvatarSize {
    Px16 = "16",
    Px24 = "24",
    Px32 = "32",
    Px40 = "40",
    Px48 = "48"
}
export interface IHOOAvatarProps extends IHOOStandardProps {
    size: HOOAvatarSize;
    imageSource: string;
    imageAlt: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOAvatarState {
}
export declare class HOOAvatarState implements IHOOAvatarState {
    constructor();
}
export default class HOOAvatar extends React.Component<IHOOAvatarProps, IHOOAvatarState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOAvatarProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOAvatarProps>, nextState: Readonly<IHOOAvatarState>): boolean;
    render(): React.ReactElement<IHOOAvatarProps>;
}
