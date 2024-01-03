import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";

export interface IHOOTimeProps extends IHOOStandardProps {
  /**
   * Current date value. Must be in format "hh:mm:ss.ms".
  */
  value: string;
  /**
  * (Optional) Is checkbox disabled - default false.
  */
  disabled?: boolean;
  /**
  * (Optional) Minimum value of time selector. Must be in format "hh:mm:ss.ms".
  */
  minValue?: string;
  /**
 * (Optional) Maximum value of time selector. Must be in format "hh:mm:ss.ms".
 */
  maxValue?: string;
  /**
   * (Optional) Id attribute for the input element; only valid if set in original component properties.
  */
  forId?: string;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-time {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export interface IHOOTimeState {
}

export class HOOTimeState implements IHOOTimeState {
  constructor() { }
}

export default class HOOTime extends React.PureComponent<IHOOTimeProps, IHOOTimeState> {
  private LOG_SOURCE: string = "💦HOOTime";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-time";
  private _minValue: string = "00:00:00";
  private _maxValue: string = "23:59:59";
  private _timeId: string = "hoo-time-";

  constructor(props: IHOOTimeProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTime";
    this._timeId = props.forId || `${this._timeId}${getRandomString(10)}`;
    this.state = new HOOTimeState();
  }

  public render(): React.ReactElement<IHOOTimeProps> {
    if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
    const maxValue: string = this.props.maxValue || this._maxValue;
    const minValue: string = this.props.minValue || this._minValue;
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <input
          {...this._rootProps}
          id={this._timeId}
          {...this.props.rootElementAttributes}
          type="time"
          value={this.props.value}
          className={className}
          min={minValue}
          max={maxValue}
          disabled={this.props.disabled || false}
          onChange={this.props.onChange} />
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}