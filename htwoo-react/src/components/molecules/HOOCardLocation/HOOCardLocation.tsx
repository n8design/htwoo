import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOCardLocationProps extends IHOOStandardProps {
  /**
   * (Optional) Location text, if omitted HTML children will be rended
  */
  location?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCardLocationState {
}

export class HOOCardLocationState implements IHOOCardLocationState {
  constructor() { }
}

export default class HOOCardLocation extends React.Component<IHOOCardLocationProps, IHOOCardLocationState> {
  private LOG_SOURCE: string = "🔶HOOCardLocation";
  private _componentClass: string = "hoo-cardlocation";

  constructor(props: IHOOCardLocationProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOCardLocation";
    this.state = new HOOCardLocationState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOCardLocationProps>, nextState: Readonly<IHOOCardLocationState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOCardLocationProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.location && this.props.location}
          {!this.props.location && this.props.children}
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}