import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOLoadingProps extends IHOOStandardProps {
  /**
   * Current Value
  */
  value: number;
  /**
   * Min Value
  */
  minValue: number;
  /**
   * Max Value
  */
  maxValue: number;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-progress {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOLoadingState {
}

export class HOOLoadingState implements IHOOLoadingState {
  constructor() { }
}

export default class HOOLoading extends React.Component<IHOOLoadingProps, IHOOLoadingState> {
  private LOG_SOURCE: string = "🔶HOOLoading";
  private _componentClass: string = "hoo-progress";

  constructor(props: IHOOLoadingProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOLoading";
    this.state = new HOOLoadingState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOLoadingProps>, nextState: Readonly<IHOOLoadingState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOLoadingProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} role="progressbar" aria-valuenow={this.props.value} aria-valuemin={this.props.minValue} aria-valuemax={this.props.maxValue} {...this.props.rootElementAttributes} className={className}>
          <div className="hoo-progress-indicator"></div>
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}