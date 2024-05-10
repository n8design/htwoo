import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";

export interface IHOONumberProps extends IHOOStandardProps {
  /**
   * value
  */
  value: number;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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
   * (Optional) Id attribute for the input element; only valid if set in original component properties.
  */
  forId?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-group {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component.
   * Class names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"
  */
  inputElementAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IHOONumberState {
}

export class HOONumberState implements IHOONumberState {
  constructor() { }
}

export default class HOONumber extends React.PureComponent<IHOONumberProps, IHOONumberState> {
  private LOG_SOURCE: string = "💦HOONumber";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-group";
  private _inputClass: string = "hoo-input-text";
  private _numberInputId: string = "hoo-number-";

  constructor(props: IHOONumberProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOONumber";
    this._numberInputId = props.forId || `${this._numberInputId}${getRandomString(10)}`;
    this.state = new HOONumberState();
  }

  public render(): React.ReactElement<IHOONumberProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={rootClassName}>
          <input type="number"
            id={this._numberInputId}
            {...this.props.inputElementAttributes}
            value={this.props.value}
            disabled={this.props.disabled || false}
            aria-disabled={this.props.disabled || false}
            className={inputClassName}
            onChange={this.props.onChange} />
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}