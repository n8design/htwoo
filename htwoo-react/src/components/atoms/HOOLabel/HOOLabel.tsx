import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOLabelProps extends IHOOStandardProps {
  /**
   * The label string
  */
  label: string;
  /**
   * (Optional) HTMLLabelElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}

export interface IHOOLabelState {
}

export class HOOLabelState implements IHOOLabelState {
  constructor() { }
}

export default class HOOLabel extends React.PureComponent<IHOOLabelProps, IHOOLabelState> {
  private LOG_SOURCE: string = "💦HOOLabel";
  private _componentClass: string = "hoo-label";

  constructor(props: IHOOLabelProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOLabel";
    this.state = new HOOLabelState();
  }

  public render(): React.ReactElement<IHOOLabelProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <label data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>{this.props.label}</label>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}