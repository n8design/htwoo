import * as React from "react";
import { HOODataAttributes, IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOCardGridProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-cardgrid {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & HOODataAttributes;
}

export interface IHOOCardGridState {
}

export class HOOCardGridState implements IHOOCardGridState {
  constructor() { }
}

export default class HOOCardGrid extends React.PureComponent<IHOOCardGridProps, IHOOCardGridState> {
  private LOG_SOURCE: string = "💦HOOCardGrid";
  private _rootProps: { [key: string]: unknown } = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-cardgrid";

  constructor(props: IHOOCardGridProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardGrid";
    this.state = new HOOCardGridState();
  }

  public render(): React.ReactElement<IHOOCardGridProps> | undefined {
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
      return;
    }
  }
}