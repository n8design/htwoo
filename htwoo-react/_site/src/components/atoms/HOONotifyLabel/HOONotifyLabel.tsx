import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
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

export default class HOONotifyLabel extends React.Component<IHOONotifyLabelProps, IHOONotifyLabelState> {
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

  public shouldComponentUpdate(nextProps: Readonly<IHOONotifyLabelProps>, nextState: Readonly<IHOONotifyLabelState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
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
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}