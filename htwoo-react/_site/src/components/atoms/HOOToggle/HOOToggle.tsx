import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import { getRandomString } from "../../Common";

export interface IHOOToggleProps extends IHOOStandardProps {
  /**
   * Toggle checked.
  */
  checked: boolean;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) Toggle label for on position. If omitted, children will be inserted.
  */
  labelOn?: string;
  /**
   * (Optional) Toggle label for off position. If omitted, children will be inserted.
  */
  labelOff?: string;
  /**
   * (Optional) Is toggle disabled - default false.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle-cb {inputElementAttributes.class}
  */
  inputElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle-label {labelElementAttributes.class}
  */
  labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}

export interface IHOOToggleState {
}

export class HOOToggleState implements IHOOToggleState {
  constructor() { }
}

export default class HOOToggle extends React.Component<IHOOToggleProps, IHOOToggleState> {
  private LOG_SOURCE: string = "💦HOOToggle";
  private _componentClass: string = "hoo-toggle";
  private _inputClass: string = "hoo-toggle-cb";
  private _labelClass: string = "hoo-toggle-label";
  private _toggleId: string = "hoo-toggle-";

  constructor(props: IHOOToggleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOToggle";
    this._toggleId += getRandomString(10);
    this.state = new HOOToggleState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOToggleProps>, nextState: Readonly<IHOOToggleState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOToggleProps> {
    try {
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      let inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      const labelClassName = (this.props.labelElementAttributes?.className) ? `${this._labelClass} ${this.props.labelElementAttributes?.className}` : this._labelClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={rootClassName} >
          <input type="checkbox" id={this._toggleId} checked={this.props.checked} {...this.props.inputElementAttributes} disabled={this.props.disabled || false} aria-disabled={this.props.disabled || false} onChange={this.props.onChange} className={inputClassName} />
          {this.props.labelOn && this.props.labelOff &&
            <label  {...this.props.labelElementAttributes} className={labelClassName} htmlFor={this._toggleId} >
              <span className="hoo-toggle-slider"></span>
              <span className="hoo-toggle-checked">{this.props.labelOn}</span>
              <span className="hoo-toggle-unchecked">{this.props.labelOff}</span>
            </label>
          }
          {(!this.props.labelOn || !this.props.labelOff) &&
            this.props.children
          }
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}