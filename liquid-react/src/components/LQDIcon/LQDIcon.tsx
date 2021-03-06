import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash/isEqual";

import "./LQDIcon.css";
import { ILQDStandardProps } from "../Common.model";

export interface ILQDIconProps extends ILQDStandardProps {
  /**
   * Name of icon to be rendered
   */
  iconName: string;
}

export interface ILQDIconState {
}

export class LQDIconState implements ILQDIconState {
  constructor() { }
}

export default class LQDIcon extends React.Component<ILQDIconProps, ILQDIconState> {
  private LOG_SOURCE: string = "LQDIcon";
  private componentClass: string = "lqd-icon";

  constructor(props: ILQDIconProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "LQDIcon";
    this.state = new LQDIconState();
  }

  public shouldComponentUpdate(nextProps: Readonly<ILQDIconProps>, nextState: Readonly<ILQDIconState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<ILQDIconProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <svg className={`lqd-icon-svg ${this.props.iconName}`} aria-hidden="true">
            <use xlinkHref={`../../images/icons.svg#${this.props.iconName}`}></use>
          </svg>
        </div>
      );
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
      return null;
    }
  }
}