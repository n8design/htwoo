import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOODateProps extends IHOOStandardProps {
  /**
   * Current date value. Must be in format "YYYY-MM-DD".
  */
  value: string;
  /**
  * (Optional) Is checkbox disabled - default false.
  */
  disabled?: boolean;
  /**
  * (Optional) Minimum value of date selector. Must be in format "YYYY-MM-DD".
  */
  minValue?: string;
  /**
 * (Optional) Maximum value of date selector. Must be in format "YYYY-MM-DD".
 */
  maxValue?: string;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-date {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export interface IHOODateState {
}

export class HOODateState implements IHOODateState {
  constructor() { }
}

export default class HOODate extends React.PureComponent<IHOODateProps, IHOODateState> {
  private LOG_SOURCE: string = "💦HOODate";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-date";
  private _minValue: Date = new Date();
  private _maxValue: Date = new Date();

  constructor(props: IHOODateProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODate";
    this.state = new HOODateState();
  }

  public render(): React.ReactElement<IHOODateProps> {
    if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
    if (!this.props.maxValue && this._maxValue != new Date()) {
      this._maxValue.setFullYear(this._maxValue.getFullYear() + 10);
    }
    if (!this.props.minValue && this._minValue != new Date()) {
      this._minValue.setFullYear(this._minValue.getFullYear() - 10);
    }
    const maxValue: string = this.props.maxValue || this._maxValue.toISOString().split('T')[0];
    const minValue: string = this.props.minValue || this._minValue.toISOString().split('T')[0];
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <input
          {...this._rootProps}
          {...this.props.rootElementAttributes}
          type="date"
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