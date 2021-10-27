import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { HOOAvatarSize } from "../../atoms/HOOAvatar/HOOAvatar";
export interface IHOOCardFooterProps extends IHOOStandardProps {
    avatarImage: string;
    avatarImageAlt: string;
    avatarImageSize: HOOAvatarSize;
    name: string;
    modified: string;
    rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface IHOOCardFooterState {
}
export declare class HOOCardFooterState implements IHOOCardFooterState {
    constructor();
}
export default class HOOCardFooter extends React.Component<IHOOCardFooterProps, IHOOCardFooterState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOCardFooterProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOCardFooterProps>, nextState: Readonly<IHOOCardFooterState>): boolean;
    render(): React.ReactElement<IHOOCardFooterProps>;
}
