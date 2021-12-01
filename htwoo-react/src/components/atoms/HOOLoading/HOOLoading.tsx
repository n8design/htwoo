import * as React from "react";
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
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-progress {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOLoadingState {
}

export class HOOLoadingState implements IHOOLoadingState {
  constructor() { }
}

export default class HOOLoading extends React.PureComponent<IHOOLoadingProps, IHOOLoadingState> {
  private LOG_SOURCE: string = "💦HOOLoading";
  private _componentClass: string = "hoo-progress";

  constructor(props: IHOOLoadingProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOLoading";
    this.state = new HOOLoadingState();
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
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}