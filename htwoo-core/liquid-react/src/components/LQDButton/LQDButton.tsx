import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from 'lodash/isEqual';

import "./LQDButton.css";
import { ILQDStandardProps } from "../Common.model";

export enum LQDButtonType {
  "Icon",
  "Primary",
  "Standard"
}

export interface ILQDButtonProps extends ILQDStandardProps {
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * LQDButtonType enum -- omit label for "Icon" type and provide LQDIcon child node.
   */
  type: LQDButtonType;
  /**
   * Is button disabled
   */
  disabled: boolean;
  /**
   * Direct interface for buttons click event handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ILQDButtonState {
}

export class LQDButtonState implements ILQDButtonState {
  constructor() { }
}

export default class LQDButton extends React.Component<ILQDButtonProps, ILQDButtonState> {
  private LOG_SOURCE: string = "LQDButton";
  private componentClass: string = "lqd-button";

  constructor(props: ILQDButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "LQDButton";
    switch (props.type) {
      case LQDButtonType.Icon:
        this.componentClass = "lqd-buttonicon";
        break;
      case LQDButtonType.Primary:
        this.componentClass = "lqd-buttonprimary";
        break;
    }
    this.state = new LQDButtonState();
  }

  public shouldComponentUpdate(nextProps: Readonly<ILQDButtonProps>, nextState: Readonly<ILQDButtonState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<ILQDButtonProps> {
    const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
    try {
      return (
        <button data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} disabled={this.props.disabled} aria-disabled={this.props.disabled} onClick={this.props.onClick}>
          {this.props.label || this.props.children}
        </button>
      );
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
    }
  }
}