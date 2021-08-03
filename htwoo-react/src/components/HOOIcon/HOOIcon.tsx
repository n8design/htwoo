import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import "./HOOIcon.css";
import { IHOOStandardProps } from "../Common.model";

export interface IHOOIconProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Name of icon to be rendered
   */
  iconName: string;
}

export interface IHOOIconState {
}

export class HOOIconState implements IHOOIconState {
  constructor() { }
}

export default class HOOIcon extends React.Component<IHOOIconProps, IHOOIconState> {
  private LOG_SOURCE: string = "HOOIcon";
  private componentClass: string = "hoo-icon";

  constructor(props: IHOOIconProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "HOOIcon";
    this.state = new HOOIconState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOIconProps>, nextState: Readonly<IHOOIconState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOIconProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <svg className={`hoo-icon-svg ${this.props.iconName}`} aria-hidden="true">
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