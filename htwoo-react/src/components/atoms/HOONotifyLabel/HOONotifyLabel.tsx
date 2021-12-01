import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOONotifyType {
  "Success",
  "Error"
}
export interface IHOONotifyLabelProps extends IHOOStandardProps {
  type: HOONotifyType;
  message: string;
  /**
   * (Optional) HTMLSpanElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLSpanElement>;
}

export interface IHOONotifyLabelState {
}

export class HOONotifyLabelState implements IHOONotifyLabelState {
  constructor() { }
}

export default class HOONotifyLabel extends React.PureComponent<IHOONotifyLabelProps, IHOONotifyLabelState> {
  private LOG_SOURCE: string = "💦HOONotifyLabel";
  private _componentClass: string = "hoo";

  constructor(props: IHOONotifyLabelProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOONotifyLabel";
    switch (this.props.type) {
      case HOONotifyType.Success:
        this._componentClass = `${this._componentClass}-success`;
        break;
      case HOONotifyType.Error:
        this._componentClass = `${this._componentClass}-error`;
        break;
    }
    this.state = new HOONotifyLabelState();
  }

  public render(): React.ReactElement<IHOONotifyLabelProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <span data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} >
          {this.props.message}
        </span>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}