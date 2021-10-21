import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import "./HOOCheckbox.css";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOCheckboxProps extends IHOOStandardProps {
  /**
   * (Optional) Checkbox label. If omitted, children will be inserted.
  */
  label?: string;
  /**
   * (Optional) Is checkbox disabled - default false.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-checkbox {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
  */
  labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}

export interface IHOOCheckboxState {
}

export class HOOCheckboxState implements IHOOCheckboxState {
  constructor() { }
}

export default class HOOCheckbox extends React.Component<IHOOCheckboxProps, IHOOCheckboxState> {
  private LOG_SOURCE: string = "🔶HOOCheckbox";
  private _componentClass: string = "hoo-checkbox";

  constructor(props: IHOOCheckboxProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOCheckbox";
    this.state = new HOOCheckboxState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOCheckboxProps>, nextState: Readonly<IHOOCheckboxState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOCheckboxProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          <input data-component={this.LOG_SOURCE} type="checkbox" value="" {...this.props.rootElementAttributes} className={className} disabled={this.props.disabled || false} aria-disabled={this.props.disabled || false} />
          <label {...this.props.labelElementAttributes}>
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
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}