import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { getRandomString } from "../../common/Common";

export interface IHOORadioButtonProps extends IHOOStandardProps {
  /**
   * Radio checked.
  */
  checked: boolean;
  /**
   * Radio value.
  */
  value: string | number;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) RadioButton label. If omitted, children will be inserted.
  */
  label?: string;
  /**
   * (Optional) Is checkbox disabled - default false.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-radio {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
  */
  labelElementAttributes?: React.AllHTMLAttributes<HTMLLabelElement>;
}

export interface IHOORadioButtonState {
}

export class HOORadioButtonState implements IHOORadioButtonState {
  constructor() { }
}

export default class HOORadioButton extends React.PureComponent<IHOORadioButtonProps, IHOORadioButtonState> {
  private LOG_SOURCE: string = "💦HOORadioButton";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-radio";
  private _radioId: string = "hoo-radio-";

  constructor(props: IHOORadioButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOORadioButton";
    this._radioId += getRandomString(10);
    this.state = new HOORadioButtonState();
  }

  public render(): React.ReactElement<IHOORadioButtonProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          <input {...this._rootProps}
            id={this._radioId}
            {...this.props.rootElementAttributes}
            type="radio"
            checked={this.props.checked}
            value={this.props.value}
            className={className}
            disabled={this.props.disabled || false}
            aria-disabled={this.props.disabled || false}
            onChange={this.props.onChange} />
          <label htmlFor={this._radioId} {...this.props.labelElementAttributes}>
            {this.props.label &&
              this.props.label
            }
            {!this.props.label &&
              this.props.children
            }
          </label>
        </>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}