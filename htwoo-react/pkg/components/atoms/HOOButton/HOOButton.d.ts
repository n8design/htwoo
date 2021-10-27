import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOOButtonType {
    "Icon" = 0,
    "Primary" = 1,
    "Standard" = 2,
    "HyperlinkPrimary" = 3,
    "HyperlinkStandard" = 4,
    "CompoundPrimary" = 5,
    "CompoundStandard" = 6
}
export interface IHOOButtonProps extends IHOOStandardProps {
    type: HOOButtonType;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
    label?: string;
    href?: string;
    description?: string;
}
export interface IHOOButtonState {
}
export declare class HOOButtonState implements IHOOButtonState {
    constructor();
}
export default class HOOButton extends React.Component<IHOOButtonProps, IHOOButtonState> {
    private LOG_SOURCE;
    private _componentClass;
    private _hyperlinkType;
    private _compoundType;
    constructor(props: IHOOButtonProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOButtonProps>, nextState: Readonly<IHOOButtonState>): boolean;
    render(): React.ReactElement<IHOOButtonProps>;
}
