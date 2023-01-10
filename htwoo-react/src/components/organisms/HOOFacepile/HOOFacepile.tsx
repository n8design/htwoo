import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

export interface IHOOFacepileProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-facepile {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOFacepileState {
}

export class HOOFacepileState implements IHOOFacepileState {
  constructor() { }
}

export default class HOOFacepile extends React.PureComponent<IHOOFacepileProps, IHOOFacepileState> {
  private LOG_SOURCE: string = "💦HOOFacepile";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-facepile";

  constructor(props: IHOOFacepileProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOFacepile";
    this.state = new HOOFacepileState();
  }

  public render(): React.ReactElement<IHOOFacepileProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}