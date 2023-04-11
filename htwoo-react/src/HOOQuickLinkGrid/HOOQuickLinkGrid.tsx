import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOQuickLinkGridProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-ql-grid {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOQuickLinkGridState {
}

export default class HOOQuickLinkGrid extends React.PureComponent<IHOOQuickLinkGridProps, IHOOQuickLinkGridState> {
  private LOG_SOURCE: string = "💦HOOQuickLinkGrid";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-ql-grid";

  constructor(props:IHOOQuickLinkGridProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOQuickLinkGrid";
    this.state = {};
  }

  public render(): React.ReactElement<IHOOQuickLinkGridProps> {
    try{
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