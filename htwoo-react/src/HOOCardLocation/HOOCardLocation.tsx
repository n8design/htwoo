import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOCardLocationProps extends IHOOStandardProps {
  /**
   * (Optional) Location text, if omitted HTML children will be rended
  */
  location?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-cardlocation {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOCardLocationState {
}

export class HOOCardLocationState implements IHOOCardLocationState {
  constructor() { }
}

export default class HOOCardLocation extends React.PureComponent<IHOOCardLocationProps, IHOOCardLocationState> {
  private LOG_SOURCE: string = "💦HOOCardLocation";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-cardlocation";

  constructor(props: IHOOCardLocationProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardLocation";
    this.state = new HOOCardLocationState();
  }

  public render(): React.ReactElement<IHOOCardLocationProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.location && this.props.location}
          {!this.props.location && this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}