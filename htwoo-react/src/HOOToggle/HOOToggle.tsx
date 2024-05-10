import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";

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
   * (Optional) Id attribute for the input element; only valid if set in original component properties.
  */
  forId?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle-cb {inputElementAttributes.class}
  */
  inputElementAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-toggle-label {labelElementAttributes.class}
  */
  labelElementAttributes?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}

export interface IHOOToggleState {
}

export class HOOToggleState implements IHOOToggleState {
  constructor() { }
}

export default class HOOToggle extends React.PureComponent<IHOOToggleProps, IHOOToggleState> {
  private LOG_SOURCE: string = "💦HOOToggle";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-toggle";
  private _inputClass: string = "hoo-toggle-cb";
  private _labelClass: string = "hoo-toggle-label";
  private _toggleId: string = "hoo-toggle-";

  constructor(props: IHOOToggleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOToggle";
    this._toggleId = props.forId || `${this._toggleId}${getRandomString(10)}`;
    this.state = new HOOToggleState();
  }

  public render(): React.ReactElement<IHOOToggleProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      let inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      const labelClassName = (this.props.labelElementAttributes?.className) ? `${this._labelClass} ${this.props.labelElementAttributes?.className}` : this._labelClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={rootClassName}>
          <input 
            id={this._toggleId}
            {...this.props.inputElementAttributes}
            type="checkbox"
            checked={this.props.checked}
            disabled={this.props.disabled || false}
            aria-disabled={this.props.disabled || false}
            onChange={this.props.onChange}
            className={inputClassName} />
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
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}