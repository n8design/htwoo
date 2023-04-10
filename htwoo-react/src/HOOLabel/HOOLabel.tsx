import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOLabelProps extends IHOOStandardProps {
  /**
   * The label string
  */
  label: string;
  /**
   * (Optional) Styles label to indicated the associated input is required
  */
  required?: boolean;
  /**
   * (Optional) Specifies the id of the form element the label should be bound to
  */
  for?: string;
  /**
   * (Optional) HTMLLabelElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}

export interface IHOOLabelState {
}

export class HOOLabelState implements IHOOLabelState {
  constructor() { }
}

export default class HOOLabel extends React.PureComponent<IHOOLabelProps, IHOOLabelState> {
  private LOG_SOURCE: string = "💦HOOLabel";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-label";

  constructor(props: IHOOLabelProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOLabel";
    this.state = new HOOLabelState();
  }

  public render(): React.ReactElement<IHOOLabelProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const isRequired = (this.props.required) ? "is-required" : "";
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}` : `${this._componentClass} ${isRequired}`;
      return (
        <label {...this._rootProps}
          {...this.props.rootElementAttributes}
          htmlFor={this.props.for}
          className={className}>{this.props.label}</label>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}