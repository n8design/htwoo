import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOTextProps extends IHOOStandardProps {
  /**
   * value
  */
  value: string;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  //TODO: (Stefan) Invalid input has not been completed in core
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
    * (Optional) Rows for multiline textarea, will render textarea with inputElementAttributes.
   */
  multiline?: number;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-group {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component.
   * Class names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"
  */
  inputElementAttributes?: React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IHOOTextState {
}

export class HOOTextState implements IHOOTextState {
  constructor() { }
}

export default class HOOText extends React.Component<IHOOTextProps, IHOOTextState> {
  private LOG_SOURCE: string = "💦HOOText";
  private _componentClass: string = "hoo-input-group";
  private _inputClass: string = "hoo-input-text";

  constructor(props: IHOOTextProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOText";
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
        <>
          {!this.props.multiline &&
            <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={rootClassName}>
              {this.props.inputPrefix &&
                <div className="hoo-input-prefix">{this.props.inputPrefix}</div>
              }
              <input type="text"
                {...this.props.inputElementAttributes}
                value={this.props.value}
                disabled={this.props.disabled || false}
                aria-disabled={this.props.disabled || false}
                data-suffix={this.props.inputSuffix || null}
                data-prefix={this.props.inputPrefix || null}
                className={inputClassName}
                onChange={this.props.onChange} />
              {this.props.inputSuffix &&
                <div className="hoo-input-suffix">{this.props.inputSuffix}</div>
              }
            </div>
          }
          {this.props.multiline &&
            <textarea className={inputClassName} rows={this.props.multiline} {...this.props.inputElementAttributes} onChange={this.props.onChange} >{this.props.value}</textarea>
          }
        </>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}