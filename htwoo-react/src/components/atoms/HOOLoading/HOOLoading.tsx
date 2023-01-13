import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

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
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOLoadingState {
}

export class HOOLoadingState implements IHOOLoadingState {
  constructor() { }
}

export default class HOOLoading extends React.PureComponent<IHOOLoadingProps, IHOOLoadingState> {
  private LOG_SOURCE: string = "💦HOOLoading";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-progress";

  constructor(props: IHOOLoadingProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOLoading";
    this.state = new HOOLoadingState();
  }

  public render(): React.ReactElement<IHOOLoadingProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps}
          role="progressbar"
          aria-valuenow={this.props.value}
          aria-valuemin={this.props.minValue}
          aria-valuemax={this.props.maxValue}
          title="Progress"
          {...this.props.rootElementAttributes}
          className={className}>
          <div className="hoo-progress-indicator"></div>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}