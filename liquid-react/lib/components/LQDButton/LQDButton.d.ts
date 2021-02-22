import * as React from "react";
import { ILQDStandardProps } from "../Common.model";
export interface ILQDButtonProps extends ILQDStandardProps {
    rootElementAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    label?: string;
}
export interface ILQDButtonState {
}
export declare class LQDButtonState implements ILQDButtonState {
    constructor();
}
export default class LQDButton extends React.Component<ILQDButtonProps, ILQDButtonState> {
    private LOG_SOURCE;
    constructor(props: any);
    shouldComponentUpdate(nextProps: Readonly<ILQDButtonProps>, nextState: Readonly<ILQDButtonState>): boolean;
    private renderButton;
    render(): React.ReactElement<ILQDButtonProps>;
}
