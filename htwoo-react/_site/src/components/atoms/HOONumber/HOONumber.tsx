import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

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

export interface IHOONumberState {
}

export class HOONumberState implements IHOONumberState {
  constructor() { }
}

export default class HOONumber extends React.Component<IHOONumberProps, IHOONumberState> {
  private LOG_SOURCE: string = "💦HOONumber";
  private _componentClass: string = "hoo-input-group";
  private _inputClass: string = "hoo-input-text";

  constructor(props: IHOONumberProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOONumber";
    this.state = new HOONumberState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOONumberProps>, nextState: Readonly<IHOONumberState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOONumberProps> {
    try {
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      return (
        <>
          <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={rootClassName}>
            <input type="number"
              {...this.props.inputElementAttributes}
              value={this.props.value}
              disabled={this.props.disabled || false}
              aria-disabled={this.props.disabled || false}
              className={inputClassName}
              onChange={this.props.onChange} />
          </div>
        </>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}