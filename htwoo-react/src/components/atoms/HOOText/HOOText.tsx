import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import "./HOOText.css";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOTextProps extends IHOOStandardProps {
  //TODO: Invalid input has not been completed in core
  /**
   * (Optional) Is Input Invalid - default false.
  */
  invalid?: boolean;
  /**
   * (Optional) Is Input Disabled - default false.
  */
  disabled?: boolean;
  /**
   * (Optional) Input Prefix.
  */
  inputPrefix?: string;
  /**
    * (Optional) Input Suffix.
   */
  inputSuffix?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-group {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component.
   * Class names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"
  */
  inputElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
}

export interface IHOOTextState {
}

export class HOOTextState implements IHOOTextState {
  constructor() { }
}

export default class HOOText extends React.Component<IHOOTextProps, IHOOTextState> {
  private LOG_SOURCE: string = "🔶HOOText";
  private _componentClass: string = "hoo-input-group";
  private _inputClass: string = "hoo-input-text";

  constructor(props: IHOOTextProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOText";
    this.state = new HOOTextState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOTextProps>, nextState: Readonly<IHOOTextState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOTextProps> {
    try {
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={rootClassName}>
          {this.props.inputPrefix &&
            <div className="hoo-input-prefix">{this.props.inputPrefix}</div>
          }
          <input className={inputClassName} type="text" disabled={this.props.disabled || false} aria-disabled={this.props.disabled || false} data-suffix={this.props.inputSuffix} data-prefix={this.props.inputPrefix} {...this.props.inputElementAttributes} />
          {this.props.inputSuffix &&
            <div className="hoo-input-suffix">{this.props.inputSuffix}</div>
          }
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}