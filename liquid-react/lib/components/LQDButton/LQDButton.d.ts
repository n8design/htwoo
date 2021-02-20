import * as React from "react";
export interface ILQDButtonProps {
    label?: string;
    elementAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    dataComponent?: string;
}
export interface ILQDButtonState {
}
export declare class LQDButtonState implements ILQDButtonState {
    constructor();
}
export declare class LQDButton extends React.Component<ILQDButtonProps, ILQDButtonState> {
    private LOG_SOURCE;
    constructor(props: any);
    shouldComponentUpdate(nextProps: Readonly<ILQDButtonProps>, nextState: Readonly<ILQDButtonState>): boolean;
    private renderButton;
    render(): React.ReactElement<ILQDButtonProps>;
}
