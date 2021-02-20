import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from 'lodash/isEqual';

export interface ILQDButtonProps {
  label?: string;
  elementAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  dataComponent?: string;
}

export interface ILQDButtonState {
}

export class LQDButtonState implements ILQDButtonState {
  constructor() { }
}

export class LQDButton extends React.Component<ILQDButtonProps, ILQDButtonState> {
  private LOG_SOURCE: string = "LQDButton";

  constructor(props) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "LQDButton";
    this.state = new LQDButtonState();
  }

  public shouldComponentUpdate(nextProps: Readonly<ILQDButtonProps>, nextState: Readonly<ILQDButtonState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  private renderButton = (): any => {
    let element: any = null;
    try {
      element = <button data-component={this.LOG_SOURCE} {...this.props.elementAttributes}>
        {this.props.label || this.props.children}
      </button>;
      element.props.className = (element.props.className) ? `lqd-button ${this.props.elementAttributes.className}` : "lqd-button";
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (renderButton)`, LogLevel.Error);
    }
    return element;
  }

  public render(): React.ReactElement<ILQDButtonProps> {
    return this.renderButton();
  }
}