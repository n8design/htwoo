import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOValidationMsgProps extends IHOOStandardProps {
  /**
   * The validation message for the associated input element in the field.
  */
  validationMsg: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-validation {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
}

export interface IHOOValidationMsgState {
}

export class HOOValidationMsgState implements IHOOValidationMsgState {
constructor() {}
}

export default class HOOValidationMsg extends React.PureComponent<IHOOValidationMsgProps, IHOOValidationMsgState> {
  private LOG_SOURCE: string = "💦HOOValidationMsg";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-validation";

  constructor(props:IHOOValidationMsgProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOValidationMsg";
    this.state = new HOOValidationMsgState();
  }

  public render(): React.ReactElement<IHOOValidationMsgProps> {
    try{
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <output data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.validationMsg}
        </output>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}